import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosPopupComponent } from './todos-popup.component';

describe('TodosPopupComponent', () => {
  let component: TodosPopupComponent;
  let fixture: ComponentFixture<TodosPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
