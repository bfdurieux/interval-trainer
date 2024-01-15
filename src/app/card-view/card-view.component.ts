import {Component, ViewChild, WritableSignal, signal} from '@angular/core';
import {CardComponent} from "../card/card.component";
import {AppStoreService} from "../app.store.service";
import {FormsModule} from "@angular/forms";
import {NgClass} from "@angular/common";
import {KeyValuePair} from "../types/key-value-pair";
import {ReferenceTableDialog} from "../reference-table/reference-table-dialog.component";
import {ScoreBoardComponent} from "../score-board/score-board.component";
import {EndgameDialogComponent} from "../endgame-dialog/endgame-dialog.component";

@Component({
  selector: 'app-card-view',
  standalone: true,
  imports: [
    CardComponent,
    FormsModule,
    NgClass,
    ReferenceTableDialog,
    ScoreBoardComponent,
    EndgameDialogComponent
  ],
  templateUrl: './card-view.component.html',
  styleUrl: './card-view.component.scss'
})
export class CardViewComponent {
  fromNote: string = 'C';
  toNote: string = 'C';
  showResult: boolean = false;
  result: string = '';
  isAnswerCorrect: boolean = false;
  answer: KeyValuePair | null = null;
  selectedLanguage: "EN" | "BR" = "EN";

  @ViewChild(CardComponent) cardComponent?: CardComponent;
  @ViewChild(ScoreBoardComponent) scoreBoardComponent?: ScoreBoardComponent;

  showDialog: WritableSignal<boolean> = signal(false);
  playerHasWon: WritableSignal<boolean> = signal(false);
  showEndgameDialog: boolean = false;

  constructor(public appStore: AppStoreService) {
  }

  ngOnInit() {
    this.randomizeNotes();
  }

  onSubmitClicked($event: MouseEvent) {
    $event.stopPropagation();
    this.calculateResult();
    this.isAnswerCorrect
      ? this.scoreBoardComponent?.addPoints()
      : this.scoreBoardComponent?.subtractPoints();
    if (this.showEndgameDialog)
        return;
    this.showResult = true;
    this.answer = null;
  }

  private calculateResult() {
    const distance = this.findNoteDistance(this.fromNote, this.toNote);
    const result = this.appStore.intervalList().find(x => x.value === distance);
    const answerValue = this.answer?.value;
    this.result = result?.key ?? '';
    this.isAnswerCorrect = answerValue === result?.value;
  }

  findNoteDistance(fromNote: string, toNote: string): number {
    const fromNoteIndex = this.appStore.indexedNotes().findIndex(x => x === fromNote);
    const toNoteIndex = this.appStore.indexedNotes().findIndex(x => x === toNote);
    let distance = 0;
    if (fromNoteIndex === toNoteIndex)
      return 0;

    for (let i = fromNoteIndex; true; i++) {
      if (i === this.appStore.indexedNotes().length)
        i = 0;

      if (this.appStore.indexedNotes()[i] == this.appStore.indexedNotes()[toNoteIndex])
        return distance;

      distance++;
    }
  }

  onCardClicked() {
    this.randomizeNotes();
    this.showResult = false;
  }

  private randomizeNotes() {
    this.fromNote = this.getRandomNote();
    this.toNote = this.getRandomNote();
  }

  getRandomNote() {
    return this.appStore.indexedNotes()[Math.floor(Math.random() * this.appStore.indexedNotes().length)];
  }

  onLanguageChange() {
    this.appStore.setAppLanguage(this.selectedLanguage);
    this.onCardClicked();
  }

  toggleReferenceTable() {
    this.showDialog.set(!this.showDialog());
  }

  onHasWonEvent(hasWon: boolean) {
    debugger
    this.playerHasWon.set(hasWon);
    this.onCardClicked();
    this.showEndgameDialog = true;
  }
}
