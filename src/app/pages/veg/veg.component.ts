import { Component, OnInit } from '@angular/core';
import { VegService } from 'src/app/service/veg.service';
@Component({
  selector: 'app-veg',
  templateUrl: './veg.component.html',
  styleUrls: ['./veg.component.css']
})
export class VegComponent implements OnInit {

  constructor(private service:VegService) { }
  vegData:any;
  ngOnInit(): void {
    this.vegData = this.service.vegDetails;
  }

}
