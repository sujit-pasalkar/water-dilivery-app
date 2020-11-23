import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './common/guards/auth.guard';
import { RegisterComponent } from './dashboard/register/register.component';

// import { SignInComponent } from '../../components/sign-in/sign-in.component';
// import { SignUpComponent } from '../../components/sign-up/sign-up.component';
// import { DashboardComponent } from '../../components/dashboard/dashboard.component';
// import { ForgotPasswordComponent } from '../../components/forgot-password/forgot-password.component';
// import { VerifyEmailComponent } from '../../components/verify-email/verify-email.component';

// import { AuthGuard } from "../../shared/guard/auth.guard";
// import { PhoneAuthComponent } from 'src/app/components/phone-auth/phone-auth.component';

const routes: Routes = [
    { path: '', redirectTo: '/phone-auth', pathMatch: 'full' },
    { path: 'phone-auth', component: AuthComponent },
    //   { path: 'sign-in', component: SignInComponent },
    { path: 'register-user', component: RegisterComponent, canActivate: [AuthGuard] },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    //   { path: 'forgot-password', component: ForgotPasswordComponent },
    //   { path: 'verify-email-address', component: VerifyEmailComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
