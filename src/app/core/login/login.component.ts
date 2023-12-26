import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    email = new FormControl('');
    password = new FormControl('');

    constructor(private loginService:LoginService, private router:Router) {
        
    }

    ngOnInit() {

    }

    login():void {
        this.loginService.login(this.email.value, this.password.value).subscribe(
            res => {
                if (res) {
                   console.log("ok");
                   //router to user list
                   this.router.navigate(["/users"]);
                }
            }
        );
    }
}
