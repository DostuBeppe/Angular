import { Component, OnInit } from '@angular/core';
import giocatoriMock from '../models/player.mock';
import { Players } from '../models/player.models';

@Component({
  selector: 'app-beach-volley',
  templateUrl: './beach-volley.component.html',
  styleUrls: ['./beach-volley.component.scss'],
})
export class BeachVolleyComponent implements OnInit {
  giocatori: Players[] = [];

  displayedColumns: string[] = ['id', 'nome', 'overall', 'sex', 'presente'];
  dataSource: Players[] = [];

  ngOnInit(): void {
    this.giocatori = giocatoriMock;
    this.dataSource = this.giocatori;
  }
}
