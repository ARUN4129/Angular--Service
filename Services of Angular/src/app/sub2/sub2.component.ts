import { Component, OnInit } from '@angular/core';
import { BatchServiceService } from '../batch-service.service';

@Component({
  selector: 'app-sub2',
  templateUrl: './sub2.component.html',
  styleUrls: ['./sub2.component.css']
})
export class Sub2Component implements OnInit {
  batches = [];
  constructor(private _victom:BatchServiceService) { }

  ngOnInit() {
    this.batches = this._victom.getResult();
  }

}
