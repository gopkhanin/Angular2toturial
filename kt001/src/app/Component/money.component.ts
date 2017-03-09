import { Component, OnInit ,Input } from '@angular/core';
import { MoneyService } from '../Service/money.service';

import { Money } from '../Model/money';
@Component({
  selector: 'money-component',
  templateUrl: '../Views/Money/money.component.html',
  styleUrls: ['../CSS/money.component.css']
})
  export class MoneyComponent implements OnInit {
    _Money : any;

    constructor(private _MoneyS:MoneyService) { }
    ngOnInit() {
      this._Money = new Money();
    }

    @Input() MoneyPerYear : string;
    @Input() MoneyCustomer: string;

    changeMoneyPerYear(newValue){
      this.MoneyPerYear = newValue['srcElement']['value'];
      this._MoneyS.sendMessageMoneyPerYear(this.MoneyPerYear);
    }
    changeMoneyCustomer(newValue){
      this.MoneyCustomer = newValue['srcElement']['value'];
      this._MoneyS.sendMessageMoneycustomer(this.MoneyCustomer);
    }
}
