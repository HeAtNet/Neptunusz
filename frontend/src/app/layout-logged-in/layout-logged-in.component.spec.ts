import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutLoggedInComponent } from './layout-logged-in.component';

describe('LayoutLoggedInComponent', () => {
  let component: LayoutLoggedInComponent;
  let fixture: ComponentFixture<LayoutLoggedInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutLoggedInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutLoggedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
