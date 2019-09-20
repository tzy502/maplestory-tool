<template>
  <div class="container">
    <p class="warring">潜能提升计算</p>
    <!-- <p class="warring-content">测试版暂不支持无视计算</p> -->
    <div class="introduction">
      <!-- <button class="addLine" @click="onAdd">添加新一套配装</button>
      <button class="addLine" @click="onReduce">去除最后一套配装</button>-->
      <div class="box" v-for="(item,i) of items" :key="i">
        <div class="suitName">
          <p class="suitName_title">配装名：</p>
          <input class="enter_input_long" v-model="items[i].name" placeholder="请输入配装别名" />
        </div>

        <div class="btu">
          <button class="addLine" @click="lineAdd(i)">新增</button>
          <button class="addLine" @click="lineReduce(i)">降低</button>
          <button class="addLine" @click="linepop(i)">去除最后一项</button>
        </div>
        <div class="pannel" v-for="(change,j) of items[i].change" :key="j">
          <p class="enter_title">{{items[i].change[j].addName}}</p>
          <input style="display: none;" v-model="items[i].change[j].isAdd" />
          <input class="enter_input" type="number" v-model="items[i].change[j].num" />
          <input
            v-model="items[i].change[j].typeName"
            disabled="disabled"
            class="enter_picker"
            @click="showPicker(j)"
          />
          <mpvue-picker
            ref="mpvuePicker"
            :mode="mode"
            :pickerValueDefault="pickerValueDefault"
            @onChange="onChange"
            @onConfirm="onConfirm(i,j)"
            :pickerValueArray="typeList"
          ></mpvue-picker>
        </div>
      </div>
    </div>
    <div class="next_box">
      <img src="/static/images/result.png" @click="result" class="next" background-size="cover" />
    </div>
    <mptoast />
  </div>
</template>

<script>
import mptoast from "mptoast";
import mpvuePicker from "mpvue-picker";
import { count } from "../../utils/count.js";
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
    this.coefficient = wx.getStorageSync("coefficient");
    this.value = wx.getStorageSync("value");
    this.finalDamage = wx.getStorageSync("finalDamage");
    this.bossDamage = wx.getStorageSync("bossDamage");
    this.damage = wx.getStorageSync("damage");
    var haveDate = wx.getStorageSync("haveDate");
    if (haveDate != true) {
      this.$mptoast("请先填写装备详情", "error", "1");
      var url = "../../pages/first/main";
      wx.navigateTo({ url });
    }
  },
  data() {
    return {
      mode: "selector",
      typeList: [
        {
          label: "攻击",
          value: "atk"
        },
        {
          label: "%攻击",
          value: "atkp"
        },
        {
          label: "伤害/boss伤害",
          value: "damage"
        },
        {
          label: "主属性",
          value: "main"
        },
        {
          label: "%主属性",
          value: "mainP"
        },
        {
          label: "等级",
          value: "level"
        },
        {
          label: "无视",
          value: "igone"
        },
        {
          label: "爆伤",
          value: "critDamage"
        }
      ],
      items: [
        {
          name: "",
          change: [
            {
              addName: "新增",
              isAdd: "1",
              num: "0",
              type: "atk",
              typeName: "攻击"
            }
          ]
        }
      ],
      pickerValueDefault: [0],
      isAdd: "",
      type: "",
      label: "",
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
      value: "",
      finalDamage: "",
      bossDamage: "",
      damage: "",
      typeTransit: "",
      typeNameTransit: "",
      sumMainStat: "",
      sumViecStat: "",
      sumAtk: "",
      sumMainStatPotential: "",
      sumViecStatPotential: "",
      sumAtkPotential: ""
    };
  },

  methods: {
    showPicker(index) {
      this.$refs.mpvuePicker[index].show();
    },
    onConfirm(i, j) {
      this.items[i].change[j].typeName = this.typeNameTransit;
      this.items[i].change[j].type = this.typeTransit;
    },
    onChange(e) {
      this.typeNameTransit = e.label;

      this.typeTransit = e.value[0];
    },
    // onCancel(e) {
    // },
    onAdd() {
      this.items.push({ name: "", change: [] });
    },
    onReduce() {
      this.items.pop();
    },
    lineAdd(i) {
      var items = this.items;
      this.items[i].change.push({
        addName: "新增",
        isAdd: "1",
        num: "0",
        type: "atk",
        typeName: "攻击"
      });
      // this.items=items;
    },
    lineReduce(i) {
      var items = this.items;
      this.items[i].change.push({
        addName: "降低",
        isAdd: "-1",
        num: "0",
        type: "atk",
        typeName: "攻击"
      });
      // this.items=items;
    },
    linepop(i) {
      this.items[i].change.pop();
    },
    result() {
      var items=this.items;
      var equipContrastList = []
      for(var i=0;i<items.length;i++){
        equipContrastList.push(items[i]);
      }
      wx.request({
        url: "http://127.0.0.1:9333/api/analyse/equipChange",
        method: "Post",
        data: equipContrastList,
        headers: {
          "content-type": "application/json" // 默认值
        },
        success: function(res) {
          var data=res.data
          console.log(data.data)
          if ((data.code = 200)) {
            wx.setStorage({
              key: "changeList",
              data: data.data,
              success: function(res) {
                var url = "../../pages/presult/main";
                wx.navigateTo({ url });
              }
            });
          }
        }
      });
    }
  }
};
</script>

<style scoped>
.message {
  color: red;
  padding: 10rpx;
  text-align: center;
}

.introduction {
  margin-top: 30rpx;
  margin-left: 30rpx;

  width: 690rpx;
}
.warring {
  height: 31rpx;
  padding-top: 65rpx;
  margin-left: 58rpx;
  font-size: 32rpx;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
}
.warring-content {
  font-size: 26rpx;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 36rpx;
  margin-left: 58rpx;
  margin-top: 25rpx;
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
.box {
  margin-top: 36rpx;
  margin-bottom: 50rpx;
  border-bottom: 1px solid #eaeaea;
  background: rgba(255, 255, 255, 1);
  padding: 25rpx;

  box-shadow: 0rpx 3rpx 44rpx 2rpx rgba(0, 0, 0, 0.1);
  border-radius: 10rpx;
}
.pannel {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
}
.addLine {
  font-size: 28rpx;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
}
.enter_input {
  margin-top: 18rpx;
  padding-left: 10rpx;
  width: 300rpx;
  height: 30rpx;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(224, 224, 224, 1);
  border-radius: 35rpx;
}
.enter_input_long {
  margin-top: 18rpx;
  padding-left: 10rpx;
  /* width: 0rpx; */
  height: 30rpx;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(224, 224, 224, 1);
  border-radius: 35rpx;
}
.container {
  background: #f8f8fa;
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
.enter_title {
  height: 30rpx;
  font-size: 28rpx;
  width: 72rpx;
  margin-left: 29rpx;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(153, 153, 153, 1);
}

.enter_picker {
  height: 30rpx;
  font-size: 28rpx;
  width: 200rpx;
  margin-left: 15rpx;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(153, 153, 153, 1);
}
.btu {
  margin-top: 32rpx;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: nowrap;
}
.suitName_title {
  height: 30rpx;
  font-size: 28rpx;
  width: 120rpx;
  margin-left: 29rpx;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(153, 153, 153, 1);
}
.suitName {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
}
</style>