import { Component, input } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
})
export class ShoppingCartComponent {
  value = input<number>(0);
}
