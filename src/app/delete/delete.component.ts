import { Component } from '@angular/core';
import { AccService } from '../acc.service';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  title='delete';
  constructor(private s1:AccService) { }
  deletedata(deleteform:{value:any;})
  {
     return this.s1.deletedata1(deleteform.value).subscribe();
  }
}
