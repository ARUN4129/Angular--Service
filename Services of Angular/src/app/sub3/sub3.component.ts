import { Component, OnInit } from '@angular/core';
import { BatchServiceService } from '../batch-service.service';

@Component({
  selector: 'app-sub3',
  templateUrl: './sub3.component.html',
  styleUrls: ['./sub3.component.css']
})
export class Sub3Component implements OnInit {
  arr = [];
  constructor(private _peter:BatchServiceService) { }

  ngOnInit() {
    this.arr = this._peter.getResult();
  }

}
