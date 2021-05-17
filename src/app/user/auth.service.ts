import { Injectable } from '@angular/core';

import { User } from './user';

@Injectable()
export class AuthService {
    currentUser: User | null;
    redirectUrl: string;

    constructor() {  }

    isLoggedIn(): boolean {
        return !!this.currentUser;
    }

    login(firstname: string, lastname: string, username: string, password: string): void {
        this.currentUser = {
            id: 2,
            firstname: firstname,
            lastname: lastname,
            username: username,
            password: password
        };
    }

    logout(): void {
        this.currentUser = null;
    }
}