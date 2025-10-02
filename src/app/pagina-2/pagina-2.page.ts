import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonCard, IonCardContent, IonItemDivider, IonItemGroup, IonAvatar, IonItemOption,IonItemOptions, IonLabel, IonItemSliding, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-pagina-2',
  templateUrl: './pagina-2.page.html',
  styleUrls: ['./pagina-2.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonCard, IonCardContent, IonItemDivider, IonItemGroup, IonItemOption,
  IonItemOptions, IonLabel, CommonModule, IonItemSliding, FormsModule, IonAvatar, IonButton, RouterLink]
})
export class Pagina2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
