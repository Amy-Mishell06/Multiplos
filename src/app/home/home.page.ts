import { Component } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonButton,
} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButton],
})
export class HomePage {
  constructor() { }
  nombreEstudiante: string = "Amy Díaz";
  contador2: number = 0;
  contador3: number = 0;
  contador5: number = 0;
  contador7: number = 0;
  contador10: number = 0;

  resultadoPrimos: string = '';

  aumentar2() { this.contador2 += 2; }
  aumentar3() { this.contador3 += 3; }
  aumentar5() { this.contador5 += 5; }
  aumentar7() { this.contador7 += 7; }
  aumentar10() { this.contador10 += 10; }

  disminuir2(): void {
    this.contador2 -=2;
  }

  disminuir3(): void {
    this.contador3 -=3;
  }

  disminuir5(): void {
    this.contador5 -=5;
  }

  disminuir7(): void {
    this.contador7 -=7;
  }

  disminuir10(): void {
    this.contador10 -=10;
  }

  reiniciar2(): void {
    this.contador2 = 0;
  }

  reiniciar3(): void {
    this.contador3 = 0;
  }

  reiniciar5(): void {
    this.contador5 = 0;
  }

  reiniciar7(): void {
    this.contador7 = 0;
  }

  reiniciar10(): void {
    this.contador10 = 0;
  }

  mostrarPrimos(): void {
    const primos: number[] = [];
    for (let i = 2; i <= 50; i++) {
      let esPrimo = true;
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          esPrimo = false;
          break;
        }
      }
      if (esPrimo) {
        primos.push(i);
      }
    }
    this.resultadoPrimos = primos.join(', ');
  }
}