import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environment/environment";
import {Suggestion} from "../models/Suggestion";

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor(private http: HttpClient) { }

  public url: string = environment.API_URL;

  public createPoll(endDate: string, suggestionIds: number[])
  {
    return this.http.post(`${this.url}api/poll?teamId=1&endDate=${endDate}`, suggestionIds);
  }
}
