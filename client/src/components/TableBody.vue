<template>
  <tr>
    <th @click="detailAction"><img :src="ticker.imgUrl" style="width: 20px;" alt=""></th>
    <td @click="detailAction">{{ticker.name}}</td>
    <td @click="detailAction" class="text-end">{{formatPrice(last)}}</td>
    <td @click="detailAction" class="text-end">{{formatPrice(vol)}}</td>
    <td @click="detailAction" class="text-end">{{formatPrice(high)}}</td>
    <td @click="detailAction" class="text-end">{{formatPrice(low)}}</td>
    <td class="text-center">
      <button @click="addToBookmark" class="btn btn-outline-warning btn-sm">Add</button>
    </td>
  </tr>
</template>

<script>
import { mapActions, mapWritableState } from "pinia";
import { useTickerStore } from "@/stores/ticker.js";
import { useBookmarkStore } from "@/stores/bookmark.js";

  export default {
    data() {
      return {
        last: '',
        high: '',
        low: '',
        vol: '',
        loopCounter: 0,
      }
    },
    props: {
      ticker: Object
    },
    computed: {
      ...mapWritableState(useBookmarkStore, ["bookmarks"])
    },
    methods: {
      ...mapActions(useTickerStore, ["getTickerAction"]),
      ...mapActions(useBookmarkStore, ["addBookmark", "getBookmark2"]),
      async getData() {
        try {
          const {data} = await this.getTickerAction(this.$props.ticker.id)
          this.low = data.realTimeData.ticker.low
          this.high = data.realTimeData.ticker.high
          this.last = data.realTimeData.ticker.last
          this.vol = data.realTimeData.ticker.vol_idr
        } catch (err) {
          console.log(err.response);
        }
      },
      async addToBookmark() {
        try {
          await this.addBookmark(this.$props.ticker.id)

          const { data } = await this.getBookmark2()

          this.bookmarks = data.data
        } catch (err) {
          console.log(err.response);
        }
        
      },
      formatPrice(price) {
        return new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0,
        }).format(price);
      },
      detailAction() {
        this.$emit("goToDetail", this.$props.ticker.id)
      }
    },
    mounted() {
      setTimeout(() => {this.getData()}, 1500);
    },
    created() {
    }
  }
</script>

<style scoped>
tr:hover {
  cursor: pointer;
}
</style>