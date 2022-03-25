import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarterService } from 'src/app/service/starter.service';
@Component({
  selector: 'app-starterpage',
  templateUrl: './starterpage.component.html',
  styleUrls: ['./starterpage.component.css']
})
export class StarterpageComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:StarterService) { }
  getMenuId:any;
  starterData:any;
  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');
    if(this.getMenuId)
    {
      this.starterData=  this.service.starterDetails.filter((value)=>{
          return value.id == this.getMenuId;
        });
        console.log(this.starterData,'menudata>>');
        
    }
  }

}
