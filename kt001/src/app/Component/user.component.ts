import {Component, Input, OnInit }from '@angular/core';
import { UserService }from  '../Service/user.service';

import { Name } from '../Model/name';

@Component({
  selector: 'user-component',
  templateUrl: '../Views/User/user.component.html',
  styleUrls: ['../CSS/user.component.css']
})
export class UserComponent implements OnInit {
    _Name:any;

  constructor(private _User:UserService) { }
  ngOnInit(){
    this._Name = new Name();
  }
  @Input() Nameth: string;
  @Input() Surnameth: string;
  @Input() Nameeng: string;
  @Input() Surnameeng: string;
  @Input() id13: string;
  @Input() nationality_thai: string;
  @Input() nationality_etc: string;
  @Input() status: string;
  @Input() NameMarryth: string;
  @Input() SurnameMarryth: string;
  @Input() NameMarryeng: string;
  @Input() SurnameMarryeng: string;
  @Input() nationality_etc_txt: string;

  show = false;
  showStatus = false;

    changeNameth(newValue) {
       this.Nameth = newValue;
       this._User.sendMessageNameth(this.Nameth);
     }
    changeSurnameth(newValue){
        this.Surnameth = newValue;
        this._User.sendMessageSurnameth(this.Surnameth);
     }
    changeNameeng(newValue){
        this.Nameeng = newValue;
        this._User.sendMessageNameeng(this.Nameeng);
    }
    changeSurnameeng(newValue){
        this.Surnameeng = newValue;
        this._User.sendMessageSurnameeng(this.Surnameeng);
    }
    changeid13(newValue){
        this.id13 = newValue;
        this._User.sentMessageid13(this.id13);
    }
    hideinput(newValue){
        this.nationality_thai = newValue['srcElement']['value'];
        this._User.sendMessageNat_thai(this.nationality_thai);
        this.show = false;
    }
    showinput(){ this.show = true; }

    changeNationality_etc(NewValue){
        this.nationality_etc = NewValue;
        this._User.sendMessageNat_thai(this.nationality_etc);
    }
    changestatus(NewValue){
        this.status = NewValue['srcElement']['value'];
        if(this.status == 'สมรส'){
            this.showStatus = true;
        }else {
            this.showStatus = false;
        }
        this._User.sendMessageStatus(this.status);
    }
    changeNameMarryth(NewValue){
        this.NameMarryth = NewValue;
        this._User.sendMessageNameMarryth(this.NameMarryth);
    }
    changeSurnameMarryth(NewValue){
        this.SurnameMarryth = NewValue;
        this._User.sendMessageSurnameMarryth(this.SurnameMarryth);
    }
    changeNameMarryeng(NewValue){
        this.NameMarryeng = NewValue;
        this._User.sendMessageNameMarryeng(this.NameMarryeng);
    }
    changeSurnameMarryeng(NewValue){
        this.SurnameMarryeng = NewValue;
        this._User.sendMessageSurnameMarryeng(this.SurnameMarryeng);
    }
}
