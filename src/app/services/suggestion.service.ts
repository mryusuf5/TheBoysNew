import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, retry} from "rxjs";
import {Suggestion} from "../models/Suggestion";
import {environment} from "../../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {

  constructor(private http: HttpClient) {

  }

  public url: string = environment.API_URL;

  public getSuggestions(): Observable<Suggestion[]>
  {
    return this.http.get<Suggestion[]>(`${this.url}api/Suggestions`).pipe(retry(3));
  }

  public postSuggestion(data: Suggestion, image: FormData)
  {
    return this.http.post(`${this.url}api/Suggestions?title=${encodeURIComponent(data.title)}&description=${encodeURIComponent(data.description)}&creatorId=${encodeURIComponent(data.creatorId)}`, image);
  }

  public postSuggestionOverride(data: Suggestion, image: FormData)
  {
    return this.http.post(`${this.url}api/Suggestions?title=${encodeURIComponent(data.title)}&description=${encodeURIComponent(data.description)}&creatorId=${encodeURIComponent(data.creatorId)}&overrideSimilarity=true`, image);
  }
}
