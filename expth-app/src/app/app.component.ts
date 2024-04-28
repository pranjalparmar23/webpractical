import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet],
})
export class AppComponent {
  title = 'expth-app';
  name: string = 'Pranjal Parmar';
  year: string = 'Third year';
  branch: string = 'Information Technology';
  rollNo: string = 'Roll no. 28';
  profileLink: string = '/home/itadmin/Desktop/pranjal/home.html';
}
