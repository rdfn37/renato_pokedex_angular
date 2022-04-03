import { LeagueMembers } from './../../modelsG/league-members';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Gym } from 'src/app/modelsG/gym';
import { XyService } from '../xy.service';
import { RivalBattle } from 'src/app/modelsG/rival-battle';

@Component({
  selector: 'app-xy-gyms',
  templateUrl: './xy-gyms.component.html',
  styleUrls: ['./xy-gyms.component.scss']
})
export class XyGymsComponent implements OnInit {

  gyms$?: Observable<Gym[]>

  leagueMembers$?: Observable<LeagueMembers[]>

  rivalBattles$?: Observable<RivalBattle[]>

  constructor(private xyService: XyService) { }

  ngOnInit(): void {
    // this.xyService.getGyms().subscribe({
    //   next: data => {
    //     this.gyms$ = data
    //     console.log(data)
    //   }
    // })

    this.gyms$ = this.xyService.getGyms()
    this.leagueMembers$ = this.xyService.getLeagueMembers()
    this.rivalBattles$ = this.xyService.getRivalBattles()
    // console.log(this.gyms$.subscribe())
    // console.log(this.gyms$)
  }

}
