import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tour-of-heroes';
  dashboardItems: any;
  heroItems: any;
  detailsInfo: object = {};

  constructor() {
    this.dashboardItems = [
      {
        id: 1,
        name: 'Dashboard Item 1'
      },
      {
        id: 2,
        name: 'Dashboard Item 2'
      },
      {
        id: 3,
        name: 'Dashboard Item 3'
      },
      {
        id: 4,
        name: 'Dashboard Item 4'
      }
    ];

    this.heroItems = [
      {
        id: 1,
        name: 'Mr KokDae'
      },
      {
        id: 2,
        name: 'Mr KokMinam'
      },
      {
        id: 3,
        name: 'Mr Jack'
      },
      {
        id: 4,
        name: 'Mr Willson'
      }
    ];
  }

  toggleNavigation(target) {
    this.detailsInfo = {};
    $('li.' + target).addClass('active').siblings().removeClass('active');
    $('#' + target).addClass('active').siblings().removeClass('active');
  }

  showDetails(item) {
    this.detailsInfo = item;
  }

  back() {
    this.detailsInfo = {};
  }
}
