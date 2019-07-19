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
import { count } from "../../utils/count.js";
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
        var level = wx.getStorageSync("level");
        var arc = wx.getStorageSync("arc");
        var crit = wx.getStorageSync("crit");
        if (crit == null || crit == "") {
          crit = 0;
        }
        var critDamage = wx.getStorageSync("critDamage");
        if (critDamage == null || critDamage == "") {
          critDamage = 0;
        }
        var mapleWarrior = wx.getStorageSync("mapleWarrior");
        if (mapleWarrior == null || mapleWarrior == "") {
          mapleWarrior = 15;
        }
        var superMain = wx.getStorageSync("superMain");
        if (superMain == null || superMain == "") {
          superMain = 0;
        }
        var union = wx.getStorageSync("union");
        if (union == null || union == "") {
          union = 0;
        }
        var union2 = wx.getStorageSync("union2");
        if (union2 == null || union2 == "") {
          union2 = 0;
        }
        var job = wx.getStorageSync("job");
        var coefficient = wx.getStorageSync("coefficient");
        if (coefficient == null || coefficient == "") {
          coefficient = 1.0;
        }
        var value = wx.getStorageSync("value");
        var finalDamage = wx.getStorageSync("finalDamage");
        if (finalDamage == null || finalDamage == "") {
          finalDamage = 0;
        }
        var bossDamage = wx.getStorageSync("bossDamage");
        if (bossDamage == null || bossDamage == "") {
          bossDamage = 0;
        }
        var damage = wx.getStorageSync("damage");
        if (damage == null || damage == "") {
          damage = 0;
        }
        var sumMainStat = wx.getStorageSync("sumMainStat");
        if (sumMainStat == null || sumMainStat == "") {
          sumMainStat = 0;
        }
        var sumViecStat = wx.getStorageSync("sumViecStat");
        if (sumViecStat == null || sumViecStat == "") {
          sumViecStat = 0;
        }
        var sumAtk = wx.getStorageSync("sumAtk");
        if (sumAtk == null || sumAtk == "") {
          sumAtk = 0;
        }
        var sumMainStatPotential = wx.getStorageSync("sumMainStatPotential");
        if (sumMainStatPotential == null || sumMainStatPotential == "") {
          sumMainStatPotential = 0;
        }
        var sumViecStatPotential = wx.getStorageSync("sumViecStatPotential");
        if (sumViecStatPotential == null || sumViecStatPotential == "") {
          sumViecStatPotential = 0;
        }
        var sumAtkPotential = wx.getStorageSync("sumAtkPotential");
        if (sumAtkPotential == null || sumAtkPotential == "") {
          sumAtkPotential = 0;
        }
        var real = wx.getStorageSync("real");
        if (real == null || real == "") {
          real = 0;
        }
        var igone = wx.getStorageSync("igone");
        if (igone == null || igone == "") {
          igone = 0;
        }
        var changeList = [3, 6, 9, 12, 15, 18];
        var list = [];
        for (var i = 0; i < changeList.length; i++) {
          
          var result = count(
            level,
            arc,
            mapleWarrior,
            sumMainStat,
            sumViecStat,
            sumAtk,
            sumMainStatPotential,
            sumViecStatPotential,
            parseInt(sumAtkPotential) + parseInt(changeList[i]),
            union,
            union2,
            finalDamage,
            bossDamage,
            damage,
            crit,
            critDamage,
            coefficient,
            superMain
          );
          var change =
            parseInt(result * (1 - 3 * (1 - igone / 100))) -
            parseInt(real * (1 - 3 * (1 - igone / 100)));
          var name = +changeList[i] + "%攻击";

          list.push({ name: name, change: change });
        }
        for (var i = 0; i < changeList.length; i++) {
          var result = count(
            level,
            arc,
            mapleWarrior,
            sumMainStat,
            sumViecStat,
            sumAtk,
            parseInt(sumMainStatPotential) + parseInt(changeList[i]),
            sumViecStatPotential,
            sumAtkPotential,
            union,
            union2,
            finalDamage,
            bossDamage,
            damage,
            crit,
            critDamage,
            coefficient,
            superMain
          );
          var change =
            parseInt(result * (1 - 3 * (1 - igone / 100))) -
            parseInt(real * (1 - 3 * (1 - igone / 100)));
          var name = changeList[i] + "%主属性";

          list.push({ name: name, change: change });
        }
        for (var i = 0; i < changeList.length; i++) {
          var result = count(
            level,
            arc,
            mapleWarrior,
            sumMainStat,
            sumViecStat,
            sumAtk,
            sumMainStatPotential,
            sumViecStatPotential,
            sumAtkPotential,
            union,
            union2,
            finalDamage,
            bossDamage,
            parseInt(damage) + parseInt(changeList[i]),
            crit,
            critDamage,
            coefficient,
            superMain
          );
          var change =
            parseInt(result * (1 - 3 * (1 - igone / 100))) -
            parseInt(real * (1 - 3 * (1 - igone / 100)));

          var name = changeList[i] + "%伤害";
          list.push({ name: name, change: change });
        }
        changeList = [20, 30, 35, 40, 60, 70];
        for (var i = 0; i < changeList.length; i++) {
          var result = count(
            level,
            arc,
            mapleWarrior,
            sumMainStat,
            sumViecStat,
            sumAtk,
            sumMainStatPotential,
            sumViecStatPotential,
            sumAtkPotential,
            union,
            union2,
            finalDamage,
            bossDamage,
            parseInt(damage) + parseInt(changeList[i]),
            crit,
            critDamage,
            coefficient,
            superMain
          );
          var change =
            parseInt(result * (1 - 3 * (1 - igone / 100))) -
            parseInt(real * (1 - 3 * (1 - igone / 100)));
          var name = changeList[i] + "%boss伤害";
          list.push({ name: name, change: change });
        }
        changeList = [15, 20, 30, 35, 40, 45];
        for (var i = 0; i < changeList.length; i++) {
          var newIgone = parseInt(igone)+ ((100- parseInt(igone)) * (( parseInt(changeList[i])) / 100));
          if(newIgone>=100){
            newIgone=100
          }
    
          var change =
            parseInt(real * (1 - 3 * (1 - newIgone / 100))) -
            parseInt(real * (1 - 3 * (1 - igone / 100)));
          var name = changeList[i] + "%无视";
          list.push({ name: name, change: change });
        }
        

       var newIgone = parseInt(igone)+ (100- parseInt(igone)) * 0.15;
       newIgone = parseInt(newIgone)+ (100- parseInt(newIgone)) * 0.15;
       console.log(newIgone)
         if(newIgone>=100){
            newIgone=100
          }
        var change =
          parseInt(real * (1 - 3 * (1 - newIgone / 100))) -
          parseInt(real * (1 - 3 * (1 - igone / 100)));
        var name = "双15%无视";
        list.push({ name: name, change: change });
        var nameList = [];
        var dateList = [];
        for (var i = 0; i < list.length; i++) {
          for (var j = i; j < list.length; j++) {
            if (list[i].change > list[j].change) {
              var temp = list[i];
              list[i] = list[j];
              list[j] = temp;
            }
          }
        }
        for (var i = 1; i < list.length; i++) {
          nameList.push(list[i].name);
          dateList.push(list[i].change);
        }
        barChart.setOption(getBarOption(nameList, dateList));
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
      left: "10rpx",
      right: "10rpx",
      bottom: "10rpx",
      top: "10rpx",
      containLabel: true
    },
    xAxis: [
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
    yAxis: [
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
  height: 1000px;
}
.introduction {
  margin-top: 30rpx;
  margin-left: 10rpx;
  padding: 10rpx;
  box-shadow: 0rpx 3rpx 44rpx 2rpx rgba(0, 0, 0, 0.1);
  border: 1px solid #eaeaea;
  width: 710rpx;
}
.warring {
  height: 31rpx;
  padding-top: 30rpx;
  margin-left: 276rpx;
  font-size: 32rpx;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
}
</style>