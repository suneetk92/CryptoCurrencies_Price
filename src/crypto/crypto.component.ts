import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CryptoService} from './crypto.service';
import {CryptoData} from './cryptoData';
import {Observable} from 'rxjs/Observable';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/timeInterval';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Component({
  selector: 'app-root',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css']
})
export class CryptoComponent implements OnInit, AfterViewInit {

  // Columns name to be displayed in the table
  displayedColumns = [
    'rank',
    'name',
    'symbol',
    'price_usd',
    // 'percent_change_1h',
    // 'percent_change_24h',
    // 'percent_change_7d'
  ];

  dataSource = new MatTableDataSource();

  result: Observable<CryptoData[]>;

  // Flag for showing mat-spinner
  isLoadingResults = false;

  // Required for Pagination
  @ViewChild(MatPaginator) paginator: MatPaginator;

  // Required for Sorting
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service: CryptoService) {
  }

  /**
   * Set dataSource paginator and sort
   */
  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /**
   * Subscribe to the ObservableTimer and set dataSource data
   */
  ngOnInit() {
    const ObservableTimer = Observable.timer(0, 300000);
    this.result = ObservableTimer.switchMap(() => {
      this.isLoadingResults = true;
      return this.service.getAllCryptoData();
    }).retryWhen(errors =>
      errors.do(val => {
        console.log(`Unable to communicate with the backend.`);
        this.isLoadingResults = false;
      }).delayWhen(() => Observable.timer(60000))
    );
    this.result.subscribe(data => {
      this.dataSource.data = data;
      this.isLoadingResults = false;
    });
  }

  /**
   * Applt filter for the dataSource filter
   * @param {string} filterValue
   */
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  /**
   * Create href link for each row and return the link
   * @param {string} value
   * @returns {string}
   */
  applyURL(value: string): string {
    const href = '//coinmarketcap.com/currencies/';
    return `${href}${value}/`;
  }
}
