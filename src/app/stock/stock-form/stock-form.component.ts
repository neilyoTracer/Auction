import { Stock } from './../stock-manage/stock-manage.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.less']
})
export class StockFormComponent implements OnInit {

  stock:Stock;

  constructor() { }

  ngOnInit() {
    this.stock = new Stock(1,"第一只股票",1.99,3.5,"这是第一只股票,是我在学习慕课网Angular入门实战时创建的",["IT","互联网"]);
  }

}
