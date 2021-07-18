import { error } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { ITicket } from '../interfaces/ticket.interface';
import { TicketsService } from '../services/tickets.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  listTickets: Array<ITicket>;

  constructor(private ticketsService: TicketsService) {}

  ngOnInit() {
    this.ticketsService.getTickets().subscribe((response: {tickets: Array<ITicket>}) => {
      this.listTickets = response.tickets;
    }, error => {
        console.error(error);
    });
  }

}
