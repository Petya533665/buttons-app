import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule(<NgModule>{
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  entryComponents: [],

  exports: [HeaderComponent, FooterComponent],
  declarations: [HeaderComponent, FooterComponent]
})
export class LayoutsModule {
}
