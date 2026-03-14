<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div>
    <RouterLink to="/app/dataSource">Data</RouterLink>
    <RouterLink to="/app/layout">Layout</RouterLink>
    <RouterLink to="/app/actions">Actions</RouterLink>
  </div>
</template>

<style scoped>
.layout-wrapper{
  display:flex;
  height: 100%;
}
</style>
