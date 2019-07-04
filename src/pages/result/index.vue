<template>
  <div class="container">
    <div class="first_box">
      <div class="litter_bule"></div>
      <p class="first_content">计算结果</p>
    </div>
    <div class="pannle">
      <div class="online_blue">
        <p class="online-left">主潜能</p> 
        <p class="online-right">0%</p> 
      </div>
      <div class="online_w">
        <p class="online-left">主潜能</p> 
        <p class="online-right">0%</p> 
      </div>
            <div class="online_blue">
        <p class="online-left">主潜能</p> 
        <p class="online-right">0%</p> 
      </div>
       </div>

      <img src="/static/images/result.png" class="next" background-size="cover" />
    
  </div>
</template>

<script>
import {count} from '../../utils/count.js'
export default {

    mounted: function() {

    var level = wx.getStorageSync("level");
    var arc = wx.getStorageSync("arc");
    var crit = wx.getStorageSync("crit");
    var critDamage = wx.getStorageSync("critDamage");
    var mapleWarrior = wx.getStorageSync("mapleWarrior");
    var superMain = wx.getStorageSync("superMain");
    var union = wx.getStorageSync("union");
    var union2 = wx.getStorageSync("union2");
    var job = wx.getStorageSync("job");
    var coefficient = wx.getStorageSync("coefficient");
    var value = wx.getStorageSync("value");
    var list = wx.getStorageSync("list");
    for(var i=0;i<40;i++){
        
    }
    var sumMainStat = 0;
    var sumViecStat = 0;
    var sumAtk = 0;
    var sumMainStatPotential = 0;
    var sumViecStatPotential = 0;
    var sumAtkPotential = 0;
      for (var i = 0; i <= 39; i++) {
  
        list[i].item[0].value
      }
    console.log(level*5+18);
    var level=count(level,arc);
    console.log(level)
  },
  data() {
    return {
   
    };
  },

  methods: {
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
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.pannle {
  width: 750rpx;
  height: 1150rpx;
  background: rgba(255, 255, 255, 1);
  padding-left: 30rpx;
  align-items: flex-start;
  justify-content: flex-start;
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
.next_a {
  width: 95%;
  margin-top: 5rpx;
  border-radius: 10%;
}
.online_blue{
  height: 80rpx;
  background: #EFF6FF;
}
.online_w{
  height: 80rpx;
  background: white;
}
.online-left{
  width: 200rpx;
    height: 80rpx;
    border-right: 1px solid #EAEAEA;
}
</style>