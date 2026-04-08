import { Component, signal, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character';
import { Character } from '../../models/character';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Characterfilter } from '../characterfilter/characterfilter';

@Component({
  selector: 'app-characterlist',
  standalone: true,
  imports: [CommonModule, Characterfilter],
  templateUrl: './characterlist.html',
  styleUrl: './characterlist.css'
})
export class Characterlist implements OnInit {

  characters = signal<Character[]>([]);
  loading = signal(true);

  constructor(
  private characterService: CharacterService,
  private router: Router
) {}

  ngOnInit(): void {
    this.characterService.getAllCharacters().subscribe((data: Character[]) => {
      this.characters.set(data);
      this.loading.set(false);
    });
  }

goToDetails(id: string) {
  this.router.navigate(['/details', id]);
}


}