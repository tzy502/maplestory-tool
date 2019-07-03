<template>
  <div class="container">
    <div class="first_box">
      <div class="litter_bule"></div>
      <p class="first_content">第一步，请根据角色面板填写以下属性</p>
    </div>
    <div class="pannle">
      <div class="enter">
        <p class="enter_title">等级:</p>
        <input type="number" class="enter_input" v-model="level" placeholder="请输入数值" />
      </div>
      <div class="enter">
        <p class="enter_title">神秘力量:</p>
        <input type="number" class="enter_input" v-model="arc" placeholder="请输入数值" />
      </div>
      <div class="enter">
        <p class="enter_title">暴击：</p>
        <input type="number" class="enter_input" v-model="crit" placeholder="请输入数值" />
      </div>
      <div class="enter">
        <p class="enter_title">暴击伤害：</p>
        <input type="number" class="enter_input" v-model="critDamage" placeholder="请输入数值" />
      </div>
      <div class="enter">
        <p class="enter_title">冒险岛勇士：</p>
        <input type="number" class="enter_input" v-model="mapleWarrior" placeholder="请输入数值" />
      </div>
      <div class="enter">
        <p class="enter_title">超级主属性：</p>
        <input type="number" class="enter_input" v-model="superMain" placeholder="请输入数值" />
      </div>
      <div class="enter">
        <p class="enter_title">联盟系统提升的主属性 1 (攻击队占领效果提升的主属性):</p>
        <input type="number" class="enter_input_long" v-model="union" placeholder="请输入数值" />
      </div>
      <div class="enter">
        <p class="enter_title">联盟系统提升的主属性2（攻击队员效果提升的主属性）:</p>
        <input type="number" class="enter_input_long" v-model="union2" placeholder="请输入数值" />
      </div>
    </div>
    <div class="next_box">
      <img src="/static/images/next.png" @click="next" class="next" background-size="cover" />
  
    </div>
    <mptoast />
  </div>
</template>

<script>
import mptoast from "mptoast";
export default {
  components: {
    mptoast
  },
  data() {
    return {
    };
  }, 

  methods: {
    next() {
      var level = this.level;
      if (level == null || level == "") {
        this.$mptoast("请填写等级", "error", "1");
        return;
      }
       if (level >275 || level <=0) {
        this.$mptoast("请填写正确等级", "error", "1");
        return;
      }
      wx.setStorage({
        key: "level",
        data: level,
        success: function(res) {
          console.log("异步保存等级成功");
        }
      });
      var arc = this.arc;
      if (arc == null || arc == "") {
        wx.setStorage({
          key: "arc",
          data: 0,
          success: function(res) {
            console.log("异步保存神秘成功");
          }
        });
      } else {
        wx.setStorage({
          key: "arc",
          data: arc,
          success: function(res) {
            console.log("异步保存神秘成功");
          }
        });
      }
      var crit = this.crit;
      if (crit == null || crit == "") {
        wx.setStorage({
          key: "crit",
          data: 0,
          success: function(res) {
            console.log("异步保存暴击成功");
          }
        });
      } else {
        wx.setStorage({
          key: "crit",
          data: crit,
          success: function(res) {
            console.log("异步保存暴击成功");
          }
        });
      }
      var critDamage = this.critDamage;
      if (critDamage == null || critDamage == "") {
        wx.setStorage({
          key: "critDamage",
          data: 0,
          success: function(res) {
            console.log("异步保存爆伤成功");
          }
        });
      } else {
        wx.setStorage({
          key: "critDamage",
          data: critDamage,
          success: function(res) {
            console.log("异步保存爆伤成功");
          }
        });
      }
      var mapleWarrior = this.mapleWarrior;
      if (mapleWarrior == null || mapleWarrior == "") {
        wx.setStorage({
          key: "mapleWarrior",
          data: 0,
          success: function(res) {
            console.log("异步保存勇士成功");
          }
        });
      } else {
        wx.setStorage({
          key: "mapleWarrior",
          data: mapleWarrior,
          success: function(res) {
            console.log(mapleWarrior);
            console.log("异步保存勇士成功");
          }
        });
      }
      var superMain = this.superMain;
      if (superMain == null || superMain == "") {
        wx.setStorage({
          key: "superMain",
          data: 0,
          success: function(res) {
            console.log("异步保存超级主属性成功");
          }
        });
      } else {
        wx.setStorage({
          key: "superMain",
          data: superMain,
          success: function(res) {
            console.log("异步保存超级主属性成功");
          }
        });
      }
      var union = this.union;
      if (union == null || union == "") {
        wx.setStorage({
          key: "union",
          data: 0,
          success: function(res) {
            console.log("异步保存联盟1成功");
          }
        });
      } else {
        wx.setStorage({
          key: "union",
          data: union,
          success: function(res) {
            console.log("异步保存联盟成功");
          }
        });
      }
      var union2 = this.union2;
      if (union2 == null || union2 == "") {
        wx.setStorage({
          key: "arc",
          data: 0,
          success: function(res) {
            console.log("异步保存联盟成功");
          }
        });
      } else {
        wx.setStorage({
          key: "union2",
          data: union2,
          success: function(res) {
            console.log("异步保存联盟成功");
          }
        });
      }
       mpvue.navigateTo({url: '../../pages/second/main'})
    }
  }
};
</script>

<style scoped>
.container {
  background: rgba(255, 255, 255, 1);
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
.pannle {
  width: 750rpx;
  height: 1100rpx;
  background: rgba(255, 255, 255, 1);
  padding-left: 30rpx;
  align-items: flex-start;
  justify-content: flex-start;
}
.enter {
  margin-top: 45rpx;
  padding-block-end: 10rpx;
  border-bottom: 1px solid #eaeaea;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-end;
}
.enter_title {
  height: 50rpx;
  font-size: 40rpx;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(153, 153, 153, 1);
}
.enter_input {
  height: 50rpx;
  font-size: 30rpx;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(153, 153, 153, 1);
  justify-content: flex-end;
}
.enter_input_long {
  height: 50rpx;
  margin-top: 70rpx;
  font-size: 30rpx;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(153, 153, 153, 1);
  justify-content: flex-end;
}
</style>