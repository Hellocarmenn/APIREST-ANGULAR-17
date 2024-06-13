import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  API_URL:string ='https://dummyjson.com/products';
  constructor(private httpClient :HttpClient) { }

  getProducts():Observable <any > {
    return this.httpClient.get (this.API_URL).pipe(res => res);
  }


}
