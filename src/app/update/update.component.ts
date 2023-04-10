import { Component } from '@angular/core';
import { AccService } from '../acc.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  constructor(private s1 :AccService) { }
  updatedata(updateform:{value:any;})
  {
     return this.s1.updatedata1(updateform.value).subscribe();
  }
}
