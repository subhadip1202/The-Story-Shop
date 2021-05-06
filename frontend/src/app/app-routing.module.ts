import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainDeskComponent } from './main-desk/main-desk.component';
import { RegisterComponent } from './register/register.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ActivationComponent } from './activation/activation.component';
import { AuthorComponent } from './author/author.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { DiscountComponent } from './discount/discount.component';
import { TestDetailsComponent } from './test-details/test-details.component';
import { TestComponent } from './test/test.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  { path: '', redirectTo: 'test', pathMatch: 'full' },
  {
    path: 'main', component: MainDeskComponent, children:
      [
        { path: '', redirectTo: 'login', pathMatch: 'full' },
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
        { path: 'activate', component: ActivationComponent }
      ]
  },


  {
    path:'test',
    component :TestComponent
  },
  {
    path:'testdetails/:id',
    component:TestDetailsComponent
  },
  {
    path:'category/:id',
    component:CategoriesComponent
  },
  {
    path:'author/:id',
    component:AuthorComponent
    },
    {
      path:'discount/:id',
      component:DiscountComponent
      },

      {
        path:'wishlist/:id',
        component:WishlistComponent
      },
      {
        path:'cart/:id',
        component:CartComponent
      },
      {
        path:'**',
        component:TestComponent
      }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
