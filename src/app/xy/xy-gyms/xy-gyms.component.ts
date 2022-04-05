import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Gym } from 'src/app/modelsG/gym';
import { LysandreBattle } from 'src/app/modelsG/lysandre-battle';
import { RivalBattle } from 'src/app/modelsG/rival-battle';

import { XyService } from '../xy.service';
import { LeagueMembers } from './../../modelsG/league-members';

@Component({
  selector: 'app-xy-gyms',
  templateUrl: './xy-gyms.component.html',
  styleUrls: ['./xy-gyms.component.scss'],
})
export class XyGymsComponent implements OnInit, OnDestroy {
  gyms$?: Observable<Gym[]>;

  leagueMembers$?: Observable<LeagueMembers[]>;

  rivalBattles$?: Observable<RivalBattle[]>;

  lysandreBattles$?: Observable<LysandreBattle[]>;

  currentScreenSize!: string;
  destroyed = new Subject<void>();

  colspan!: number;

  // Create a map to display breakpoint names for demonstration purposes.
  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  constructor(
    private xyService: XyService,
    breakpointObserver: BreakpointObserver
  ) {
    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe((result) => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.currentScreenSize =
              this.displayNameMap.get(query) ?? 'Unknown';

            switch (this.currentScreenSize) {
              case 'XSmall':
              case 'Small':
                this.colspan = 4;
                break;
              case 'Medium':
                this.colspan = 2;
                break;
              default:
                this.colspan = 1;
            }
          }
        }
      });
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  ngOnInit(): void {
    this.gyms$ = this.xyService.getGyms();
    this.leagueMembers$ = this.xyService.getLeagueMembers();
    this.rivalBattles$ = this.xyService.getRivalBattles();
    this.lysandreBattles$ = this.xyService.getLysandreBattle();
  }
}
