import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    constructor(private http: HttpClient, private router: Router) { }
    
    login(username: string, password: string) {
        let user = {
            name:'Vishnu',
            token:'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik4tbEMwbi05REFMcXdodUhZbkhRNjNHZUNYYyIsImtpZCI6Ik4tbEMwbi05REFMcXdodUhZbkhRNjNHZUNYYyJ9.eyJhdWQiOiJhYTk3MGZjOS1lMGE2LTRjZDctYjgxYi04MDRlNzk3MGFhMTIiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84YjM2YTNhYy0xMGI4LTRkNjQtOGYwOC00MjlkMjA5Y2VhMDMvIiwiaWF0IjoxNTUyOTIxMTI5LCJuYmYiOjE1NTI5MjExMjksImV4cCI6MTU1MjkyNTAyOSwiYWlvIjoiNDJKZ1lJaDhrVlMwc21ySzIzZmh5K3UrM0RyQkRnQT0iLCJhcHBpZCI6ImFhOTcwZmM5LWUwYTYtNGNkNy1iODFiLTgwNGU3OTcwYWExMiIsImFwcGlkYWNyIjoiMSIsImlkcCI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzhiMzZhM2FjLTEwYjgtNGQ2NC04ZjA4LTQyOWQyMDljZWEwMy8iLCJvaWQiOiIyMDE3YmY4My1hODUyLTQ2NjktYWYzOC0xNDc1NTFhNjNmNDUiLCJzdWIiOiIyMDE3YmY4My1hODUyLTQ2NjktYWYzOC0xNDc1NTFhNjNmNDUiLCJ0aWQiOiI4YjM2YTNhYy0xMGI4LTRkNjQtOGYwOC00MjlkMjA5Y2VhMDMiLCJ1dGkiOiIyUjAxdUI1S3lVQ3JQUEE5clU3ckFBIiwidmVyIjoiMS4wIn0.TBpqCkQo1eNTaxNfmzZakCjuB1F_IvaufVOUKxEeU4nzPKO82-AIWNrEgyzaiDHlU3fRcSeXRIT4x17E1IJSR5i01_MJy5Fs2fOA39uAmRs_5HhU4NRO_It3zX3tqMlNZApOewdvcnCapKvDvooxYmd8K9YagIWJ_lNct-RBW_-3rLPfty-xAxJtnqPmJEzBrw6t7CvKtdTUvkb8-MoPMGgX0jjKhxX5GVEqcSrs_-htd88-elrzOEa29NV_5-NNO-WABmhQrAT-9AA8PYleydt_reFDv9FWNX0DFQ1u1y-bzVXnDgorebQFZFQKjOeeznybSsYCXjdlUJEiWJykBQ'
        }
       // return this.http.post<any>('https://login.microsoftonline.com/8b36a3ac-10b8-4d64-8f08-429d209cea03/oauth2/token', this.body)
            // .pipe(map(user => {
            //     // login successful if there's a jwt token in the response
            //     if (user && user.access_token) {
            //         console.log(user.access_token)
            //         // store user details and jwt token in local storage to keep user logged in between page refreshes
            //         localStorage.setItem('currentUser', JSON.stringify(user));
            //     }
            //     return user;
            // })), catchError(this.handleError);
        localStorage.setItem('currentUser', JSON.stringify(user));
        return user;
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.router.navigate(['./login'])
    }
}

export class AuthenticationMockService {
    login(username: string, password: string) {
        if(username == 'test'){
        let user = {
            name:'Vishnu',
            token:'eyJ'
        }
        return user;
    }
    else{
        return 'test'
      }
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}