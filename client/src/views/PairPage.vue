<template>
  <div class="body d-flex flex-row my-3">
    <div class="card chart border-0 shadow p-3 me-4">
      <v-chart
        class="chart mx-3"
        :option="this.option"
        style="width: 95%"
      ></v-chart>
    </div>
    <div class="card arima border-0 shadow p-3">
      <h5>Ticker Data</h5>
      <br />
      <table class="table table-borderless">
        <tbody>
          <tr>
            <td>Last</td>
            <td style="text-align: right">{{ formatPrice(records.last) }}</td>
          </tr>
          <tr>
            <td>High</td>
            <td style="text-align: right">{{ formatPrice(records.high) }}</td>
          </tr>
          <tr>
            <td>Low</td>
            <td style="text-align: right">{{ formatPrice(records.low) }}</td>
          </tr>
          <tr>
            <td>Buy</td>
            <td style="text-align: right">{{ formatPrice(records.buy) }}</td>
          </tr>
          <tr>
            <td>Sell</td>
            <td style="text-align: right">{{ formatPrice(records.sell) }}</td>
          </tr>
          <tr>
            <td>Vol</td>
            <td style="text-align: right">
              {{ formatPrice(records.vol_idr) }}
            </td>
          </tr>
        </tbody>
      </table>
      <div @click="getSuggest" class="card shadow-sm text-end next-step">
        <div class="card-body">
          <h5 class="card-title">Next ARIMA Step</h5>
          <p class="card-text">{{ formatPrice(nextStep) }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="body d-flex mt-3 mb-5">
    <div class="card analysis border-0 shadow p-3">
      <h4>Analysis</h4>
      <div class="container my-3 d-flex flex-row">
        <div class="card suggestion shadow-sm border-0 me-3">
          <div class="card-body" style="width: 220px">
            <p class="card-text">Suggestion</p>
            <h5 class="card-title">{{ suggest }}</h5>
          </div>
        </div>
        <div class="card shadow-sm me-3">
          <div class="card-body" style="width: 220px">
            <p class="card-text">Error Term 1</p>
            <h5 class="card-title">{{ arimaErrors[0] }}</h5>
          </div>
        </div>
        <div class="card shadow-sm me-3">
          <div class="card-body" style="width: 220px">
            <p class="card-text">Error Term 2</p>
            <h5 class="card-title">{{ arimaErrors[1] }}</h5>
          </div>
        </div>
        <div class="card shadow-sm me-3">
          <div class="card-body" style="width: 220px">
            <p class="card-text">Alpha / 1-Alpha</p>
            <h5 class="card-title">0.5 / 95%</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapWritableState } from "pinia";
import { usePairStore } from "@/stores/pair.js";

import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart, CandlestickChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  DataZoomComponent,
  DataZoomInsideComponent,
  DataZoomSliderComponent,
} from "echarts/components";
import VChart from "vue-echarts";

use([
  CanvasRenderer,
  LineChart,
  CandlestickChart,
  GridComponent,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  DataZoomComponent,
  DataZoomInsideComponent,
  DataZoomSliderComponent,
]);

export default {
  data() {
    return {};
  },
  components: {
    VChart,
  },
  methods: {
    ...mapActions(usePairStore, [
      "getRecordAction",
      "getTickerAction",
      "getArima",
      "getSuggestion",
      "postRecord"
    ]),
    getSuggest() {
      this.getSuggestion();
      this.getArima(this.$route.params.pairId);
      this.postRecord(this.$route.params.pairId);
    },
    formatPrice(price) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      }).format(price);
    },
  },
  computed: {
    ...mapWritableState(usePairStore, [
      "records",
      "option",
      "nextStep",
      "suggest",
      "arimaErrors",
    ]),
  },
  mounted() {
    this.getRecordAction(this.$route.params.pairId);
    this.getTickerAction(this.$route.params.pairId);
  },
  created() {},
};
</script>

<style scoped>
.table > tbody > tr {
  margin-bottom: 20px;
}

.top {
  height: 50px;
}
.card {
  background-color: white;
  border-radius: 20px;
}
.chart {
  width: 75%;
  height: 450px;
}
.arima {
  width: 25%;
}
.analysis {
  width: 100%;
}
.next-step {
  background-color: #db678f;
  color: white;
  border: none;
}
.next-step:hover {
  cursor: pointer;
}
.suggestion {
  background-color: #00bf71;
  color: white;
}
</style>
