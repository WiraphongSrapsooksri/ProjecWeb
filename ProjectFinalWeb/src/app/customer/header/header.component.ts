import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Dataservice } from 'src/app/service/appdata.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  uname: any;
  constructor(private dataService: Dataservice, private http: HttpClient) {

  }
}
