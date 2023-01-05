import { Component } from '@angular/core';

interface City {
  name: string,
  code: string
}


@Component({
  selector: 'app-multselect',
  templateUrl: './multselect.component.html',
  styleUrls: ['./multselect.component.scss']
})


export class MultselectComponent {

  cities: City[];
  selectedCities: City[] = [];

  constructor() {
      this.cities = [
          {name: 'New York', code: 'NY'},
          {name: 'Rome', code: 'RM'},
          {name: 'London', code: 'LDN'},
          {name: 'Istanbul', code: 'IST'},
          {name: 'Paris', code: 'PRS'}
      ];
  }
}
