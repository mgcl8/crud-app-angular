import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Format } from '../models/format.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  api = 'localhost:3000';
  private items: Format[] = [];

  constructor(
    private http: HttpClient,
  ) { }

  addItem(item: Format) {
    this.items.push(item);
    const url = `${this.api}/post`
    return this.http.put<Format>(url, this.items)
    .subscribe(response => {
      console.log(response)
    })
  }

  readItems(): Observable<Format[]> {
    const url = `${this.api}/get`
    return this.http.get<Format[]>(url)
  }

  readItem(id: number): Observable<Format> {
    const url = `${this.api}/${id}`;
    return this.http.get<Format>(url);
  }

  updateItem(id: number, item: Format){
    const url = `${this.api}/${id}`;
    return this.http.put<Format>(url, item)
    .subscribe(response => {
      console.log(response)
    })

  }

  deleteItem(id: number): Observable<unknown> {
    const url = `${this.api}/delete/${id}`
    return this.http.delete(url)
  }
  
  
}
