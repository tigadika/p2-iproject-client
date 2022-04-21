<template>
  <div>
    <div class="d-flex flex-row mx-2">
      <SideBar></SideBar>
      <div class="row">
        <div
          class="top d-flex flex-row mx-3 my-2 justify-content-between align-items-center"
        >
          <div class="input-group">
            <form action="">
              <input
                type="search"
                class="form-control rounded-pill"
                placeholder="Search"
              />
            </form>
          </div>
          <div class="mt-2">
            <h2><i class="bi bi-person-circle"></i></h2>
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

import { mapActions, mapWritableState } from "pinia";
import { usePairStore } from "@/stores/pair.js";

export default {
  data() {
    return {};
  },
  components: {
    SideBar,
    RouterView,
  },
  methods: {},
  computed: {},
  mounted() {},
  created() {},
};
</script>

<style scoped>
.row {
  margin-left: 17rem;
  width: 75%;
}
</style>
