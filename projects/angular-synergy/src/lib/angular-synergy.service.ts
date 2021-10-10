import { Inject, Injectable } from '@angular/core';
import { Store } from './core/Store';

@Injectable({
  providedIn: 'root',
})
export class AngularSynergyStore {
  constructor(
    @Inject('SYNERGY_STORE') private stores: Record<string, Store<Object>>
  ) {}

  get(key: string) {
    if (this.stores.hasOwnProperty(key)) {
      this.stores[key];
    } else {
      throw Error('The store is not defined');
    }
  }
}
