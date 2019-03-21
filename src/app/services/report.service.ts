import { Injectable, Inject } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError,of } from 'rxjs';
import {APP_CONFIG, IAppConfig} from '../app.config';
import { map,catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ReportService {
    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: IAppConfig) { }
    reportlisturl = this.config.get_list_reports;
    reportbyidurl =  this.config.get_reportby_id.replace('{workspaceId}', this.config.workspaceid);
    headers = new HttpHeaders({
      // tslint:disable-next-line:max-line-length
      'username': 'sandeep',
      'roles': 'manager'
    });
    getListofReports() {
      return this.http.get<any>(this.reportlisturl, {observe: 'response' });
    }
    embedReport(reportid) {
      // tslint:disable-next-line:max-line-length
      return this.http.get<any>( this.reportbyidurl.replace('{reportId}', reportid) , { headers: this.headers, observe: 'response' });
    }
    getworkspaceid() {
      return this.config.workspaceid;
    }
}
export class MockReportService{
  getListofReports(){
    let list =[
      {
          "id": "5da9f0a2-3f90-45db-9629-0a471203cf98",
          "workspaceId": "e3a00282-0a7b-4994-adca-3491215e5558",
          "reportName": "SampleDataReport",
          "categories": [
              "E"
          ],
          "description": "SampleDataReport updated by shiva.",
          "isActive": true
      }
    ]
    return of(list);
  }
}
