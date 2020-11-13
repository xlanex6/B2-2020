<template>
  <div>
    <div id="background"></div>
    <navbar />
    <Nuxt />
    <burger-footer />
  </div>
</template>

<style lang="scss" scoped>
#background {
  position: absolute;
  height: 100vh;
  width: 100vw;
  clip-path: polygon(95% 0, 100% 0, 100% 100%, 40% 100%);
  background: $coolGrad;
}
</style>
