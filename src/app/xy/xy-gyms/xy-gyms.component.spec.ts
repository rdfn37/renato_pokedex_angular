import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XyGymsComponent } from './xy-gyms.component';

describe('XyGymsComponent', () => {
  let component: XyGymsComponent;
  let fixture: ComponentFixture<XyGymsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XyGymsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XyGymsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
