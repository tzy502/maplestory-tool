<template>
  <div class="container">
    <div class="first_box">
      <div class="litter_bule"></div>
      <p class="first_content">神秘徽章计算</p>
    </div>

    <div class="pannle">
      <div class="enter">
        <p class="enter_title">现在神秘等级:</p>
        <input type="number" class="enter_input" v-model="level" placeholder="请输入数值" />
      </div>
      <div class="enter">
        <p class="enter_title">现在神秘经验:</p>
        <input type="number" class="enter_input" v-model="exp" placeholder="请输入数值" />
      </div>
      <div class="enter">
        <p class="enter_title">每天获得量:</p>
        <input type="number" class="enter_input" v-model="getNum" placeholder="请输入数值" />
      </div>
      <div class="enter">
        <p class="enter_title">还需天数:</p>
        <p class="enter_input">{{day}}</p>
      </div>
    </div>
        <div class="next_box">
      <img src="/static/images/result.png" @click="count" class="next" background-size="cover" />
    </div>
    <div class="cut"></div>
    <div class="first_box">
      <div class="litter_bule"></div>
      <p class="first_content">神秘徽章转移计算</p>
    </div>
    <div class="pannle">
      <div class="enter">
        <p class="enter_title">转移前神秘等级:</p>
        <input type="number" class="enter_input" v-model="beforelevel" placeholder="请输入数值" />
      </div>
      <div class="enter">
        <p class="enter_title">转移前神秘经验:</p>
        <input type="number" class="enter_input" v-model="beforeexp" placeholder="请输入数值" />
      </div>
      <div class="enter">
        <p class="enter_title">转移后神秘等级:</p>
        <p class="enter_input">{{afterlevel}}</p>
      </div>
      <div class="enter">
        <p class="enter_title">转移后神秘经验:</p>
        <p class="enter_input">{{afterexp}}</p>
      </div>
    </div>
    <mptoast />
    <div class="next_box">
      <img src="/static/images/result.png" @click="after" class="next" background-size="cover" />
    </div>

    <!-- <a href="../../pages/index/main">
      <div class="box">返回首页</div>
    </a>-->
  </div>
</template>

<script>
import { count } from "../../utils/count.js";
import mptoast from "mptoast";
export default {
  components: {
    mptoast
  },
  data() {
    return {
      level: "",
      getNum: "",
      exp: "",
      day: "",
      beforelevel: "",
      beforeexp: "",
      afterlevel: "",
      afterexp: ""
    };
  },
  mounted: function() {},

  methods: {
    count() {
      var level = parseInt(this.level - 1);
      if (level >= 20) {
        this.$mptoast("你已经满级了没必要再算了", "error", "1");
        return;
      }
      var exp = parseInt(this.exp);
      if (exp >= level * level + 11) {
        this.$mptoast("你已经可以升级神秘了", "error", "1");
        return;
      }

      var getNum = parseInt(this.getNum);

      this.day = Math.ceil(
        (2679 -
          (level * (level + 1) * (2 * level + 1) / 6 + 11 * level + exp)) /
          getNum
      );
    },
    after() {
      var level = parseInt(this.beforelevel - 1);
      if (level > 20) {
        this.$mptoast("神秘不可能大于20哦", "error", "1");
        return;
      }
      var exp = parseInt(this.beforeexp);
      if (exp >= level * level + 11) {
        this.$mptoast("你超上限了", "error", "1");
        return;
      }
      var total=(level * (level + 1) * (2 * level + 1) / 6 + 11 * level + exp)
      total=total*0.8;
      for(var i=1;i<=19;i++){
        if(total-(i*i+11)<0){
          this.afterexp=total;
          this.afterlevel=i;
          break;
        }else{
          total=total-(i*i+11)
        }
      }
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

.pannle {
  width: 750rpx;
  background: rgba(255, 255, 255, 1);
  padding-left: 30rpx;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.btu {
  margin-top: 32rpx;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: nowrap;
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
  margin-left: 15rpx;
}
.next {
  margin-top: 15rpx;
  margin-left: 19rpx;
  width: 712rpx;
  height: 122rpx;
}
.cut {
  margin-top: 30rpx;
  border-bottom: 1px solid #eaeaea;
}
</style>