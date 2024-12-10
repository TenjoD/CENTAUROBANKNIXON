import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Disponible para toda la aplicación
})
export class GlobalService {
  public globalVariable: string = ''; // Variable global

  constructor() {}

  setGlobalVariable(value: string) {
    this.globalVariable = value;
  }

  getGlobalVariable(): string {
    return this.globalVariable;
  }
}
