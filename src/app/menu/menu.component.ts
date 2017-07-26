import {Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  menus:Array<Menu>;

  currentMenuId:number;

  constructor(private router:Router) { }

  ngOnInit() {
    this.menus = [
      new Menu(1,'首页',"dashboard"),
      new Menu(2,'股票管理',"stock")
    ];
  }

  nav(menu:Menu) {
    this.router.navigateByUrl(menu.link);

    this.currentMenuId = menu.id;
  }

}

export class Menu {
  constructor(public id:number,public name:string,public link:string){}
}
