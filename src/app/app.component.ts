// import { Component } from '@angular/core';
// import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

// @Component({
//   selector: 'app-root',
//   templateUrl: 'app.component.html',
//   imports: [IonApp, IonRouterOutlet],
// })
// export class AppComponent {
//   constructor() {}
// }
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Common module for basic Angular features
import { IonicModule } from '@ionic/angular'; // Ionic support

@Component({
  selector: 'app-root',
  standalone: true,  // Marking this as a standalone component
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [CommonModule, IonicModule], // Import required modules here
})
export class AppComponent {}
