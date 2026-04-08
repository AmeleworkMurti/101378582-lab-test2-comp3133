import { Component, signal, Output, EventEmitter } from '@angular/core';
import { CharacterService } from '../../services/character';
import { Character } from '../../models/character';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-characterfilter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './characterfilter.html',
  styleUrl: './characterfilter.css'
})
export class Characterfilter {

  characters = signal<Character[]>([]);

  houses = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];

  
  @Output() charactersFiltered = new EventEmitter<Character[]>();

  constructor(private characterService: CharacterService) {}

  filterByHouse(house: string) {
    this.characterService.getCharactersByHouse(house).subscribe((data) => {
      this.charactersFiltered.emit(data);
    });
  }
}