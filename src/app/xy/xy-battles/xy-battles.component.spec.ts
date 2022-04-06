import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XyBattlesComponent } from './xy-battles.component';

describe('XyBattlesComponent', () => {
  let component: XyBattlesComponent;
  let fixture: ComponentFixture<XyBattlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XyBattlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XyBattlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
