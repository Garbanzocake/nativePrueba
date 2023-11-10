import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  templateUrl: './register-page.component.html',
  styleUrls: ['../../css/styles.css'],
})
export class RegisterPageComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  public myForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    firstName: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[a-zA-Z ]*'),
      ],
    ],
    lastName: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[a-zA-Z ]*'),
      ],
    ],
  });

  register() {
    const { email, password, firstName, lastName } = this.myForm.value;
    const newUser = {
      email,
      password,
      firstName,
      lastName,
    };

    this.authService.register(newUser).subscribe({
      next: () => {
        Swal.fire('Success','Account Created','success');
        this.router.navigateByUrl('/home/bookings')

        },
      error: (message) => {
        Swal.fire('Error', message, 'error');
      },
    });
  }
}
