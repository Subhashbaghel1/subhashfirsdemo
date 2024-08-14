import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopnavsidebarComponent } from './topnavsidebar.component';

describe('TopnavsidebarComponent', () => {
  let component: TopnavsidebarComponent;
  let fixture: ComponentFixture<TopnavsidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopnavsidebarComponent]
    });
    fixture = TestBed.createComponent(TopnavsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
