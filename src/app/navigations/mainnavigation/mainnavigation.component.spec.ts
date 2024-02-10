import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainnavigationComponent } from './mainnavigation.component';

describe('MainnavigationComponent', () => {
  let component: MainnavigationComponent;
  let fixture: ComponentFixture<MainnavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainnavigationComponent]
    });
    fixture = TestBed.createComponent(MainnavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
