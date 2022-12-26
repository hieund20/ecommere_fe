import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  navList: any[] = [
    { key: 'logo', value: '../../../assets/images/logo.jpg' },
    { key: 'link', value: 'Trang chủ' },
    { key: 'link', value: 'Giỏ hàng' },
    { key: 'link', value: 'Người dùng' }
  ];
}
