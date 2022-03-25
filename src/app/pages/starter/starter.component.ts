import { Component, OnInit } from '@angular/core';
import { StarterService } from 'src/app/service/starter.service';
@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.css']
})
export class StarterComponent implements OnInit {

  constructor(private service:StarterService) { }
starData:any;
  ngOnInit(): void {
    this.starData=this.service.starterDetails;
  }

}
