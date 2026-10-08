import { Component } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonButton,
} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {
  constructor() { }

  nombreEstudiante: string = 'Amy Díaz';

  contador2: number = 0;
  contador3: number = 0;
  contador5: number = 0;
  contador7: number = 0;
  contador10: number = 0;

  primos2: string = '';
  primos3: string = '';
  primos5: string = '';
  primos7: string = '';
  primos10: string = '';

  aumentar2() { this.contador2 += 2; }
  aumentar3() { this.contador3 += 3; }
  aumentar5() { this.contador5 += 5; }
  aumentar7() { this.contador7 += 7; }
  aumentar10() { this.contador10 += 10; }

  disminuir2() { this.contador2 -= 2; }
  disminuir3() { this.contador3 -= 3; }
  disminuir5() { this.contador5 -= 5; }
  disminuir7() { this.contador7 -= 7; }
  disminuir10() { this.contador10 -= 10; }

  reiniciar2() { this.contador2 = 0; }
  reiniciar3() { this.contador3 = 0; }
  reiniciar5() { this.contador5 = 0; }
  reiniciar7() { this.contador7 = 0; }
  reiniciar10() { this.contador10 = 0; }

  calcularPrimos(inicio: number): string {
    const lista: number[] = [];

    for (let i = inicio; i <= 60; i++) {
      let esPrimo = true;
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          esPrimo = false;
          break;
        }
      }
      if (esPrimo) {
        lista.push(i);
      }
    }

    return lista.join(', ');
  }

  mostrarPrimos2() { this.primos2 = this.primos2 ? '' : this.calcularPrimos(2); }
  mostrarPrimos3() { this.primos3 = this.primos3 ? '' : this.calcularPrimos(3); }
  mostrarPrimos5() { this.primos5 = this.primos5 ? '' : this.calcularPrimos(5); }
  mostrarPrimos7() { this.primos7 = this.primos7 ? '' : this.calcularPrimos(7); }
  mostrarPrimos10() { this.primos10 = this.primos10 ? '' : this.calcularPrimos(10); }
}