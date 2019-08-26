<template>
  <div class="container">
    <div class="first_box">
      <div class="litter_bule"></div>
      <p class="first_content">请填写以下内容</p>
    </div>

    <div class="pannle">
      <div class="enter">
        <p class="enter_title">武器等级:</p>
        <input type="number" class="enter_input" v-model="level" placeholder="请输入数值（不记录火花）" />
      </div>
      <div class="enter">
        <p class="enter_title">总共攻击:</p>
        <input type="number" class="enter_input" v-model="totalatk" placeholder="请输入数值（不记录火花）" />
      </div>
      <div class="enter">
        <p class="enter_title">原始攻击:</p>
        <input type="number" class="enter_input" v-model="originalatk" placeholder="请输入数值" />
      </div>
      <div class="enter">
        <p class="enter_title">总共主属性：</p>
        <input type="number" class="enter_input" v-model="totalmains" placeholder="请输入数值（不记录火花）" />
      </div>
      <div class="enter">
        <p class="enter_title">原始主属性</p>
        <input type="number" class="enter_input" v-model="originalmains" placeholder="请输入数值" />
      </div>
      <div class="enter">
        <p class="enter_title">强化星星数：</p>
        <input type="number" class="enter_input" v-model="star" placeholder="请输入数值" />
      </div>
      <div class="enter">
        <p class="enter_title">砸卷次数：</p>
        <input type="number" class="enter_input" v-model="usage" placeholder="请输入数值" />
      </div>
      <div class="enter">
        <p class="enter_title">平均卷功：</p>
        <p class="enter_input">{{avgatk}}</p>
        <p class="enter_title">平均卷主属性：</p>
        <p class="enter_input">{{avgmain}}</p>
        <p class="enter_title">可能砸的卷：</p>
        <p class="enter_input">{{maybe}}</p>
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
export default {
  components: {
    mptoast,
    mpvuePicker
  },
  mounted: function() {},
  data() {
    return {
      level: "",
      totalatk: "",
      originalatk: "",
      star: "",
      totalmains: "",
      originalmains: "",
      usage: "",
      maybe: "",
      avgatk:"",
      avgmain:"",
      starList: [
        {
          star: "25",
          addList: [
            {
              level: "200",
              atkAdd: "36"
            },
            {
              level: "160",
              atkAdd: "36"
            },
            {
              level: "150",
              atkAdd: "35"
            },
            {
              level: "140",
              atkAdd: "33"
            }
          ]
        },
        {
          star: "24",
          addList: [
            {
              level: "200",
              atkAdd: "35"
            },
            {
              level: "160",
              atkAdd: "34"
            },
            {
              level: "150",
              atkAdd: "33"
            },
            {
              level: "140",
              atkAdd: "32"
            }
          ]
        },
        {
          star: "23",
          addList: [
            {
              level: "200",
              atkAdd: "34"
            },
            {
              level: "160",
              atkAdd: "32"
            },
            {
              level: "150",
              atkAdd: "31"
            },
            {
              level: "140",
              atkAdd: "30"
            }
          ]
        },
        {
          star: "22",
          addList: [
            {
              level: "200",
              atkAdd: "17"
            },
            {
              level: "160",
              atkAdd: "14"
            },
            {
              level: "150",
              atkAdd: "13"
            },
            {
              level: "140",
              atkAdd: "12"
            }
          ]
        },
        {
          star: "21",
          addList: [
            {
              level: "200",
              atkAdd: "16"
            },
            {
              level: "160",
              atkAdd: "13"
            },
            {
              level: "150",
              atkAdd: "12"
            },
            {
              level: "140",
              atkAdd: "11"
            }
          ]
        },
        {
          star: "20",
          addList: [
            {
              level: "200",
              atkAdd: "15"
            },
            {
              level: "160",
              atkAdd: "12"
            },
            {
              level: "150",
              atkAdd: "11"
            },
            {
              level: "140",
              atkAdd: "10"
            },
            {
              level: "130",
              atkAdd: "9"
            }
          ]
        },
        {
          star: "19",
          addList: [
            {
              level: "200",
              atkAdd: "17"
            },
            {
              level: "160",
              atkAdd: "11"
            },
            {
              level: "150",
              atkAdd: "10"
            },
            {
              level: "140",
              atkAdd: "9"
            },
            {
              level: "130",
              atkAdd: "8"
            }
          ]
        },
        {
          star: "18",
          addList: [
            {
              level: "200",
              atkAdd: "14"
            },
            {
              level: "160",
              atkAdd: "10"
            },
            {
              level: "150",
              atkAdd: "9"
            },
            {
              level: "140",
              atkAdd: "8"
            },
            {
              level: "130",
              atkAdd: "7"
            }
          ]
        },
        {
          star: "17",
          addList: [
            {
              level: "200",
              atkAdd: "13"
            },
            {
              level: "160",
              atkAdd: "9"
            },
            {
              level: "150",
              atkAdd: "9"
            },
            {
              level: "140",
              atkAdd: "8"
            },
            {
              level: "130",
              atkAdd: "7"
            }
          ]
        },
        {
          star: "16",
          addList: [
            {
              level: "200",
              atkAdd: "13"
            },
            {
              level: "160",
              atkAdd: "9"
            },
            {
              level: "150",
              atkAdd: "8"
            },
            {
              level: "140",
              atkAdd: "7"
            },
            {
              level: "130",
              atkAdd: "6"
            }
          ]
        }
      ]
    };
  },

  methods: {
    analyse() {
      var totalatk = this.totalatk;
      var originalatk = this.originalatk;
      var star = this.star;
      if (star == null || star == "") {
        star = 0;
      }
      var totalmains = this.totalmains;
      var originalmains = this.originalmains;
      var usage = this.usage;
      var map = new Map();
      var starList = this.starList;
      var level = this.level;
      if (level == null || level == "") {
        level = 0;
      }
      for (var i = 0; i < starList.length; i++) {
        var addList = starList[i].addList;
        for (var j = 0; j < addList.length; j++) {
          if (addList[j].level == level) {
            map.set(starList[i].star, addList[j].atkAdd);
          }
        }
      }
      if (star > 15) {
        for (star; star > 15; star--) {
          totalatk = totalatk - map.get(star);
          totalmains = totalmains - (level / 5 - 19);
        }
      }
      for (star; star > 0; star--) {
        var x = Math.floor(totalatk / 50) + 1;
        var y = Math.floor((totalatk - Math.floor(totalatk / 50)) / 50) + 1;
        if (x == y) {
          console.log("x" + x);
          totalatk = totalatk - x;
        } else {
          console.log("y" + y);
          totalatk = totalatk - y;
        }
        console.log("totalatk" + totalatk);
        if (15 >= star && star > 5) {
          totalmains = totalmains - 3;
        } else if (5 >= star && star > 0) {
          totalmains = totalmains - 2;
        }
      }
      console.log(totalatk);
      var avgatk = (totalatk - originalatk) / usage;
      var avgmain = (totalmains - originalmains) / usage;
      this.avgatk=avgatk;
      this.avgmain=avgmain;
      console.log("avgatk" + avgatk);
      console.log("avgmain" + avgmain);
      if (avgatk == 13) {
        this.maybe = "究极黑暗卷轴";
      }
      if (avgatk == 12) {
        if (avgmain == 10) {
          this.maybe = "V卷";
          return;
        } else {
          if (avgmain == 8) {
            this.maybe = "达到了上限的X卷";
            return;
          } else {
            this.maybe = "可能是x v 究极黑暗的混砸";
            return;
          }
        }
      }
      if (12 >= avgatk && avgatk > 9) {
        if (avgmain == 8) {
          this.maybe = "X卷";
          return;
        } else {
          if (avgmain == 0) {
            this.maybe = "星火";
            return;
          } else {
            this.maybe = "混卷";
            return;
          }
        }
      }
      if (avgatk == 9) {
        if (avgmain == 8) {
          this.maybe = "脸黑的X卷";
          return;
        }
        if (avgmain == 3) {
          this.maybe = "惊人";
          return;
        } else {
          this.maybe = "混卷";
          return;
        }
      }
      if (avgatk == 7) {
        if (avgmain == 3) {
          this.maybe = "15痕迹";
          return;
        }
        if (avgmain == 5) {
          this.maybe = "宿命正义";
          return;
        } else {
          this.maybe = "混卷";
          return;
        }
      }
      if (avgatk == 7) {
        if (avgmain == 3) {
          this.maybe = "15痕迹 极小可能pb";
          return;
        }
        if (avgmain == 5) {
          this.maybe = "宿命正义";
          return;
        } else {
          this.maybe = "混卷";
          return;
        }
      }

      if (avgatk == 5) {
        if (avgmain == 2) {
          this.maybe = "30痕迹";
          return;
        }
      }
      if (avgatk == 4) {
        if (avgmain == 2) {
          this.maybe = "70痕迹";
          return;
        }
      }
      if (avgatk == 3) {
        if (avgmain == 2) {
          this.maybe = "100痕迹";
          return;
        }
      }
      if (avgatk >= 3 && avgatk <= 8) {
        if (avgmain == 3) {
          this.maybe = "pb卷";
          return;
        }
      }
      this.maybe = "混卷";
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
</style>