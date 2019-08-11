import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizComponent } from './wiz.component';

describe('WizComponent', () => {
  let component: WizComponent;
  let fixture: ComponentFixture<WizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
