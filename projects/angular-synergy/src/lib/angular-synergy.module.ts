import { Store } from './core/Store';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
})
export class AngularSynergyModule {
  static withStores(stores: Record<string, Store<Object>>) {
    return {
      ngModule: AngularSynergyModule,
      providers: [{ provide: 'SYNERGY_STORE', useValue: stores }],
    };
  }
}
