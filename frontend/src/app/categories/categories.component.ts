import { Component } from '@angular/core';
import {AgGridAngular} from 'ag-grid-angular';
import {ColDef} from 'ag-grid-community';

@Component({
  selector: 'app-categories',
  imports: [
    AgGridAngular
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  // Define row data type
  rowData = [
    { category: 'Dairy', product: 'Milk', price: '$2.50', stock: 'In Stock' },
    { category: 'Bakery', product: 'Biscuits', price: '$1.20', stock: 'Low Stock' },
    { category: 'Household', product: 'Dishwash', price: '$3.00', stock: 'In Stock' },
    { category: 'Personal Care', product: 'Toothpaste', price: '$2.00', stock: 'Out of Stock' }
  ];
  // Define column definitions with matching field names
  columnDefs: ColDef<{ category: string; product: string; price: string; stock: string }>[] = [
    { headerName: 'Category', field: 'category' },
    { headerName: 'Product', field: 'product' },
    { headerName: 'Price', field: 'price' },
    { headerName: 'Stock', field: 'stock' },
  ];

  // Default column definition for grid
  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };
}
