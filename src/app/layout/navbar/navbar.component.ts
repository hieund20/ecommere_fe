import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navList: any[] = [];
  cartNumber$: Observable<number> | undefined;

  constructor(
    private categoryService: CategoryService,
    private store: Store<{ cartNumber: number }>
  ) {
    this.cartNumber$ = store.select((state) => state.cartNumber);
  }

  ngOnInit(): void {
    this.getAllCategory();
    this.onDetectCartChange();
  }

  getAllCategory() {
    this.categoryService.getAllCategory().subscribe((res) => {
      if (res.success) {
        this.navList = res.data;
        console.log('res', res);
      }
    });
  }

  //This function to check
  onDetectCartChange() {
    this.store
      .select((state) => state.cartNumber)
      .subscribe((res) => {
        console.log('check', res);
      });
  }
}
