<template>
  <div class="container">
    <div class="first_box">
      <div class="litter_bule"></div>
      <p class="first_content">第一步，请根据角色面板填写以下属性</p>
    </div>

    <div class="pannle">
      <div class="enter">
        <p class="enter_title">装备等级:</p>
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
    </div>
    <div class="next_box">
      <img src="/static/images/next.png" @click="next" class="next" background-size="cover" />
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
      var totalmains = this.totalmains;
      var originalmains = this.originalmains;
      var usage = this.usage;
      var map=new Map();
      var starList=this.starList;
      for(var i=0;i<starList.length;i++){
        var addList=starList[i].addList;
         for(var j=0;j<addList.length;j++){
           if(addList[j].level==level){
        map.set(starList[i].star,addList[j].atkAdd)
           }
         }

      }
      if (star >= 15) {
        for (star; star >= 15; i--) {      
          totalatk = totalatk -map.get(star)
        }
      }
      for (star; star >= 0; i--) {
        var x = Math.floor(totalatk / 50) + 1;
        var y = Math.ceil((totalatk - Math.floor(totalatk / 50)) / 50) + 1;
        if (x == y) {
          totalatk = totalatk - x;
        } else {
          totalatk = totalatk - y;
        }
      }
      var avg = (totalatk - originalatk) / usage;
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