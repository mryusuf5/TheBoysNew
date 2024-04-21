import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Suggestion} from "../models/Suggestion";
import {environment} from "../../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {

  constructor(private http: HttpClient) { }

  public url: string = environment.API_URL;

  public getSuggestions(): Observable<Suggestion[]>
  {
    return this.http.get<Suggestion[]>(`${this.url}api/Suggestions`);
  }

  public postSuggestion(data: Suggestion, image: FormData)
  {
    return this.http.post(`${this.url}api/Suggestions?title=${encodeURIComponent(data.Title)}&description=${encodeURIComponent(data.Description)}&creatorId=${encodeURIComponent(data.CreatorId)}`, image);
  }

  public postSuggestionOverride(data: Suggestion, image: FormData)
  {
    return this.http.post(`${this.url}api/Suggestions?title=${encodeURIComponent(data.Title)}&description=${encodeURIComponent(data.Description)}&creatorId=${encodeURIComponent(data.CreatorId)}&overrideSimilarity=true`, image);
  }
}
