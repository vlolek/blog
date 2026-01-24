import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Vladlen Oleksiuk',
  description:
    'Backend developer e sviluppatore python.',
  href: 'https://vlolek.com',
  author: 'Vladlen Oleksiuk',
  locale: 'it-IT',
  featuredPostCount: 2,
  postsPerPage: 5,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'Articoli',
  },
  {
    href: '/projects',
    label: 'Progetti',
  },
  {
    href: '/education',
    label: 'Formazione',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/vlolek',
    label: 'GitHub',
  },
  {
    href: 'mailto:info@vlolek.com',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
