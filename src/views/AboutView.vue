<script setup lang="ts">
import { useI18n } from '../i18n'

const { t } = useI18n()
</script>

<template>
  <div class="page_container">
    <h1>{{ t('about.title') }}</h1>
    <p>{{ t('about.description') }}</p>
  </div>
</template>
