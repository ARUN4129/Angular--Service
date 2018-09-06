import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BatchServiceService {

  constructor() { }
  getResult()
  {
    return [
              {"Name":"Angular","Fees":2500,"Duration":"3-Month"},
              {"Name":"Java","Fees":5000,"Duration":"4-Month"},
              {"Name":"Kotline","Fees":4000,"Duration":"3-Month"},
              {"Name":"Python","Fees":12000,"Duration":"5-Month"}
            ];
  }
}
