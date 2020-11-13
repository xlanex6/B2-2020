<template>
  <header>

    <h1>{{ title }}</h1>
    <p class="hollow">{{ title }}</p>
    <slot />

    <div
      id="illustration"
      v-if="image"
    >
      <img
        src="@/assets/images/burgerFull.png"
        alt="burger is good"
      >
      <p>Restaurant certifié <strong>100% Bio</strong></p>
    </div>

    <ul id="social">
      <li><a href="#"><i class="fab fa-instagram"></i></a></li>
      <li><a href="#"><i class="fab fa-twitter"></i></a></li>
      <li><a href="#"><i class="fab fa-facebook"></i></a></li>
    </ul>

    <a
      id="scrowl-down"
      href="#"
    ><i class="fas fa-arrow-circle-down"></i></a>

  </header>
</template>


<script>
export default {
  props: ["title", "image"],
};
</script>

<style lang="scss" scoped>
header {
  position: relative;
  width: 1280px;
  margin: auto;
  display: flex;
  flex-direction: column;
  height: 85vh;
  h1 {
    margin: 0;
    color: #f8a41f;
    font-family: "Kaushan Script";
    font-size: 197px;
    line-height: 286px;
  }

  p {
    width: 530px;
    font-size: 30px;
    font-family: "Quicksand";
    line-height: 38px;
    font-weight: lighter;
    margin-bottom: 70px;
  }
}

#illustration {
  position: absolute;
  right: -50px;
  top: 180px;
  p {
    width: 100%;
    margin: 0;
    font-size: 40px;
    font-family: "Quicksand";
    text-align: center;
    color: white;
  }
}

#scrowl-down {
  position: absolute;
  bottom: 0;
  left: 50%;
  color: white;
  font-size: 60px;
  /* transform: translateX(-50%); */
}

#social {
  position: absolute;
  right: -100px;
  top: 50%;
}

/* #social ul {
  border: solid 2px red;
  display: flex;
  flex-direction: column;
  align-items: center;
} */

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
  font-size: 20px;
}

#social li i {
  color: #e30870;
}

.hollow {
  position: absolute;
  z-index: -2;
  top: 50px;
  left: -250px;
  text-shadow: -1px 0 grey, 0 1px grey, 1px 0 grey, 0 -1px grey;
  font-family: "Kaushan Script";
  color: white;
  font-size: 380px;
}
</style>
