import { Component, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AuthService } from "@auth0/auth0-angular";
import {Creator} from "../../models/Creator";
import {Auth0Service} from "../../services/auth0.service";
import {Team} from "../../models/Team";
import {TeamService} from "../../services/team.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public dropper: boolean = false;
  public role: any = [];
  public user: any;
  public users: any;

  constructor(public auth: AuthService,
              @Inject(DOCUMENT) public document: Document,
              private auth0Service: Auth0Service,
              private teamService: TeamService) {
  }

  public ngOnInit() {
    if(!localStorage.getItem("access_token"))
    {
      this.auth0Service.getAccessToken().subscribe((access: any) => {
        localStorage.setItem("access_token", access.access_token);
      })
    }

    if(localStorage.getItem("access_token"))
    {
      this.auth0Service.getAllUsers(localStorage.getItem("access_token")).subscribe((creators: any) => {

        this.teamService.getTeam("1").subscribe((e:Team) => {

          creators.forEach((creator) => {
            e.users.forEach((user) => {
              if(creator.user_id == user.id)
              {
                creator.user = user;
              }
            })
          })

          this.users = creators;
          console.log(this.users);
        })

        this.auth.user$.subscribe((user: any) => {
          this.user = user;
          creators.forEach((creator) => {
            if(creator.user_metadata && creator.user_metadata.picture)
            {
              if(creator.user_id == this.user.sub)
              {
                this.user.picture = creator.user_metadata.picture;
              }
            }
          })

          this.auth0Service.getRoles(user.sub, localStorage.getItem("access_token")).subscribe((role: any) => {
            this.role = role;
          })

        })

      })
    }

    this.auth.isAuthenticated$.subscribe((isAuth) => {
      if (!isAuth) {
        window.location.href = "";
      }
    })


  }

  public logout() {
    this.auth.logout({ logoutParams: { returnTo: document.location.origin } });
  }

  toggleDropdown() {
    this.dropper = !this.dropper;
  }
}
