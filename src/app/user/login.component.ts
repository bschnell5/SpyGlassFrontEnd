import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    errorMessage: string;
    pageTitle = 'Log In';
    userName = "bks";

    constructor(private authService: AuthService,
                private router: Router) {
    }

    cancel(): void {
        this.router.navigate(['']);
    }

    login(loginForm: NgForm): void {
        if (loginForm && loginForm.valid) {
            const userName = "bks";
            const password = loginForm.form.value.password;
            this.authService.login(userName, password);

            if (this.authService.redirectUrl) {
                this.router.navigateByUrl(this.authService.redirectUrl);
            } else {
                this.router.navigate(['/']);
            }
        } else {
            this.errorMessage = 'Please enter a valid user name and password.';
        }
    }
}
