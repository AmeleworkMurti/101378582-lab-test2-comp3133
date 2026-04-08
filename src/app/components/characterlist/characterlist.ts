import { Component, signal, OnInit } from '@angular/core';
//import { CharacterService } from '../../services/character.services';
import { CharacterService } from '../../services/character';
import { Character } from '../../models/character';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-characterlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './characterlist.html',
  styleUrl: './characterlist.css'
})
export class Characterlist implements OnInit {

  characters = signal<Character[]>([]);
  loading = signal(true);

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.getAllCharacters().subscribe((data: Character[]) => {
      this.characters.set(data);
      this.loading.set(false);
    });
  }
}