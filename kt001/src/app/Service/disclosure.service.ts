import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { Disclosure } from '../Model/disclosure';

@Injectable()
export class DisclosureService {

    private subject = new Subject<any>();
    Disclosure: Disclosure = new Disclosure();

    sendMessageDisclosureOne(disclosureOne:string){
        this.Disclosure.disclosureOne = disclosureOne;
        this.subject.next(this.Disclosure);
    }
    sendMessageDisclosureTwo(disclosureTwo:string){
        this.Disclosure.disclosureTwo = disclosureTwo;
        this.subject.next(this.Disclosure);
    }
    sendMessageDisclosureThree(disclosureThree:string){
        this.Disclosure.disclosureThree = disclosureThree;
        this.subject.next(this.Disclosure);
    }
    sendMessageDisclosureFour(disclosureFour:string){
        this.Disclosure.disclosureFour = disclosureFour;
        this.subject.next(this.Disclosure);
    }
    sendMessageDisclosureFive(disclosureFive:string){
        this.Disclosure.disclosureFive = disclosureFive;
        this.subject.next(this.Disclosure);
    }
    sendMessageDisclosureSix(disclosureSix:string){
        this.Disclosure.disclosureSix = disclosureSix;
        this.subject.next(this.Disclosure);
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}