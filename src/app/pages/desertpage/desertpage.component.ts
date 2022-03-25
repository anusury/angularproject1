import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DesertService } from 'src/app/service/desert.service';
@Component({
  selector: 'app-desertpage',
  templateUrl: './desertpage.component.html',
  styleUrls: ['./desertpage.component.css']
})
export class DesertpageComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:DesertService) { }
  getMenuId:any;
  desertData:any;
  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');
    if(this.getMenuId)
    {
      this.desertData =  this.service.desertDetails.filter((value)=>{
          return value.id == this.getMenuId;
        });
        console.log(this.desertData,'menudata>>');
        
    }
  }
  }


