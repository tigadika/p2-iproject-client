<template>
  <div class="container sticky-top">
    <div class="card my-3 border-0 shadow d-flex flex-column align-items-center">
      <div class="my-4">Logo</div>
      <div class="card-body w-100">
        <ul class="list-group">
          <li class="list-group mb-3">
            <ButtonRound @click="goToLogin"
              type="button"
              text="All Coins"
              bgColor="#00BF71"
              color="white"
            ></ButtonRound>
          </li>
          <li class="list-group mb-3">
            <button class="btn shadow-sm rounded-pill">
              <img src="https://indodax.com/v2/logo/png/color/btc.png" style="width: 20px;" class="mx-1" alt="">
              btcidr
              </button>
          </li>
          <li class="list-group mb-3">
            <button class="btn shadow-sm rounded-pill">
              <img src="https://indodax.com/v2/logo/png/color/usdt.png" style="width: 20px;" class="mx-1" alt="">
              usdtidr
              </button>
          </li>
          <li class="list-group">
            <button class="btn btn-add rounded-pill mx-auto">+</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonRound from "./ButtonRound.vue";

export default {
  data() {
    return {}
  },
  components: {
    ButtonRound,
  }
}
</script>

<style scoped>
.container {
  width: 250px;
  position: fixed;
}
.card {
  height: 600px;
  border-radius: 20px;
}
.btn-add {
  background-color: #00BF71;
  color: white;
  width: 25%;
}
  .btn:hover {
    background-color: #04a361;
    color: white;
  }
</style>