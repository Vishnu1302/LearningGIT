import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service'
import {AlertService} from '../services/alert.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidcred = false;
  // username:string;
  // password:string;
  constructor(private router: Router, private authservice: AuthenticationService,private alertservice:AlertService) {
  }
  profileForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  ngOnInit() {
  }
  onSubmit() {
    // stop here if form is invalid
    if (this.profileForm.invalid) {
      return;
    }
    // if(this.username == undefined || this.username == null || this.username == ''){
    //   return;
    // }
    // let val=this.authservice.login(this.username,this.password)
    let val = this.authservice.login(this.profileForm.controls.username.value, this.profileForm.controls.password.value)
    // .pipe((first()))
    // .subscribe(
    //     data => {
    //         console.log(data);
    //         this.router.navigate(['./report']);
    //     },
    //     error => {

    //     });
    if (val.name == 'Vishnu') {
      this.invalidcred = false;
      this.router.navigate(['./report']);
    }
    else {
      this.alertservice.error("NOT AUTHORIZED");
      this.invalidcred = true
    }
  }
}
