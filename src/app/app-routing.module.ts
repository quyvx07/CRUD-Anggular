import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {LoginedGuard} from './logined.guard';
import {ProfileComponent} from './profile/profile.component';
import {CreateComponent} from './category/create/create.component';
import {UpdateComponent} from './category/update/update.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'user', canActivate: [LoginedGuard],
    children: [
      {path: 'profile', component: ProfileComponent},
    ]
  },
  {
    path: 'categories', canActivate: [LoginedGuard],
    children: [
      {path: 'add', component: CreateComponent},
      {path: 'edit/:id', component: UpdateComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
