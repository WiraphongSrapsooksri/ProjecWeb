import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Dataservice } from 'src/app/service/appdata.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  foods : any = '';
  constructor(private dataService : Dataservice,private http : HttpClient){
    http.get(dataService.apiEndpoint).subscribe((data:any) =>{
      console.log(data);
      this.foods = data[0];
      console.log(this.foods);

    })
  }
}
