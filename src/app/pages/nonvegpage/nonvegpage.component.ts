import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NonvegService } from 'src/app/service/nonveg.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-nonvegpage',
  templateUrl: './nonvegpage.component.html',
  styleUrls: ['./nonvegpage.component.css']
})
export class NonvegpageComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition | undefined;
  verticalPosition: MatSnackBarVerticalPosition | undefined;

  constructor(private param:ActivatedRoute,private service:NonvegService,private _snackBar: MatSnackBar) { }
  getMenuId:any;
  nonData:any;
  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');
    if(this.getMenuId)
    {
      this.nonData =  this.service.nonVegDetails.filter((value)=>{
          return value.id == this.getMenuId;
        });
        console.log(this.nonData,'menudata>>');
        
    }
  }
  openSnackBar() {
    this._snackBar.open('ORDERED Successfully!!', 'Close', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
}

}
