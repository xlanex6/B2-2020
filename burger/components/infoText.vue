<template>
  <div class="info-text">
    <div class="triangleLeft" v-rellax="{speed: -2}"></div>
    <div class="triangleRight"></div>
    <div class="text">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.info-text {
  position: relative;
  margin-top: 200px;
}
.triangleLeft {
  position: absolute;
  width: 400px;
  transform: rotate(-45deg);
  height: 300px;
  // transform: matrix(0.26, 0.97, -0.97, 0.26, 0, 0);
  border: 3px solid #e30870;
  z-index: -1;
}
.triangleRight {
  z-index: -1;
  position: absolute;
  right: 0;
  top: 60px;
  width: 300px;
  height: 300px;
  transform: matrix(0.98, -0.19, 0.19, 0.98, 0, 0);
  border: 3px solid #ff9e01;
}

.text {
  z-index: 1;
  color: #292724;
  margin-top: 50px;
  font-size: 30px;
  font-family: "Quicksand";
  text-align: center;
  width: 1024px;
  margin: auto;
}
.text p {
  margin-bottom: 1em;
}
</style>
