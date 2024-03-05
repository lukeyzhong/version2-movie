import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterThridComponent } from './register-thrid.component';

describe('RegisterThridComponent', () => {
  let component: RegisterThridComponent;
  let fixture: ComponentFixture<RegisterThridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterThridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterThridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
