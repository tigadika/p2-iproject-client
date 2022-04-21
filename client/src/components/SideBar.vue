<template>
  <div class="container sticky-top">
    <div
      class="card my-3 border-0 shadow d-flex flex-column align-items-center"
    >
      <div class="my-4">Logo</div>
      <div class="card-body w-100">
        <ul class="list-group">
          <li class="list-group mb-3">
            <ButtonRound
              @click="goToDashboard"
              type="button"
              text="All Coins"
              bgColor="#00BF71"
              color="white"
            ></ButtonRound>
          </li>
          <ListBookmark
          v-for="bookmark in bookmarks"
          :key="bookmark.id"
          :bookmark="bookmark"
          @goToDetail="goToDetail"
          ></ListBookmark>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { RouterLink } from "vue-router";
import ButtonRound from "./ButtonRound.vue";
import ListBookmark from "./ListBookmark.vue";
import { useBookmarkStore } from "@/stores/bookmark.js";

export default {
  data() {
    return {};
  },
  props: {
    bookmarks: Array,
  },
  components: {
    ButtonRound,
    ListBookmark,
  },
  computed: {
  },
  methods: {
    goToDashboard() {
      this.$router.push("/dashboard");
    },
    goToDetail(id) {
      this.$router.push(`/dashboard/${id}`)
    }
  },
  mounted() {
  }
};
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
  background-color: #00bf71;
  color: white;
  width: 25%;
}
</style>
