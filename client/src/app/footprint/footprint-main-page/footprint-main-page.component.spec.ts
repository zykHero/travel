import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootprintMainPageComponent } from './footprint-main-page.component';

describe('FootprintMainPageComponent', () => {
  let component: FootprintMainPageComponent;
  let fixture: ComponentFixture<FootprintMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootprintMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootprintMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
