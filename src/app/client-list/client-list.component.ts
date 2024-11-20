import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Client, ClientService } from '../services/client.service';

@Component({
  selector: 'app-client-list',
  standalone: true, // If using standalone components
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
})
export class ClientListComponent {
  clients: Client[] = [];
  searchResult: Client | null = null;

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.displayAllClients();
  }

  displayAllClients(): void {
    this.clients = this.clientService.getClients();
    this.searchResult = null;
  }

  displayVIPClients(): void {
    this.clients = this.clientService.getVIPClients();
    this.searchResult = null;
  }

  searchClient(id: string): void {
    const clientId = Number(id);
    if (!isNaN(clientId)) {
      const result = this.clientService.searchClientById(clientId);
      if (result) {
        this.searchResult = result;
        this.clients = [];
      } else {
        this.searchResult = null;
        alert('Client not found!');
      }
    } else {
      alert('Please enter a valid ID');
    }
  }

  deleteClient(id: number): void {
    this.clientService.deleteClient(id);
    this.displayAllClients();
  }

  editClient(client: Client): void {
    alert(`Edit functionality for ${client.name} not yet implemented.`);
  }


}
