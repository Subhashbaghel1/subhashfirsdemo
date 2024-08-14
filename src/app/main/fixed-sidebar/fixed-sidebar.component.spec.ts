import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedSidebarComponent } from './fixed-sidebar.component';

describe('FixedSidebarComponent', () => {
  let component: FixedSidebarComponent;
  let fixture: ComponentFixture<FixedSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FixedSidebarComponent]
    });
    fixture = TestBed.createComponent(FixedSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
