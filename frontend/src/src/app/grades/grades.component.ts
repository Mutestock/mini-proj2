import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface Grade {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent implements OnInit {
  baseUrl: string = environment.gradesUrl + '/';
  dataSource: Grade[] = [];
  columnsToDisplay: string[] = ['id', 'name']

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Grade[]>(this.baseUrl + 'grade')
      .subscribe(grades => this.dataSource = grades);
  }

}
