import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { Money } from '../Model/money';

@Injectable()
export class MoneyService {

    private subject = new Subject<any>();
    Money: Money = new Money();

    sendMessageMoneyPerYear(MoneyPerYear : string){
        this.Money.money = MoneyPerYear;
        this.subject.next(this.Money);
    }
    sendMessageMoneycustomer(Moneycustomer : string){
        this.Money.customer = Moneycustomer;
        this.subject.next(this.Money);
    }
    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}