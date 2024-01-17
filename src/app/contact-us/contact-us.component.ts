import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import emailjs from '@emailjs/browser';
import { ReCaptchaV3Service, RecaptchaV3Module } from 'ng-recaptcha';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatButtonModule, RecaptchaV3Module],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent implements OnInit {
  form: FormGroup;  
  
  constructor(private router: Router, private formBuilder: FormBuilder, 
      private recaptchaV3Service: ReCaptchaV3Service) {
    this.form = this.formBuilder.group({})
  }

  ngOnInit(): void {
    this.buildForm();

    emailjs.init('t8kKPXJVIS9NM6N0O');
  }

  onSubmit() {
    this.recaptchaV3Service.execute('contactUs').subscribe((token) => {
          console.log(token);
        }, (error) => {
          console.log(error);
      });
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      firstname: this.formBuilder.control('', [Validators.required, Validators.minLength(2)]),
      lastname: this.formBuilder.control('', [Validators.required, Validators.minLength(2)]),
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      phone: this.formBuilder.control('', [Validators.minLength(10)]),
      company: this.formBuilder.control('', [Validators.minLength(2)]),
      title: this.formBuilder.control('', [Validators.minLength(2)]),
      message: this.formBuilder.control('', [Validators.required, Validators.minLength(2)]),
    });
  }

  onCancel() {
    this.router.navigate(['/']);
  }

  send() {
    const { firstname, lastname, company, title, email, phone,  message }  = this.form?.value;
    const serviceID = 'service_pjy63bp';
    const templateID = 'template_2xs4hka';
    const templateParams = {
      firstname: firstname,
      lastname: lastname, 
      company: company, 
      title: title, 
      email: email, 
      phone: phone,  
      message: message
    };
    
    emailjs.send(serviceID, templateID, templateParams)
    .then(() => {
      console.log('Email sent successfully!');
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      this.router.navigate(['/']);
    });
    this.router.navigate(['/']);
  }
}
