import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private githubApiUrl = 'https://api.github.com/';

  constructor(
    private http: HttpClient
  ) { }

  getData(request) {
    return this.http.get(this.githubApiUrl + request);
  }
}
