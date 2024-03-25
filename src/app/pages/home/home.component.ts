import { Component } from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";
import {BannerComponent} from "../../components/banner/banner.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, BannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
