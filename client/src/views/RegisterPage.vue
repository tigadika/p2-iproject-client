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
                <h3>Daftar & lihat <a @click.prevent="goToHome" href="">kriptoku</a></h3>  
              </div>
            </div>
            <form action="" @submit.prevent="doRegister">
              <div class="form-group mb-3">
                <label for="email">USERNAME</label>
                <input
                  v-model="username"
                  type="text"
                  name="username"
                  class="form-control"
                  placeholder="Masukkan Username"
                />
              </div>
              <div class="form-group mb-3">
                <label for="email">EMAIL</label>
                <input
                  v-model="email"
                  type="email"
                  name="email"
                  class="form-control"
                  placeholder="Masukkan Email"
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
                <ButtonBlock type="submit" text="Daftar" bgColor="#00BF71" color="white"></ButtonBlock>
              </div>
            </form>
            <div class="d-flex flex-row justify-content-between">
              <p>Sudah terdaftar?</p>
              <a @click.prevent="goToLogin" href="#">Login</a>
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
      username: "",
      email: "",
      password: "",
    };
  },
  components: {
    ButtonBlock
  },
  methods: {
    ...mapActions(useUserStore, ["registerAction"]),
    goToLogin() {
      this.$router.push("/login")
    },
    goToHome() {
      this.$router.push("/")
    },
    async doRegister() {
      try {
        const { data } = await this.registerAction({
          username: this.username,
          email: this.email,
          password: this.password,
        });

        this.$router.push("/login");
      } catch (err) {
        console.log(err.response);
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
  text-decoration: none;
}
#imgLogo {
  width: 60%;
}
</style>