import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedsidecustomComponent } from './fixedsidecustom.component';

describe('FixedsidecustomComponent', () => {
  let component: FixedsidecustomComponent;
  let fixture: ComponentFixture<FixedsidecustomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FixedsidecustomComponent]
    });
    fixture = TestBed.createComponent(FixedsidecustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
