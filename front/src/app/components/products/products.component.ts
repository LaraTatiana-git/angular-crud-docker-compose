import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../interfaces/iproduct.interface';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  productsService = inject(ProductsService);
  arrProducts: IProduct[] = [];

  async ngOnInit(): Promise<void> {
    try {
      this.arrProducts = await this.productsService.getAll()
    } catch (err) {
      console.log(err)
    }
  }
}
