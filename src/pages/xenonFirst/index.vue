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
        <p class="enter_title">武器类型（系数）:</p>
         <p class="enter_title">能量剑（尖兵）</p>
      </div>
      <div class="enter">
        <p class="enter_title">力量AP:</p>
        <input type="number" class="enter_input" v-model="strAp" placeholder="请输入数值" />
      </div>
            <div class="enter">
        <p class="enter_title">敏捷AP:</p>
        <input type="number" class="enter_input" v-model="dexAP" placeholder="请输入数值" />
      </div>
            <div class="enter">
        <p class="enter_title">运气AP:</p>
        <input type="number" class="enter_input" v-model="lucAp" placeholder="请输入数值" />
      </div>
      <div class="enter">
        <p class="enter_title">神秘力量(只填写神秘徽章给予的):</p>
        <input type="number" class="enter_input" v-model="arc" placeholder="请输入数值" />
      </div>
      <div class="enter">
        <p class="enter_title">伤害：</p>
        <input type="number" class="enter_input" v-model="damage" placeholder="请输入数值（不用填写百分号）" />
      </div>
      <div class="enter">
        <p class="enter_title">boss伤害：</p>
        <input type="number" class="enter_input" v-model="bossDamage" placeholder="请输入数值（不用填写百分号）" />
      </div>
      <div class="enter">
        <p class="enter_title">最终伤害：</p>
        <input type="number" class="enter_input" v-model="finalDamage" placeholder="请输入数值（不用填写百分号）" />
      </div>
      <div class="enter">
        <p class="enter_title">暴击：</p>
        <input type="number" class="enter_input" v-model="crit" placeholder="请输入数值（不用填写百分号）" />
      </div>
      <div class="enter">
        <p class="enter_title">暴击伤害：</p>
        <input type="number" class="enter_input" v-model="critDamage" placeholder="请输入数值（不用填写百分号）" />
      </div>
      <div class="enter">
        <p class="enter_title">无视防御力(实际无视)：</p>
        <input type="number" class="enter_input" v-model="igone" placeholder="请输入数值（不用填写百分号）" />
      </div>
      <div :style="{'display':mapleWarriorHidden}">
        <div class="enter">
          <p class="enter_title">冒险岛勇士(技能提升百分比)：</p>
          <input type="number" class="enter_input" v-model="mapleWarrior" placeholder="请输入数值" />
        </div>
      </div>
      <div class="enter">
        <p class="enter_title">超级技能主属性：</p>
        <input type="number" class="enter_input" v-model="superMain" placeholder="请输入数值" />
      </div>
      <div class="enter">
        <p class="enter_title">联盟系统提升的主属性 1 (攻击队占领效果提升的主属性):</p>
        <input type="number" class="enter_input" v-model="union" placeholder="请输入数值" />
      </div>
      <div class="enter">
        <p class="enter_title">内在主属性，角色卡总和:</p>
        <input type="number" class="enter_input" v-model="union2" placeholder="请输入数值" />
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
    this.finalDamage = wx.getStorageSync("finalDamage");
    this.bossDamage = wx.getStorageSync("bossDamage");
    this.damage = wx.getStorageSync("damage");
    this.igone = wx.getStorageSync("igone");
    this.avgent = wx.getStorageSync("avgent");
    this.inside = wx.getStorageSync("inside");
    this.start = wx.getStorageSync("start");
    this.black = wx.getStorageSync("black");
    this.dexAp = wx.getStorageSync("dexAp");
    this.strAp = wx.getStorageSync("strAp");
    this.lucAp = wx.getStorageSync("lucAp");
    this.pickerValueDefault = [this.value];
    if (this.avgent == "1") {
      this.insideHidden = "";
      this.mapleWarriorHidden = "none";
      this.pickerValueDefault = [13];
    }
  },
  data() {
    return {
      //  label:"",
      mode: "selector",
      // pickerValueArray: [
      //     {
      //     label: "能量剑（尖兵）", //武器名字
      //     coefficient: "1.125", //系数
      //     value: 34 //下标
      //   }
      // ],
      // pickerValueDefault: [1],
      name: "",
      level: "",
      arc: "",
      crit: "",
      critDamage: "",
      igone: "",
      mapleWarrior: "15",
      superMain: "",
      union: "",
      union2: "",
      job: "",
      coefficient: "1.125",
      value: "",
      finalDamage: "",
      bossDamage: "",
      damage: "",
      avgent: "",
      insideHidden: "none",
      mapleWarriorHidden: "",
      start: "",
      black: "",
      inside: "",
      strAp:"",
      dexAp:"",
      lucAp:""
    };
  },

  methods: {
    showPicker() {
      this.$refs.mpvuePicker.show();
    },
    onConfirm(e) {
      if (e.labe != null || e.labe != "") {
        this.job = e.label;
        this.value = e.value;
        console.log(this.value);
      }
    },
    onChange(e) {
      this.job = e.label;
    },
    onCancel(e) {
      this.job = "";
    },
    next() {
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
        if (arc > 1320 || arc < 0 || arc % 10 != 0) {
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
            var strAp = this.strAp;
      if (strAp == null || strAp == "") {

        wx.setStorage({
          key: "strAp",
          data: "",
          success: function(res) {
            console.log("异步保存神秘成功");
          }
        });
      } else {
        wx.setStorage({
          key: "strAp",
          data: strAp,
          success: function(res) {
            console.log("异步保存strAp成功");
          }
        });
      }
       var lucAp = this.lucAp;
      if (lucAp == null || lucAp == "") {

        wx.setStorage({
          key: "lucAp",
          data: "",
          success: function(res) {
            console.log("异步保存神秘成功");
          }
        });
      } else {
        wx.setStorage({
          key: "lucAp",
          data: lucAp,
          success: function(res) {
            console.log("异步保存lucAp成功");
          }
        });
      }
             var dexAP = this.dexAP;
      if (dexAP == null || dexAP == "") {

        wx.setStorage({
          key: "dexAP",
          data: "",
          success: function(res) {
            console.log("异步保存神秘成功");
          }
        });
      } else {
        wx.setStorage({
          key: "dexAP",
          data: dexAP,
          success: function(res) {
            console.log("异步保存dexAP成功");
          }
        });
      }
      var igone = this.igone;
      if (igone == null || igone == "") {
        wx.setStorage({
          key: "igone",
          data: "",
          success: function(res) {
            console.log("异步保存无视成功");
          }
        });
      } else {
        wx.setStorage({
          key: "igone",
          data: igone,
          success: function(res) {
            console.log("异步保存无视成功");
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
      var coefficient = 1.125;
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
      var finalDamage = this.finalDamage;
      if (finalDamage == null || finalDamage == "") {
        wx.setStorage({
          key: "finalDamage",
          data: "",
          success: function(res) {
            console.log("异步保存终伤成功");
          }
        });
      } else {
        wx.setStorage({
          key: "finalDamage",
          data: finalDamage,
          success: function(res) {
            console.log("异步保存终伤成功");
          }
        });
      }
      var damage = this.damage;
      if (damage == null || damage == "") {
        wx.setStorage({
          key: "damage",
          data: "",
          success: function(res) {
            console.log("异步保存终伤成功");
          }
        });
      } else {
        wx.setStorage({
          key: "damage",
          data: damage,
          success: function(res) {
            console.log("异步保存终伤成功");
          }
        });
      }
      var bossDamage = this.bossDamage;
      if (bossDamage == null || bossDamage == "") {
        wx.setStorage({
          key: "bossDamage",
          data: "",
          success: function(res) {
            console.log("异步保存终伤成功");
          }
        });
      } else {
        wx.setStorage({
          key: "bossDamage",
          data: bossDamage,
          success: function(res) {
            console.log("异步保存终伤成功");
          }
        });
      }
      var inside = this.inside;
      if (inside == null || inside == "") {
        wx.setStorage({
          key: "inside",
          data: "",
          success: function(res) {
            console.log("异步保存内在百分比成功");
          }
        });
      } else {
        wx.setStorage({
          key: "inside",
          data: inside,
          success: function(res) {
            console.log("异步保存内在百分比成功");
          }
        });
      }
      var start = this.start;
      if (start == null || start == "") {
        wx.setStorage({
          key: "start",
          data: "",
          success: function(res) {
            console.log("异步保存星星数成功");
          }
        });
      } else {
        wx.setStorage({
          key: "start",
          data: start,
          success: function(res) {
            console.log("异步保存星星数成功");
          }
        });
      }
            var black = this.black;
      if (black == null || black == "") {
        wx.setStorage({
          key: "black",
          data: "",
          success: function(res) {
            console.log("异步保存星星数成功");
          }
        });
      } else {
        wx.setStorage({
          key: "black",
          data: black,
          success: function(res) {
            console.log("异步保存星星数成功");
          }
        });
      }
      mpvue.navigateTo({ url: "../../pages/xenonSecond/main" });
    }
  }
};
</script>

<style scoped>
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
  margin-top: 15rpx;
  width: 712rpx;
  height: 122rpx;
}
.next_box {
  margin-left: 19rpx;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.pannle {
  width: 750rpx;
  background: rgba(255, 255, 255, 1);
  padding-left: 30rpx;
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
  width: 450rpx;
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