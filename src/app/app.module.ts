import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartComponent } from './pages/cart/cart.component';

//Ngrx Store
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './store/reducers/cart.reducers';
import { EffectsModule } from '@ngrx/effects';
import { CartEffects } from './store/effects/cart.effects';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProductDetailComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    StoreModule.forRoot({ cartNumber: cartReducer }, {}),
    EffectsModule.forRoot([CartEffects]),
    EffectsModule.forFeature([CartEffects])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
