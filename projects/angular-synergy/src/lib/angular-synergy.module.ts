import { ModuleWithProviders, NgModule } from '@angular/core';
import { SynergyContextProps } from './types/SynergyContextProps';

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
})
export class AngularSynergyModule {
  static withStores(
    stores: Record<string, SynergyContextProps<Object>>
  ): ModuleWithProviders<AngularSynergyModule> {
    return {
      ngModule: AngularSynergyModule,
      providers: [{ provide: 'SYNERGY_STORE', useValue: stores }],
    };
  }
}
