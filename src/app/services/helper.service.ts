import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  private similarSuggestionChosen: boolean = false;

  getSimilarSuggestionChosen()
  {
    return this.similarSuggestionChosen;
  }

  setSimilarSuggestionChosen(value: boolean)
  {
    this.similarSuggestionChosen = value;
  }
}
