import {Component, Inject} from '@angular/core';
import {RouterModule, RouterOutlet} from "@angular/router";
import {AuthService} from "@auth0/auth0-angular";
import {CommonModule, DOCUMENT} from "@angular/common";


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(public auth: AuthService, @Inject(DOCUMENT) public document: Document) {
  }

  ngOnInit()
  {
    this.auth.isAuthenticated$.subscribe((isAuth) => {
      if(isAuth)
      {
        window.location.href = "home";
      }
    })
  }

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
