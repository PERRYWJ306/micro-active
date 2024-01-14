import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private api = 'https://mailthis.to/alias';

  constructor(private http: HttpClient) { }

  sendEmail(input: any) {
    return this.http.post(this.api, input, { responseType: 'text' }).pipe(
        map(
          (response) => {
          if (response) {
            return response;
          }
          return;
        },
        (error: any) => { return error;}
      )
  )}
}
