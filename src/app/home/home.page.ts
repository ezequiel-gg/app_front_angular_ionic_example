import { error } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { ITicket } from '../interfaces/ticket.interface';
import { TicketsService } from '../services/tickets.service';
const STATUS = {
  SOLVED: {color: 'tertiary', message: 'Respondido'},
  NEW:{ color: 'danger', message: 'Nuevo'}
}
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

  determinateStatusColor(status): string {
    return STATUS[status].color;
  }

  translateStatus(status): string {
    return STATUS[status].message;
  }
}
