/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly PUBLIC_CAL_LINK?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
