import {Component, Inject} from '@angular/core';
import {CommonModule, DOCUMENT} from "@angular/common";
import {RouterModule} from "@angular/router";
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public toggler: boolean = false;
  public isManager: boolean = false;

  constructor(public auth: AuthService, @Inject(DOCUMENT) public document: Document) {
  }


  public ngOnInit()
  {
    this.auth.user$.subscribe((user) => {
      console.log(user);
      const id = user.sub.split("|")
      console.log(id[1]);
    })

    this.auth.isAuthenticated$.subscribe((isAuth) => {
      if(!isAuth)
      {
        window.location.href = "";
      }
    })
  }

  toggleNavbar()
  {
    this.toggler = !this.toggler;
  }

  public logout()
  {
    window.localStorage.removeItem("isManager");
    window.location.href = "";
  }
}
