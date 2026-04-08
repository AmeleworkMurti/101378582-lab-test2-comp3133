import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Characterlist } from './components/characterlist/characterlist';
import { Characterfilter } from './components/characterfilter/characterfilter';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Characterlist, Characterfilter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('101378582-lab-test2-comp3133');
}
