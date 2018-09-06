import { Component, OnInit } from '@angular/core';
import { BatchServiceService } from '../batch-service.service';

@Component({
  selector: 'app-sub4',
  templateUrl: './sub4.component.html',
  styleUrls: ['./sub4.component.css']
})
export class Sub4Component implements OnInit {

  devi = [];
  constructor(private _dev:BatchServiceService) { }

  ngOnInit() {
    this.devi = this._dev.getResult();
  }

}
