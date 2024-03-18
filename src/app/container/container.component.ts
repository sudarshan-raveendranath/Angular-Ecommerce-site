import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  /*name="John Doe";
  addToCart:number = 0;
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
  onNameChange(event: any) {
    //this.name = event.target.value;
  }
  decrementCartValue() {
    if(this.addToCart > 0) {
      this.addToCart--;
    }
    
  }
  incrementCartValue() {
    if(this.addToCart < this.product.inStock) {
      this.addToCart++;
    }
  }*/
  listOfString: string[] = ['Mark','Steve','Merry','John','Sarah'];

}
