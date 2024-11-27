import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IProduct } from '../interfaces/iproduct.interface';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private httpClient = inject(HttpClient);
  private url: string = 'http://back:3000/api/products'

  getAll(): Promise<IProduct[]> {
    return firstValueFrom(this.httpClient.get<IProduct[]>(this.url))
  }
}
