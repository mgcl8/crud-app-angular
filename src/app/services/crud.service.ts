import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Format } from '../models/format.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  api = 'localhost:3000'

  constructor(
    private http: HttpClient,
  ) { }

  createItem(item: Format) {
    const url = `${this.api}/post`
    return this.http.put<Format>(url, item)
    .subscribe(response => {
      console.log(response)
    })
  }

  readItems() {
    const url = `${this.api}/get`
    return this.http.get<Format>(url)
  }

  updateItem(item: Format){
    const url = `${this.api}/update`
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
