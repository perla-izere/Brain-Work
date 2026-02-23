<template>
  <div>
    <h1>User Page</h1>
    <p>Selected User ID: {{ userId }}</p>

    <RouterLink to="/">Go Back Home</RouterLink>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const userId = route.params.id
</script>