import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserPage } from './model/UserPage';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http:HttpClient) { }

    getUsers(page: number) : Observable<UserPage> {

        return this.http.get<UserPage>("https://reqres.in/api/users?page=" + page);
    }
}
