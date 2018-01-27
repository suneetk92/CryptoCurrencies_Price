import {async, TestBed} from '@angular/core/testing';

import {CryptoComponent} from './crypto.component';
import {MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatToolbarModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CryptoService} from './crypto.service';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';

describe('CryptoComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
      providers: [
        CryptoService,
        HttpClient,
        HttpHandler
      ],
      declarations: [
        CryptoComponent
      ],
    }).compileComponents();
  }));

  it('should create the crypto', async(() => {
    const fixture = TestBed.createComponent(CryptoComponent);
    const crypto = fixture.debugElement.componentInstance;
    expect(crypto).toBeTruthy();
  }));

});
