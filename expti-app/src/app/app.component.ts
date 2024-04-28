import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'expti-app';
  formData: any = {}; // Object to store form data
  submitted: boolean = false; // Flag to track form submission status

  submitForm() {
    // Here you can handle form submission logic
    // For example, you can submit form data to a server
    console.log('Form submitted:', this.formData);
    this.submitted = true; // Set submitted flag to true
  }
}



