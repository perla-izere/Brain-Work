<template>
  <div>
    <h1>Home Page</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        <RouterLink :to="`/user/${user.id}`">
          {{ user.name }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Brian" },
  { id: 3, name: "Cathy" },
  { id: 4, name: "David" }
]
</script>