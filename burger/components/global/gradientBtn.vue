<template>
<div>
      <a
        :href="url"
        class="btn-gradient"
      >
        <slot/>
      </a>
      <!-- <Name> -->
</div>
</template>

<script>

// import Name from './burgerFooter'

export default {
  name: "",
  // components:{Name},
  props: ['url'],
  data() {
      return {
        
      }
  },
}
</script>

<style lang="scss" scoped>
.btn-gradient {
  color: inherit;
  text-decoration: inherit;
  font-size: 25px;
  color: white;
  font-family: "HelveticaNeue";
  font-weight: bold;
  padding: 17px 24px;
  border-radius: 50px;
  width: 100%;
  text-transform: uppercase;
  text-align: center;
  box-shadow: 0px 0px 15px #00000031;
  background: linear-gradient(269deg, #FF9E01 0%, #FD910B 0%, #E30870 100%, #804F01 100%);
}
</style>
