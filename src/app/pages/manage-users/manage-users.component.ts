import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { LanguageService } from 'src/app/services/language.service';

@Component({
    selector: 'app-manage-users',
    templateUrl: './manage-users.component.html',
    styleUrls: ['./manage-users.component.css'],
    standalone: false
})
export class ManageUsersComponent {

  constructor(private snackbar: MatSnackBar,
    public languageService: LanguageService
  ){}

  displayedColumns: string[] = ['nombre', 'apellido', 'cedula', 'correo', 'acciones'];
  dataSource = new MatTableDataSource<User>([
    { nombre: 'Juan', apellido: 'Pérez', cedula: '123456789', correo: 'juan.perez@example.com' },
    { nombre: 'Ana', apellido: 'García', cedula: '987654321', correo: 'ana.garcia@example.com' },
    { nombre: 'Luis', apellido: 'Martínez', cedula: '456123789', correo: 'luis.martinez@example.com' },
    { nombre: 'María', apellido: 'Fernández', cedula: '321654987', correo: 'maria.fernandez@example.com' },
    { nombre: 'Pedro', apellido: 'López', cedula: '654987321', correo: 'pedro.lopez@example.com' },
    { nombre: 'Laura', apellido: 'Hernández', cedula: '159753468', correo: 'laura.hernandez@example.com' },
    { nombre: 'Carlos', apellido: 'Torres', cedula: '753951846', correo: 'carlos.torres@example.com' },
    { nombre: 'Sofía', apellido: 'Rojas', cedula: '951357468', correo: 'sofia.rojas@example.com' },
    { nombre: 'Miguel', apellido: 'Ramírez', cedula: '753468951', correo: 'miguel.ramirez@example.com' },
    { nombre: 'Isabel', apellido: 'Morales', cedula: '951468753', correo: 'isabel.morales@example.com' },
  ]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  actualizarUsuario(usuario: User): void {
    this.snackbar.open(`Actualizar usuario: ${usuario.nombre} ${usuario.apellido}`, 'Cerrar', {
      duration: 3000
    })
  }

  eliminarUsuario(usuario: User): void {
    const index = this.dataSource.data.indexOf(usuario);
    if (index >= 0) {
      this.dataSource.data.splice(index, 1);
      this.dataSource.data = [...this.dataSource.data];
      this.snackbar.open(`Usuario eliminado: ${usuario.nombre} ${usuario.apellido}`, 'Cerrar', {
        duration: 3000
      })
    }
  }
}
