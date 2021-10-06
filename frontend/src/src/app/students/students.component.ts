import { Component, OnInit } from '@angular/core';
import { ReadStudentListRequest, ReadStudentResponse } from 'src/proto/student.pb';
import { StudentClient } from '../../proto/student.pbsc'

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  columnsToDisplay: string[] = ['id', 'firstName', 'lastName', 'email']
  dataSource: ReadStudentResponse[] = [];


  constructor(private studentGrpcService: StudentClient) { }

  ngOnInit(): void {
    this.studentGrpcService.readStudentList(new ReadStudentListRequest()).subscribe(response => {
      if (response.studentList instanceof Array)
        this.dataSource = response.studentList;
    });

  }

}
