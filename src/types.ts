import { InjectionKey, Ref } from 'vue';

export interface Router {
  view: Ref<string>,
  props: Ref<any>,
  navigate: (view: string, props?: any) => void
}

export type Storage = any

export interface NewToudou {
  title: string,
  color: string,
}

export const RouterKey: InjectionKey<Router> = Symbol('router')
export const StorageKey: InjectionKey<Storage> = Symbol('store')
