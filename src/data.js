import { getBlogPermalink } from './utils/permalinks';
import { astroI18n, t, l } from 'astro-i18n';

export const headerData = {
  links: [
    {
      text: t('nav.aboutMe'),
      href: '/about',
    },
    // {
    //   text: 'Blog',
    //   href: getBlogPermalink(),
    // },
    {
      text: t('nav.hobbies'),
      href: '/hobbies',
    },
    {
      text: t('nav.contactMe'),
      href: '',
    },
  ],
  socialLinks: [
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/manuel-ceppi/' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/m_ceppi/' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/ManuelCeppi' },
  ],
  actions: [
    // { type: 'button', text: 'Download', href: 'https://github.com/onwidget/astrowind' } Action example
  ],
};

export const footerData = {
  links: [],
  socialLinks: [
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/manuel-ceppi/' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/m_ceppi/' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/ManuelCeppi' },
  ],
};
