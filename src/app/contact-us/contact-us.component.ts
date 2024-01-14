import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent implements OnInit {
  form: FormGroup;  
  
  constructor(private router: Router, private formBuilder: FormBuilder, private emailService: EmailService) {
    this.form = this.formBuilder.group({})
  }

  ngOnInit(): void {
    this.buildForm();
  }

  send(): void {
    const { firstname, lastname, company, title, message } = this.form?.value;
//    this.router.navigate(['/']);
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

  onSubmit() {
    this.router.navigate(['/']);
  }
}
