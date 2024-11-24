import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),  // Add the routing setup here
    ReactiveFormsModule
  ],
  providers:[AuthService]
})
export class AppModule {}
