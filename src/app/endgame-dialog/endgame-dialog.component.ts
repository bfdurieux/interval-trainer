import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FireworksComponent} from "../fireworks/fireworks.component";
import {NgClass} from "@angular/common";
import {AppStoreService} from "../app.store.service";

@Component({
  selector: 'app-endgame-dialog',
  standalone: true,
  imports: [
    FireworksComponent,
    NgClass
  ],
  templateUrl: './endgame-dialog.component.html',
  styleUrl: './endgame-dialog.component.scss'
})
export class EndgameDialogComponent {
  @Input() playerHasWon: boolean = false;
  @Output() closeDialogEvent = new EventEmitter<void>();

  constructor(public appStore: AppStoreService) {
  }
}
