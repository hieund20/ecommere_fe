import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  productList: any = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct() {
    this.productService.getAllProduct().subscribe((res) => {
      if (res.success) {
        this.productList = res.data;
        console.log('res', res);
      }
    });
  }
}
