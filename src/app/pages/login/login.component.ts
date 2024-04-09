import { Component } from '@angular/core';
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public medewerker()
  {
    window.localStorage.setItem("isManager", "0");
    window.location.href = "home";
  }

  public manager()
  {
    window.localStorage.setItem("isManager", "1");
    window.location.href = "home";
  }
}
