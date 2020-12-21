import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private readonly URL = 'http://localhost:5000/getitems';

  constructor( private http:HttpClient) {

   }

   getItem(){
       return this.http.get(this.URL);
   }

}
