import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Gym } from 'src/app/modelsG/gym';
import { XyService } from '../xy.service';

@Component({
  selector: 'app-xy-gyms',
  templateUrl: './xy-gyms.component.html',
  styleUrls: ['./xy-gyms.component.scss']
})
export class XyGymsComponent implements OnInit {

  gyms$?: Observable<Gym[]>

  constructor(private xyService: XyService) { }

  ngOnInit(): void {
    // this.xyService.getGyms().subscribe({
    //   next: data => {
    //     this.gyms$ = data
    //     console.log(data)
    //   }
    // })

    this.gyms$ = this.xyService.getGyms()

    // console.log(this.gyms$.subscribe())
    // console.log(this.gyms$)
  }

}
