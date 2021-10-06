import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Frontend for school integration system';

  constructor(){
    console.log('gRPC url: ' + environment.grpcUrl);
    console.log('Teacher REST url: ' + environment.teacherRestUrl);
    console.log('Grades url: ' + environment.gradesUrl);
  }
}
