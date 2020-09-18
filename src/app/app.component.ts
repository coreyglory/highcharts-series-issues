import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as HighchartsMore from 'highcharts-more';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsBoost from 'highcharts/modules/boost';
import * as CHARTOPTIONS from '../assets/chart-stub.json';

HighchartsMore(Highcharts);
HighchartsExporting(Highcharts);
HighchartsBoost(Highcharts);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  Highcharts = Highcharts;
  chartConstructor = 'chart';
  chartOptions: any = {};
  updateFlag = false;

  constructor() {
    this.chartOptions = CHARTOPTIONS;
  }

  ngOnInit(){
    Highcharts.chart('container', this.chartOptions.default);
  }
}
