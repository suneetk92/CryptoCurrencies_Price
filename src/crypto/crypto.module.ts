import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {CryptoComponent} from './crypto.component';
import {CryptoService} from './crypto.service';

import {HttpClientModule} from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatToolbarModule} from '@angular/material';

@NgModule({
  declarations: [
    CryptoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatInputModule
  ],
  providers: [CryptoService],
  bootstrap: [CryptoComponent]
})
export class CryptoModule {
}
