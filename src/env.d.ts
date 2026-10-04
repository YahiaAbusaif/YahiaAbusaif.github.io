/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly PUBLIC_GOATCOUNTER?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  goatcounter?: {
    count: (event: { path: string; title?: string; event?: boolean }) => void;
  };
}
