import { Injectable } from '@angular/core';
import {BehaviorSubject, interval} from "rxjs";
import {KeyValuePair} from "./types/key-value-pair";
import {Intervals} from "./types/intervals";

@Injectable({
  providedIn: 'root'
})
export class AppStoreService {
  appLanguage: BehaviorSubject<'EN'|'BR'> = new BehaviorSubject<"EN" | "BR">('EN');
  intervalList: BehaviorSubject<KeyValuePair[]> = new BehaviorSubject<KeyValuePair[]>(Intervals.intervalSemitones)
  indexedNotes: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(Intervals.indexedNotes);

  setAppLanguage(language: 'EN'|'BR') {
    this.appLanguage.next(language);
    this.intervalList.next(language === 'EN' ? Intervals.intervalSemitones : Intervals.teachersVersionBR);
    this.indexedNotes.next(language === 'EN' ? Intervals.indexedNotes : Intervals.indexedNotesBR);
  }
}
