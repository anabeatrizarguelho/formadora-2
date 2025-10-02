import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonHeader, IonFooter, IonToolbar, IonTitle, IonContent, IonButton, IonCard} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonFooter, IonToolbar, IonTitle, IonContent, IonButton, IonCard, RouterLink],
})
export class HomePage {
  constructor() {}
}
