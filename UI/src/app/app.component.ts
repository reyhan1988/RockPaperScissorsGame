import { Component, OnInit } from '@angular/core';
import { Symbols } from './symbols';
import { UserScoresService } from './user-scores.service';
import { Winner } from './Winner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  winnerName: String = '';
  botChoice: string[] = Object.keys(Symbols);

  title = 'anularscissorsproject';
  humanChoice:any;
  computer: any = false;
  person: any = false;
  message:any;
  winner:any;
  constructor(private service: UserScoresService) {}

  ngOnInit() {
    this.winner = new Winner("", "", 0,0);
    this.humanChoice = "";
  }

  /**
   *
   * @param id called when player choose his weapon and the id of the selected weapon sent to the
   * backend.
   */
  async playNow(id: number) {
    this.computer =true;
    this.person =true;
    this.getHumanChoice(id);
    let resp = this.service.doPlay(id); //passed to restAPI
    resp.subscribe((data) => (this.winner = data));
  }

  getHumanChoice(id:number) {
    if(id == 2){
      this.humanChoice = "scissors";
    }else if(id == 1){
      this.humanChoice = "paper";
    }else{
      this.humanChoice = "rock";
    }
  }
 

}
