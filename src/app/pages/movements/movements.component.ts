import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { LanguageService } from 'src/app/services/language.service';
@Component({
    selector: 'app-movements',
    templateUrl: './movements.component.html',
    styleUrls: ['./movements.component.css'],
    standalone: false
})
export class MovementsComponent {
  constructor(private fb: FormBuilder, 
    private router: Router,
    public languageService: LanguageService) {}
  movimientos = [
    { transaccion: '---------------', fecha: 'xx/xx/xxxx', monto: '$ ---------', productos: 3 },
    { transaccion: '---------------', fecha: 'xx/xx/xxxx', monto: '$ ---------', productos: 3 },
    { transaccion: '---------------', fecha: 'xx/xx/xxxx', monto: '$ ---------', productos: 3 }
  ];
  
  goBack(): void {
    this.router.navigate(['loginUser']); 
  }
}
