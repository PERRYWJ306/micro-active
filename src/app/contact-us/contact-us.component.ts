import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent implements OnInit {
  form: FormGroup;  
  
  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({})
  }

  ngOnInit(): void {
    this.buildForm();
  }

  send(): void {
    const { name, email, message } = this.form?.value;
    this.router.navigate(['/']);
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(2)]),
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
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
