import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

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

  public ngOnInit()
  {
    if(window.localStorage.getItem("isManager") == "1")
    {
      this.isManager = true;
    }
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
