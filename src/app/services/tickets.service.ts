import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITicket } from '../interfaces/ticket.interface';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const SERVER_URL = environment.server_url;
@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor(private http: HttpClient) { }


  getTickets() {
    return this.http.get(SERVER_URL + '/tickets', {});
  }

}
