import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPlanerComponent } from './post-planer.component';

describe('PostPlanerComponent', () => {
  let component: PostPlanerComponent;
  let fixture: ComponentFixture<PostPlanerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostPlanerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPlanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
