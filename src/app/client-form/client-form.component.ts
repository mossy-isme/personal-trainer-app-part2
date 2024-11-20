import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css'],
})
export class ClientFormComponent {
  clientForm: FormGroup;

  constructor(private fb: FormBuilder, private clientService: ClientService) {
    // Grouping `contactInfo` into a nested FormGroup
    this.clientForm = this.fb.group({
      clientID: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      gender: ['', Validators.required],
      fitnessProgram: ['', Validators.required],
      joinedDate: ['', Validators.required],
      endingDate: ['', Validators.required],
      dob: ['', Validators.required],
      contactInfo: this.fb.group({
        phoneNumber: [
          '',
          [Validators.required, Validators.pattern('^[0-9]{10}$')],
        ],
        address: ['', Validators.required],
        email: ['', Validators.email], // Optional
      }),
      isVIP: [false], // Boolean default value
      specialHealthNotes: [''], // Optional
    });
  }

  addClient(): void {
    if (this.clientForm.valid) {
      const newClient = this.clientForm.value; // Form value now matches the expected structure
      this.clientService.addClient(newClient);
      console.log('Client added successfully:', newClient);
      this.clientForm.reset();
    } else {
      console.error('Form is invalid!');
    }
  }

  get f() {
    return this.clientForm.controls;
  }
}
