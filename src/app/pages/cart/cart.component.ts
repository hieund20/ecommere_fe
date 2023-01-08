import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';
import { SubProductService } from 'src/app/service/sub-product.service';
import { SubSubProductService } from 'src/app/service/sub-sub-product.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { changeNumberOfCart } from './../../store/actions/cart.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  productList: any = [];
  totalPrice: number = 0;

  //Icons
  faTrash = faTrash;

  constructor(
    private cartService: CartService,
    private subProductService: SubProductService,
    private subSubProductService: SubSubProductService,
    private store: Store<{ cartNumber: number }>
  ) {}

  ngOnInit(): void {
    this.getAllProductInCart();
  }

  getAllProductInCart() {
    this.cartService.getAllCart().subscribe((res) => {
      if (res.success) {
        this.totalPrice = res.totalPrice;

        let productListTmp = [];
        let resData = res.data;
        for (let i = 0; i < resData.length; i++) {
          productListTmp.push({
            ...resData[i],
            subProductId: JSON.parse(resData[i].subProductId),
            subSubProductId: JSON.parse(resData[i].subSubProductId),
          });
        }

        for (let i = 0; i < productListTmp.length; i++) {
          if (productListTmp[i].subProductId.length !== 0) {
            let subProductName: string[] = [];

            for (let j = 0; j < productListTmp[i].subProductId.length; j++) {
              this.getSubProductById(
                productListTmp[i].subProductId[j]
              ).subscribe((name) => {
                subProductName.push(name);
              });
            }

            productListTmp[i].subProductName = subProductName;
          }
          if (productListTmp[i].subSubProductId.length !== 0) {
            let subSubProductName: string[] = [];

            for (let j = 0; j < productListTmp[i].subSubProductId.length; j++) {
              this.getSubSubProductById(
                productListTmp[i].subSubProductId[j]
              ).subscribe((name) => {
                subSubProductName.push(name);
              });
            }

            productListTmp[i].subSubProductName = subSubProductName;
          }
        }

        console.log('check list', productListTmp);
        this.productList = productListTmp;
      }
    });
  }

  getSubProductById(id: string): Observable<string> {
    let subProductName = new Subject<string>();
    this.subProductService.getSubProductById(id).subscribe((res) => {
      if (res.success) {
        // console.log(res);
        subProductName.next(res.data.name);
      } else {
        subProductName.next('');
      }
    });
    return subProductName.asObservable();
  }

  getSubSubProductById(id: string): Observable<string> {
    let subSubProductName = new Subject<string>();
    this.subSubProductService.getSubSubProductById(id).subscribe((res) => {
      if (res.success) {
        // console.log(res);
        subSubProductName.next(res.data.name);
      } else {
        subSubProductName.next('');
      }
    });
    return subSubProductName.asObservable();
  }

  onUpdateCart() {
    this.store.dispatch(changeNumberOfCart());
  }
}
