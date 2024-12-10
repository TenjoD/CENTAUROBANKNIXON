import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { TranslateService } from '@ngx-translate/core';
import { Request } from 'src/app/interfaces/request.interface';
import { User } from 'src/app/interfaces/user.interface';
import { LanguageService } from 'src/app/services/language.service';

@Component({
    selector: 'app-request-list',
    templateUrl: './request-list.component.html',
    styleUrls: ['./request-list.component.css'],
    standalone: false
})
export class RequestListComponent {
  constructor(private snackbar: MatSnackBar,
    private translate:TranslateService
  ){}

  displayedColumns: string[] = ['usuario', 'tipoDeSolicitud', 'verSolicitud', 'acciones'];
  dataSource = new MatTableDataSource<Request>([
    { usuario: 'Juan', tipoDeSolicitud: 'Tarjeta credito'},
    { usuario: 'Ana', tipoDeSolicitud: 'Cheque'},
    { usuario: 'Luis', tipoDeSolicitud: 'Tarjeta debito'},
    { usuario: 'Maria', tipoDeSolicitud: 'Tarjeta credito'},
    { usuario: 'Pedro', tipoDeSolicitud: 'Cheque'},
    { usuario: 'Laura', tipoDeSolicitud: 'Tarjeta debito'},
    { usuario: 'Carlos', tipoDeSolicitud: 'Tarjeta credito'},
    { usuario: 'Sofia', tipoDeSolicitud: 'Cheque'},
    { usuario: 'Miguel', tipoDeSolicitud: 'Tarjeta debito'},
    { usuario: 'Isabel', tipoDeSolicitud: 'Tarjeta credito'},
  ]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  actualizarSolicitud(req: Request): void {
    this.snackbar.open(this.translate.instant('SNACKBAR.UPDATE_REQUEST', { user: req.usuario }), 'Cerrar', {
      duration: 3000
    });
  }
  
  eliminarSolicitud(req: Request): void {
    const index = this.dataSource.data.indexOf(req);
    if (index >= 0) {
      this.dataSource.data.splice(index, 1);
      this.dataSource.data = [...this.dataSource.data];
      this.snackbar.open(this.translate.instant('SNACKBAR.DELETE_REQUEST', { user: req.usuario }), 'Cerrar', {
        duration: 3000
      });
    }
  }
}
