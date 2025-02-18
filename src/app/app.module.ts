import { NG_EVENT_PLUGINS } from "@taiga-ui/event-plugins";
import { TuiRoot } from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeModule } from './views/home/home.module';
import { FormsModule } from '@angular/forms';
import { ProductsModule } from './views/products/products.module';
import { OrderModule } from './views/order/order.module';
import { SharedModule } from './shared/shared.module';
import {
  HttpClient,
  HttpHandler,
  provideHttpClient,
} from '@angular/common/http';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { LayoutComponent } from './views/layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    FormsModule,
    //убрать импорт модулей для ленивой загрузки
    // ProductsModule,
    // OrderModule,
    // HomeModule,
    SharedModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    AppRoutingModule,
      BrowserAnimationsModule,
      TuiRoot
],
  providers: [provideHttpClient(), provideAnimationsAsync(), NG_EVENT_PLUGINS],
  bootstrap: [AppComponent],
})
export class AppModule {}
