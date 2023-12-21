import { Injectable } from '@angular/core';
import { Pageable } from '../core/model/page/Pageable';
import { Observable } from 'rxjs';
import { UserPage } from '../core/model/page/UserPage';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor() { }

    getUsers(pageable: Pageable) : Observable<UserPage> {
        return of
    }
}
