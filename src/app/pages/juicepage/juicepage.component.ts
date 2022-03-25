import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JuiceService } from 'src/app/service/juice.service';
@Component({
  selector: 'app-juicepage',
  templateUrl: './juicepage.component.html',
  styleUrls: ['./juicepage.component.css']
})
export class JuicepageComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:JuiceService) { }
  getMenuId:any;
  juiceData:any;
  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');
    if(this.getMenuId)
    {
      this.juiceData=  this.service.juiceDetails.filter((value)=>{
          return value.id == this.getMenuId;
        });
        console.log(this.juiceData,'menudata>>');
        
    }
  }
  }


