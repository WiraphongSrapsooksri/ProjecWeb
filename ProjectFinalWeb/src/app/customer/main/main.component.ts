import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AmountComponent } from 'src/app/page/amount/amount.component';
import { Dataservice } from 'src/app/service/appdata.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  foods : any = '';
  type : any = '';
  dialog: any;
  constructor(private dataService : Dataservice,private http : HttpClient){
    http.get(dataService.apiEndpoint + '/foods').subscribe((data: any) => {
      console.log(data);
      this.foods = data;
    });
    http.get(dataService.apiEndpoint+'/types').subscribe((types:any) =>{
      this.type = types;
    });

  }
  allMenu(){
    this.http.get(this.dataService.apiEndpoint + '/foods').subscribe((data: any) => {
      console.log(data);
      this.foods = data;
    });
  }
  getMenu(type : string){
    this.http.post(this.dataService.apiEndpoint+'/typees',(JSON.stringify({"type":type}))).subscribe((types:any) =>{
      this.foods = types;
    });
  }
  amount() {
    this.dataService.FoodServic = this.foods;
    this.dialog.open(AmountComponent, {
      minWidth: '300px',
    })
  }
}
