import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BwBattleComponent } from './bw-battle.component';

describe('BwBattleComponent', () => {
  let component: BwBattleComponent;
  let fixture: ComponentFixture<BwBattleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BwBattleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BwBattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
