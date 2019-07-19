<template>
  <div class="container">
    <p class="title">请选择计算工具</p>
    <p class="literTitle">将根据你选择的工具为你提供计算服务</p>
    <div class="introduction">
      <div :style="{'display':req}">
        <a href="../../pages/first/main">
          <div class="box">先填写角色属性</div>
        </a>
      </div>
      <div :style="{'display':notReq}">
        <a href="../../pages/first/main">
          <div class="box">修改已有角色属性</div>
        </a>
        <a href="../../pages/result/main">
          <div class="box">具体属性比例</div>
        </a>
        <a href="../../pages/change/main">
          <div class="box">潜能对面板提升</div>
        </a>
        <a href="../../pages/pselect/main">
          <div class="box">冒险岛潜能收益柱状图</div>
        </a>
                <a href="../../pages/arcresult/main">
          <div class="box">冒险岛神秘徽章计算</div>
        </a>
      </div>
             <a href="../../pages/about/main">
          <div class="box">关于我们</div>
        </a>
    </div>
    <!-- 
      <img src="/static/images/result.png" class="next" background-size="cover" />
    </a>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      req: "",
      notReq: "none"
    };
  },
  mounted: function() {
    var haveDate = wx.getStorageSync("haveDate");
    if (haveDate==1) {
      this.req = "none";
      this.notReq = "";
    }
  },
  methods: {}
};
</script>

<style scoped>
.container {
  background: #f8f8fa;
  padding-top: 50rpx;
  height: 1000rpx;
}

.box {
  margin-top: 36rpx;
  margin-left: 38rpx;
  margin-right: 42rpx;
  margin-top: 30rpx;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  padding-left: 41rpx;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 1px 30px 0px rgba(0, 0, 0, 0.08);
  border-radius: 6rpx;

  height: 180rpx;
}
.title {
  margin-left: 38rpx;
  font-size: 38rpx;
  font-family: PingFang-SC-Bold;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
  line-height: 27rpx;
}
.literTitle {
  font-size: 28rpx;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  line-height: 27rpx;
  margin-left: 38rpx;
  margin-top: 25rpx;
}
</style>