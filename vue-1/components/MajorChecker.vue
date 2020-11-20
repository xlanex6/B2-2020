<template>
<div id="majorchecker">
  <p v-if="isMajor" class="majeur">
      vous etes majeur, vous avez {{ age }} ans.
      </p>
  <p v-else class="mineur"> vous etes mineur</p>
</div>
</template>

<script>
export default {
  name: "MajorChecker",
  props: ['age'],
  data() {
      return {
        
      }
  },
  computed: {
    isMajor() {
      return this.age > 17 ? true : false
    },
  }
}
</script>

<style lang="css" scoped>

#majorchecker {
  max-width: 500px;
  margin: auto;
}
.majeur {
  background-color: green;
  color: white;
}
.mineur {
  background-color: red;
  color: white;
}

</style>
