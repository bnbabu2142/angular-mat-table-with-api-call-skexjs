import { Component } from '@angular/core';
import { APIServiceService } from './api-service.service';

export interface Data {
  userId: string;
  Id: number;
  title: number;
  completed: boolean;
}

const ELEMENT_DATA: Data[] = [];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html'
})
export class TableBasicExample {
  displayedColumns: string[] = ['id', 'firstName', 'lastName'];

  dataSource: any[] = [];

  constructor(private service: APIServiceService) {
    this.service.getData().then(data => {
      this.dataSource = data;
    });
  }
}

/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
