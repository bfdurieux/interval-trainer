import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceTableDialog } from './reference-table-dialog.component';

describe('ReferenceTableComponent', () => {
  let component: ReferenceTableDialog;
  let fixture: ComponentFixture<ReferenceTableDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferenceTableDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferenceTableDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
