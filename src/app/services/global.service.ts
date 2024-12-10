import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Disponible para toda la aplicación
})
export class GlobalService {
  public globalVariable: string = ''; // Variable global

  constructor() {}

  getGlobalVariable(): string {
    return localStorage.getItem('user-status') || ''; // Retorna el estado del usuario
  }

  setGlobalVariable(value: string): void {
    localStorage.setItem('user-status', value); // Guarda el estado del usuario
  }
  
}
