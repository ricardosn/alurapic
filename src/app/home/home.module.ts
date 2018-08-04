import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SignInComponent } from './signin/signin.component';
import { CommonModule } from '@angular/common';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './signup/signup.component';

@NgModule({
    declarations: [
        SignInComponent,
        SignUpComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        VMessageModule,
        RouterModule
    ]
})
export class HomeModule { }
