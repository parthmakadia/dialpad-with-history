import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialpadDisplayComponent } from './dialpad-display.component';

describe('DialpadDisplayComponent', () => {
  let component: DialpadDisplayComponent;
  let fixture: ComponentFixture<DialpadDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialpadDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialpadDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
