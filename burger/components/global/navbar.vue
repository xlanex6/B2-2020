<template>
  <nav>
    <nuxt-link to="/">
      <img
        src="@/assets/images/logo.svg"
        alt="logo"
      >
    </nuxt-link>


    <nuxt-link
      v-for="item in items" 
      :key="item.name"
      :to="item.page"
      class="button"
    >{{item.name}}</nuxt-link>

  </nav>
</template>

<script>
export default {
  name: 'Navbar',
    data() {
      return {
        items: [
          {name: 'Accueil', page: '/'},
          {name: 'Notre histoire', page: '/history'},
          {name: 'Equipe', page: '/team'},
          {name: 'A propos', page: '/about'},
          {name: 'Menu', page: '/products'},
          {name: 'Contact', page: '/contact'}
        ]
      }
    }
}
</script>

<style lang="scss" scoped>
nav {
  a {
    text-decoration: inherit;
    color: inherit;
  }
  width: 1280px;
  margin: auto;
  display: flex;
  align-items: center;
  font-family: "HelveticaNeue";
  font-weight: bold;
  .button {
    color: #292724;
    font-size: 22px;
    text-transform: uppercase;
    padding: 0 21px;
    border-right: solid 1px grey;
  }
  .button:last-child {
    border-right: none;
  }
  .button:hover,
  .nuxt-link-exact-active {
    color: $yellow;
  }

  img {
    height: 128px;
  }
}
</style>


