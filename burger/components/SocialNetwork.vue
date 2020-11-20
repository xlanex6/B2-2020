<template>
<li>
        <a :href="url">
        <!-- slot //  -->
          <slot/>
          <!-- end slot -->
        </a>
      </li>
</template>

<script>
export default {
  name: "SocialNetwork",
  props: ['url'],
  data() {
      return {
        
      }
  },

}
</script>

<style lang="scss" scoped>

#social li {
  height: 45px;
  width: 45px;
  border-radius: 50%;
  list-style-type: none;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  margin-right: 10px;
  font-size: 20px;
  border: 1px solid #e30870;
}

#social li i {
  color: #e30870;
}
</style>
// au scroll sur les Y apres 300px , je change le display a 'none'
