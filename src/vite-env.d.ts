/// <reference types="vite/client" />

// Extend JSX for React Three Fiber BufferAttribute
declare namespace JSX {
  interface IntrinsicElements {
    bufferAttribute: React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        attach?: string;
        count?: number;
        array?: Float32Array;
        itemSize?: number;
      },
      HTMLElement
    >;
  }
}