import { CommentService } from './../../service/comment.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { faPen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  productId: string = '';
  productDetail: any = null;
  selectedSubSubProduct: any[] = [];

  //Icons
  faPen = faPen;

  commentFrm = new FormGroup({
    text: new FormControl(null, Validators.required),
    rating: new FormControl(null, Validators.required),
  });
  isExpandCommentFrm: boolean = false;

  constructor(
    private productService: ProductService,
    private commentService: CommentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productId = <string>this.route.snapshot.paramMap.get('id');
    this.getProductById();
  }

  getProductById() {
    this.productService.getProductById(this.productId).subscribe((res) => {
      if (res.success) {
        this.productDetail = res.data;
        console.log('check res', res);
      }
    });
  }

  onSubmitCommentFrm() {
    let body = {
      ...this.commentFrm.value,
      productId: this.productId,
    };
    this.commentService.postComment(body).subscribe((res) => {
      if (res.success) {
        this.getProductById();
        this.isExpandCommentFrm = false;
      }
    });
  }

  onChooseSubSubProduct(subSubItem: any) {
    let subSubArr = [...this.selectedSubSubProduct];

    //Check if selected item is same id with existing item in array, do not add new item
    let isHaveItem = subSubArr.find((el: any) => el.id === subSubItem.id);
    if (isHaveItem) return;

    //Check if selected item is same subProductId with existing item in array, will delete old item
    for (let i = 0; i < subSubArr.length; i++) {
      if (subSubArr[i].subProductId === subSubItem.subProductId) {
        subSubArr.splice(i, 1);
      }
    }

    subSubArr.push(subSubItem);
    this.selectedSubSubProduct = [...subSubArr];
  }
}
