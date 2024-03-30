import { createI18n } from 'vue-i18n'

const index = createI18n({
  locale: 'en',
  messages: {
    en: {
      language: 'Language',
      home: 'Home',
      about: 'About',
      en: 'English',
      de: 'German'
    },
    de: {
      language: 'Sprache',
      home: 'Startseite',
      about: 'Über',
      en: 'Englisch',
      de: 'Deutsch'
    }
  }
})

export default index