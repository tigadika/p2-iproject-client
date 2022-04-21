<template>
  <div class="card border-0 shadow p-3 mb-5" style="width: 100%">
    <h3>All Coins</h3>
    <table class="table table-hover table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Coin</th>
          <th scope="col">Last</th>
          <th scope="col">Volume 24h</th>
          <th scope="col">High</th>
          <th scope="col">Low</th>
          <th scope="col">Favorite</th>
        </tr>
      </thead>
      <tbody>
        <TableBody
        v-for="ticker in tickerAll"
        :key="ticker.id"
        :ticker="ticker"
        @goToDetail="goToDetail"
        ></TableBody>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapWritableState } from "pinia";
import { usePairStore } from "@/stores/pair.js";
import { useBookmarkStore } from "@/stores/bookmark.js";
import TableBody from "../components/TableBody.vue";

export default {
  components: {
    TableBody
},
  computed: {
    ...mapWritableState(usePairStore, ["tickerAll"])
  },
  methods: {
    ...mapActions(usePairStore, ["getPairsAll"]),
    goToDetail(id) {
      this.$router.push(`/dashboard/${id}`)
    }
  },
  mounted() {
    this.getPairsAll()
  },
  created() {
  }
};
</script>

<style scoped>
.card {
  border-radius: 20px;
}
</style>
