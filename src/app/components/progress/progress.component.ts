import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.scss'
})
export class ProgressComponent {
  @Input() title: string;
  @Input() votes: number;
  @Input() width: number;
  @Input() id: number;
  @Input() voted: number;

  ngOnInit()
  {

  }
}
