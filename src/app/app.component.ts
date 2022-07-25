import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Interview {
  name: string;
  area: string;
  question: string;
  answer: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  searchTerm = '';
  interviews: Interview[] = [];
  allInterviews: Interview[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http
      .get<Interview[]>('./assets/data/db.json')
      .subscribe((data: Interview[]) => {
        this.interviews = data;
        this.allInterviews = this.interviews;
      });
  }

  search(value: string): void {
    this.interviews = this.allInterviews.filter((val) =>
      val.name.toLowerCase().includes(value)
    );
  }

}
