import { Inject, Injectable } from '@angular/core';
import { Store } from './core/Store';

@Injectable({
  providedIn: 'root',
})
export class AngularSynergyService {
  constructor(
    @Inject('SYNERGY_STORE') private stores: Record<string, Store<Object>>
  ) {}
}
