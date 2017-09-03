import { Router } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { Stock, StockService } from '../stock.service';
import { FormControl } from "@angular/forms";
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: "app-stock-manage",
  templateUrl: "./stock-manage.component.html",
  styleUrls: ["./stock-manage.component.less"]
})
export class StockManageComponent implements OnInit {

  private stocks:Array<Stock>;

  private nameFilter:FormControl = new FormControl;

  private keyword:string;

  constructor(private router:Router,private StockService:StockService) {}

  ngOnInit() { 
    this.stocks = this.StockService.getStocks();
    this.nameFilter.valueChanges
      .debounceTime(1000)
      .subscribe(value => this.keyword = value);
  }

  create(){
    this.router.navigateByUrl('/stock/0');
  }

  update(stock:Stock){
    // console.log(1);
    // console.log(stock.id);
    this.router.navigateByUrl('/stock/'+stock.id);
  }
}


