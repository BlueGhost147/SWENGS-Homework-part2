import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogData} from "../stocklevellist/stocklevellist.component";
import {ProductService} from "../service/product.service";

@Component({
  selector: 'app-stockleveldialog',
  templateUrl: './stockleveldialog.component.html',
  styleUrls: ['./stockleveldialog.component.scss']
})
export class StockleveldialogComponent implements OnInit {

  warehouseOptions;

  constructor(
    public dialogRef: MatDialogRef<StockleveldialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, public productService: ProductService
    ) {
    this.warehouseOptions = data.warehouseOptions;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveStock()
  {
    this.productService.updateStocklevel(this.data.stocklevel)
      .subscribe(() => console.log("Updated stock level"));
  }


  ngOnInit(): void {

  }

}
