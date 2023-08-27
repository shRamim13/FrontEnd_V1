import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(
    private userService: UserService,
    private _snackBar: MatSnackBar
  ) {}

  public user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  };

  ngOnInit(): void {}

  formSubmit() {
    console.log(this.user);

    if (this.user.username === '' || this.user.username === null) {
      this._snackBar.open('User Name is Required !!', 'OK', { duration: 3000 });
      return;
    }
    if (this.user.password === '' || this.user.password === null) {
      this._snackBar.open('Password is Required !!', 'OK', { duration: 3000 });
      return;
    }

    if (this.user.firstName === '' || this.user.firstName === null) {
      this._snackBar.open('First Name is Required !!', 'OK', {
        duration: 3000,
      });
      return;
    }

    if (this.user.lastName === '' || this.user.lastName === null) {
      this._snackBar.open('Last Name is Required !!', 'OK', { duration: 3000 });
      return;
    }

    if (this.user.email === '' || this.user.email === null) {
      this._snackBar.open('Email Address is Required !!', 'OK', {
        duration: 3000,
      });
      return;
    } else if (!this.validateEmail(this.user.email)) {
      this._snackBar.open('Invalid Email Address !!', 'OK', {
        duration: 3000,
      });
      return;
    }

    if (this.user.phone === '' || this.user.phone === null) {
      this._snackBar.open('Mobile Number is Required !!', 'OK', {
        duration: 3000,
      });
      return;
    } else if (!this.validatePhoneNumber(this.user.phone)) {
      this._snackBar.open('Invalid Phone Number !!', 'OK', {
        duration: 3000,
      });
      return;
    }

    this.userService.addUser(this.user).subscribe(
      (data: any) => {
        console.log(data);
        this.user.username = '';
        this.user.password = '';
        this.user.firstName = '';
        this.user.lastName = '';
        this.user.email = '';
        this.user.phone = '';

        Swal.fire(
          'Successfully done !!',
          data.firstName + ' ' + data.lastName + ', User Id ' + data.id,
          'success'
        );
      },
      (error) => {
        console.log(error);
        this._snackBar.open(error.error.text, 'OK', { duration: 5000 });
      }
    );
  }

  validateEmail(email: string): boolean {
    // Regular expression pattern for Gmail address validation
    const emailPattern = /^[a-zA-Z]+([._]?[a-zA-Z0-9]+)*@gmail\.com$/;
    return emailPattern.test(email);
  }

  validatePhoneNumber(phone: string): boolean {
    // Regular expression pattern for Bangladeshi phone number validation
    const phonePattern = /^(\+?880|0)1[3456789]\d{8}$/;
    return phonePattern.test(phone);
  }

}