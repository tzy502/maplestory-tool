<template>
  <div class="container">
    <div class="first_box">
      <div class="litter_bule"></div>
      <p class="first_content">用户登录</p>
    </div>

    <div class="pannle">
      <div class="enter">
        <p class="enter_title">账号:</p>
        <input type="text" class="enter_input" v-model="account" placeholder="请输入账号" />
      </div>
      <!-- <div class="enter">
        <p class="enter_title">用户名:</p>
        <input type="text" class="enter_input" v-model="name" placeholder="请输入用户名" />
      </div>-->
      <div class="enter">
        <p class="enter_title">密码:</p>
        <input
          type="text"
          password="true"
          class="enter_input"
          v-model="password"
          placeholder="请输入密码"
        />
      </div>
      <div class="enter">
        <p class="enter_title">重复密码：</p>
        <input
          type="text"
          password="true"
          class="enter_input"
          v-model="repeatPassword"
          placeholder="请重复输入密码"
        />
      </div>
    </div>

    <div class="next_box">
      <img src="/static/images/next.png" @click="next" class="next" background-size="cover" />
    </div>
    <div class="warringcontainer">
      <p class="warring">注意事项</p>
      <div class="introduction">
        <p class="warring-content">1、本账号用于同步网页以及小程序数据</p>
        <p class="warring-content">2、默认与微信绑定</p>
        <p class="warring-content">3、第一次登录视为注册</p>
        <p class="warring-content">4、因为本程序没有重要数据，密码仅为简单加密，请务必不要使用常用密码，以防被撞库</p>
        <p class="warring-content">5、如果同时微信端与网页端都有数据，同步后以微信端为准</p>
        <p class="warring-content">6、密码丢失请到B站冒险岛交流群（957018793）或者b站龙胶水处反馈</p>
      </div>
    </div>
    <mptoast />
  </div>
</template>




<script>
import mptoast from "mptoast";
import mpvuePicker from "mpvue-picker";
import { loginOrRegister } from "../../utils/conncent.js";
import { conncent } from "../../utils/conncent.js";
export default {
  components: {
    mptoast,
    mpvuePicker
  },
  mounted: function() {},
  data() {
    return {
      account: "",
      name: "",
      password: "",
      repeatPassword: ""
    };
  },

  methods: {
    showPicker() {
      this.$refs.mpvuePicker.show();
    },
    onConfirm(e) {},
    onChange(e) {},
    onCancel(e) {},
    next() {
      var account = this.account;
      var name = this.name;
      var password = this.password;
      var repeatPassword = this.repeatPassword;
      if (password == null || password == "") {
        this.$mptoast("请填写密码", "error", "1");
        return;
      }
      if (password != repeatPassword) {
        this.$mptoast("两次密码不一致", "error", "1");
        return;
      }
      var baseUser = {
        account: account,
        name: name,
        password: password
      };
      var Promise = loginOrRegister(baseUser);
      Promise.then(res => {
        this.$mptoast("注册成功", "success", "2");
        wx.getStorageSync("avgent");

        var haveDate = wx.getStorageSync("haveDate");
        if (haveDate == 1) {
          conncent();
        }
        mpvue.navigateTo({ url: "../../pages/warring/main" });
      });
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
.warring {
  /* width: 126rpx; */
  height: 31rpx;
  margin-top: 23rpx;
  font-size: 45rpx;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  /* padding-left: 36rpx; */
}
.warring-content {
  font-size: 26rpx;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 36rpx;
  margin-top: 25rpx;
  margin-left: 36rpx;
  margin-right: 34rpx;
  margin-bottom: 45rpx;
}
.introduction {
  margin-top: 10%;
  width: 90%;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0rpx 3rpx 44rpx 2rpx rgba(0, 0, 0, 0.1);
  border-radius: 10rpx;
}
.warringcontainer {
  margin-top: 23rpx;
  border-top: 3px solid #eaeaea;
  background: #f8f8fa;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 23rpx;
}
</style>