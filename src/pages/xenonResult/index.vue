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
          <p class="result-title">再提升1力量≈</p>
        </div>
        <div class="online-right">
          <p class="result-title">{{strUp}}单排</p>
        </div>
      </div>
      <div class="online_w">
        <div class="online-left">
          <p class="result-title">再提升1%力量≈</p>
        </div>
        <div class="online-right">
          <p class="result-title">{{strPUp}}单排</p>
        </div>
      </div>
      <div class="online_blue">
        <div class="online-left">
          <p class="result-title">再提升1敏捷≈</p>
        </div>
        <div class="online-right">
          <p class="result-title">{{dexUp}}单排</p>
        </div>
      </div>
      <div class="online_w">
        <div class="online-left">
          <p class="result-title">再提升1%敏捷≈</p>
        </div>
        <div class="online-right">
          <p class="result-title">{{dexPUp}}单排</p>
        </div>
      </div>
      <div class="online_blue">
        <div class="online-left">
          <p class="result-title">再提升1运气≈</p>
        </div>
        <div class="online-right">
          <p class="result-title">{{lucUp}}单排</p>
        </div>
      </div>
      <div class="online_w">
        <div class="online-left">
          <p class="result-title">再提升1%运气≈</p>
        </div>
        <div class="online-right">
          <p class="result-title">{{lucPUp}}单排</p>
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
          <p class="result-title">{{AtkAndStr}}力量</p>
        </div>
      </div>
      <div class="online_blue">
        <div class="online-left">
          <p class="result-title">再提升1%攻击力≈</p>
        </div>
        <div class="online-right">
          <p class="result-title">{{AtkAndStrP}}%力量</p>
        </div>
      </div>
      <div class="online_w">
        <div class="online-left">
          <p class="result-title">再提升1点攻击力≈</p>
        </div>
        <div class="online-right">
          <p class="result-title">{{AtkAndDex}}敏捷</p>
        </div>
      </div>
      <div class="online_blue">
        <div class="online-left">
          <p class="result-title">再提升1%攻击力≈</p>
        </div>
        <div class="online-right">
          <p class="result-title">{{AtkAndDexP}}%敏捷</p>
        </div>
      </div>
      <div class="online_w">
        <div class="online-left">
          <p class="result-title">再提升1点攻击力≈</p>
        </div>
        <div class="online-right">
          <p class="result-title">{{AtkAndLuc}}运气</p>
        </div>
      </div>
      <div class="online_blue">
        <div class="online-left">
          <p class="result-title">再提升1%攻击力≈</p>
        </div>
        <div class="online-right">
          <p class="result-title">{{AtkAndLucP}}%运气</p>
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
    <a href="../../pages/xenonIndex/main">
      <div class="box">返回首页</div>
    </a>
  </div>
</template>

<script>
import { count } from "../../utils/count.js";
import { xenoncount } from "../../utils/count.js";
export default {
  data() {
    return {
      AtkUp: "",
      AtkPUp: "",
      strUp: "",
      strPUp: "",
      dexUp: "",
      dexPUp: "",
      lucUp: "",
      lucPUp: "",
      CritDUp: "",
      DamageUp: "",
      AtkAndP: "",
      AtkAndStr: "",
      AtkAndStrP: "",
      AtkAndDex: "",
      AtkAndDexP: "",
      AtkAndLuc: "",
      AtkAndLucP: "",
      CritDAndAtkP: "",
      AtkPAndDamage: "",
      realMainStat: ""
    };
  },
  mounted: function() {
    var dexAp = wx.getStorageSync("dexAp");
    if (dexAp == null || dexAp == "") {
      dexAp = 0;
    }
    var strAp = wx.getStorageSync("strAp");
    if (strAp == null || strAp == "") {
      strAp = 0;
    }
    var lucAp = wx.getStorageSync("lucAp");
    if (lucAp == null || lucAp == "") {
      lucAp = 0;
    }
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
    var sumStrStat = 0;
    var sumDexStat = 0;
    var sumLucStat = 0;
    var sumAtk = 0;
    var sumStrStatPotential = 0;
    var sumDexStatPotential = 0;
    var sumLucStatPotential = 0;
    var sumAtkPotential = 0;
    for (var i = 0; i < 39; i++) {
      var str = list[i].item[0].value;
      if (str != null && str != "") {
        sumStrStat += parseInt(str);
      }
      var luc = list[i].item[1].value;
      if (luc != null && luc != "") {
        sumLucStat += parseInt(luc);
      }
      var dex = list[i].item[2].value;
      if (dex != null && dex != "") {
        sumDexStat += parseInt(dex);
      }

      var Atk = list[i].item[3].value;
      if (Atk != null && Atk != "") {
        sumAtk += parseInt(Atk);
      }
      var strPotential = list[i].item[4].value;
      if (strPotential != null && strPotential != "") {
        sumStrStatPotential += parseInt(strPotential);
      }

      var lucPotential = list[i].item[5].value;
      if (lucPotential != null && lucPotential != "") {
        sumLucStatPotential += parseInt(lucPotential);
      }
      var dexPotential = list[i].item[6].value;
      if (dexPotential != null && dexPotential != "") {
        sumDexStatPotential += parseInt(dexPotential);
      }
      var AtkPotential = list[i].item[7].value;
      if (AtkPotential != null && AtkPotential != "") {
        sumAtkPotential += parseInt(AtkPotential);
      }
    }

    var real = xenoncount(
      strAp,
      lucAp,
      dexAp,
      sumStrStat,
      sumDexStat,
      sumLucStat,
      sumStrStatPotential,
      sumDexStatPotential,
      sumLucStatPotential,
      arc,
      mapleWarrior,
      sumAtk,
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

    var strAddOne = xenoncount(
      strAp,
      lucAp,
      dexAp,
      parseInt(sumStrStat + 1),
      sumDexStat,
      sumLucStat,
      sumStrStatPotential,
      sumDexStatPotential,
      sumLucStatPotential,
      arc,
      mapleWarrior,
      sumAtk,
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
    var mainStrPotentialAddOne = xenoncount(
      strAp,
      lucAp,
      dexAp,
      sumStrStat,
      sumDexStat,
      sumLucStat,
      parseInt(sumStrStatPotential + 1),
      sumDexStatPotential,
      sumLucStatPotential,
      arc,
      mapleWarrior,
      sumAtk,
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
    var dexAddOne = xenoncount(
      strAp,
      lucAp,
      dexAp,
      sumStrStat,
      parseInt(sumDexStat + 1),
      sumLucStat,
      sumStrStatPotential,
      sumDexStatPotential,
      sumLucStatPotential,
      arc,
      mapleWarrior,
      sumAtk,
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
    var dexPotentialAddOne = xenoncount(
      strAp,
      lucAp,
      dexAp,
      sumStrStat,
      sumDexStat,
      sumLucStat,
      sumStrStatPotential,
      parseInt(sumDexStatPotential + 1),
      sumLucStatPotential,
      arc,
      mapleWarrior,
      sumAtk,
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
    var lucAddOne = xenoncount(
      strAp,
      lucAp,
      dexAp,
      sumStrStat,
      sumDexStat,
      parseInt(sumLucStat + 1),
      sumStrStatPotential,
      sumDexStatPotential,
      sumLucStatPotential,
      arc,
      mapleWarrior,
      sumAtk,
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
    var lucPotentialAddOne = xenoncount(
      strAp,
      lucAp,
      dexAp,
      sumStrStat,
      sumDexStat,
      sumLucStat,
      sumStrStatPotential,
      sumDexStatPotential,
      parseInt(sumLucStatPotential + 1),
      arc,
      mapleWarrior,
      sumAtk,
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
    var atkAddOne = xenoncount(
      strAp,
      lucAp,
      dexAp,
      sumStrStat,
      sumDexStat,
      sumLucStat,
      sumStrStatPotential,
      sumDexStatPotential,
      sumLucStatPotential,
      arc,
      mapleWarrior,
      parseInt(sumAtk + 1),
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
    var AtkPotentialAddOne = xenoncount(
      strAp,
      lucAp,
      dexAp,
      sumStrStat,
      sumDexStat,
      sumLucStat,
      sumStrStatPotential,
      sumDexStatPotential,
      sumLucStatPotential,
      arc,
      mapleWarrior,
      sumAtk,
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
    var critDamageAddOne = xenoncount(
      strAp,
      lucAp,
      dexAp,
      sumStrStat,
      sumDexStat,
      sumLucStat,
      sumStrStatPotential,
      sumDexStatPotential,
      sumLucStatPotential,
      arc,
      mapleWarrior,
      sumAtk,
      sumAtkPotential,
      union,
      union2,
      finalDamage,
      bossDamage,
      damage,
      crit,
      parseInt(critDamage + 1),
      coefficient,
      superMain
    );
    var damageAddOne = xenoncount(
      strAp,
      lucAp,
      dexAp,
      sumStrStat,
      sumDexStat,
      sumLucStat,
      sumStrStatPotential,
      sumDexStatPotential,
      sumLucStatPotential,
      arc,
      mapleWarrior,
      sumAtk,
      sumAtkPotential,
      union,
      union2,
      finalDamage,
      bossDamage,
      parseInt(damage + 1),
      crit,
      critDamage,
      coefficient,
      superMain
    );
    var AtkPUp = (AtkPotentialAddOne - real).toFixed(1);
    this.AtkPUp = AtkPUp;
    var AtkUp = (atkAddOne - real).toFixed(1);
    this.AtkUp = AtkUp;
    var strUp = (strAddOne - real).toFixed(1);
    this.strUp = strUp;
    var strPUp = (mainStrPotentialAddOne - real).toFixed(1);
    this.strPUp = strPUp;

    var dexUp = (dexAddOne - real).toFixed(1);
    this.dexUp = dexUp;
    var dexPUp = (dexPotentialAddOne - real).toFixed(1);
    this.dexPUp = dexPUp;
    var lucUp = (lucAddOne - real).toFixed(1);
    this.lucUp = lucUp;
    var lucPUp = (lucPotentialAddOne - real).toFixed(1);
    this.lucPUp = lucPUp;
    var CritDUp = (critDamageAddOne - real).toFixed(1);
    this.CritDUp = CritDUp;
    var DamageUp = (damageAddOne - real).toFixed(1);
    this.DamageUp = DamageUp;
    this.AtkAndP = (AtkPUp / AtkUp).toFixed(1);
    this.AtkAndStr = (AtkUp / strUp).toFixed(1);
    this.AtkAndStrP = (AtkPUp / strPUp).toFixed(1);
    this.AtkAndDex = (AtkUp / dexUp).toFixed(1);
    this.AtkAndDexP = (AtkPUp / dexPUp).toFixed(1);
    this.AtkAndLuc = (AtkUp / lucUp).toFixed(1);
    this.AtkAndLucP = (AtkPUp / lucPUp).toFixed(1);
    this.CritDAndAtkP = (CritDUp / AtkPUp).toFixed(1);
    this.AtkPAndDamage = (AtkPUp / DamageUp).toFixed(1);
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
      key: "sumAtk",
      data: sumAtk,
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