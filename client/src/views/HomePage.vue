<template>
  <div>
    <NavBar></NavBar>
    <header class="masthead">
            <div class="container px-5">
                <div class="row gx-5 align-items-center">
                    <div class="col-lg-6">
                        <!-- Mashead text and app badges-->
                        <div class="mb-5 mb-lg-0 text-center text-lg-start">
                            <h1 class="display-1 lh-1 mb-3">Kini <b style="color: #00BF71;">semua</b> bisa jadi trader.</h1>
                            <p class="lead fw-normal text-muted mb-5">Prediksi langkah investasi anda dengan <b>Kripto.ku</b></p>
                            <div class="d-flex flex-column flex-lg-row align-items-center">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <!-- Masthead device mockup feature-->
                        <div class="masthead-device-mockup">
                            <img src="@/assets/img/8432-removebg-preview.png" style="margin-left: 6rem;" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </header>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  components: {
    NavBar
  },
};
</script>

<style scoped>
.masthead {
  background-color: #f8f9fa;
  padding-top: 5rem;
  padding-bottom: 5rem;
}
.masthead .masthead-device-mockup {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.masthead .masthead-device-mockup .circle {
  position: absolute;
  fill: url(#circleGradient);
  width: 70%;
  display: none;
}
.masthead .masthead-device-mockup .circle .gradient-start-color {
  stop-color: #5afd8b;
}
.masthead .masthead-device-mockup .circle .gradient-end-color {
  stop-color: #47dd79;
}
.masthead .masthead-device-mockup .shape-1 {
  position: absolute;
  height: 1rem;
  width: 1rem;
  transform: rotate(-10deg);
  fill: #13bb5e;
  bottom: 15%;
  left: 10%;
}
.masthead .masthead-device-mockup .shape-2 {
  position: absolute;
  height: 0.75rem;
  width: 0.75rem;
  fill: #36ce5c;
  top: 15%;
  right: 10%;
}
.masthead .masthead-device-mockup .device-wrapper {
  max-width: 10rem;
}
@media (min-width: 576px) {
  .masthead .masthead-device-mockup .circle {
    width: 70%;
    display: block;
  }
  .masthead .masthead-device-mockup .device-wrapper {
    max-width: 12.5rem;
  }
}
@media (min-width: 768px) {
  .masthead .masthead-device-mockup .circle {
    width: 60%;
  }
  .masthead .masthead-device-mockup .device-wrapper {
    max-width: 15rem;
  }
}
@media (min-width: 992px) {
  .masthead .masthead-device-mockup .circle {
    width: 90%;
  }
  .masthead .masthead-device-mockup .device-wrapper {
    max-width: 15rem;
  }
}
@media (min-width: 1200px) {
  .masthead .masthead-device-mockup .circle {
    width: 75%;
  }
  .masthead .masthead-device-mockup .device-wrapper {
    max-width: 15rem;
  }
}
@media (min-width: 1400px) {
  .masthead .masthead-device-mockup .circle {
    width: 70%;
  }
  .masthead .masthead-device-mockup .device-wrapper {
    max-width: 17rem;
  }
}
</style>

