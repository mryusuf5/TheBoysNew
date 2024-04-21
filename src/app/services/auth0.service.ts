import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class Auth0Service {

  constructor(private http: HttpClient) { }

  public url: string = environment.API_URL;

  public getAccessToken()
  {
    const data = new URLSearchParams({
      grant_type: "client_credentials",
      client_id: environment.AUTH0_CLIENT_ID,
      client_secret: environment.AUTH0_CLIENT_SECRET,
      audience: environment.AUTH0_AUDIENCE
    })

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    })

    return this.http.post(`https://${environment.AUTH0_DOMAIN}/oauth/token`, data, {headers: headers});
  }

  public getRoles(clientId: string, authToken: string)
  {
    var myHeaders = new HttpHeaders({
      "Accept": "application/json",
      "Authorization": `Bearer ${authToken}`
    });

    return this.http.get(`https://dev-32vazackaub44o4u.uk.auth0.com/api/v2/users/${clientId}/roles`, {headers: myHeaders});
  }

  public getAllUsers(authToken: string)
  {
    var myHeaders = new HttpHeaders({
      "Accept": "application/json",
      "Authorization": `Bearer ${authToken}`
    });

    return this.http.get(`https://dev-32vazackaub44o4u.uk.auth0.com/api/v2/users`, {headers: myHeaders});
  }
}
