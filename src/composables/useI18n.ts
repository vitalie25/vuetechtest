import { reactive } from 'vue'
import enTranslations from '../assets/en/translations.json'
import roTranslations from '../assets/ro/translations.json'

type TranslationStrings = string | { [key: string]: TranslationStrings }
type Translations = Record<string, TranslationStrings>

const translations: Record<string, Translations> = {
  en: enTranslations,
  ro: roTranslations,
}

const i18n = reactive({
  locale: localStorage.getItem('locale') || 'ro',
  t(key: string): string | undefined {
    const keys = key.split('.')
    return keys.reduce<TranslationStrings | undefined>((obj, key) => {
      if (obj && typeof obj === 'object' && key in obj) {
        return obj[key] as TranslationStrings
      }
      return undefined
    }, translations[i18n.locale]) as string | undefined
  },

  setLocale(locale: string) {
    i18n.locale = locale
    localStorage.setItem('locale', locale)
  },
})

export function useI18n() {
  return i18n
}
