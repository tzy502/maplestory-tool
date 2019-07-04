<template>
  <div class="container">
    <div class="first_box">
      <div class="litter_bule"></div>
      <p class="first_content">计算结果</p>
    </div>
    <div class="pannle">
      <div class="online_blue">
        <div class="online-left">
          <p class="result-title">主属性</p>
        </div>
        <div class="online-right">
          <p class="result-title">{{sumMainStat}}%</p>
        </div>
      </div>

      <div class="online_w">
        <div class="online-left">
          <p class="result-title">副属性</p>
        </div>
        <div class="online-right">
          <p class="result-title">0%</p>
        </div>
      </div>
      <div class="online_blue">
        <div class="online-left">
          <p class="result-title">攻击</p>
        </div>
        <div class="online-right">
          <p class="result-title">0%</p>
        </div>
      </div>
      <div class="online_blue">
        <div class="online-left">
          <p class="result-title">主属性潜能</p>
        </div>
        <div class="online-right">
          <p class="result-title">0%</p>
        </div>
      </div>

      <div class="online_w">
        <div class="online-left">
          <p class="result-title">副属性潜能</p>
        </div>
        <div class="online-right">
          <p class="result-title">0%</p>
        </div>
      </div>
      <div class="online_blue">
        <div class="online-left">
          <p class="result-title">攻击潜能</p>
        </div>
        <div class="online-right">
          <p class="result-title">0%</p>
        </div>
      </div>
    </div>
    <img src="/static/images/result.png" class="next" background-size="cover" />
  </div>
</template>

<script>
import { count } from "../../utils/count.js";
export default {
  data() {
    return {
      sumMainStat: "",
      sumViecStat: "",
      sumAtk: "",
      sumMainStatPotential: "",
      sumViecStatPotential: "",
      sumAtkPotential: ""
    };
  },
  mounted: function() {
    var level = wx.getStorageSync("level");
    var arc = wx.getStorageSync("arc");
    var crit = wx.getStorageSync("crit");
    var critDamage = wx.getStorageSync("critDamage");
    var mapleWarrior = wx.getStorageSync("mapleWarrior");
    var superMain = wx.getStorageSync("superMain");
    var union = wx.getStorageSync("union");
    var union2 = wx.getStorageSync("union2");
    var job = wx.getStorageSync("job");
    var coefficient = wx.getStorageSync("coefficient");
    var value = wx.getStorageSync("value");
    var list = wx.getStorageSync("list");

    var sumMainStat = 0;
    var sumViecStat = 0;
    var sumAtk = 0;
    var sumMainStatPotential = 0;
    var sumViecStatPotential = 0;
    var sumAtkPotential = 0;
    for (var i = 0; i < 40; i++) {
      var MainStat = list[i].item[0].value;
      if (MainStat != null && MainStat != "") {
        console.log(MainStat)
        sumMainStat += parseInt(MainStat);
      }
      var ViecStat = list[i].item[1].value;
      if (ViecStat != null && ViecStat != "") {
        sumViecStat += parseInt(MainStat);
      }
      var Atk = list[i].item[2].value;
      if (Atk != null && Atk != "") {
        sumAtk += parseInt(Atk);
      }
      var MainStatPotential = list[i].item[3].value;
      if (MainStatPotential != null && MainStatPotential != "") {
        sumMainStatPotential += parseInt(MainStatPotential);
      }
      var ViecStatPotential = list[i].item[4].value;
      if (ViecStatPotential != null && ViecStatPotential != "") {
        sumViecStatPotential += parseInt(ViecStatPotential);
      }
      var AtkPotential = list[i].item[5].value;
      if (AtkPotential != null && AtkPotential != "") {
        sumAtkPotential += parseInt(AtkPotential);
      }
    }
    console.log(level)
    sumMainStat=(sumMainStat+(level*5+18)*(1+mapleWarrior/100))*(1+sumMainStatPotential/100)+arc*10;
    this.sumMainStat = sumMainStat;
    this.sumViecStat = sumViecStat;
    this.sumAtk = sumAtk;
    this.sumMainStatPotential = sumMainStatPotential;
    this.sumViecStatPotential = sumViecStatPotential;
    this.sumAtkPotential = sumAtkPotential;

    var level = count(level, arc);
  },

  methods: {}
};
</script>

<style scoped>
.message {
  color: red;
  padding: 10rpx;
  text-align: center;
}
.container {
  background: #f8f8fa;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.first_box {
  margin-left: 5rpx;
  margin-top: 26rpx;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: nowrap;
}
.litter_bule {
  width: 8px;
  height: 20px;
  background: rgba(102, 153, 255, 1);
  border-radius: 4px;
  margin-right: 15rpx;
}
.first_content {
  height: 40rpx;
  font-size: 28rpx;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  border-bottom: 1px solid #eaeaea;
}
.next {
  width: 712rpx;
  height: 122rpx;
}
.next_a {
  width: 95%;
  margin-top: 5rpx;
  border-radius: 10%;
}
.pannle {
  width: 750rpx;
  height: 1150rpx;
  background: rgba(255, 255, 255, 1);
  padding-left: 30rpx;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.online_blue {
  height: 80rpx;
  background: #eff6ff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.online_w {
  height: 80rpx;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.online-left {
  width: 200rpx;

  border-right: 1px solid #eaeaea;
}
.online-right {
  width: 490rpx;
}
.result-title {
  font-size: 26rpx;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
}
</style>