// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonButton, IonLabel } from '@ionic/angular/standalone';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.page.html',
//   styleUrls: ['./login.page.scss'],
//   standalone: true,
//   imports: [IonLabel, IonButton, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
// })
// export class LoginPage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }


// login.page.ts
import { IonicModule } from '@ionic/angular';  // Import IonicModule
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule],  // Add IonicModule here for standalone component
})
export class LoginPage {
  goToHome() {
    this.router.navigate(['/home']);
  }
  constructor(private router: Router) {}

}
