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

    login(userName: string, password: string): void {
        this.currentUser = {
            id: 2,
            userName: "bks",
            isAdmin: false
        };
    }

    logout(): void {
        this.currentUser = null;
    }
}