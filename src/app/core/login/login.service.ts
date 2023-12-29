import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http:HttpClient) { }

    login(email:string, password:string):Observable<any> {

        return this.http.post<any>("https://reqres.in/api/login", {"email":email, "password":password});
    }
}
