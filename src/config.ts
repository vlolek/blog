import type {
  AnalyticsConfig,
  EducationConfig,
  Link,
  PostConfig,
  ProjectConfig,
  Site,
  SocialLink,
  TagsConfig,
} from '~/types'

//--- Readme Page Config ---
export const SITE: Site = {
  title: 'Vladlen Oleksiuk - Backend Developer',
  description:
    'Backend developer che condivide i suoi progetti e le sue esperienze.',
  website: 'https://vlolek.com/',
  lang: 'it',
  base: '/',
  author: 'vlolek',
  ogImage: '/og-image.png',
  transition: false,
}

export const HEADER_LINKS: Link[] = [
  {
    name: 'Articoli',
    url: '/posts',
  },
  {
    name: 'Progetti',
    url: '/projects',
  },
  {
    name: 'Formazione',
    url: '/education',
  },
]

export const FOOTER_LINKS: Link[] = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'Articoli',
    url: '/posts',
  },
  {
    name: 'Progetti',
    url: '/projects',
  },
  {
    name: 'Formazione',
    url: '/education',
  }
]

// get icon https://icon-sets.iconify.design/
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'github',
    url: 'https://github.com/vlolek',
    icon: 'icon-[ri--github-fill]',
  }
]


//--- Posts Page Config ---
export const POSTS_CONFIG: PostConfig = {
  title: 'Articoli',
  description: 'Articoli di vlolek',
  introduce: 'Qui condividerò i miei articoli e le mie esperienze.',
  author: 'vlolek',
  homePageConfig: {
    size: 3,
    type: 'compact',
  },
  postPageConfig: {
    size: 10,
    type: 'image',
    coverLayout: 'right',
  },
  tagsPageConfig: {
    size: 10,
    type: 'time-line',
  },
  ogImageUseCover: false,
  postType: 'metaOnly',
  imageDarkenInDark: true,
  readMoreText: 'Leggi di più',
  prevPageText: 'Precedente',
  nextPageText: 'Successivo',
  tocText: 'In questa pagina',
  backToPostsText: 'Torna agli Articoli',
  nextPostText: 'Articolo Successivo',
  prevPostText: 'Articolo Precedente',
  recommendText: 'CONSIGLIATO',
  wordCountView: true,
}

export const TAGS_CONFIG: TagsConfig = {
  title: 'Tag',
  description: 'Tutti i tag degli articoli',
  introduce: 'Tutti i tag per gli articoli sono qui, puoi cliccare per filtrarli.',
}

export const PROJECTS_CONFIG: ProjectConfig = {
  title: 'Progetti',
  description: 'I miei progetti e lavori.',
  introduce: 'Qui condivido i miei progetti e i lavori su cui sto lavorando.',
  author: 'vlolek',
  homePageConfig: {
    size: 3,
    type: 'compact',
  },
  postPageConfig: {
    size: 10,
    type: 'image',
    coverLayout: 'right',
  },
  ogImageUseCover: false,
  postType: 'metaOnly',
  imageDarkenInDark: true,
  readMoreText: 'Leggi di più',
  prevPageText: 'Precedente',
  nextPageText: 'Successivo',
  tocText: 'In questa pagina',
  backToProjectsText: 'Torna ai Progetti',
  nextPostText: 'Progetto Successivo',
  prevPostText: 'Progetto Precedente',
  recommendText: 'CONSIGLIATO',
  wordCountView: true,
}

export const EDUCATION_CONFIG: EducationConfig = {
  title: 'Formazione',
  description: 'Appunti e note dai corsi che seguo.',
  introduce: 'Qui condivido i miei appunti e le note dai corsi che sto seguendo.',
  author: 'vlolek',
  homePageConfig: {
    size: 5,
    type: 'compact',
  },
  postPageConfig: {
    size: 10,
    type: 'image',
    coverLayout: 'right',
  },
  ogImageUseCover: false,
  postType: 'metaOnly',
  imageDarkenInDark: true,
  readMoreText: 'Leggi di più',
  prevPageText: 'Precedente',
  nextPageText: 'Successivo',
  tocText: 'In questa pagina',
  backToEducationText: 'Torna alla Formazione',
  nextPostText: 'Appunto Successivo',
  prevPostText: 'Appunto Precedente',
  recommendText: 'CONSIGLIATO',
  wordCountView: true,
}

export const ANALYTICS_CONFIG: AnalyticsConfig = {
  umami: {
    enabled: false,
    websiteId: 'Your websiteId in umami',
    serverUrl: 'https://cloud.umami.is/script.js',
  },
}
