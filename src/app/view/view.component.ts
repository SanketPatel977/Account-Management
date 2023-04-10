import { Component ,OnInit} from '@angular/core';
import { AccService } from '../acc.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit
 {
  data:any;
  constructor(private s1:AccService) { }

  ngOnInit(): void {
    let response = this.s1.viewdata1();
  
    response.subscribe((data1)=>this.data=data1);
}
}