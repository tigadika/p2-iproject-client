import { defineStore } from "pinia";
import axios from "axios";

export const usePairStore = defineStore({
  id: "pair",
  state: () => ({
    option: {
      title: {
        text: "pairId",
        left: "0",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
        },
      },
      legend: {
        data: [],
      },
      grid: {
        left: "12%",
        right: "10%",
        bottom: "15%",
      },
      xAxis: {
        type: "category",
        data: [],
        boundaryGap: false,
        axisLine: { onZero: false },
        splitLine: { show: false },
      },
      yAxis: {
        scale: true,
        splitArea: {
          show: true,
        },
      },
      dataZoom: [
        {
          type: "inside",
          start: 50,
          end: 100,
        },
        {
          show: true,
          type: "slider",
          top: "90%",
          start: 50,
          end: 100,
        },
      ],
      series: [
        {
          name: "",
          type: "candlestick",
          data: [],
          itemStyle: {
            color: "#00BF71",
            color0: "#ED7777",
            borderColor: "#00BF71",
            borderColor0: "#ED7777",
          },
        },
        {
          name: "",
          type: "line",
          data: [],
          smooth: true,
          lineStyle: {
            width: 1,
          },
        },
      ],
    },
    records: {},
    nextStep: "",
    arimaRecords: [],
    arimaErrors: [],
    suggest: "",
    tickerAll: [],
  }),
  getters: {},
  actions: {
    async getRecordAction(id) {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/main/records/${id}`,
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );
        this.option.title.text = data.data[0].Pair.name;
        this.option.series[0].name = data.data[0].Pair.name;
        this.option.legend.data.push(data.data[0].Pair.name);

        const time = data.data.map((el) => {
          const date = new Date(el.server_time * 1000).toLocaleString("en-US", {
            timeZoneName: "short",
          });
          return date;
        });

        this.option.xAxis.data = time;

        let dataEntry = [];
        let tempOpen;
        let dataArima = [];

        for (let i = 0; i < data.data.length; i++) {
          let tempArr = [];
          tempArr.push(tempOpen);
          tempArr.push(data.data[i].last);
          tempArr.push(data.data[i].low);
          tempArr.push(data.data[i].high);
          dataEntry.push(tempArr);
          dataArima.push(data.data[i].last);
          tempArr = [];
          tempOpen = data.data[i].last;
        }

        this.option.series[0].data = dataEntry;
        this.option.series[1].data = dataArima;
      } catch (err) {
        console.log(err.response);
      }
    },

    async getTickerAction(id) {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/main/ticker/${id}`,
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );

        this.records = data.realTimeData.ticker;
      } catch (err) {
        console.log(err.response);
      }
    },

    async getArima(id) {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/main/arima/${id}`,
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );

        this.option.xAxis.data.push(
          "1 Step",
          "2 Step",
          "3 Step",
          "4 Step",
          "5 Step",
          "6 Step",
          "7 Step"
        );

        for (let i = 0; i < data.pred.length; i++) {
          this.option.series[1].data.push(data.pred[i]);
        }
        this.option.series[1].name = "ARIMA";
        this.option.legend.data.push("ARIMA");
        this.nextStep = Math.round(data.pred[0]);
        this.arimaRecords = data.pred;
        this.arimaErrors = data.errors;
      } catch (err) {
        console.log(err.response);
      }
    },

    async getSuggestion() {
      console.log(1);
      if (this.nextStep > this.arimaRecords[this.arimaRecords.length - 1]) {
        this.suggest = "SELL";
      } else if (
        this.nextStep < this.arimaRecords[this.arimaRecords.length - 1]
      ) {
        this.suggest = "BUY";
      } else {
        this.suggest = "HOLD";
      }
    },

    async getPairsAll() {
      try {
        const { data } = await axios.get(`http://localhost:3000/main/pairs`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });

        this.tickerAll = data.data;
      } catch (err) {
        console.log(err.response);
      }
    },

    async postRecord(id) {
      try {
        const { data } = await axios.post(
          `http://localhost:3000/main/ticker/${id}`,
          {},
          {
            headers: {
              access_token: localStorage.getItem("access_token"),
            },
          }
        );
      } catch (err) {
        console.log(err.response);
      }
    },
  },
});
