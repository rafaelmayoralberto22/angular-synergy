import { Inject, Injectable } from '@angular/core';
import { SynergyContextProps } from './types/SynergyContextProps';

@Injectable({
  providedIn: 'root',
})
export class AngularSynergyStore {
  constructor(
    @Inject('SYNERGY_STORE') private stores: Record<string, SynergyContextProps<Object>>
  ) {}

  get(key: string) {
    if (this.stores.hasOwnProperty(key)) {
      return this.stores[key];
    } else {
      throw Error('The store is not defined');
    }
  }
}
