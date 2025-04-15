import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillPercentageComponent } from './skill-percentage.component';

describe('SkillPercentageComponent', () => {
  let component: SkillPercentageComponent;
  let fixture: ComponentFixture<SkillPercentageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillPercentageComponent]
    });
    fixture = TestBed.createComponent(SkillPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
