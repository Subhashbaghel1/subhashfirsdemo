import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenalelementComponent } from './gerenalelement.component';

describe('GerenalelementComponent', () => {
  let component: GerenalelementComponent;
  let fixture: ComponentFixture<GerenalelementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerenalelementComponent]
    });
    fixture = TestBed.createComponent(GerenalelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
