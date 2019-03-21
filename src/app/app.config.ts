// <copyright file='app.config.ts' company='General Electric'>
// Copyright © 2017 General Electric Company.  All rights reserved.  Confidential and Proprietary.
// </copyright>

import { InjectionToken } from '@angular/core';
import { environment } from '../environments/environment';
export let APP_CONFIG = new InjectionToken('app.config');
export interface IAppConfig {
    get_reportby_id: string;
    workspaceid: string;
    get_list_reports: string;
    get_token_url: string;
    jwttoken: string;
}

export const AppConfig: IAppConfig = {
    get_reportby_id: 'https://localhost:44302/tenant/Apollo.Analytics.Dev101/report/{reportId}',
    workspaceid: 'e3a00282-0a7b-4994-adca-3491215e5558',
    get_token_url: environment.localportalpath + 'Services/api/user/token',
    get_list_reports: 'https://localhost:44302/tenant/Apollo.Analytics.Dev101/report?categories=E&categories=M ',
    // tslint:disable-next-line:max-line-length
    jwttoken: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik4tbEMwbi05REFMcXdodUhZbkhRNjNHZUNYYyIsImtpZCI6Ik4tbEMwbi05REFMcXdodUhZbkhRNjNHZUNYYyJ9.eyJhdWQiOiJhYTk3MGZjOS1lMGE2LTRjZDctYjgxYi04MDRlNzk3MGFhMTIiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84YjM2YTNhYy0xMGI4LTRkNjQtOGYwOC00MjlkMjA5Y2VhMDMvIiwiaWF0IjoxNTUyNDk0MzE4LCJuYmYiOjE1NTI0OTQzMTgsImV4cCI6MTU1MjQ5ODIxOCwiYWlvIjoiNDJKZ1lIQ2UxQnVrdjVYaHB2a1VLZkg1b1pYekFBPT0iLCJhcHBpZCI6ImFhOTcwZmM5LWUwYTYtNGNkNy1iODFiLTgwNGU3OTcwYWExMiIsImFwcGlkYWNyIjoiMSIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzhiMzZhM2FjLTEwYjgtNGQ2NC04ZjA4LTQyOWQyMDljZWEwMy8iLCJvaWQiOiIyMDE3YmY4My1hODUyLTQ2NjktYWYzOC0xNDc1NTFhNjNmNDUiLCJzdWIiOiIyMDE3YmY4My1hODUyLTQ2NjktYWYzOC0xNDc1NTFhNjNmNDUiLCJ0aWQiOiI4YjM2YTNhYy0xMGI4LTRkNjQtOGYwOC00MjlkMjA5Y2VhMDMiLCJ1dGkiOiJISDVZelRGbmJFcVV3c0FTMjI1QUFRIiwidmVyIjoiMS4wIn0.XLu57gujk7cg5NcFcn4eDSdLIiGzVhe3jhPl_2oVyDPZYRNLo4Nj1PWowabeIhjhivz9JtaFvyRghsVkurqYqWvTC-syfx3OqGo_9AqiEFLmr5ic9k1QS1YryM7Z03FjQ6sLCuUnci2nBJL_ywNGJfp3m9Z_vqRdCHB_WgFMSDfZ6RmActUd_XK2dPLKdJV-6D-udiRVys31B9Pbim05POPwde6yn-sdhJa1dosuNDuTfCqwhPLYE4jOpJMLG9Wq0wKrub8mD-v72ytbvUmRQjvNTFj6UXcPhlU6BEcl0IcAce7r3wyJdvDdqDHnZgH6E-2110n_WThUeuWVfAG3Gg'
};
