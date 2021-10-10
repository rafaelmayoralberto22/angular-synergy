import { SynergyContextProps } from '../types/SynergyContextProps'
import { SynergyCreateStoreOptions } from '../types/SynergyCreateStoreOptions'
import { SynergyStoreProps } from '../types/SynergyStoreProps'
import { getStoreToStorage, saveStore } from '../utils/Utils'
import { Store } from './Store'

export function createStore<T extends object>(
  props: SynergyStoreProps<T>,
  options?: SynergyCreateStoreOptions
): SynergyContextProps<T> {
  const persistence = options?.persistence
  let store = new Store(props, options)

  if (persistence) {
    const { name } = props
    const storePropsStorage = getStoreToStorage(name)
    store = new Store<T>(
      persistence && !!storePropsStorage
        ? { ...props, state: storePropsStorage }
        : props,
      options
    )

    if (!storePropsStorage) saveStore(props)
  }

  return {
    dispatch: store.dispatch,
    commit: store.commit,
    getters: store.getters,
    state: store.state
  }
}
