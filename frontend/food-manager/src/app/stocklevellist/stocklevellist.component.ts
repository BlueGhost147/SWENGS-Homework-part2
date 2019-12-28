import {Component, Inject, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserService} from "../service/user.service";
import {ProductService} from "../service/product.service";
import {MatDialog} from "@angular/material/dialog";
import {StockleveldialogComponent} from "../stockleveldialog/stockleveldialog.component";
import {ActivatedRoute} from "@angular/router";

export interface DialogData {
  warehouseOptions,
  stocklevel
}

@Component({
  selector: 'app-stocklevellist',
  templateUrl: './stocklevellist.component.html',
  styleUrls: ['./stocklevellist.component.scss']
})
export class StocklevellistComponent implements OnInit {

  stocklevel: any[];
  warehouseOptions;

  displayedColumns = ['warehouse_display', 'amount', 'id'];
  @Input() product_id: number;

  constructor(private http: HttpClient, private productService: ProductService, public userService: UserService,
              public dialog: MatDialog, private route: ActivatedRoute,) {
  }

  ngOnInit() {

    const data = this.route.snapshot.data;
    this.warehouseOptions = data.warehouseOptions;

    this.productService.getStockLevel(this.product_id)
      .subscribe((response: any[]) => {
        this.stocklevel = response;
      });
  }

  deleteStocklevel(stocklevel) {
    this.productService.deleteStocklevel(stocklevel)
      .subscribe(() => this.ngOnInit());
  }

  openStockLevelDialog(stocklevel) {
    const dialogRef = this.dialog.open(StockleveldialogComponent, {
      width: '250px',
      data: {warehouseOptions: this.warehouseOptions, stocklevel: stocklevel}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  createStockLevelDialog() {
    const newStockLevel = {product: this.product_id};
    this.openStockLevelDialog(newStockLevel);
  }
}
