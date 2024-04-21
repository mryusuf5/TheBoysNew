import {Component, Inject} from '@angular/core';
import {RouterModule, Router} from "@angular/router";
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
  constructor(public auth: AuthService, @Inject(DOCUMENT) public document: Document, private router: Router) {
  }

  ngOnInit()
  {
    this.auth.isAuthenticated$.subscribe((isAuth) => {
      if(isAuth)
      {
        this.router.navigate(["/home"])
      }
    })
  }
}
