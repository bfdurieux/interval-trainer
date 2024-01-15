import {Component, Input, signal} from '@angular/core';
import {AppStoreService} from "../app.store.service";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-reference-table-dialog',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './reference-table-dialog.component.html',
  styleUrl: './reference-table-dialog.component.scss'
})
export class ReferenceTableDialog {
  @Input() showDialog = signal<boolean | null>(false);

  constructor(public appStore: AppStoreService) {
  }
}
