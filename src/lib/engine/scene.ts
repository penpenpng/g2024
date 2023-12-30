import { DefineComponent, ShallowRef, shallowRef } from "vue";

type VueComponent = DefineComponent<any, any, any>;

export namespace Scene {
  export const Component: ShallowRef<VueComponent | null> = shallowRef(null);
  export const go = (scene: VueComponent) => {
    Component.value = scene;
  };
}
