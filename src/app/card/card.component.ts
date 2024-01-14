import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Output() cardFlippedEvent: EventEmitter<void> = new EventEmitter<void>();

  cardClicked() {
    this.cardFlippedEvent.emit();
  }
}
