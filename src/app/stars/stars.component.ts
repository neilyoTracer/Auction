import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.less']
})
export class StarsComponent implements OnInit {

  @Input()
  rating:number = 0;

  stars:boolean[] = [];

  constructor() { }

  ngOnInit() {
    for (let i=1;i<=5;i++) {
      this.stars.push(i>this.rating);
    }
    // this.stars = [false,false,true,true,true];
  }

}
