<template>
  <nav>
    <nuxt-link to="/">
      <img
        src="@/assets/images/logo.svg"
        alt="logo"
      >
    </nuxt-link>
    <nuxt-link
      to="/"
      class="button"
    >Accueil</nuxt-link>
    <nuxt-link
      to="/history"
      class="button"
    >Notre histoire</nuxt-link>
    <nuxt-link
      to="/engage"
      class="button"
    >Nos engagements</nuxt-link>
    <nuxt-link
      to="/about"
      class="button"
    >A propos</nuxt-link>
    <nuxt-link
      to="/products"
      class="button"
    >Nos produits</nuxt-link>
    <nuxt-link
      to="/contact"
      class="button"
    >Contact</nuxt-link>

  </nav>
</template>

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


