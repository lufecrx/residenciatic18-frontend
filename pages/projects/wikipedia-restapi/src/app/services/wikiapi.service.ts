import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikiapiService {

  private apiUrl = 'https://br.wikipedia.org/w/api.php';

  constructor (private http: HttpClient) { }

  search (term: string) {
    const params = {
      action: 'query',
      format: 'json',
      list: 'search',
      srsearch: term,
    };

    return this.http.get<any>(this.apiUrl, { params });
  }
}
