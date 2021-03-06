import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from '../../../../node_modules/rxjs/operators';

import { UserService } from '../user/user.service';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private userService: UserService) { }

  authenticate(userName: string, password: string) {
    return this.http
      .post(API_URL + '/user/login/', {userName, password}, {observe: 'response'}) // 3º param - expor os headers na resposta
      .pipe(tap(res => {
        const authToken = res.headers.get('x-access-token');
        this.userService.setToken(authToken);
        console.log(`user ${userName} autenticado com token ${authToken}`);
      }));
  }
}
