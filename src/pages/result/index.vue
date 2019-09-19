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
import { conncent } from "../../utils/conncent.js";
import { backendCount } from "../../utils/conncent.js";
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
      realMainStat: ""
    };
  },
  mounted: function() {
    var Promise = backendCount();
    var result;
    //     wx.showLoading({
    //   title: "计算ing……"
    // });

    Promise.then(res => {
      result = res;
      this.AtkPUp = result.atkPUp;
      this.AtkUp = result.atkUp;
      this.MainUp = result.mainUp;
      this.MainPUp = result.mainPUp;
      this.CritDUp = result.critDUp;
      this.DamageUp = result.damageUp;
      this.AtkAndP = result.atkAndP;
      this.AtkAndMain = result.atkAndMain;
      this.AtkAndMainP = result.atkAndMainP;
      this.CritDAndAtkP = result.critDAndAtkP;
      this.AtkPAndDamage = result.atkPAndDamage;
      wx.setStorage({
        key: "real",
        data: result.real,
        success: function(res) {
          console.log("异步保存实际面板成功");
              console.log(result.real);
          wx.setStorage({
            key: "haveDate",
            data: 1,
            success: function(res) {
              console.log("设置标签");
            }
          });
        }
      });
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
    margin-right: 5rpx;
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
    width: 712rpx;
  height: 122rpx;
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