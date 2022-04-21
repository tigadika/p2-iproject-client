<template>
  <div>
    <div class="d-flex flex-row mx-2">
      <SideBar :bookmarks="bookmarks"></SideBar>
      <div class="row">
        <div
          class="top d-flex flex-row mx-3 my-2 justify-content-between align-items-center"
        >
          <div class="input-group">
            <form @submit.prevent="filterSearch" action="">
              <input
                v-model="search"
                type="search"
                class="form-control rounded-pill"
                placeholder="Search"
              />
            </form>
          </div>
          <div class="mt-2">
            <ButtonRound
              @click="doLogout"
              type="button"
              text="logout"
              bgColor="grey"
              color="white"
            ></ButtonRound>
          </div>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import SideBar from "@/components/SideBar.vue";

import { mapActions, mapState, mapWritableState } from "pinia";
import { useBookmarkStore } from "@/stores/bookmark.js";
import { usePairStore } from "@/stores/pair.js";
import ButtonRound from "../components/ButtonRound.vue";

export default {
  data() {
    return {
      search: "",
    };
  },
  components: {
    SideBar,
    RouterView,
    ButtonRound,
  },
  computed: {
    ...mapState(useBookmarkStore, ["bookmarks"]),
    ...mapWritableState(usePairStore, ["query"]),
  },
  methods: {
    ...mapActions(useBookmarkStore, ["getBookmark"]),
    ...mapActions(usePairStore, ["getPairsAll"]),
    filterSearch() {
      this.query = {
        ...this.query,
        search: this.search,
      };

      this.$router.push({ path: "dashboard", query: this.query });
      this.getPairsAll();
    },
    doLogout() {
      localStorage.clear()
      this.$router.push("/");
    }
  },

  mounted() {
    this.getBookmark();
  },
  created() {},
};
</script>

<style scoped>
.row {
  margin-left: 17rem;
  width: 75%;
}
</style>
