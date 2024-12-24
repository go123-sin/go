import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject } from '@angular/core';
import { TypingAnimationPipe } from '../../pipes/typing-animation.pipe';
import { MatIconModule } from '@angular/material/icon';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { regalos } from './regalos';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { textoBoton, textoInicial } from './texto-inicial';
import * as crypto from 'crypto-js';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    TypingAnimationPipe,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private readonly dialog = inject(MatDialog);
  textos = textoInicial.split('\n');
  textoBoton = textoBoton.split('\n');
  attempsButton = 0;
  maxAttempsButton = 8;
  attempsEnded = false;
  contrasenaValida = false;
  showDedo = false;
  moviendoR = false;
  emitterSaludoInicial = new EventEmitter<boolean>(false);
  emitterAfterButton = new EventEmitter<boolean>(false);
  emitterButtonStart = new EventEmitter<boolean>(false);
  positionX = -100; // Comienza fuera de la pantalla en X
  positionY = 50; // Posición vertical centrada
  velocityX = 5; // Velocidad inicial en el eje X
  velocityY = 5; // Velocidad inicial en el eje Y
  lastTimestamp = 0;
  regalos = regalos;
  setPosition(ref: MatButton) {
    const button = ref._elementRef.nativeElement;
    if (this.attempsButton < this.maxAttempsButton) {
      const x = Math.random() * (window.innerWidth - button.offsetWidth);
      const y = Math.random() * (window.innerHeight - button.offsetHeight);
      button.style.position = 'absolute';
      button.style.left = `${x}px`;
      button.style.top = `${y}px`;
      this.attempsButton += 1;
    } else {
      button.style.position = 'relative';
      button.style.left = `${0}px`;
      button.style.top = `${0}px`;
      button.style.margin = 'auto';
      this.attempsEnded = true;
    }
  }

  moveRegalo() {
    if (this.regalos.length) {
      this.moviendoR = true;
      setTimeout(() => {
        const image = document.querySelector('.dedito') as HTMLElement;

        // setTimeout(() => {
        //   this.moviendoR = false;
        // }, 1000);

        const moveImage = (timestamp: number) => {
          if (this.moviendoR) {
            if (!this.lastTimestamp) this.lastTimestamp = timestamp;
            const deltaTime = timestamp - this.lastTimestamp;
            this.lastTimestamp = timestamp;

            // Genera un cambio aleatorio en la dirección de movimiento sin acumularlo
            const randomFactorX = (Math.random() - 0.5) * 2.2; // Aleatorio en X
            const randomFactorY = (Math.random() - 0.5) * 2.2; // Aleatorio en Y

            // Aplica la velocidad en X y Y con las variaciones aleatorias
            this.velocityX += randomFactorX; // Cambia ligeramente la velocidad en X
            this.velocityY += randomFactorY; // Cambia ligeramente la velocidad en Y

            if (Math.abs(this.velocityX) > 11) {
              this.velocityX = this.velocityX / 1.4;
            }

            if (Math.abs(this.velocityY) > 11) {
              this.velocityY = this.velocityY / 1.4;
            }

            // Mover la imagen
            this.positionX += (this.velocityX * deltaTime) / 16.66;
            this.positionY += (this.velocityY * deltaTime) / 16.66;

            // Si la imagen se sale de los límites, la reubicamos en el lado opuesto
            if (this.positionX > window.innerWidth) {
              this.positionX = -100;
            } else if (this.positionX < -100) {
              this.positionX = window.innerWidth;
            }

            if (this.positionY > window.innerHeight) {
              this.positionY = -100;
            } else if (this.positionY < -100) {
              this.positionY = window.innerHeight;
            }

            // Actualizar las posiciones de la imagen
            if (image) {
              image.style.left = `${this.positionX}px`;
              image.style.top = `${this.positionY}px`;
              requestAnimationFrame(moveImage);
            }
          }
        };

        // Comienza la animación
        requestAnimationFrame(moveImage);
      }, 100);
    }
  }

  openRegalo() {
    const ref = this.dialog.open(DialogComponent);
    let indiceRandom = -1;
    while (!this.regalos[indiceRandom]) {
      indiceRandom = Math.floor(Math.random() * this.regalos.length);
    }
    ref.componentInstance.data = this.regalos[indiceRandom];
    ref.afterClosed().subscribe(() => {
      delete this.regalos[indiceRandom];
      this.regalos = this.regalos.filter((v) => Boolean(v));
      this.moveRegalo();
    });
  }

  validatePassword(e: any) {
    this.contrasenaValida = crypto.SHA512(e.target?.value).toString() === '21ec56c2152eec59fc2bd9019502148f69ab034b6e75444881581cdb98fe253f901fe7c14991696e52324eba398529eb10275ed44e43143825d6a40d39e2aeec';
  }
}
