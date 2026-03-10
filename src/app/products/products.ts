import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { CommonModule } from '@angular/common';
import { ProductService } from '../serives/product.service';

@Component({
  selector: 'app-products',
  // standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class Products implements AfterViewInit {

  displayedColumns: string[] = ['title', 'price'];
  products: any[] = [];

  totalProducts = 0;
  pageSize = 10;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private productService: ProductService) {}

  ngAfterViewInit() {
    this.loadProducts(0, this.pageSize);
  }

  loadProducts(skip: number, limit: number) {
    this.productService.getProducts(limit, skip).subscribe(res => {
      this.products = res.products;
      this.totalProducts = res.total;
    });
  }

  onPageChange(event: PageEvent) {
    const skip = event.pageIndex * event.pageSize;
    const limit = event.pageSize;

    this.loadProducts(skip, limit);
  }
}