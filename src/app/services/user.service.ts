import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public url: string = environment.API_URL;

  public createUser(userId: string, teamId: string = "1")
  {
    const data = new URLSearchParams({
      userId: userId,
      teamId: teamId
    })

    return this.http.post(`${this.url}/users?userId=${userId}&teamId=${teamId}`, null);
  }

  public getUser(userId: string)
  {
    return this.http.get(`${this.url}api/users?id=${userId}`);
  }
}
