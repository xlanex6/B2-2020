<template>
  <a class="button" :href="url">
      {{ text }}
  </a>
</template>

<script>
export default {
  name: "Cta",
  props: ["url","text"],
  data() {
      return {
  
      }
  },
}
</script>

<style lang="css" scoped>

.button {
  background-color: purple;
  padding: 8px 12px;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  margin: 15px 20px;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.203);
}
</style>
