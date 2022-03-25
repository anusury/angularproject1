import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VegService } from 'src/app/service/veg.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
@Component({
  selector: 'app-vegpage',
  templateUrl: './vegpage.component.html',
  styleUrls: ['./vegpage.component.css']
})
export class VegpageComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition | undefined;
  verticalPosition: MatSnackBarVerticalPosition | undefined;

  constructor(private param:ActivatedRoute,private service:VegService,private _snackBar: MatSnackBar) { }
  getMenuId:any;
  vegData:any;
  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');
    if(this.getMenuId)
    {
      this.vegData =  this.service.vegDetails.filter((value)=>{
          return value.id == this.getMenuId;
        });
        console.log(this.vegData,'menudata>>');
        
    }
  }
  openSnackBar() {
    this._snackBar.open('ORDERED Successfully!!', 'Close', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
}
  }


