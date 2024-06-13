import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http: HttpClient) {

  }

  public url: string = environment.API_URL;

  public getTags(tag: string)
  {

  }

  public addTag(tag: string, id: number)
  {
    return this.http.post(`${this.url}api/Tags?title=${tag}&restrictive=false&suggestionId=${id}`, null);
  }
}
