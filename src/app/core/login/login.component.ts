import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    email = new FormControl('');
    password = new FormControl('');

    constructor(private sharedService:SharedService, private router:Router) {
        
    }

    ngOnInit() {

    }

    login():void {
        this.sharedService.login(this.email.value, this.password.value).subscribe(
            res => {
                if (res) {
                   this.sharedService.setToken(res)
                   this.router.navigate(["/users"]);
                }
            }
        );
    }
}
