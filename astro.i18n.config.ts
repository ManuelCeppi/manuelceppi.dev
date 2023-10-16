import { defineAstroI18nConfig } from 'astro-i18n';

export default defineAstroI18nConfig({
  defaultLangCode: 'en',
  supportedLangCodes: ['it'],
  showDefaultLangCode: false,
  translations: { en: './src/i18n/en.json', it: './src/i18n/it.json' },
  routeTranslations: {},
});
