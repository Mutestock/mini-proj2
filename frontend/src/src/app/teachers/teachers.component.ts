import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface Teacher {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {
  dataSource: Teacher[] = [];
  baseUrl: string = environment.teacherRestUrl + '/';
  columnsToDisplay: string[] = ['firstName', 'lastName', 'email', 'createdAt']

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Teacher[]>(this.baseUrl + 'teachers')
      .subscribe(teachers => this.dataSource = teachers);
  }

}
