import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  musicWidth = 50;
  dragging = false;

  // Porcentaje de revelado de programación
  get programReveal(): number {
    return Math.max(0, Math.min(100, (50 - this.musicWidth) * 2));
  }

  // Porcentaje de revelado de música
  get musicReveal(): number {
    return Math.max(0, Math.min(100, (this.musicWidth - 50) * 2));
  }

  // Iniciar el movimiento del slider
  startDragging(event: PointerEvent): void {
    this.dragging = true;
    event.preventDefault();
  }

  // Actualizar la posición mientras arrastras
  @HostListener('document:pointermove', ['$event'])
  onPointerMove(event: PointerEvent): void {
    if (!this.dragging) {
      return;
    }

    const hero = document.querySelector('.split-hero');

    if (!(hero instanceof HTMLElement)) {
      return;
    }

    const rect = hero.getBoundingClientRect();

    if (rect.width === 0) {
      return;
    }

    const position =
      ((event.clientX - rect.left) / rect.width) * 100;

    this.musicWidth = Math.max(0, Math.min(100, position));
  }

  // Detener el movimiento al soltar el ratón
  @HostListener('document:pointerup')
  stopDragging(): void {
    this.dragging = false;
  }

  @HostListener('document:pointercancel')
  cancelDragging(): void {
    this.dragging = false;
  }

  // Mover el slider con las flechas del teclado
  moveSlider(amount: number): void {
    this.musicWidth = Math.max(
      0,
      Math.min(100, this.musicWidth + amount)
    );
  }
}