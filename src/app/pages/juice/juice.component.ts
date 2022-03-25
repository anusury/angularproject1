import { Component, OnInit } from '@angular/core';
import { JuiceService } from 'src/app/service/juice.service';
@Component({
  selector: 'app-juice',
  templateUrl: './juice.component.html',
  styleUrls: ['./juice.component.css']
})
export class JuiceComponent implements OnInit {

  constructor(private service:JuiceService) { }
  jusData:any;
  ngOnInit(): void {
    this.jusData = this.service.juiceDetails;
  }

}
