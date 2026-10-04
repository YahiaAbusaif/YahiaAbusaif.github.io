/// <reference path="../.astro/types.d.ts" />

interface Window {
  goatcounter?: {
    allow_local?: boolean;
    count: (event: { path: string; title?: string; event?: boolean }) => void;
  };
}
