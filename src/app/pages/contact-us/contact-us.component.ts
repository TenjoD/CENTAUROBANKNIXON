import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.css'],
    standalone: false
})
export class ContactUsComponent {
    constructor(public languageService: LanguageService){}
}
