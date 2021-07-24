<template>
  <div class="questions">
    <h1>This is an questions page</h1>
    <h2>{{ user.id }}</h2>
    <h2>{{ user.depGrade }}</h2>
    <h2>{{ user.name }}</h2>
  </div>
</template>

<script>
import { user } from '../main';

export default {
  name: 'Questions',
  data: () => {
    return {
      user,
    };
  },
};
</script>