import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { Job } from '../Model/job';

@Injectable()
export class JobService {

    private subject = new Subject<any>();
    Job: Job = new Job();

    sendMessageStudy(study : string){
        this.Job.study = study;
        this.subject.next(this.Job);
    }
    sendMessageJob(job : string){
        this.Job.job = job;
        this.subject.next(this.Job);
    }
    sendMessageJobName(jobName : string){
        this.Job.jobName = jobName;
        this.subject.next(this.Job);
    }
    sentMessageJobRule(jobRule : string){
        this.Job.jobRule = jobRule;
        this.subject.next(this.Job);
    }
    sentMessageJobType(jobType : string){
        this.Job.jobType = jobType;
        this.subject.next(this.Job);
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}