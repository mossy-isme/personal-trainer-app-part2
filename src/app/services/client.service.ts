import { Injectable } from '@angular/core';

export interface Client {
  isVIP: boolean;
  clientID: number;
  name: string;
  dob: Date;
  gender: 'Male' | 'Female' | 'Unspecified';
  fitnessProgram:
    | 'fat loss'
    | 'senior fitness'
    | 'muscle gain'
    | 'pre/postnatal fitness'
    | 'contest preparation'
    | 'overall fitness';
  contactInfo: {
    phoneNumber: string;
    address: string;
    email?: string;
  };
  joinedDate: Date;
  endingDate: Date;
  specialHealthNotes?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private clients: Client[] = [];

  getClients(): Client[] {
    return this.clients;
  }

  getVIPClients(): Client[] {
    return this.clients.filter((client) => client.isVIP);
  }

  searchClientById(id: number): Client | null {
    return this.clients.find((client) => client.clientID === id) || null;
  }

  addClient(client: Client): void {
    if (this.clients.some((c) => c.clientID === client.clientID)) {
      throw new Error('Client ID must be unique');
    }
    this.clients.push(client);
  }

  deleteClient(id: number): void {
    this.clients = this.clients.filter((client) => client.clientID !== id);
  }


}
