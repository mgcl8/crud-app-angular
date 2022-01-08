import { Component, OnInit } from '@angular/core';
import { Format } from 'src/app/models/format.model';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  attributeOne='';
  attributeTwo='';

  item: Format = {
    firstAttribute: '',
    secondAttribute: ''
  };
  items?: Format[];

  constructor(private crud: CrudService) { }

  ngOnInit(): void {
    this.reload();
  }

  create (firstValue: string, secondValue: string) {
    this.attributeOne = firstValue;
    this.attributeTwo = secondValue;

    const singleItem = {
      firstAttribute: firstValue,
      secondAttribute: secondValue
    }
    this.crud.addItem(singleItem)
  }


  reload() {
    this.crud.readItems()
      .subscribe({
        next: data => {this.items = data},
        error: error => console.log(error),
        complete: () => console.log('loading complete!')
      })
  }

  readOne(id: string) {
    this.crud.readItem(id)
      .subscribe({
        next: data => {this.item = data},
        error: error => console.log(error),
        complete: () => console.log('item read!')
      })
  }


  update(id: string, firstValue: string, secondValue: string) {
    this.attributeOne = firstValue;
    this.attributeTwo = secondValue;

    const singleItem = {
      id: id,
      firstAttribute: firstValue,
      secondAttribute: secondValue
    }
    
    this.crud.updateItem(singleItem.id, singleItem);
  }

  delete(id: string) {
    this.crud.deleteItem(id);
  }



  // createItem(firstAttribute: string, secondAttribute: string) {
  //   this.newItem.firstAttribute = firstAttribute;
  //   this.newItem.secondAttribute = secondAttribute;
    
  //   this.create(newItem);
  // }
// create read update and delete here
}
