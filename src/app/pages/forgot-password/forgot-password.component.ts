import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LanguageService } from 'src/app/services/language.service';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.css'],
    standalone: false
})
export class ForgotPasswordComponent {
  resetPasswordForm: FormGroup;

  constructor(private fb: FormBuilder, 
    private router: Router, 
    private snackbar: MatSnackBar,
    public languageService: LanguageService) {
    this.resetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit(): void {
    if (this.resetPasswordForm.valid) {
      const email = this.resetPasswordForm.get('email')?.value;
      this.snackbar.open('Correo envíado para restablecer su usuario', 'Cerrar', {
        duration: 3000
      });
     
    }
  }

  goBack(): void {
    this.router.navigate(['loginUser']); 
  }
}
