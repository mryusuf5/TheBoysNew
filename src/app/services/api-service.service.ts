import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Suggestion} from "../models/Suggestion";
import {Observable} from "rxjs";
import {environment} from "../../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  public url: string = "https://grpi528512.luna.fhict.nl/";

  constructor(private http: HttpClient) { }

  // public getSuggestions(): Observable<Suggestion[]>
  // {
  //   return this.http.get<Suggestion[]>(`${this.url}api/Suggestions`);
  // }
  //
  // public postSuggestion(data: Suggestion, image: FormData)
  // {
  //   return this.http.post(`${this.url}api/Suggestions?title=${encodeURIComponent(data.title)}&description=${encodeURIComponent(data.description)}&creatorId=${encodeURIComponent(data.creatorId)}`, image);
  // }
  //
  // public postSuggestionOverride(data: Suggestion, image: FormData)
  // {
  //   return this.http.post(`${this.url}api/Suggestions?title=${encodeURIComponent(data.title)}&description=${encodeURIComponent(data.description)}&creatorId=${encodeURIComponent(data.creatorId)}&overrideSimilarity=true`, image);
  // }

  // public getAccessToken()
  // {
  //   const data = new URLSearchParams({
  //     grant_type: "client_credentials",
  //     client_id: environment.AUTH0_CLIENT_ID,
  //     client_secret: environment.AUTH0_CLIENT_SECRET,
  //     audience: environment.AUTH0_AUDIENCE
  //   })
  //
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //   })
  //
  //   return this.http.post(`https://${environment.AUTH0_DOMAIN}/oauth/token`, data, {headers: headers});
  // }
  //
  // public getRoles(clientId: string, authToken: string)
  // {
  //   var myHeaders = new HttpHeaders({
  //     "Accept": "application/json",
  //     "Authorization": `Bearer ${authToken}`
  //   });
  //
  //   return this.http.get(`https://dev-32vazackaub44o4u.uk.auth0.com/api/v2/users/${clientId}/roles`, {headers: myHeaders});
  // }
  //
  // public getAllUsers(authToken: string)
  // {
  //   var myHeaders = new HttpHeaders({
  //     "Accept": "application/json",
  //     "Authorization": `Bearer ${authToken}`
  //   });
  //
  //   return this.http.get(`https://dev-32vazackaub44o4u.uk.auth0.com/api/v2/users`, {headers: myHeaders});
  // }

  // public createUser(userId: string, teamId: string = "1")
  // {
  //   const data = new URLSearchParams({
  //     userId: userId,
  //     teamId: teamId
  //   })
  //
  //   return this.http.post(`${this.url}api/users?userId=${userId}&teamId=${teamId}`, null);
  // }
  //
  // public getUser(userId: string)
  // {
  //   return this.http.get(`${this.url}api/users?id=${userId}`);
  // }

  public getTeam()
  {

  }

  // public createPoll(endDate: Date, suggestionIds: number[])
  // {
  //   return this.http.post(`${this.url}api/poll?teamId=1&endDate=${endDate}`, suggestionIds);
  // }
}
