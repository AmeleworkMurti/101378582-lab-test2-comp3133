import { Component, signal, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../../services/character';
import { Character } from '../../models/character';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-characterdetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './characterdetails.html',
  styleUrl: './characterdetails.css'
})
export class Characterdetails implements OnInit {

  character = signal<Character | null>(null);

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
  ) {}

  ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id');

  if (id) {
    this.characterService.getAllCharacters().subscribe((data) => {
      const found = data.find((char) => char.id === id);
      this.character.set(found || null);
    });
  }
}
}