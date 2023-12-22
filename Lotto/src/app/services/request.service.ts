import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketsModel } from '../models/ticketModel.model';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  private apiUrl = 'https://localhost:7166/lotto/';

  constructor(private http: HttpClient) {}
  headers = new HttpHeaders().set('Accept', 'text/plain');
  getHello(): Observable<string> {
    return this.http.get(this.apiUrl + 'testTicket', {
      responseType: 'text',
      headers: this.getHeaders(),
    });
  }

  getTickets(): Observable<TicketsModel[]> {
    return this.http.get<TicketsModel[]>(this.apiUrl + 'tickets', {headers: this.getHeaders()})
  }

  postTicket(ticketModel: TicketsModel): Observable<void> {
    return this.http.post<void>(this.apiUrl + 'addTicket', ticketModel, {
      headers: this.getHeaders(),
    });
  }

  getHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }
}
