/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@/assets/body/archive' {
  const content: String;
  export default content;
}

declare module '@/assets/header/plus' {
  const content: String;
  export default content;
}

declare module '@/assets/orders-menu/plus-simple' {
  const content: String;
  export default content;
}

