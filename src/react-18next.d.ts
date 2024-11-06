import 'i18next';

import type common from '../public/locales/en/common.json';
import type test from '../public/locales/en/test.json';

type TResources = {
  common: typeof common;
};
declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: keyof TResources;
    resources: TResources;
  }
}
