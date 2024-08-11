import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  loading = false;
  emailError: string | null = null;
  passwordError: string | null = null;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registrationForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password_confirmation: ['', Validators.required],
      agreeToTerms: [false, Validators.requiredTrue]
    }, { validator: this.passwordMatchValidator });
  }

  ngOnInit(): void {}

  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const passwordConfirmation = group.get('password_confirmation')?.value;
    return password === passwordConfirmation ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.registrationForm.invalid) {
      // Mark all fields as touched to show validation messages
      this.registrationForm.markAllAsTouched();
      return;
    }

    this.loading = true;

    // Simulate form submission
    setTimeout(() => {
      this.loading = false;
      // Handle successful registration (e.g., navigate to login page)
      this.router.navigate(['/login']);
    }, 2000);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

}
