import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LanguageService } from 'src/app/services/language.service';
@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    standalone: false
})
export class RegisterComponent {
  registroForm: FormGroup;

  constructor(private fb: FormBuilder, 
    private router: Router,
    private snackbar: MatSnackBar,
    public languageService: LanguageService) {
    this.registroForm = this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      documento: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.registroForm.valid) {
      this.snackbar.open('Usuario Registrado', 'Cerrar', {
        duration: 3000
      })
    } else {
      alert('Por favor complete todos los campos correctamente.');
    }
  }

  goBack(): void {
    this.router.navigate(['loginUser']); 
  }
}
