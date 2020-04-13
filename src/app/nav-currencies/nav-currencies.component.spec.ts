import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCurrenciesComponent } from './nav-currencies.component';

describe('NavCurrenciesComponent', () => {
  let component: NavCurrenciesComponent;
  let fixture: ComponentFixture<NavCurrenciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavCurrenciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavCurrenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
