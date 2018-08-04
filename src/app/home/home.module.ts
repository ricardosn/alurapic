import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SignInComponent } from './signin/signin.component';
import { CommonModule } from '@angular/common';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { SignUpComponent } from './signup/signup.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
    declarations: [
        SignInComponent,
        SignUpComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        VMessageModule,
        RouterModule,
        HomeRoutingModule
    ]
})
export class HomeModule { }
