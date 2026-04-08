import { Routes } from '@angular/router';

import { Characterdetails } from './components/characterdetails/characterdetails';
import { Characterlist } from './components/characterlist/characterlist';

export const routes = [
  { path: '', component: Characterlist },
  { path: 'details/:id', component: Characterdetails }
];