import { Component, Input, OnInit, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.less']
})
export class StarsComponent implements OnInit,OnChanges {

  @Input()
  rating:number = 0;

  @Output()
  ratingChange:EventEmitter<number> = new EventEmitter();

  stars:boolean[] = [];

  @Input()
  readonly:boolean = true;

  constructor() { }

  ngOnChanges(changes:SimpleChanges):void { 
    console.log(changes);
    this.stars = [];
    for(let i=1;i<=5;i++) { 
      this.stars.push(i>changes.rating.currentValue);
    }
  }

  ngOnInit() {

  }

  clickStar(index:number) { 
    if(!this.readonly) { 
      this.rating = index + 1;
      this.ratingChange.emit(this.rating);
    }
  }

}
