import { Component } from '@angular/core';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css'],
    standalone: false
})
export class ProductsComponent {

    tarjetas = [
        {
          imagen: '../../../assets/images/blue.png',
          alt: 'Tarjeta Azul',
          titulo: 'Tarjeta Débito de Centauro Bank',
          descripcion: 'Pagos más ágiles, seguros, cómodos y sin costos adicionales.'
        },
        {
          imagen: '../../../assets/images/balck.png',
          alt: 'Tarjeta Negra',
          titulo: 'Tarjeta Black Débito de Centauro Bank',
          descripcion: 'Practicidad en el pago y exclusividad para los usuarios de Centauro Bank.'
        },
        {
          imagen: '../../../assets/images/green.png',
          alt: 'Tarjeta Verde',
          titulo: 'Tarjeta Débito de Centauro Bank con funcionalidad de Transporte',
          descripcion: 'Con la Tarjeta Débito con funcionalidad de Transporte ingresas al transporte masivo.'
        },
        {
          imagen: '../../../assets/images/gold.png',
          alt: 'Tarjeta Dorada',
          titulo: 'Tarjeta Débito de Centauro Bank',
          descripcion: 'Esta tarjeta es para los menores de edad de 13-17 años para que aprendas y ahorres.'
        },
        {
          imagen: '../../../assets/images/red.png',
          alt: 'Tarjeta Roja',
          titulo: 'Tarjeta Débito de Centauro Bank',
          descripcion: 'Pagos más ágiles, seguros, cómodos y sin costos adicionales.'
        },
        {
          imagen: '../../../assets/images/orange.png',
          alt: 'Tarjeta Naranja',
          titulo: 'Tarjeta Débito de Centauro Bank',
          descripcion: 'Pagos más ágiles, seguros, cómodos y sin costos adicionales.'
        }
      ];
    
      offset = 0; // Control de la posición inicial
      cardWidth = 250; // Ancho de cada tarjeta
      visibleCards = 5; // Cantidad de tarjetas visibles
    
      // Método para avanzar
      nextSlide() {
        const maxOffset = -(this.cardWidth * (this.tarjetas.length - this.visibleCards));
        this.offset = Math.max(this.offset - this.cardWidth, maxOffset);
      }
    
      // Método para retroceder
      prevSlide() {
        this.offset = Math.min(this.offset + this.cardWidth, 0);
      }
}
