<template>
  <div class="navbar d-flex flex-row justify-content-between bg-white px-4 py-3 sticky-top">
    <a @click.prevent="" class="navbar-brand" href="#">
      <img src="@/assets/img/Untitled_design__1_-removebg-preview.png" width="30" height="30" alt="">
      Kripto.ku
    </a>
    <div class="ms-auto d-flex flex-row justify-content-between align-items-center">
      <div class="navigation">
        <a href="" class="px-3">Blog</a>
        <a href="" class="px-3">About</a>
        <a href="" class="px-3">FAQ</a>
      </div>
      <div class="login ms-4 me-5">
        <ButtonRound @click="goToLogin"
          type="button"
          text="Login"
          bgColor="#00BF71"
          color="white"
        ></ButtonRound>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import ButtonRound from '@/components/ButtonRound.vue';

export default {
  components: {
    ButtonRound
  },
  methods: {
    goToLogin() {
      this.$router.push("/login")
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
</style>