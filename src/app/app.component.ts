import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true // Change this to true
})
export class AppComponent implements OnInit {
  readonly APIUrl = "mongodb://localhost:27017"; // Assuming your backend API is running on port 3000

  constructor(private http: HttpClient) { } // Inject HttpClient

  notes: any = [];

  ngOnInit() {
    this.refreshNotes(); 
  }

  refreshNotes() {
    this.http.get(this.APIUrl + 'getNOTES').subscribe((data: any) => {
      this.notes = data;
    });
  }
}
