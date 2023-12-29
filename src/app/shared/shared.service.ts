import { Injectable } from '@angular/core';
import { LoginService } from '../core/login/login.service';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class SharedService {

    constructor(private loginService: LoginService, private router:Router) { }

    login(email:string, password:string):Observable<any>{ 
        return this.loginService.login(email,password);
    }

    setToken(token:any){
        localStorage.setItem("token",token)
    }

    getToken():any{
        return localStorage.getItem("token");
    }

    logOut(){
        localStorage.removeItem("token");
        this.router.navigate([""]);
    }
}
