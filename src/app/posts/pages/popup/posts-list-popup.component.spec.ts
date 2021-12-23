import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsListPopupComponent } from './posts-list-popup.component';

describe('PostsListPopupComponent', () => {
  let component: PostsListPopupComponent;
  let fixture: ComponentFixture<PostsListPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsListPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsListPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
