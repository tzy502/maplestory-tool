<template>
  <div class="container">
    <p class="warring">真实无视计算</p>
    <div class="introduction"></div>
    <div class="first_box">
      <div class="litter_bule"></div>
      <p class="first_content">请填写以下内容</p>
    </div>

    <div class="pannle">
      <div class="enter">
        <p class="enter_title">面板无视:</p>
        <input type="number" class="enter_input" v-model="igrone" placeholder="请输入数值" />
      </div>
      <div class="enter">
        <p class="enter_title">超级技能无视:</p>
        <input type="number" class="enter_input" v-model="superSkill" placeholder="请输入数值" />
      </div>
      <div class="enter">
        <p class="enter_title">核心无视:</p>
        <input type="number" class="enter_input" v-model="core" placeholder="请输入数值" />
      </div>
      <div class="enter" v-for="(skill,i) of skills" :key="i">
        <p class="enter_title">技能无视：</p>
        <input type="number" class="enter_input" v-model="skills[i].igrone" placeholder="请输入数值" />
      </div>
      <div class="btu">
        <button class="addLine" @click="lineAdd()">新增一条技能无视</button>
        <button class="addLine" @click="linepop()">去除一条技能无视</button>
      </div>

      <div class="enter">
        <p class="enter_title">实际无视：</p>
        <p class="enter_input">{{realIgrone}}</p>
      </div>
    </div>
    <div class="next_box">
      <img src="/static/images/result.png" @click="analyse" class="next" background-size="cover" />
    </div>
    <mptoast />
  </div>
</template>

<script>
import mptoast from "mptoast";
import mpvuePicker from "mpvue-picker";
import { ignoreChange } from "../../utils/conncent.js";
export default {
  components: {
    mptoast,
    mpvuePicker
  },
  mounted: function() {      this.igrone = wx.getStorageSync("igone");},
  data() {
    return {
      igrone: "",
      superSkill: "",
      core: "",
      realIgrone: "",
      skills: []
    };
  },

  methods: {
    linepop() {
      this.skills.pop();
    },
    lineAdd() {
      this.skills.push({});
    },
    analyse() {
      
      var igoneChange = [];
      igoneChange.push( this.igrone);
      var realIgrone = parseInt(this.igrone);
      var superSkill = this.superSkill;
      if (superSkill != null && superSkill != "") {
        igoneChange.push(superSkill);
      }
      var core = this.core;
      if (core != null && core != "") {
        igoneChange.push(core);
      }

      var skills = this.skills;
      for (var i = 0; i < skills.length; i++) {
        var skill = skills[i].igrone;
        if (skill != null && skill != "") {
          igoneChange.push(skill);
        }
      }
          var Promise = ignoreChange(igoneChange);
     Promise.then(res => {
       console.log(res)
        this.realIgrone=res
     })

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
  /* margin-top: 26rpx; */
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
.addLine {
  font-size: 28rpx;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  width: 320rpx;
}

.btu {
  margin-top: 32rpx;
  display: flex;
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
.introduction {
  margin-top: 26rpx;
  width: 90%;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0rpx 3rpx 44rpx 2rpx rgba(0, 0, 0, 0.1);
  border-radius: 10rpx;
}
</style>