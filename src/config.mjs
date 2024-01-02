const CONFIG = {
  name: 'Manuel Ceppi',

  origin: 'https://manuelceppi.dev',
  basePathname: '/',
  trailingSlash: false,

  title: 'Manuel Ceppi',
  description: 'Myself, some tech stuff and so on. Trying to be a better dev every day (or pretending to).',

  defaultTheme: 'dark:only', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  language: 'en',
  textDirection: 'ltr',
};

export const SITE = { ...CONFIG, blog: undefined };
export const BLOG = CONFIG.blog;
export const DATE_FORMATTER = CONFIG.dateFormatter;
