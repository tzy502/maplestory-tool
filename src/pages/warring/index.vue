<template>
  <div class="container">
    <p class="warring">注意事项</p>
    <div class="introduction">
      <p class="warring-content">1、目前不支持恶魔复仇者、尖兵主属性特殊职业，剑豪，亚克等攻击力计算比较特殊的职业可能会有误差</p>
      <p class="warring-content">2、请将每个部位尽量填写完整</p>
      <p class="warring-content">3、目前还在迭代中</p>
      <p class="warring-content">4、基础思路学习冒险岛属性对应excel，当开发版本低时思路相近</p>
      <p class="warring-content">5、介于作者只是一个垃圾后端前段能力令人发指，有问题见谅一下</p>
      <p class="warring-content">6、你现在所看到的版本排版可能还有点不好看，原因如上</p>
      <p class="warring-content">7、有问题可以在B站冒险岛交流群（957018793）或者b站龙胶水处反馈bug</p>
    </div>
    <a href="../../pages/selectJob/main" class="next_a">
      <img src="/static/images/next.png" class="next" background-size="cover" />
    </a>
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