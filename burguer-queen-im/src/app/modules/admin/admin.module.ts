import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AdminComponent } from './admin/admin.component';
import { AdminService } from 'src/app/service/admin.service';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import { MemberModalComponent } from './components/member-modal/member-modal.component';
import { MembersComponent } from './components/members/members.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsModalComponent } from './components/products-modal/products-modal.component';

import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [
    AdminComponent,
    HeaderAdminComponent,
    MemberModalComponent,
    MembersComponent,
    ProductsComponent,
    ProductsModalComponent,
  ],
  providers: [AdminService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    RouterModule,
    HttpClientModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
