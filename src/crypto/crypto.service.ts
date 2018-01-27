import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {CryptoData} from './cryptoData';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delayWhen';

@Injectable()
export class CryptoService {

  private href = `https://api.coinmarketcap.com/v1/ticker/`;

  constructor(private http: HttpClient) {
  }

  /**
   * get All Crypto Data from the server
   * @returns {Observable<CryptoData[]>}
   */
  getAllCryptoData(): Observable<CryptoData[]> {
    const requestUrl = `${this.href}?limit=0`;
    return this.http.get<CryptoData[]>(requestUrl);
  }

  /**
   * get Crypto data based on the page number and pageSize number
   * @param {number} page
   * @param {number} pageSize
   * @returns {Observable<CryptoData[]>}
   */
  getCryptoData(page: number, pageSize: number): Observable<CryptoData[]> {
    const requestUrl = `${this.href}?start=${page * pageSize}&limit=${pageSize}`;
    return this.http.get<CryptoData[]>(requestUrl);
  }

}
