<template>
  <div class="container">
    <p class="warring">关于我们</p>
    <div class="introduction">
      <p class="warring-content">版本V0.9.3 (公测版)</p>
      <p class="warring-content">后端：胶水     前段：胶水</p>
      <p class="warring-content">页面设计：无影人(感谢大佬）</p>
      <p class="warring-content">协力：B站冒险岛交流群（957018793）</p>
            <p class="warring-content">bug反馈：B站冒险岛交流群（957018793）；b站：龙胶水</p>
    </div>
    <!-- <a href="../../pages/result/main" class="next_a">
      <img src="/static/images/next.png" class="next" background-size="cover" />
    </a>-->
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.introduction {
  margin-top: 10%;
  width: 90%;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0rpx 3rpx 44rpx 2rpx rgba(0, 0, 0, 0.1);
  border-radius: 10rpx;
}
.warring {
  /* width: 126rpx; */
  height: 31rpx;
  margin-top: 5%;
  font-size: 60rpx;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  padding-left: 36rpx;
  color: rgba(51, 51, 51, 1);
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
.next {
  width: 712rpx;
  height: 122rpx;
}
.next_a {
  width: 95%;
  margin-top: 50rpx;
  border-radius: 10%;
}
</style>