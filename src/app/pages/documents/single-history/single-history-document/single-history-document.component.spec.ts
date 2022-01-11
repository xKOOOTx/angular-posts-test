import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleHistoryDocumentComponent } from './single-history-document.component';

describe('SingleHistoryDocumentComponent', () => {
  let component: SingleHistoryDocumentComponent;
  let fixture: ComponentFixture<SingleHistoryDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleHistoryDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleHistoryDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
