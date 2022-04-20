<template>
  <div class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-md-12 col-lg-10">
        <div class="wrap d-md-flex border shadow">
          <div class="img">
            <img
              src="../assets/img/Bitcoin_perspective_matte.png"
              alt=""
            />
          </div>
          <div class="login-wrap p-4 p-md-5">
            <div class="d-flex flex-column align-items-center mb-3">
              <img
                src="../assets/logoHacktiv.png"
                alt=""
                id="imgLogo"
              />
              <hr />
            </div>
            <div class="d-flex">
              <div class="w-100 mb-3">
                <h3>Login</h3>
              </div>
              <div class="ml-auto">
                <button @click="googleHandler" class="google btn btn-outline-danger">
                  <i class="bi bi-google"></i>
                </button>
              </div>
            </div>
            <form action="" @submit.prevent="doLogin">
              <div class="form-group mb-3">
                <label for="email">EMAIL / USERNAME</label>
                <input
                  v-model="user"
                  type="text"
                  name="email"
                  class="form-control"
                  placeholder="Masukkan Email / Username"
                />
              </div>
              <div class="form-group mb-4">
                <label for="password">PASSWORD</label>
                <input
                  v-model="password"
                  type="password"
                  name="password"
                  class="form-control"
                  placeholder="Masukkan Password"
                />
              </div>
              <div class="form-group mb-3">
                <ButtonBlock type="submit" text="Login" bgColor="#00BF71" color="white"></ButtonBlock>
              </div>
            </form>
            <div class="d-flex flex-row justify-content-between">
              <p>Belum punya akun?</p>
              <a @click.prevent="goToRegister" href="#">Daftar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import { mapActions, mapWritableState } from "pinia";

import { useUserStore } from "@/stores/user.js";
import ButtonBlock from '@/components/ButtonBlock.vue';

export default {
  data() {
    return {
      user: "",
      password: "",
    }
  },
  components: {
    ButtonBlock
  },
  computed: {
    ...mapWritableState(useUserStore, ["isLogin", "isGoogle"]),
  },
  methods: {
    ...mapActions(useUserStore, ["loginAction"]),
    goToRegister() {
      this.$router.push("/register")
    },
    async doLogin() {
      try {
        const { data } = await this.loginAction({
          user: this.user,
          password: this.password,
        });

        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("username", data.username);
        localStorage.setItem("email", data.email);

        this.isLogin = true;

        this.$router.push("/dashboard");
      } catch (err) {
        console.log(err.response.data.message);
      }
    }
  }
};
</script>

<style scoped>
.wrap {
  background-color: white;
  border-radius: 10px;
}
.login-wrap {
  width: 100%;
}
.img > img {
  width: 500px;
  height: 500px;
  object-fit: cover;
  object-position: 15% 5%;
}
.btn-primary {
  background-color: var(--third);
}
hr {
  width: 100px;
}
a {
  color: #00BF71;
}
#imgLogo {
  width: 60%;
}
</style>