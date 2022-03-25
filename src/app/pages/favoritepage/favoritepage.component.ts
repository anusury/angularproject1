import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/service/order-details.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-favoritepage',
  templateUrl: './favoritepage.component.html',
  styleUrls: ['./favoritepage.component.css']
})
export class FavoritepageComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:OrderDetailsService) { }
  getMenuId:any;
  favData:any;
  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');
    if(this.getMenuId){
      this. favData =  this.service.foodDetails.filter((value)=>{
        return value.id == this.getMenuId;
        });
        console.log(this.favData,'menudata>>');
      }
    }
  }


