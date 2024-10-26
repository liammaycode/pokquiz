<template>
  <div id="bigocomp">
    <AppHeader />
    <h1>Big O</h1>
    <AppFooter />
  </div>
</template>

<script lang="ts">
import AppHeader from './Header.vue'
import AppFooter from './Footer.vue'

export default {
  name: 'BigOComp',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style>
/* Global styles can go here */
</style>
