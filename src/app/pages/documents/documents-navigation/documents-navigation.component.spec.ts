import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsNavigationComponent } from './documents-navigation.component';

describe('DocumentsNavigationComponent', () => {
  let component: DocumentsNavigationComponent;
  let fixture: ComponentFixture<DocumentsNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentsNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
