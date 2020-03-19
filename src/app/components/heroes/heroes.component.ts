import { Component, OnInit } from '@angular/core';
import { HeroesService , HeroeInterface} from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})


export class HeroesComponent implements OnInit {

  constructor(
    private _heroesService: HeroesService
  ) { 
    console.log('tiempo constructor');
  }

  estosHeroes: HeroeInterface[] = [];

  ngOnInit(): void {
    console.log('tiempo ngOnInit');
    this.estosHeroes = this._heroesService.getHeroes();
    console.warn(this.estosHeroes);

  }

}
