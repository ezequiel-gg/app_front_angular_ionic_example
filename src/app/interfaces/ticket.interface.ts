import { ITicketStatus } from "./ticket-status.interface";

export interface ITicket {
    ticketid: string;
    subject: string;
    date: Date;
    from: string;
    status: ITicketStatus;
    body: string;
}