
import {  t} from 'astro-i18n';

export const headerData = {
  links: [
    {
      text: t('nav.aboutMe'),
      href: '#about',
    },
    {
      text: t('nav.experiences'),
      href: '#experiences',
    },
    {
      text: t('nav.contactMe'),
      href: '#contact',
    },
  ],
  socialLinks: [
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/manuel-ceppi/' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/ManuelCeppi' },
  ],
};

export const footerData = {
  links: [],
  socialLinks: [
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/manuel-ceppi/' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/ManuelCeppi' },
  ],
};
