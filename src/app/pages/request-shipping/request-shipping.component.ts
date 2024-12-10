import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-request-shipping',
  templateUrl: './request-shipping.component.html',
  styleUrl: './request-shipping.component.css',
  standalone: false
})
export class RequestShippingComponent {
  
  solicitudForm: FormGroup;

  constructor(private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private translate: TranslateService

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

  onSubmit() {
    if (this.solicitudForm.valid) {
      const successMessage = this.translate.instant('FORM_SUBMIT_SUCCESS');
      const closeButton = this.translate.instant('CLOSE');
      
      this.snackbar.open(successMessage, closeButton, {
        duration: 3000
      });
    }
  }
  onCancel() {
    this.solicitudForm.reset();
  }
}
