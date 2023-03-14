import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProjectFinalWeb';
  constructor(private http : HttpClient){
    // console.log('Start');
    // let url = 'http://localhost/work02/foods'
    // this.http.get(url).subscribe((data : any)=> {
    //   console.log(data[0]);
    //   console.log('Complete');
    // });

  }
}
