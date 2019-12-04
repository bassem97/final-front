import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './FRONT-OFFICE/home/home.component';
import { ContactComponent} from './FRONT-OFFICE/contact/contact.component';
import {RegisterLoginComponent} from './FRONT-OFFICE/register-Login/register-login.component';
import {CategoryListBACKComponent} from './BACK-OFFICE/category-list-BACK/category-list.component';
import {CreateCategoryComponent} from './BACK-OFFICE/create-category/create-category.component';
import {UpdateCategoryComponent} from './BACK-OFFICE/update-category/update-category.component';
import {CreateProductComponent} from './BACK-OFFICE/create-product/create-product.component';
import {ProductDetailsComponent} from './BACK-OFFICE/product-details/product-details.component';
import {UpdateProductComponent} from './BACK-OFFICE/update-product/update-product.component';
import {BACKOFFICEComponent} from './BACK-OFFICE/back-office.component';
import {CategoryDetailsBACKComponent} from './BACK-OFFICE/category-details-BACK/category-details.component';
import {ProductListBACKComponent} from './BACK-OFFICE/product-list-BACK/product-list.component';
import {CategoryDetailsComponent} from './FRONT-OFFICE/category-details/category-details.component';
import { UserSupprimerComponent } from './BACK-OFFICE/user-supprimer/user-supprimer.component';


const routes: Routes = [
  {path : '' , component: HomeComponent},
  {path : 'Contact', component: ContactComponent},
  {path : 'Login', component: RegisterLoginComponent},
  {path : 'client/product/:id', component: CategoryDetailsComponent},
  {path: 'admin', component: BACKOFFICEComponent},
  {path: 'admin/categories', component: CategoryListBACKComponent},
  {path: 'admin/addCategory', component: CreateCategoryComponent},
  {path: 'admin/updateCategory/:id', component: UpdateCategoryComponent},
  {path: 'admin/detailCategory/:id', component: CategoryDetailsBACKComponent},
  {path: 'admin/products', component: ProductListBACKComponent},
  {path: 'admin/users', component: UserSupprimerComponent},
  {path: 'admin/addProduct', component: CreateProductComponent},
  {path: 'admin/detailProduct/:id', component: ProductDetailsComponent},
  {path: 'admin/updateProduct/:id', component: UpdateProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
