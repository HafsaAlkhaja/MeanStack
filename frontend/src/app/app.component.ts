import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';  
import { ReactiveFormsModule } from '@angular/forms'; 
import { AuthService } from '../auth.service'; 
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // Ensure standalone flag is true
  imports: [
    RouterModule,  
    ReactiveFormsModule, 
    CommonModule
  ]
})
export class AppComponent implements OnInit {
  title = 'your-app';
  isAuthenticated = false; 
  private authStatusSubscription: Subscription | undefined;

  constructor(private authService: AuthService) {}

  ngOnInit() {
   
    this.authStatusSubscription = this.authService.authStatus$.subscribe(
      (authStatus) => {
        this.isAuthenticated = authStatus;
      }
    );
  }

   
  logout() {
    this.authService.logout();
    
  }

 
  ngOnDestroy() {
    if (this.authStatusSubscription) {
      this.authStatusSubscription.unsubscribe();
    }
  }
}
