import { Component,OnInit } from '@angular/core';
import { Base } from '../base.model';
@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit
 {

  
  title='HOME';
  countryData: any[] = ['India', 'US', 'UK'];

  model: Base = {
    address: '',
    city: '',
    state:'',
    postcode: '',
    country:+91,
    aggrement: false
  };

  constructor() { }

  ngOnInit() {
  }

  onFormSubmit() {
    console.log("Full Address", this.model);  
  }
}
  

