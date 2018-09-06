import { Component, OnInit } from '@angular/core';
import { BatchServiceService } from '../batch-service.service';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {

  batches = [];
  constructor(private _batch:BatchServiceService)
  {
  }

  ngOnInit() {
    this.batches = this._batch.getResult();
  }

}
