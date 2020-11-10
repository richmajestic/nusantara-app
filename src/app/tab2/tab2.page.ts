import { Component } from '@angular/core';
import { MaungTrophy} from 'src/assets';
import { LeaderboardService } from '../service/leaderboard.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public maungTrophyImage = MaungTrophy;
  public showLeaderboard = true;
  listLeaderboard: any;

  constructor(
    private leaderboardService : LeaderboardService
  ) {}
  
  ngOnInit() {
    this.leaderboardService.getKategori().subscribe(
      res=> {
        this.listLeaderboard = res;
      }
    );
  }
}
