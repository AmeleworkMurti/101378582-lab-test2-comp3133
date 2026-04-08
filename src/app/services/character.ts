import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private baseUrl = 'https://hp-api.onrender.com/api';

  constructor(private http: HttpClient) {}

  // Get all characters
  getAllCharacters(): Observable<any> {
    return this.http.get(`${this.baseUrl}/characters`);
  }

  // Get characters by house
  getCharactersByHouse(house: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/characters/house/${house}`);
  }

  // Get character by ID
  getCharacterById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/character/${id}`);
  }
}