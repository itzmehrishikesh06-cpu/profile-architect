/// <reference types="vite-imagetools" />

declare module "*.jpg?format=webp&quality=*" {
  const src: string;
  export default src;
}

declare module "*.png?format=webp&quality=*" {
  const src: string;
  export default src;
}
