import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonAccordion } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonAccordion, IonButton, IonHeader, IonToolbar, IonTitle, IonContent,RouterModule ],
})
export class HomePage {
goToAbout() {
  this.router.navigate(['/home']);
  }
  constructor(private router: Router) {}
}
