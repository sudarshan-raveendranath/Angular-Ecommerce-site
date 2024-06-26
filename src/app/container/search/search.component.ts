import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText: string = ''

  //1 create an event
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  
  /*onSearchTextChanged() {
    this.searchTextChanged.emit(this.searchText);
  }*/

  updateSearchText(inputElement: HTMLInputElement) {
    //this.searchText = event.target.value;
    this.searchText = inputElement.value;
    this.searchTextChanged.emit(this.searchText);
  }
  

}

