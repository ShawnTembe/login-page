import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LoadSpinnerComponent } from './load-spinner.component';

describe('LoadSpinnerComponent', () => {
  let component: LoadSpinnerComponent;
  let fixture: ComponentFixture<LoadSpinnerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
