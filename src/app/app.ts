import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { Products } from './products/products';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatPaginatorModule,
    HttpClientModule,Products],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app');
}