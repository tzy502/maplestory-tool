<template>
  <div class="container">
    <div class="first_box">
      <div class="litter_bule"></div>
      <p class="first_content">第一步，请根据角色面板填写以下属性</p>
    </div>

    <div class="pannle">
      <div class="enter">
        <p class="enter_title">角色名:</p>
        <input type="text" class="enter_input" v-model="name" placeholder="请输入角色名" />
      </div>
      <div class="enter">
        <p class="enter_title">武器类型:</p>
        <input
          v-model="job"
          disabled="disabled"
          class="enter_input"
          @click="showPicker"
          placeholder="请选择所使用武器类型"
        />
        <input hidden v-model="value" />
        <mpvue-picker
          ref="mpvuePicker"
          :mode="mode"
          :pickerValueDefault="pickerValueDefault"
          @onChange="onChange"
          :pickerValueArray="pickerValueArray"
        ></mpvue-picker>
      </div>
      <div class="enter">
        <p class="enter_title">等级:</p>
        <input type="number" class="enter_input" v-model="level" placeholder="请输入数值" />
      </div>
      <div class="enter">
        <p class="enter_title">神秘力量(只填写神秘徽章给予的):</p>
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
import mpvuePicker from "mpvue-picker";
export default {
  components: {
    mptoast,
    mpvuePicker
  },
  mounted: function() {
    this.name = wx.getStorageSync("name");
    this.level = wx.getStorageSync("level");
    this.arc = wx.getStorageSync("arc");
    this.crit = wx.getStorageSync("crit");
    this.critDamage = wx.getStorageSync("critDamage");
    this.mapleWarrior = wx.getStorageSync("mapleWarrior");
    this.superMain = wx.getStorageSync("superMain");
    this.union = wx.getStorageSync("union");
    this.union2 = wx.getStorageSync("union2");
    this.job = wx.getStorageSync("job");
    this.coefficient = wx.getStorageSync("coefficient");
    this.value = wx.getStorageSync("value");
    this.pickerValueDefault = [this.value];
  },
  data() {
    return {
      mode: "selector",
      pickerValueArray: [
        {
          label: "太刀（神之子-阿尔法）", //武器名字
          coefficient: "1.3", //系数
          value: 1 //下标
        },
        {
          label: "枪（黑骑士）", //武器名字
          coefficient: "1.3", //系数
          value: 2
        },
        {
          label: "双手剑（魂骑士，英雄）", //武器名字
          coefficient: "1.3", //系数
          value: 3
        },
        {
          label: "双手钝器（圣骑士）", //武器名字
          coefficient: "1.3", //系数
          value: 4
        }
      ],
      pickerValueDefault: [1],
      name: "",
      level: "",
      arc: "",
      crit: "",
      critDamage: "",
      mapleWarrior: "",
      superMain: "",
      union: "",
      union2: "",
      job: "",
      coefficient: "",
      value: ""
    };
  },

  methods: {
    showPicker() {
      this.$refs.mpvuePicker.show();
    },
    onConfirm(e) {
      console.log(e);
    },
    onChange(e) {
      console.log(e.label);
      this.job = e.label;
      this.value = e.value;
    },
    onCancel(e) {
      console.log(e);
    },
    next() {
      console.log(this.value);
      var level = this.level;
      if (level == null || level == "") {
        this.$mptoast("请填写等级", "error", "1");
        return;
      }
      if (level > 275 || level <= 0) {
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
        console.log(arc);
        wx.setStorage({
          key: "arc",
          data: "",
          success: function(res) {
            console.log("异步保存神秘成功");
          }
        });
      } else {
        if (arc > 1320 || arc <= 0 || arc % 10 != 0) {
          this.$mptoast("请填写正确的神秘力量", "error", "1");
          return;
        }
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
          data: "",
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
          data: "",
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
          data: "",
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
          data: "",
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
          data: "",
          success: function(res) {
            console.log("异步保存联盟1成功");
          }
        });
      } else {
        wx.setStorage({
          key: "union",
          data: union,
          success: function(res) {
            console.log("异步保存联盟1成功");
          }
        });
      }
      var union2 = this.union2;
      if (union2 == null || union2 == "") {
        wx.setStorage({
          key: "union2",
          data: "",
          success: function(res) {
            console.log("异步保存联盟2成功");
          }
        });
      } else {
        wx.setStorage({
          key: "union2",
          data: union2,
          success: function(res) {
            console.log("异步保存联盟2成功");
          }
        });
      }
      var job = this.job;
      if (job == null || job == "") {
        wx.setStorage({
          key: "job",
          data: "",
          success: function(res) {
            console.log("异步保存武器类型成功");
          }
        });
      } else {
        wx.setStorage({
          key: "job",
          data: job,
          success: function(res) {
            console.log("异步保存武器类型成功");
          }
        });
      }

      var coefficient = this.coefficient;
      if (coefficient == null || coefficient == "") {
        wx.setStorage({
          key: "coefficient",
          data: "",
          success: function(res) {
            console.log("异步保存系数成功");
          }
        });
      } else {
        wx.setStorage({
          key: "coefficient",
          data: coefficient,
          success: function(res) {
            console.log("异步保存系数成功");
          }
        });
      }

      var value = this.value;
      if (value == null || value == "") {
        wx.setStorage({
          key: "value",
          data: 1,
          success: function(res) {
            console.log("异步保存职业下标成功");
          }
        });
      } else {
        wx.setStorage({
          key: "value",
          data: value,
          success: function(res) {
            console.log("异步保存职业下标成功");
          }
        });
      }
      var name = this.name;
      if (name == null || name == "") {
        wx.setStorage({
          key: "name",
          data: "",
          success: function(res) {
            console.log("异步保存姓名成功");
          }
        });
      } else {
        wx.setStorage({
          key: "name",
          data: name,
          success: function(res) {
            console.log("异步保存姓名成功");
          }
        });
      }
      mpvue.navigateTo({ url: "../../pages/second/main" });
    }
  }
};
</script>

<style scoped>
.container {
  background: #F8F8FA;
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
   margin-top: 15rpx;
  width: 712rpx;
  height: 122rpx;
}
.pannle {
  width: 750rpx;
  height: 1350rpx;
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
  font-size: 28rpx;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(153, 153, 153, 1);
}
.enter_input {
  height: 50rpx;
  font-size: 28rpx;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(153, 153, 153, 1);
  justify-content: flex-end;
}
.enter_input_long {
  height: 50rpx;
  margin-top: 70rpx;
  font-size: 28rpx;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(153, 153, 153, 1);
  justify-content: flex-end;
}
</style>