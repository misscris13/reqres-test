import { Component } from '@angular/core';
import { UserPage } from '../model/UserPage';
import { UserService } from '../user.service';
import { User } from '../model/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

    userPage: UserPage;
    actualPage: number;
    userDetail: User;

    constructor(private userService:UserService) {
        
    }

    ngOnInit() {
        this.getUsers(1);
        this.actualPage = 1;
    }

    getUsers(page:number):void {
        
        this.userService.getUsers(page).subscribe(
            res => {
                if (res) {
                    this.userPage = res;
                    console.log(this.userPage);
                }
            }
        )
    }

    nextPage():void {
       
        if (this.actualPage != this.userPage.total_pages) {

            this.actualPage += 1;
            this.getUsers(this.actualPage);
        } else {
            console.log("ERROR: This is the last page");
        }
    }
    
    previousPage():void {
        
        if (this.actualPage != 1) {

            this.actualPage -= 1;
            this.getUsers(this.actualPage - 1);
        } else {
            console.log("ERROR: This is the first page");
        }
    }

    showUserDetail(user: User):void {

        this.userDetail = user;

        let dialog: HTMLDialogElement = (document.getElementById("detail") as HTMLDialogElement);
        dialog.show();
    }
    
    closeUserDetail():void {
        
        let dialog: HTMLDialogElement = (document.getElementById("detail") as HTMLDialogElement);
        dialog.close();
    }
}
