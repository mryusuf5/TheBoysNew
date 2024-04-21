import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Suggestion } from '../../models/Suggestion';
import { RouterModule } from '@angular/router';
import { MultiSelectModule } from 'primeng/multiselect';
import {ToastrService} from "ngx-toastr";
import {SuggestionService} from "../../services/suggestion.service";
import {TeamService} from "../../services/team.service";
import {PollService} from "../../services/poll.service";

@Component({
  selector: 'app-make-poll',
  standalone: true,
  imports: [HeaderComponent, BannerComponent, CommonModule, ReactiveFormsModule, RouterModule, MultiSelectModule],
  templateUrl: './make-poll.component.html',
  styleUrl: './make-poll.component.scss'
})
export class MakePollComponent {
  constructor(public auth: AuthService,
              private suggestionService: SuggestionService,
              private toast: ToastrService,
              private teamService: TeamService,
              private pollService: PollService) {}

  public suggestionsArray: Suggestion[];
  public team: any;

  public pollForm = new FormGroup({
    datetime: new FormControl<string>(""),
    selectedSuggestions: new FormControl<Suggestion[] | null>([])
  });

  ngOnInit() {
    this.teamService.getTeam("1").subscribe((team) => {
      this.team = team;
    })

    this.suggestionService.getSuggestions().subscribe((e: Suggestion[]) => {

      this.suggestionsArray = e;

      console.log(this.suggestionsArray);

    })

    console.log(Date());
  }

  public createPoll() {
    console.log(this.pollForm.controls.datetime.value);
    console.log(this.pollForm.controls.selectedSuggestions.value);


    if(this.pollForm.controls.datetime.value == "")
    {
      this.toast.error("Selecteer een datum")
      return;
    }

    if(new Date(this.pollForm.controls.datetime.value) < new Date())
    {
      this.toast.error("Selecteer een datum in de toekomst")
      return;
    }

    if(this.pollForm.controls.selectedSuggestions.value.length == 0)
    {
      this.toast.error("Selecteer minstens 1 uitje")
      return;
    }

    let suggestionIds: number[] = [];

    this.pollForm.controls.selectedSuggestions.value.forEach((suggestion: Suggestion) => {
      suggestionIds.push(suggestion.Id)
    })

    console.log(suggestionIds);

    this.pollService.createPoll(this.pollForm.controls.datetime.value, suggestionIds).subscribe((s) => {
      this.toast.success("Poll aangemaakt");
    }, (err) => {
      this.toast.error("Er is momenteel een poll actief");
    })
  }
}
