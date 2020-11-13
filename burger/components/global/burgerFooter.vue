<template>
  <div id="footer">
    <div class="footer-col">
      <nuxt-link to="/">Accueil</nuxt-link>
      <nuxt-link to="/history">Notre histoire</nuxt-link>
      <nuxt-link to="/engage">Nos engagements</nuxt-link>
      <nuxt-link to="/about">A propos</nuxt-link>
      <nuxt-link to="/products">Nos produits</nuxt-link>
      <nuxt-link to="#">Contact</nuxt-link>
    </div>
    <div class="footer-col">
      <p>23 rue de la joie 74000 Annecy</p>
    </div>
    <div class="footer-col">
      <form
        class="news"
        action="/"
        method="post"
        data-netlify="true"
      >
        <label for="email">
          News
          <input
            type="email"
            name="email"
            placeholder="Laisser votre email"
          >
        </label>
        <input
          type="submit"
          class="form-cta"
          value="Soumettre"
        >
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
#footer {
  height: 500px;
  background: $coolGrad;
  display: flex;
  justify-content: center;
  align-items: center;
  .footer-col {
    flex: 0 1 400px;
    display: flex;
    flex-direction: column;
    a,
    p {
      font-size: 30px;
      color: white;
      text-decoration: inherit;
      font-family: "HelveticaNeue";
      &:hover {
        font-weight: bold;
      }
    }
  }
}

.news {
  background-color: white;
  padding: 40px;
  border-radius: 8px;
}

.form-cta {
  color: white;
  background: $coolGrad;
  border: none;
  padding: 8px 12px;
}
</style>
