<script setup lang="ts">
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()
</script>

<template>
  <div class="page_container">
    <h1>{{ t('home.title') }}</h1>
    <p>{{ t('home.description') }}</p>
  </div>
</template>
