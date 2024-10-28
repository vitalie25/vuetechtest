<script setup lang="ts">
import { useI18n } from '@/i18n'

const { setLocale, locale } = useI18n()

console.log(locale)

const changeLanguage = (locale: string) => {
  setLocale(locale)
}
</script>
<template>
  <div class="language-switcher">
    <button @click="changeLanguage('ro')">ro</button>
    <button @click="changeLanguage('en')">en</button>
  </div>
</template>

<style scoped>
.language-switcher {
  display: flex;
  margin-top: 2rem;
}
button {
  color: white;
  border: none;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  background-color: #4caf50;

  display: inline-block;
  font-size: 16px;
  margin: 5px 2px;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  height: 30px;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #45a049;
}
</style>
