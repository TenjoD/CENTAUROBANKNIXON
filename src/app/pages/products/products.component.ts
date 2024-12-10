import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css'],
    standalone: false
})
export class ProductsComponent {
  constructor(private translate: TranslateService) {}

  tarjetas = [
    {
      imagen: '../../../assets/images/blue.png',
      alt: this.translate.instant('TARJETA_AZUL'),
      titulo: this.translate.instant('TARJETA_AZUL'),
      descripcion: this.translate.instant('PAGOS_AGILES')
    },
    {
      imagen: '../../../assets/images/balck.png',
      alt: this.translate.instant('TARJETA_NEGRA'),
      titulo: this.translate.instant('TARJETA_NEGRA'),
      descripcion: this.translate.instant('PRAC_EXCLUSIVA')
    },
    {
      imagen: '../../../assets/images/green.png',
      alt: this.translate.instant('TARJETA_VERDE'),
      titulo: this.translate.instant('TARJETA_VERDE'),
      descripcion: this.translate.instant('FUNCIONALIDAD_TRANSPORTE')
    },
    {
      imagen: '../../../assets/images/gold.png',
      alt: this.translate.instant('TARJETA_DORADA'),
      titulo: this.translate.instant('TARJETA_DORADA'),
      descripcion: this.translate.instant('MENOR_EDAD')
    },
    {
      imagen: '../../../assets/images/red.png',
      alt: this.translate.instant('TARJETA_ROJA'),
      titulo: this.translate.instant('TARJETA_ROJA'),
      descripcion: this.translate.instant('PAGOS_AGILES')
    },
    {
      imagen: '../../../assets/images/orange.png',
      alt: this.translate.instant('TARJETA_NARANJA'),
      titulo: this.translate.instant('TARJETA_NARANJA'),
      descripcion: this.translate.instant('PAGOS_AGILES')
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

      showRequest() {
        const alertMessage = this.translate.instant('ALERT_IN_REQUEST');
        alert(alertMessage);
      }
}
