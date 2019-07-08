<template>
  <div class="container">
    <p class="warring">注意事项</p>
    <div class="introduction">
      <div>
        <div class="box" v-for="(item,i) of items" :key="i">
          <button class="addLine" @click="lineAdd(i)">+</button>
          <div class="pannel" v-for="(change,j) of items[i].change" :key="j">
            <input
              v-model="isadd"
              disabled="disabled"
              class="enter_input"
              @click="showPicker(j)"
              placeholder="增加或减少"
            />
        <mpvue-picker
          ref="mpvuePicker"
          :mode="mode"
          :pickerValueDefault="pickerValueDefault"
          @onChange="onChange"
          :pickerValueArray="pickerValueArray"
        ></mpvue-picker>
          </div>
        </div>

        <button class="next" @click="onAdd">添加</button>
      </div>
    </div>
    <a href="../../pages/first/main" class="next_a">
      <img src="/static/images/result.png" class="next" background-size="cover" />
    </a>
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

  data() {
    return {
      mode: "selector",
      addDefault: [1],
      items: [
        {
          name: "",
          change: [
            {
              isAdd: "",
              num: "",
              type: ""
            }
          ]
        }
      ],
      isadd: "",
            pickerValueDefault: [1],
      pickerValueArray: [
        {
          label: "增加",
          value: "1"
        },
        {
          name: "减少",
          value: "-1"
        }
      ]
    };
  },
  methods: {
    showPicker(index) {
      // console.log(index)
  this.$refs.mpvuePicker.show();
    },
    onConfirm(e) {
      console.log(e);
    },
    onChange(e) {
      this.job = e.label;
      this.value = e.value;
    },
    // onCancel(e) {
    //   console.log(e);
    // },
    onAdd() {
      this.items.push({ name: "", change: [] });
    },
    lineAdd(i) {
      var items = this.items;
      console.log(items[i]);
      this.items[i].change.push("{isAdd:'',num:'',type:''}");
      // this.items=items;
    }
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
}
.introduction {
  margin-top: 10%;
  width: 90%;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0rpx 3rpx 44rpx 2rpx rgba(0, 0, 0, 0.1);
  border-radius: 10rpx;
}
.warring {
  width: 126rpx;
  height: 31rpx;
  padding-top: 65rpx;
  margin-left: 312rpx;
  font-size: 32rpx;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
}
.warring-content {
  font-size: 26rpx;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 36rpx;
  margin-top: 5%;
  margin-right: 4%;
  margin-left: 4%;
  margin-bottom: 10%;
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
.box {
  margin-top: 36rpx;
  border-bottom: 1px solid #eaeaea;
}
.pannel {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: nowrap;
}
.addLine {
  width: 150rpx;
  height: 50rpx;
}
.enter_input {
  /* width: 59rpx; */

  font-size: 28rpx;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(153, 153, 153, 1);
}
</style>