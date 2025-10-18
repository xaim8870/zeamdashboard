declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  const src: string;
  export default src;
}

// Add more extensions if needed (e.g., '*.gif', '*.webp')

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  // Add more variables as needed, for example:
  // readonly VITE_BACKEND_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
