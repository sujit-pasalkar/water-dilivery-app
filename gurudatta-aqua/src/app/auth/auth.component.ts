import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  otpSent: boolean = false
  phoneNumber = null
  otp = null
  recaptchaVerifier
  confirmationResult
  error = null

  constructor(public router: Router) { }

  ngOnInit() {
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible'
    });
  }

  sendOtp() {
    console.log(this.phoneNumber);
    
    firebase.auth().signInWithPhoneNumber('+91' + this.phoneNumber, this.recaptchaVerifier)
      .then((confirmationResult) => {
        console.log(this.phoneNumber,confirmationResult);
        
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        this.confirmationResult = confirmationResult;
        this.otpSent = true;
      }).catch(err => {
        console.log(this.phoneNumber,err)
        this.error = err
      })
  }

  signIn() {
    this.confirmationResult.confirm(this.otp).then(user=>{
      console.log(user)
      localStorage.setItem('user', JSON.stringify(user));
      console.log(user.phoneNumber);

      // check user is registered or not
      // if not ask for registration while placing order
      
      // this.router.navigate(['dashboard']);
      this.router.navigate(['register-user']);


      }).catch(err => {
        console.log(this.phoneNumber,err)
        this.error = err
      })
   }

}
