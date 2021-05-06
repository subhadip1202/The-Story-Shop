import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AppRoutingModule } from './/app-routing.module';
import { MainDeskComponent } from './main-desk/main-desk.component';

import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material';

import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import {MyserviceService} from './myservice.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivationComponent } from './activation/activation.component';

import { TestComponent } from './test/test.component';
import { TestDetailsComponent } from './test-details/test-details.component'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from './categories/categories.component';
import { FooterComponent } from './footer/footer.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AuthorComponent } from './author/author.component';
import { DiscountComponent } from './discount/discount.component';
import { CartComponent } from './cart/cart.component';
import { BookdetailsService } from './bookdetails.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserDashboardComponent,
    MainDeskComponent,
    ActivationComponent,
    
    TestComponent,
    TestDetailsComponent,
    ProductComponent,
    HeaderComponent,
    CategoriesComponent,
    FooterComponent,
    WishlistComponent,
    AuthorComponent,
    DiscountComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    
  ],
  providers: [ MyserviceService,BookdetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
