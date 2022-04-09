import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedactionPlanComponent } from './redaction-plan.component';

describe('RedactionPlanComponent', () => {
  let component: RedactionPlanComponent;
  let fixture: ComponentFixture<RedactionPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedactionPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedactionPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
