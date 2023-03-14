import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Dataservice {
  apiEndpoint = 'http://localhost/work02/foods';
  constructor() { }
}
