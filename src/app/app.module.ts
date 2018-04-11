import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {LayoutsModule} from './layouts/layouts.module';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatSliderModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {GridbuttonsComponent} from './containers/gridbuttons/gridbuttons.component';
import {HomeComponent} from './components/home/home.component';
import {ResultComponent} from './containers/styling/result/result.component';
import {PreviewComponent} from './containers/preview/preview.component';
import {SettingsComponent} from './containers/styling/settings/settings.component';
import {ButtonService} from './services/button.service';
import {ColorPickerModule} from 'ngx-color-picker';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GridbuttonsComponent,
    ResultComponent,
    PreviewComponent,
    SettingsComponent
  ],
  exports: [LayoutsModule],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserModule,
    LayoutsModule,
    MatInputModule,
    FormsModule,
    ColorPickerModule,
    MatSliderModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatSelectModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [ButtonService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
