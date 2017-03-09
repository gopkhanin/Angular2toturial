import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { Name } from '../Model/name';

@Injectable()
export class UserService {

    private subject = new Subject<any>();
    Name: Name = new Name();

    sendMessageNameth(Nameth: string) {
        this.Name.Nameth = Nameth;
        this.subject.next(this.Name);
    }
    sendMessageSurnameth(Surnameth: string){
        this.Name.Surnameth = Surnameth;
        this.subject.next(this.Name);
    }
    sendMessageNameeng(Nameeng: string){
        this.Name.Nameeng = Nameeng;
        this.subject.next(this.Name);
    }
    sendMessageSurnameeng(Surnameeng: string){
        this.Name.Surnameeng = Surnameeng;
        this.subject.next(this.Name);
    }
    sentMessageid13(id13: string){
        this.Name.Id13 = id13;
        this.subject.next(this.Name);
    }
    sendMessageNat_thai(nationality: string){
        this.Name.Nationality = nationality;
        this.subject.next(this.Name);
    }
    sendMessageStatus(status : string){
        this.Name.Status = status;
        this.subject.next(this.Name);
    }
    sendMessageNameMarryth(NameMarryth : string){
        this.Name.NameMarryth = NameMarryth;
        this.subject.next(this.Name);
    }
    sendMessageSurnameMarryth(SurnameMarryth : string){
        this.Name.SurnameMarryth = SurnameMarryth;
        this.subject.next(this.Name);
    }
    sendMessageNameMarryeng(NameMarryeng : string){
        this.Name.NameMarryeng = NameMarryeng;
        this.subject.next(this.Name);
    }
    sendMessageSurnameMarryeng(SurnameMarryeng : string){
        this.Name.SurnameMarryeng = SurnameMarryeng;
        this.subject.next(this.Name);
    }
    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}
