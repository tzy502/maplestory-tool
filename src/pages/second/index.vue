<template>
  <div class="container">
    <div class="first_box">
      <div class="litter_bule"></div>
      <p class="first_content">第二步，请根据装备以及技能填写以下属性</p>
    </div>
    <div class="pannle">
     
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
    return {};
  },

  methods: {
  
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