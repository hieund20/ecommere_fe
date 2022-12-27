import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  navList: any[] = [
    { key: 'logo', value: '../../../assets/images/logo.jpg', router: '' },
    { key: 'link', value: 'Trang chủ', router: '' },
    { key: 'link', value: 'Giỏ hàng', router: '#' },
    { key: 'link', value: 'Người dùng', router: '#' },
  ];
}
