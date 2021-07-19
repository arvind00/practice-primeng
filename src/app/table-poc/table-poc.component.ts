import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-table-poc',
  templateUrl: './table-poc.component.html',
  styleUrls: ['./table-poc.component.scss']
})
export class TablePocComponent implements OnInit {

  @ViewChild('dt1', { static: false })
  dt!: Table;
  @ViewChild('globalFilterInput')
  globalFilterInput: any;
  rows: any[] = [];
  cols: any[] = [];

  applyGlobalFilter(e: Event) {
    let _value = (e.target as HTMLInputElement).value
    this.dt.filterGlobal(_value, 'contains');
  }

  constructor() { }

  ngOnInit(): void {
    this.prepareDataTable();
  }

  prepareDataTable() {
    this.cols = [
      { field: 'logId', header: 'Log ID', type: "number", width: '90px' },
      { field: 'logDesc', header: 'Description', type: "text", width: '200px' },
      { field: 'date', header: 'Time Stamp', type: "date" }
    ]

    this.rows = [
      { logId: 1, logDesc: 'User A Logged In', date: new Date(2021, 6, 18, 9, 30, 0) },
      { logId: 2, logDesc: 'User A Dashboard Loaded', date: new Date(2021, 6, 18, 9, 31, 0) },
      { logId: 3, logDesc: 'User A Logged Out', date: new Date(2021, 6, 18, 9, 35, 0) },
      { logId: 4, logDesc: 'User B Logged In', date: new Date(2021, 6, 18, 9, 32, 0) },
      { logId: 5, logDesc: 'User B Dashboard Loaded', date: new Date(2021, 6, 18, 9, 33, 0) },
      { logId: 6, logDesc: 'User B Logged Out', date: new Date(2021, 6, 18, 9, 35, 0) },
      { logId: 7, logDesc: 'User C Logged In', date: new Date(2021, 6, 19, 9, 30, 0) },
      { logId: 8, logDesc: 'User C Dashboard Loaded', date: new Date(2021, 6, 19, 9, 31, 0) },
      { logId: 9, logDesc: 'User C Logged Out', date: new Date(2021, 6, 19, 9, 34, 0) },
      { logId: 10, logDesc: 'User D Logged In', date: new Date(2021, 6, 19, 8, 30, 0) },
      { logId: 11, logDesc: 'User D Dashboard Loaded', date: new Date(2021, 6, 19, 9, 32, 0) },
      { logId: 12, logDesc: 'User D Logged Out', date: new Date(2021, 6, 19, 9, 34, 0) },
    ]
  }

}
