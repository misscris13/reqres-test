import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { LoginComponent } from './core/login/login.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
    { path: 'users', component: UserListComponent, canActivate: [AuthGuard] },
    { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
