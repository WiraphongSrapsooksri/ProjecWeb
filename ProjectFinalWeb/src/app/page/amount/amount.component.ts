import { HttpClient } from '@angular/common/http';
import { Dataservice } from 'src/app/service/appdata.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Food } from 'src/app/model/food.model';
import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-amount',
  templateUrl: './amount.component.html',
  styleUrls: ['./amount.component.scss']
})
export class AmountComponent {

  foodOj:Food;
  name = 'Angular ' + VERSION.major;
  amount = 0;


  constructor(private data: Dataservice,
    private dialogRef: MatDialogRef<AmountComponent>,
    private http: HttpClient) {
    this.foodOj = data.FoodServic;
  }

  close() {
    this.dialogRef.close();
  }
  confirm(fid:string,amount:number) {
    let jsonObj = {
      fid:fid,
      amount:amount,
      sumprice: amount * this.foodOj.price
    }
    let jsonString = JSON.stringify(jsonObj);
    this.http.put(this.data.apiEndpoint + "/landmark/" + fid, jsonString, { observe: 'response' }).subscribe((response) => {
      console.log(JSON.stringify(response.status));
      console.log(JSON.stringify(response.body));
      this.dialogRef.close();
    })
  }
  handleMinus() {
    this.amount--;
  }
  handlePlus() {
    this.amount++;
  }
}
