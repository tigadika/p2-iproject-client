<template>
  <tr @click="detailAction">
    <th><img :src="ticker.imgUrl" style="width: 20px;" alt=""></th>
    <td>{{ticker.name}}</td>
    <td class="text-end">{{formatPrice(last)}}</td>
    <td class="text-end">{{formatPrice(vol)}}</td>
    <td class="text-end">{{formatPrice(high)}}</td>
    <td class="text-end">{{formatPrice(low)}}</td>
    <td></td>
  </tr>
</template>

<script>
import { mapActions, mapWritableState } from "pinia";
import { useTickerStore } from "@/stores/ticker.js";

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
    methods: {
      ...mapActions(useTickerStore, ["getTickerAction"]),
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