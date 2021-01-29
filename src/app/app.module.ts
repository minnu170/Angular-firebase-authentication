import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { LayoutModule } from './layout/layout.module';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import { AuthService } from './service/auth.service';
import { HomeComponent } from './home/home.component';
import { AuthGuard} from './service/authguard/auth.guard';
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/signup',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent},
  { path: 'email-verification', component: VerifyEmailComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
