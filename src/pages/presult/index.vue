<template>
  <div class="container">
    <p class="warring">潜能提升柱状图</p>
    <div class="introduction">
      <div class="wrap">
        <mpvue-echarts :echarts="echarts" :onInit="ecBarInit" canvasId="bar" />
      </div>
    </div>
  </div>
  
</template>

<script>
import * as echarts from "echarts/dist/echarts.min";
import mpvueEcharts from "mpvue-echarts";
export default {
  data() {
    return {
      resultList: [],
      name: [],
      date: [],
      echarts,
      ecBarInit: function(canvas, width, height) {
        barChart = echarts.init(canvas, null, {
          width: width,
          height: height
        });
        canvas.setChart(barChart);
        var name = [];
        var date = [];
        var changeList = wx.getStorageSync("changeList");
        for (var i = 0; i < changeList.length; i++) {
          name.push(changeList[i].name);
          date.push(changeList[i].result);
        }
        barChart.setOption(getBarOption(name, date));
        return barChart;
      }
    };
  },
  components: {
    mpvueEcharts
  },
  onShareAppMessage() {},
  mounted: function() {}
};

let barChart, scatterChart;
function getBarOption(name, date) {
  return {
    color: ["#37a2da", "#32c5e9", "#67e0e3"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: 20,
      right: 20,
      bottom: 15,
      top: 40,
      containLabel: true
    },
    yAxis: [
      {
        type: "value",
        axisLine: {
          lineStyle: {
            color: "#999"
          }
        },
        axisLabel: {
          color: "#666"
        }
      }
    ],
     xAxis: [
      {
     
        type: "category",
        axisTick: { show: false },
        data: name,
        axisLine: {
          lineStyle: {
            color: "#999"
          }
        },
        axisLabel: {
          color: "#666"
        }
      }
    ],
    series: [
      {
        name: "提升",
        type: "bar",
        stack: "总量",
        label: {
          normal: {
            show: true
          }
        },
        data: date
      }
    ]
  };
}
</script>

<style scoped>
.container {
  background: #f8f8fa;
}
.wrap {
  width: 100%;
  height: 400rpx;
}
.introduction {
  margin-top: 30rpx;
  margin-left: 10rpx;
  padding: 10rpx;
  box-shadow: 0rpx 3rpx 44rpx 2rpx rgba(0, 0, 0, 0.1);
    border: 1px solid #eaeaea;
  width: 690rpx;
}
.warring {
  height: 31rpx;
  padding-top: 65rpx;
  margin-left: 276rpx;
  font-size: 32rpx;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
}
</style>