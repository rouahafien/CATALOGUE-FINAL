import { Component, signal } from '@angular/core';
import { ListeCours } from './composants/liste-cours/liste-cours';
import { EnTete } from './composants/en-tete/en-tete';
import { PiedPage } from './composants/pied-page/pied-page';
import { Cours } from './composants/liste-cours/liste-cours';
import { DetailsCours } from './composants/details-cours/details-cours';
@Component({
  imports: [ListeCours, EnTete, PiedPage, DetailsCours],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  coursSelectionne : Cours | null =null;

  onSelectionneCours(c: Cours)
  {
    this.coursSelectionne=c;
  }
}
