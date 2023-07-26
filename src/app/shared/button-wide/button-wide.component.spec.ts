import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWideComponent } from './button-wide.component';

describe('ButtonWideComponent', () => {
  let component: ButtonWideComponent;
  let fixture: ComponentFixture<ButtonWideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ButtonWideComponent]
    });
    fixture = TestBed.createComponent(ButtonWideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
