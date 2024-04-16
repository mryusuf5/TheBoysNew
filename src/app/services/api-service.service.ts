import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Suggestion} from "../models/Suggestion";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  public url: string = "https://grpi528512.luna.fhict.nl/";

  constructor(private http: HttpClient) { }

  public getSuggestions(): Observable<Suggestion[]>
  {
    return this.http.get<Suggestion[]>(`${this.url}api/Suggestions`);
  }

  public postSuggestion(data: Suggestion, image: FormData)
  {
    return this.http.post(`${this.url}api/Suggestions?title=${encodeURIComponent(data.title)}&description=${encodeURIComponent(data.description)}&creatorId=${encodeURIComponent(data.creatorId)}`, image);
  }
}
