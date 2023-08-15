import type { ComponentConstructorOptions, ComponentProps, SvelteComponent } from 'svelte'

type SvelteComponentOptions<T extends SvelteComponent> = Omit<
  ComponentConstructorOptions<ComponentProps<T>>,
  'hydrate' | 'target' | '$$inline'
>;

declare module 'nightwatch' {
  interface NightwatchAPI {
    mountSvelteComponent<T extends SvelteComponent>(
      componentPath: string,
      options?: SvelteComponentOptions<T>,
      callback?: (this: NightwatchAPI, result: Element) => void
    ): Awaitable<this, Element>;
    launchComponentRenderer(): this;
  }
}
