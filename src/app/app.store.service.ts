import {Injectable, signal} from '@angular/core';
import {KeyValuePair} from "./types/key-value-pair";
import {Intervals} from "./types/intervals";

@Injectable({
  providedIn: 'root'
})
export class AppStoreService {
  appLanguage = signal<"EN" | "BR">('EN');
  intervalList = signal<KeyValuePair[]>(Intervals.intervalSemitones)
  indexedNotes = signal<string[]>(Intervals.indexedNotes);

  setAppLanguage(language: 'EN'|'BR') {
    this.appLanguage.set(language);
    this.intervalList.set(language === 'EN' ? Intervals.intervalSemitones : Intervals.teachersVersionBR);
    this.indexedNotes.set(language === 'EN' ? Intervals.indexedNotes : Intervals.indexedNotesBR);
  }
}
