import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {AuthService} from "@auth0/auth0-angular";
import {ApiServiceService} from "../../services/api-service.service";

@Component({
  selector: 'app-suggestion-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './suggestion-card.component.html',
  styleUrl: './suggestion-card.component.scss'
})
export class SuggestionCardComponent {
  @Input() title: string;
  @Input() description: string;
  @Input() id: number;
  @Input() image: SVGImageElement;
  @Input() creatorName: string;
  @Input() creatorPicture: string;
}
