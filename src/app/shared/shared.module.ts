import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { TitleComponent } from './components/title/title.component';
import { CoolInputDirective } from './directives/cool-input.directive';
import { IsChikenDirective } from './directives/is-chiken.directive';
import { WordUpperPipe } from './pipes/word-upper.pipe';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ChikenDescriptionPipe } from './pipes/chiken-description.pipe';
import { ChikenProductsPipe } from './pipes/chiken-products.pipe';
import { PopupComponent } from './components/popup/popup.component';

@NgModule({
  declarations: [
    ProductCardComponent,
    TitleComponent,
    CoolInputDirective,
    IsChikenDirective,
    ChikenDescriptionPipe,
    ChikenProductsPipe,
    WordUpperPipe,
    PopupComponent,
    
  ],
  imports: [CommonModule, RouterLink, RouterLinkActive],
  exports: [
    ProductCardComponent,
    TitleComponent,
    CoolInputDirective,
    ChikenDescriptionPipe,
    IsChikenDirective,
    WordUpperPipe,
    PopupComponent
  ],
})
export class SharedModule {}
