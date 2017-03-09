import { Component, OnInit ,Input } from '@angular/core';
import { JobService }from  '../Service/job.service';

import { Job } from '../Model/job';
@Component({
  selector: 'job-component',
  templateUrl: '../Views/Job/job.component.html',
  styleUrls: ['../CSS/job.component.css']
})
export class JobComponent implements OnInit {
  M_Job:any;
  show = false;
  showType = false;
  constructor(private _Job:JobService) { }

  ngOnInit() {
    this.M_Job = new Job();
    }
    @Input() study : string;
    @Input() job : string;
    @Input() jobtxt : string;
    @Input() jobName : string;
    @Input() jobRule : string;
    @Input() jobType : string;

    changestudy(newValue){
      this.study = newValue['srcElement']['value'];
      this._Job.sendMessageStudy(this.study);
    }
    changejob(newValue){
      this.show = false;
      this._Job.sendMessageJob(this.job);
    }
    changejobetc(newValue){
      this.show = true;
      this._Job.sendMessageJob(null);
    }
    changeinputjobetc(newValue){
      this.jobtxt = newValue;
      this._Job.sendMessageJob(this.jobtxt);
    }
    changeinputjobName(newValue){
      this.jobName = newValue;
      this._Job.sendMessageJobName(this.jobName);
    }
    changeinputJobRule(newValue){
      this.jobRule = newValue;
      this._Job.sentMessageJobRule(this.jobRule);
    }

    changejobtype(newValue){
      this.showType = false;
      this.jobType = newValue['srcElement']['value'];
      this._Job.sentMessageJobType(this.jobType);
    }
    changejobTypeetc(newValue){
      this.showType = true;
      this._Job.sentMessageJobType(null);
    }
    changeinputjobTypeetc(newValue){
      this.jobType = newValue;
      this._Job.sentMessageJobType(this.jobType);
    }
}
