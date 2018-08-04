import { AbstractControl } from '@angular/forms';
import { debounceTime, switchMap, map, first } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { SignUpService } from './signup.service';

@Injectable({providedIn: 'root'})
export class UserNotTakenValidatorService {
    constructor(private signUpService: SignUpService) {}

    checkUSerNameTaken() {
        return (control: AbstractControl) => {
            return control
                .valueChanges
                .pipe(debounceTime(300))
                .pipe(switchMap(userName =>
                    this.signUpService.checkUserNametaken(userName)
                ))
                .pipe(map(isTaken => isTaken ? {userNameTaken: true} : null))
                .pipe(first());
        };
    }
}
