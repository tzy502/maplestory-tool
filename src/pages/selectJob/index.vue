<template>
  <div class="container">
    <p class="title">请选择职业</p>
    <div class="introduction">
      <a href="../../pages/index/main">
        <div @click="normal" class="box">通常职业</div>
      </a>
      <a href="../../pages/index/main">
        <div @click="avgent" class="box">恶魔复仇者（四转后）（测试版）</div>
      </a>
      <a href="../../pages/xenonIndex/main">
        <div @click="xenon" class="box">尖兵（测试版）</div>
      </a>
    </div>
    <!-- 
      <img src="/static/images/result.png" class="next" background-size="cover" />
    </a>-->
  </div>
</template>

<script>
import { getItem } from "../../utils/conncent.js";
export default {
  data() {
    return {
      req: "",
      notReq: "none"
    };
  },
  mounted: function() {},
  methods: {
    avgent() {
          wx.showLoading({
      title: "加载中",
      mask: true
    });
      var haveDate = wx.getStorageSync("haveDate");
      if (haveDate == 1) {
        var avgent = wx.getStorageSync("avgent");
        if (avgent != 0) {
          wx.setStorage({
            key: "haveDate",
            data: "",
            success: function(res) {
              console.log("置空有数据状态");
            }
          });
        }
      }
      wx.setStorage({
        key: "avgent",
        data: 1,
        success: function(res) {
          getItem(1);
          console.log("设置为复仇者职业");
            wx.hideLoading();
        }
      });
    },
    xenon() {
          wx.showLoading({
      title: "加载中",
      mask: true
    });
      var haveDate = wx.getStorageSync("haveDate");
      if (haveDate == 1) {
        var avgent = wx.getStorageSync("avgent");
        if (avgent != 2) {
          wx.setStorage({
            key: "haveDate",
            data: "",
            success: function(res) {
              console.log("置空有数据状态");
            }
          });
        }
      }
      wx.setStorage({
        key: "avgent",
        data: 2,
        success: function(res) {
          getItem(2);
          console.log("设置为尖兵");
            wx.hideLoading();
        }
      });
    },
    normal() {
          wx.showLoading({
      title: "加载中",
      mask: true
    });
      var haveDate = wx.getStorageSync("haveDate");
      if (haveDate == 1) {
        var avgent = wx.getStorageSync("avgent");
        if (avgent != 0) {
          wx.setStorage({
            key: "haveDate",
            data: "",
            success: function(res) {
              console.log("置空有数据状态");
            }
          });
        }
      }
      wx.setStorage({
        key: "avgent",
        data: 0,
        success: function(res) {
          getItem(0);
          console.log("设置为普通职业");
            wx.hideLoading();
        }
      });
    }
  }
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