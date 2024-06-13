import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor(private http: HttpClient) { }

  public url: string = environment.API_URL;

  public postVote(userId: number, pollId: number, suggestionId: number)
  {
    return this.http.post(`${this.url}api/votes?userId=${userId}&pollId=${pollId}&suggestionId=${suggestionId}`, null);
  }

}
