import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';  // Adjust the import path as needed
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'frontend-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  errorMessage: string | null = null;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.signupForm.invalid) {
      return; 
    }

    this.loading = true;

    const { name, email, password } = this.signupForm.value;

    // Call signup 
    this.authService.signup(name, email, password).subscribe(
      (response) => {
        console.log('User signed up successfully', response);
        this.router.navigate(['/login']); 
      },
      (error) => {
        console.error('Signup failed', error);
        this.errorMessage = error.error.message || 'Signup failed! Please try again.';
      },
      () => {
        this.loading = false;
      }
    );
  }
}
