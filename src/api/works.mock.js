import i18n from './i18n'

export const WORKS_MOCK = [
  {
    id: 1,
    imgPathDetail: '/project-1.png',
    title: 'E-commerce DNC',
    description: i18n.t("descricaoProjetoUm"),
    link: 'https://e-commerce-dnc-black.vercel.app'
  },
  {
    id: 2,
    imgPathDetail: '/project-2.png',
    title: 'WeatherDuo',
    description: i18n.t('descricaoProjetoDois'),
    link: 'https://weather-duo.vercel.app'
  },
  {
    id: 3,
    imgPathDetail: '/project-3.png',
    title: 'DNC Food',
    description: i18n.t('descricaoProjetoTres'),
    link: 'https://dnc-food-react.vercel.app'
  },
  {
    id: 4,
    imgPathDetail: '/project-4.png',
    title: 'Dashboard',
    description: i18n.t('descricaoProjetoQuatro'),
    link: 'https://dashboard-project-seven.vercel.app'
  },
]