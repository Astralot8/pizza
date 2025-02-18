import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext'
import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TuiButton } from '@taiga-ui/core';


@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterLink,
    FormsModule,
    OrderRoutingModule,
    InputTextModule,
    TuiButton
  ],
  exports:[OrderRoutingModule]
})
export class OrderModule { }
