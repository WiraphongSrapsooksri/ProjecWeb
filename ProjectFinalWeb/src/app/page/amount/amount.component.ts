import { Component, VERSION } from '@angular/core';
import { Food } from 'src/app/model/food.model';
import { Dataservice } from 'src/app/service/appdata.service';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-amount',
  templateUrl: './amount.component.html',
  styleUrls: ['./amount.component.scss']
})
export class AmountComponent {
  food:Food | undefined;
  name = 'Angular ' + VERSION.major;
  value = 0;

  constructor(private data:Dataservice,
    private dialogRef: MatDialogRef<AmountComponent>,
    private http: HttpClient){
      this.food = data.FoodServic;
  }
  close() {
    this.dialogRef.close();
  }

  save(fid:string ,amount: number) {
    let jsonObj = {
      fid: fid,
      amount: amount
    }

    let jsonString = JSON.stringify(jsonObj);
    this.http.put(this.data.apiEndpoint + "/landmark/" + fid, jsonString, { observe: 'response' }).subscribe((response) => {
      console.log(JSON.stringify(response.status));
      console.log(JSON.stringify(response.body));
      this.dialogRef.close();
    })
  }
  handleMinus() {
    this.value--;
  }
  handlePlus() {
    this.value++;
  }
}


