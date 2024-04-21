import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environment/environment";
import {retry} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  public url: string = environment.API_URL;

  public getTeam(teamId: string)
  {
    return this.http.get(`${this.url}api/teams?id=${teamId}`).pipe(retry(3));
  }
}
