import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
    selector: 'app-manage-products',
    templateUrl: './manage-products.component.html',
    styleUrls: ['./manage-products.component.css'],
    standalone: false
})
export class ManageProductsComponent {
  productForm: FormGroup;
  selectedProcess: string = 'Crear';

  constructor(private fb: FormBuilder,
    private translate : TranslateService
  ) {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      description: ['', Validators.required],
      advantages: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.selectedProcess === 'Crear') {
      console.log(this.translate.instant('LOG.PRODUCT_CREATED'), this.productForm.value);
    }
  }
  
  editProduct() {
    console.log(this.translate.instant('LOG.EDIT_PRODUCT'), this.productForm.value);
  }
  
  deleteProduct() {
    console.log(this.translate.instant('LOG.PRODUCT_DELETED'));
  }
  
  cancel() {
    this.productForm.reset();
    console.log(this.translate.instant('LOG.CANCEL_ACTION'));
  }
  
  onFileSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      console.log(this.translate.instant('LOG.FILE_SELECTED'), input.files[0]);
    }
  }
  
}
