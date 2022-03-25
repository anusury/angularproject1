import { Component, OnInit } from '@angular/core';
import { NonvegService } from 'src/app/service/nonveg.service';
@Component({
  selector: 'app-non-veg',
  templateUrl: './non-veg.component.html',
  styleUrls: ['./non-veg.component.css']
})
export class NonVegComponent implements OnInit {

  constructor(private service:NonvegService) { }
  nonVegData:any;
  ngOnInit(): void {
    this. nonVegData = this.service.nonVegDetails;
  }

}
