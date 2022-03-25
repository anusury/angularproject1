import { Component, OnInit } from '@angular/core';
import { DesertService } from 'src/app/service/desert.service';
@Component({
  selector: 'app-desert',
  templateUrl: './desert.component.html',
  styleUrls: ['./desert.component.css']
})
export class DesertComponent implements OnInit {

  constructor(private service:DesertService) { }
  desData:any;
  ngOnInit(): void {
    this.desData = this.service.desertDetails;
  }

}
