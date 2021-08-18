import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialpadHistoryComponent } from './dialpad-history.component';

describe('DialpadHistoryComponent', () => {
  let component: DialpadHistoryComponent;
  let fixture: ComponentFixture<DialpadHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialpadHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialpadHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
