import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  firstName = null
  lastName = null
  email = null
  address = null

  constructor() { }

  ngOnInit(): void {
  }

  register() {
    if (this.firstName && this.lastName && this.address) {
      console.log('call reg');

    } else {
      console.log('fill req data');

    }
  }

}
