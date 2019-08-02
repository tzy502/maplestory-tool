<template>
  <div class="container">
    <!-- <div class="first_box">
      <div class="litter_bule"></div>
      <p class="first_content">结论</p>
    </div>
    <div class="pannle"></div>-->
    <div class="first_box">
      <div class="litter_bule"></div>
      <p class="first_content">收益明细</p>
     

    </div>
    <div class="pannle">
      <div class="online_blue">
        <div class="online-left">
          <p class="result-title">再提升1攻击力≈</p>
        </div>
        <div class="online-right">
          <p class="result-title">{{AtkUp}}单排</p>
        </div>
      </div>
      <div class="online_w">
        <div class="online-left">
          <p class="result-title">再提升1%攻击力≈</p>
        </div>
        <div class="online-right">
          <p class="result-title">{{AtkPUp}}单排</p>
        </div>
      </div>
      <div class="online_blue">
        <div class="online-left">
          <p class="result-title">再提升1主属性≈</p>
        </div>
        <div class="online-right">
          <p class="result-title">{{MainUp}}单排</p>
        </div>
      </div>
      <div class="online_w">
        <div class="online-left">
          <p class="result-title">再提升1%主属性≈</p>
        </div>
        <div class="online-right">
          <p class="result-title">{{MainPUp}}单排</p>
        </div>
      </div>
      <div class="online_blue">
        <div class="online-left">
          <p class="result-title">再提升1%爆伤≈</p>
        </div>
        <div class="online-right">
          <p class="result-title">{{CritDUp}}单排</p>
        </div>
      </div>
      <div class="online_w">
        <div class="online-left">
          <p class="result-title">再提升1伤害/boss伤害≈</p>
        </div>
        <div class="online-right">
          <p class="result-title">{{DamageUp}}单排</p>
        </div>
      </div>
    </div>

    <div class="cut"></div>

    <div class="first_box">
      <div class="litter_bule"></div>
      <p class="first_content">计算结果</p>
    </div>
    <div class="pannle">
      <div class="online_blue">
        <div class="online-left">
          <p class="result-title">再提升1%攻击力≈</p>
        </div>
        <div class="online-right">
          <p class="result-title">{{AtkAndP}}攻击力</p>
        </div>
      </div>

      <div class="online_w">
        <div class="online-left">
          <p class="result-title">再提升1点攻击力≈</p>
        </div>
        <div class="online-right">
          <p class="result-title">{{AtkAndMain}}主属性</p>
        </div>
      </div>
      <div class="online_blue">
        <div class="online-left">
          <p class="result-title">再提升1%攻击力≈</p>
        </div>
        <div class="online-right">
          <p class="result-title">{{AtkAndMainP}}%主属性</p>
        </div>
      </div>
      <div class="online_w">
        <div class="online-left">
          <p class="result-title">再提升1%爆伤≈</p>
        </div>
        <div class="online-right">
          <p class="result-title">{{CritDAndAtkP}}%攻击力</p>
        </div>
      </div>

      <div class="online_blue">
        <div class="online-left">
          <p class="result-title">再提升1%攻击力≈</p>
        </div>
        <div class="online-right">
          <p class="result-title">{{AtkPAndDamage}}%总伤/boss伤害</p>
        </div>
      </div>
    </div>
            <a href="../../pages/index/main">
          <div class="box">返回首页</div>
        </a>
  </div>
</template>

<script>
import { count } from "../../utils/count.js";
export default {
  data() {
    return {
      AtkUp: "",
      AtkPUp: "",
      MainUp: "",
      MainPUp: "",
      CritDUp: "",
      DamageUp: "",
      AtkAndP: "",
      AtkAndMain: "",
      AtkAndMainP: "",
      CritDAndAtkP: "",
      AtkPAndDamage: "",
      realMainStat:""
    };
  },
  mounted: function() {
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
    var list = wx.getStorageSync("list");
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
    var sumMainStat = 0;
    var sumViecStat = 0;
    var sumAtk = 0;
    var sumMainStatPotential = 0;
    var sumViecStatPotential = 0;
    var sumAtkPotential = 0;
    for (var i = 0; i < 39; i++) {
      var MainStat = list[i].item[0].value;
      if (MainStat != null && MainStat != "") {
        sumMainStat += parseInt(MainStat);
      }
      var ViecStat = list[i].item[1].value;
      if (ViecStat != null && ViecStat != "") {
        sumViecStat += parseInt(ViecStat);
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
      
    var real = count(
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
      damage,
      crit,
      critDamage,
      coefficient,
      superMain
    );
    var addmainStat=1;
    var avgent = wx.getStorageSync("avgent");
    if (avgent == 1) {
      addmainStat=100
    }
    var mainStatAddOne = count(
      level,
      arc,
      mapleWarrior,
      parseInt(sumMainStat + addmainStat),
      sumViecStat,
      sumAtk,
      sumMainStatPotential,
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
    var mainStatPotentialAddOne = count(
      level,
      arc,
      mapleWarrior,
      sumMainStat,
      sumViecStat,
      sumAtk,
      parseInt(sumMainStatPotential + 1),
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
    var atkAddOne = count(
      level,
      arc,
      mapleWarrior,
      sumMainStat,
      sumViecStat,
      parseInt(sumAtk + 1),
      sumMainStatPotential,
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
    var AtkPotentialAddOne = count(
      level,
      arc,
      mapleWarrior,
      sumMainStat,
      sumViecStat,
      sumAtk,
      sumMainStatPotential,
      sumViecStatPotential,
      parseInt(sumAtkPotential + 1),
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
    var damageAddOne = count(
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
      1 * damage + 1,
      crit,
      critDamage,
      coefficient,
      superMain
    );
    var critDamageAddOne = count(
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
      damage,
      crit,
      1 * critDamage + 1,
      coefficient,
      superMain
    );

    this.AtkPUp = (AtkPotentialAddOne - real).toFixed(1);
    this.AtkUp = (atkAddOne - real).toFixed(1);
    this.MainPUp = (mainStatPotentialAddOne - real).toFixed(1);
    var MainUp = (mainStatAddOne - real).toFixed(1);
    if (avgent == 1) {
      MainUp=MainUp/100
    }
     this.MainUp=MainUp
    this.CritDUp = (critDamageAddOne - real).toFixed(1);
    this.DamageUp = (damageAddOne - real).toFixed(1);
    this.AtkAndP = ((AtkPotentialAddOne - real) / MainUp).toFixed(
      1
    );
    this.AtkAndMain = ((atkAddOne - real) / (mainStatAddOne - real)).toFixed(1);
    this.AtkAndMainP = (
      (AtkPotentialAddOne - real) /
      (mainStatPotentialAddOne - real)
    ).toFixed(1);
    this.CritDAndAtkP = (
      (critDamageAddOne - real) /
      (AtkPotentialAddOne - real)
    ).toFixed(1);
    this.AtkPAndDamage = (
      (AtkPotentialAddOne - real) /
      (damageAddOne - real)
    ).toFixed(1);
    wx.setStorage({
      key: "real",
      data: real,
      success: function(res) {
        console.log("异步保存实际面板成功");
        wx.setStorage({
          key: "haveDate",
          data: 1,
          success: function(res) {
            console.log("设置标签");
          }
        });
      }
    });
    wx.setStorage({
      key: "sumMainStat",
      data: sumMainStat,
      success: function(res) {}
    });
    wx.setStorage({
      key: "sumViecStat",
      data: sumViecStat,
      success: function(res) {}
    });
    wx.setStorage({
      key: "sumAtk",
      data: sumAtk,
      success: function(res) {}
    });
    wx.setStorage({
      key: "sumMainStatPotential",
      data: sumMainStatPotential,
      success: function(res) {}
    });
    wx.setStorage({
      key: "sumViecStatPotential",
      data: sumViecStatPotential,
      success: function(res) {}
    });
    wx.setStorage({
      key: "sumAtkPotential",
      data: sumAtkPotential,
      success: function(res) {}
    });
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
  align-items: flex-start;
  justify-content: flex-start;
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
  background: rgba(255, 255, 255, 1);
  padding-left: 30rpx;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.online_blue {
  height: 80rpx;
  background: #eff6ff;
  display: flex;
  align-items: center;
}
.online_w {
  height: 80rpx;
  background: white;
  display: flex;
  align-items: center;
}
.online-left {
  width: 250rpx;

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
.cut {
  margin-top: 30rpx;
  border-bottom: 1px solid #eaeaea;
}
.box {
  margin-top: 36rpx;
  margin-left: 38rpx;
  margin-right: 42rpx;
  margin-top: 30rpx;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  padding-left: 41rpx;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 1px 30px 0px rgba(0, 0, 0, 0.08);
  border-radius: 6rpx;
    width: 700rpx;
}
</style>