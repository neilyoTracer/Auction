import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.less']
})
export class ContentComponent implements OnInit {

  pageTitle:string = '';

  pageDesc:string = '';

  constructor(private router:Router) { 
    console.log(router);
    router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event:NavigationEnd) => {
        // console.log(event);
        if(event.url === '/dashboard') {
          this.pageTitle = '首页';
          this.pageDesc = '';
        }else if(event.url.startsWith('/stock')){
          this.pageTitle = '股票信息管理';
          this.pageDesc = '进行股票信息基本增删改查';
        }
      });
  }

  ngOnInit() {
  }

}
