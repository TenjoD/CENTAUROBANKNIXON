import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
    selector: 'app-request-products',
    templateUrl: './request-products.component.html',
    styleUrls: ['./request-products.component.css'],
    standalone: false
})
export class RequestProductsComponent {
  solicitudForm: FormGroup;

  constructor(private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private translate:TranslateService

  )
   {
    this.solicitudForm = this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      validacionCorreo: ['', [Validators.required, Validators.email]],
      fechaNacimiento: ['', Validators.required],
      tipoDocumento: ['', Validators.required],
      numeroDocumento: ['', Validators.required],
      fechaExpedicion: ['', Validators.required],
      telefono: ['', Validators.required],
      celular: ['', Validators.required],
      adjuntoId: [null, Validators.required],
      adjuntoEconomico: [null],
    });
  }

  onSubmit(): void {
    if (this.solicitudForm.valid) {
      this.snackbar.open(this.translate.instant('SNACKBAR.FORM_SUBMITTED'), 'Cerrar', {
        duration: 3000
      });
    }
  }

  onCancel() {
    this.solicitudForm.reset();
  }
}
