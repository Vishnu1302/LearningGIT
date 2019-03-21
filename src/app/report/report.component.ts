import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service'
import { ReportService } from '../services/report.service'
import { AlertService } from '../services/alert.service'
import * as pbi from 'powerbi-client';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  reportslist;
  load:boolean = false;
  constructor(private auth: AuthenticationService, private reportservice: ReportService,private alertservice:AlertService) { }
  ngOnInit() {
    this.reportservice.getListofReports().subscribe(response =>{
      this.reportslist = response.body;
      this.load = true;
    },error =>{
      this.alertservice.error(error);
      this.load = true;
    })
  }
  logout() {
    this.auth.logout();
  }
  showReport(ReportId) {
    // tslint:disable-next-line:max-line-length
    this.load = false;
    this.reportservice.embedReport(ReportId).subscribe(data => {
      console.log(data);
      const workpsaceid = this.reportservice.getworkspaceid();
      const config = {
        type: 'report',
        tokenType: pbi.models.TokenType.Embed,
        accessToken: data.body.embedToken,
        // embedToken: data.body.embedToken,
        groupId: workpsaceid,
        embedUrl: data.body.embedUrl,
        id: data.body.id,
        permissions: pbi.models.Permissions.All
      };
      this.load = true;
      const reportContainer = <HTMLElement>document.getElementById('reportContainer');
      // Embed the report and display it within the div container.
      const powerbi = new pbi.service.Service(pbi.factories.hpmFactory, pbi.factories.wpmpFactory, pbi.factories.routerFactory);
      powerbi.reset(reportContainer);
      const report = <pbi.Report>powerbi.embed(reportContainer, config);
    },error => {
      this.alertservice.error(error);
      console.log(error);
      this.load = true;
    });
  }
}
export interface Food {
  value: string;
  viewValue: string;
}
