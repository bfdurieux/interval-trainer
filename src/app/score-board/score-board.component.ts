import {Component, EventEmitter, Output} from '@angular/core';
import {FireworksComponent} from "../fireworks/fireworks.component";

@Component({
  selector: 'app-score-board',
  standalone: true,
  imports: [
    FireworksComponent
  ],
  templateUrl: './score-board.component.html',
  styleUrl: './score-board.component.scss'
})
export class ScoreBoardComponent {
  currentScore: number = 0;
  @Output() hasWonEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  addPoints(points: number = 100) {
    this.currentScore += points;
    if (this.currentScore >= 1000)
      this.win();
  }

  subtractPoints(points: number = 50) {
    this.currentScore -= points;
    if (this.currentScore <= -100) {
      this.lose();
    }
  }

  win() {
    this.hasWonEvent.emit(true);
    this.currentScore = 0;
  }

  lose() {
    this.hasWonEvent.emit(false);
    this.currentScore = 0;
  }
}
