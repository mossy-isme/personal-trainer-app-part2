import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav>
      <a routerLink="/clients">Clients</a>
      <a routerLink="/add-client">Add Client</a>
      <a routerLink="/about">About</a>
      <a routerLink="/help">Help</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      nav {
        display: flex;
        gap: 15px;
        background-color: #f0f0f0;
        padding: 10px;
      }
      a {
        text-decoration: none;
        color: #007bff;
      }
      a:hover {
        text-decoration: underline;
      }
    `,
  ],
})
export class AppComponent {}
