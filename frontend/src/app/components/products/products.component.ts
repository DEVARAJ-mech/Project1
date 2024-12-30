import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../../services/product.service';
import {AgGridAngular} from 'ag-grid-angular';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  imports: [
    AgGridAngular,
    RouterOutlet
  ],
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
