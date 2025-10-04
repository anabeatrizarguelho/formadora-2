import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, 
  IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
  IonButton, IonSpinner } from '@ionic/angular/standalone';

@Component({
  selector: 'app-pagina-3',
  templateUrl: './pagina-3.page.html',
  styleUrls: ['./pagina-3.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonSpinner, CommonModule, FormsModule, RouterLink, HttpClientModule]
})
export class Pagina3Page implements OnInit {

  musica: any = null;     
  carregando: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.buscarMusica();
  }

  buscarMusica() {
    this.carregando = true;

    // Busca músicas do Twenty One Pilots na API do iTunes
    const url = 'https://itunes.apple.com/search?term=twenty+one+pilots&entity=song&limit=20';

    this.http.get(url).subscribe(
      (res: any) => {
        const resultados = res.results;

        if (resultados.length > 0) {
          // Seleciona uma música aleatória
          this.musica = resultados[Math.floor(Math.random() * resultados.length)];
        } else {
          this.musica = null;
        }

        this.carregando = false;
      },
      (err) => {
        console.error('Erro ao buscar músicas:', err);
        this.carregando = false;
      }
    );
  }
}
