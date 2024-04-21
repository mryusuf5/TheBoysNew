import { Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {HomeComponent} from "./pages/home/home.component";
import {AuthGuard} from "@auth0/auth0-angular";
import {MakePollComponent} from "./pages/make-poll/make-poll.component";

export const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "home", component: HomeComponent, canActivate: [AuthGuard]},
  {path: "poll-aanmaken", component: MakePollComponent, canActivate: [AuthGuard]}
];
