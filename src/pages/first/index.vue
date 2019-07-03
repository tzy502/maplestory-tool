<template>
  <div class="container">
    <div class="first_box">
      <div class="litter_bule"></div>
      <p class="first_content">第一步，请根据角色面板填写以下属性</p>
    </div>
    <div class="pannle">
      <div class="enter">
        <p class="enter_title">等级:</p>
        <input type="number" class="enter_input" placeholder="请输入数值" />
      </div>
      <div class="enter">
        <p class="enter_title">神秘力量:</p>
        <input type="number" class="enter_input" placeholder="请输入数值" />
      </div>
      <div class="enter">
        <p class="enter_title">暴击：</p>
        <input type="number" class="enter_input" placeholder="请输入数值" />
      </div>
      <div class="enter">
        <p class="enter_title">暴击伤害：</p>
        <input type="number" class="enter_input" placeholder="请输入数值" />
      </div>
      <div class="enter">
        <p class="enter_title">冒险岛勇士：</p>
        <input type="number" class="enter_input" value="15" placeholder="请输入数值" />
      </div>
      <div class="enter">
        <p class="enter_title">超级主属性：</p>
        <input type="number" class="enter_input" placeholder="请输入数值" />
      </div>
      <div class="enter">
        <p class="enter_title">联盟系统提升的主属性 1 (攻击队占领效果提升的主属性):</p>
        <input type="number" class="enter_input_long" placeholder="请输入数值" />
      </div>
      <div class="enter">
        <p class="enter_title">联盟系统提升的主属性 2 (攻击队占领效果提升的主属性）:</p>
        <input type="number" class="enter_input_long" placeholder="请输入数值" />
      </div>
    </div>
    <img src="/static/images/next.png" class="next" background-size="cover" />
  </div>
</template>

<script>
export default {
  data() {
  
  },

  methods: {
    clickHandle() {
      this.msg = "Clicked!!!!!!";
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
  width: 90%;
  margin-top: 5rpx;
  height: 128rpx;
  border-radius: 10%;
}
.pannle {
  width: 750rpx;
  height: 1100rpx;
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
.enter_input_long{
    height: 50rpx;
    margin-top: 70rpx;
  font-size: 30rpx;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(153, 153, 153, 1);
  justify-content: flex-end;
}

</style>