import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectItemComponent } from './proyect-item.component';

describe('ProyectItemComponent', () => {
  let component: ProyectItemComponent;
  let fixture: ComponentFixture<ProyectItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProyectItemComponent]
    });
    fixture = TestBed.createComponent(ProyectItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
