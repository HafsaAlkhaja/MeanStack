import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';  // Import LoginComponent
import { SignupComponent } from './signup/signup.component';  // Import SignupComponent


export const appRoutes: Route[] = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
];