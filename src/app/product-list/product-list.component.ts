import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  name="JohnDoe";
  product = {
    name: 'Phone X',
    price: 789,
    color: 'Black',
    discount: 8.5,
    inStock: 5,
    pImage: '../../assets/images/iphonex (1).png'
  }

  getDiscountedPrice() {
    return this.product.price - (this.product.price * this.product.discount / 100)
  }

}
