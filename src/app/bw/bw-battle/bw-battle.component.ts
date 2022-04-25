import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';

import { BwService } from '../bw.service';
import { Gyms } from '../models/gyms';

@Component({
  selector: 'app-bw-battle',
  templateUrl: './bw-battle.component.html',
  styleUrls: ['./bw-battle.component.scss'],
})
export class BwBattleComponent implements OnInit {
  gyms$?: Observable<Gyms[]>;
  league$?: Observable<Gyms[]>;

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
    private readonly bwService: BwService,
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

  ngOnInit(): void {
    console.log('hi');
    this.bwService.getGyms().subscribe({
      next: (data) => console.log(data),
    });

    this.gyms$ = this.bwService.getGyms();
    this.league$ = this.bwService.getLeague();
  }
}
