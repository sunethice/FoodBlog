import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderbottomComponent } from './headerbottom.component';

describe('HeaderbottomComponent', () => {
  let component: HeaderbottomComponent;
  let fixture: ComponentFixture<HeaderbottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderbottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderbottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
