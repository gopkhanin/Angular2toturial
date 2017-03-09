import { Component, OnInit,Input } from '@angular/core';
import { DisclosureService } from '../Service/disclosure.service';

import { Disclosure } from '../Model/disclosure';
@Component({
  selector: 'app-disclosure',
  templateUrl: '../Views/Disclosure/disclosure.component.html',
  styleUrls: ['../CSS/disclosure.component.css']
})
export class DisclosureComponent implements OnInit {
  Disclosure_M: any;
  showOne = false;
  showTwo = false;
  showThree = false;
  showFour = false;
  showFive = false;
  showSix = false;

  constructor(private _Disclosure:DisclosureService) { }

  ngOnInit() {
    this.Disclosure_M = new Disclosure();
  }
  @Input() disclosureOne : string;
  @Input() disclosureTwo : string;
  @Input() disclosureThree : string;
  @Input() disclosureFour : string;
  @Input() disclosureFive : string;
  @Input() disclosureSix : string;

  @Input() disclosureOnetxt : string;
  @Input() disclosureTwotxt : string;
  @Input() disclosureThreetxt : string;
  @Input() disclosureFourtxt : string;
  @Input() disclosureFivetxt : string;
  @Input() disclosureSixtxt : string;

    // One
    changedisclosureOne(newValue){
      this.showOne = false;
      this.disclosureOne = newValue['srcElement']['value'];
      this._Disclosure.sendMessageDisclosureOne(this.disclosureOne);
    }
    changedisclosureOneetc(){
      this.showOne = true;
      this._Disclosure.sendMessageDisclosureOne(null);
    }
    changeinputDisclosure(newValue){
      this.disclosureOnetxt = newValue;
      this._Disclosure.sendMessageDisclosureOne(this.disclosureOnetxt);
    }
    // Two
    changedisclosureTwo(newValue) {
      this.showTwo = false;
      this.disclosureTwo = newValue['srcElement']['value'];
      this._Disclosure.sendMessageDisclosureTwo(this.disclosureTwo);
    }
    changedisclosureTwoetc(){
      this.showTwo = true;
      this._Disclosure.sendMessageDisclosureTwo(null);
    }
    changeinputDisclosureTwo(newValue){
      this.disclosureTwotxt = newValue;
      this._Disclosure.sendMessageDisclosureTwo(this.disclosureTwotxt);
    }
    // Three
    changedisclosureThree(newValue) {
      this.showThree = false;
      this.disclosureThree = newValue['srcElement']['value'];
      this._Disclosure.sendMessageDisclosureThree(this.disclosureThree);
    }
    changedisclosureThreeetc(){
      this.showThree = true;
      this._Disclosure.sendMessageDisclosureThree(null);
    }
    changeinputDisclosureThree(newValue){
      this.disclosureThreetxt = newValue;
      this._Disclosure.sendMessageDisclosureThree(this.disclosureThreetxt);
    }
    // Four
    changedisclosureFour(newValue) {
      this.showFour = false;
      this.disclosureFour = newValue['srcElement']['value'];
      this._Disclosure.sendMessageDisclosureFour(this.disclosureFour);
    }
    changedisclosureFouretc(){
      this.showFour = true;
      this._Disclosure.sendMessageDisclosureFour(null);
    }
    changeinputDisclosureFour(newValue){
      this.disclosureFourtxt = newValue;
      this._Disclosure.sendMessageDisclosureFour(this.disclosureFourtxt);
    }
    // Five
    changedisclosureFive(newValue) {
      this.showFive = false;
      this.disclosureFive = newValue['srcElement']['value'];
      this._Disclosure.sendMessageDisclosureFive(this.disclosureFive);
    }
    changedisclosureFiveetc(){
      this.showFive = true;
      this._Disclosure.sendMessageDisclosureFive(null);
    }
    changeinputDisclosureFive(newValue){
      this.disclosureFivetxt = newValue;
      this._Disclosure.sendMessageDisclosureFive(this.disclosureFivetxt);
    }
    // Six
    changedisclosureSix(newValue) {
      this.showSix = false;
      this.disclosureSix = newValue['srcElement']['value'];
      this._Disclosure.sendMessageDisclosureSix(this.disclosureSix);
    }
    changedisclosureSixetc(){
      this.showSix = true;
      this._Disclosure.sendMessageDisclosureSix(null);
    }
    changeinputDisclosureSix(newValue){
      this.disclosureSixtxt = newValue;
      this._Disclosure.sendMessageDisclosureSix(this.disclosureSixtxt);
    }
}
