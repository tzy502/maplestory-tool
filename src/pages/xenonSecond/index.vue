<template>
  <div class="container">
    <div class="first_box">
      <div class="litter_bule"></div>
      <p class="first_content">第二步，请根据装备以及技能填写以下属性</p>
    </div>
    <div class="pannle">
      <li v-for="eq in list" :key="eq">
        <div class="enter_title_box">
          <p class="enter_title_box" @click="changeShow(index)">{{eq.listName}}</p>
        </div>
        <!-- <div> -->
        <div :style="{'display':eq.isHidden}">
          <div class="enter_box">
            <div class="enter_box_detail">
              <p class="enter_title">{{eq.item[0].itemName}}</p>
              <input
                type="number"
                class="enter_input"
                v-model="eq.item[0].value"
                placeholder="请输入数值"
              />
            </div>
          </div>
          <div class="enter_box">
            <div class="enter_box_detail">
              <p class="enter_title">{{eq.item[1].itemName}}</p>
              <input
                type="number"
                class="enter_input"
                v-model="eq.item[1].value"
                placeholder="请输入数值"
              />
            </div>
          </div>
          <div class="enter_box">
            <div class="enter_box_detail">
              <p class="enter_title">{{eq.item[2].itemName}}</p>
              <input
                type="number"
                class="enter_input"
                v-model="eq.item[2].value"
                placeholder="请输入数值"
              />
            </div>
          </div>
          <div class="enter_box">
            <div class="enter_box_detail">
              <p class="enter_title">{{eq.item[3].itemName}}</p>
              <input
                type="number"
                class="enter_input"
                v-model="eq.item[3].value"
                placeholder="请输入数值"
              />
            </div>
          </div>
          <div class="enter_box">
            <div class="enter_box_detail">
              <p class="enter_title">{{eq.item[4].itemName}}</p>
              <input
                type="number"
                class="enter_input"
                v-model="eq.item[4].value"
                placeholder="请输入数值"
              />
            </div>
          </div>
          <div class="enter_box">
            <div class="enter_box_detail">
              <p class="enter_title">{{eq.item[5].itemName}}</p>
              <input
                type="number"
                class="enter_input"
                v-model="eq.item[5].value"
                placeholder="请输入数值"
              />
            </div>
          </div>
          <div class="enter_box">
            <div class="enter_box_detail">
              <p class="enter_title">{{eq.item[6].itemName}}</p>
              <input
                type="number"
                class="enter_input"
                v-model="eq.item[6].value"
                placeholder="请输入数值"
              />
            </div>
          </div>
          <div class="enter_box">
            <div class="enter_box_detail">
              <p class="enter_title">{{eq.item[7].itemName}}</p>
              <input
                type="number"
                class="enter_input"
                v-model="eq.item[7].value"
                placeholder="请输入数值"
              />
            </div>
          </div>
        </div>
      </li>
    </div>
    <div class="next_box">
      <img src="/static/images/result.png" @click="next" class="next" background-size="cover" />
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
    return {
      list: [
        {
          listName: "戒指1",
          isHidden: "none",
          item: [
            {
              itemName: "力量(潜能属性也填写在此处）",
              elementName: "strStat",
              value: ""
            },
            {
              itemName: "运气(潜能属性也填写在此处）",
              elementName: "lucStat",
              value: ""
            },
            {
              itemName: "敏捷(潜能属性也填写在此处）",
              elementName: "dexStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "atk",
              value: ""
            },
            {
              itemName: "力量潜能（只需填写百分比）",
              elementName: "strStatPotential",
              value: ""
            },
            {
              itemName: "运气潜能（只需填写百分比）",
              elementName: "lucStatPotential",
              value: ""
            },
            {
              itemName: "敏捷潜能（只需填写百分比）",
              elementName: "dexStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "戒指2",
          isHidden: "none",
          item: [
            {
              itemName: "力量(潜能属性也填写在此处）",
              elementName: "strStat",
              value: ""
            },
            {
              itemName: "运气(潜能属性也填写在此处）",
              elementName: "lucStat",
              value: ""
            },
            {
              itemName: "敏捷(潜能属性也填写在此处）",
              elementName: "dexStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "atk",
              value: ""
            },
            {
              itemName: "力量潜能（只需填写百分比）",
              elementName: "strStatPotential",
              value: ""
            },
            {
              itemName: "运气潜能（只需填写百分比）",
              elementName: "lucStatPotential",
              value: ""
            },
            {
              itemName: "敏捷潜能（只需填写百分比）",
              elementName: "dexStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "戒指3",
          isHidden: "none",
          item: [
            {
              itemName: "力量(潜能属性也填写在此处）",
              elementName: "strStat",
              value: ""
            },
            {
              itemName: "运气(潜能属性也填写在此处）",
              elementName: "lucStat",
              value: ""
            },
            {
              itemName: "敏捷(潜能属性也填写在此处）",
              elementName: "dexStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "atk",
              value: ""
            },
            {
              itemName: "力量潜能（只需填写百分比）",
              elementName: "strStatPotential",
              value: ""
            },
            {
              itemName: "运气潜能（只需填写百分比）",
              elementName: "lucStatPotential",
              value: ""
            },
            {
              itemName: "敏捷潜能（只需填写百分比）",
              elementName: "dexStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "戒指4",
          isHidden: "none",
          item: [
            {
              itemName: "力量(潜能属性也填写在此处）",
              elementName: "strStat",
              value: ""
            },
            {
              itemName: "运气(潜能属性也填写在此处）",
              elementName: "lucStat",
              value: ""
            },
            {
              itemName: "敏捷(潜能属性也填写在此处）",
              elementName: "dexStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "atk",
              value: ""
            },
            {
              itemName: "力量潜能（只需填写百分比）",
              elementName: "strStatPotential",
              value: ""
            },
            {
              itemName: "运气潜能（只需填写百分比）",
              elementName: "lucStatPotential",
              value: ""
            },
            {
              itemName: "敏捷潜能（只需填写百分比）",
              elementName: "dexStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "戒指5",
          isHidden: "none",
          item: [
            {
              itemName: "力量(潜能属性也填写在此处）",
              elementName: "strStat",
              value: ""
            },
            {
              itemName: "运气(潜能属性也填写在此处）",
              elementName: "lucStat",
              value: ""
            },
            {
              itemName: "敏捷(潜能属性也填写在此处）",
              elementName: "dexStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "atk",
              value: ""
            },
            {
              itemName: "力量潜能（只需填写百分比）",
              elementName: "strStatPotential",
              value: ""
            },
            {
              itemName: "运气潜能（只需填写百分比）",
              elementName: "lucStatPotential",
              value: ""
            },
            {
              itemName: "敏捷潜能（只需填写百分比）",
              elementName: "dexStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "戒指6",
          isHidden: "none",
          item: [
            {
              itemName: "力量(潜能属性也填写在此处）",
              elementName: "strStat",
              value: ""
            },
            {
              itemName: "运气(潜能属性也填写在此处）",
              elementName: "lucStat",
              value: ""
            },
            {
              itemName: "敏捷(潜能属性也填写在此处）",
              elementName: "dexStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "atk",
              value: ""
            },
            {
              itemName: "力量潜能（只需填写百分比）",
              elementName: "strStatPotential",
              value: ""
            },
            {
              itemName: "运气潜能（只需填写百分比）",
              elementName: "lucStatPotential",
              value: ""
            },
            {
              itemName: "敏捷潜能（只需填写百分比）",
              elementName: "dexStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "吊坠1",
          isHidden: "none",
          item: [
            {
              itemName: "力量(潜能属性也填写在此处）",
              elementName: "strStat",
              value: ""
            },
            {
              itemName: "运气(潜能属性也填写在此处）",
              elementName: "lucStat",
              value: ""
            },
            {
              itemName: "敏捷(潜能属性也填写在此处）",
              elementName: "dexStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "atk",
              value: ""
            },
            {
              itemName: "力量潜能（只需填写百分比）",
              elementName: "strStatPotential",
              value: ""
            },
            {
              itemName: "运气潜能（只需填写百分比）",
              elementName: "lucStatPotential",
              value: ""
            },
            {
              itemName: "敏捷潜能（只需填写百分比）",
              elementName: "dexStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "吊坠2",
          isHidden: "none",
          item: [
            {
              itemName: "力量(潜能属性也填写在此处）",
              elementName: "strStat",
              value: ""
            },
            {
              itemName: "运气(潜能属性也填写在此处）",
              elementName: "lucStat",
              value: ""
            },
            {
              itemName: "敏捷(潜能属性也填写在此处）",
              elementName: "dexStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "atk",
              value: ""
            },
            {
              itemName: "力量潜能（只需填写百分比）",
              elementName: "strStatPotential",
              value: ""
            },
            {
              itemName: "运气潜能（只需填写百分比）",
              elementName: "lucStatPotential",
              value: ""
            },
            {
              itemName: "敏捷潜能（只需填写百分比）",
              elementName: "dexStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "武器",
          isHidden: "none",
          item: [
            {
              itemName: "力量(潜能属性也填写在此处）",
              elementName: "strStat",
              value: ""
            },
            {
              itemName: "运气(潜能属性也填写在此处）",
              elementName: "lucStat",
              value: ""
            },
            {
              itemName: "敏捷(潜能属性也填写在此处）",
              elementName: "dexStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "atk",
              value: ""
            },
            {
              itemName: "力量潜能（只需填写百分比）",
              elementName: "strStatPotential",
              value: ""
            },
            {
              itemName: "运气潜能（只需填写百分比）",
              elementName: "lucStatPotential",
              value: ""
            },
            {
              itemName: "敏捷潜能（只需填写百分比）",
              elementName: "dexStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "腰带",
          isHidden: "none",
          item: [
            {
              itemName: "力量(潜能属性也填写在此处）",
              elementName: "strStat",
              value: ""
            },
            {
              itemName: "运气(潜能属性也填写在此处）",
              elementName: "lucStat",
              value: ""
            },
            {
              itemName: "敏捷(潜能属性也填写在此处）",
              elementName: "dexStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "atk",
              value: ""
            },
            {
              itemName: "力量潜能（只需填写百分比）",
              elementName: "strStatPotential",
              value: ""
            },
            {
              itemName: "运气潜能（只需填写百分比）",
              elementName: "lucStatPotential",
              value: ""
            },
            {
              itemName: "敏捷潜能（只需填写百分比）",
              elementName: "dexStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "帽子",
          isHidden: "none",
          item: [
            {
              itemName: "力量(潜能属性也填写在此处）",
              elementName: "strStat",
              value: ""
            },
            {
              itemName: "运气(潜能属性也填写在此处）",
              elementName: "lucStat",
              value: ""
            },
            {
              itemName: "敏捷(潜能属性也填写在此处）",
              elementName: "dexStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "atk",
              value: ""
            },
            {
              itemName: "力量潜能（只需填写百分比）",
              elementName: "strStatPotential",
              value: ""
            },
            {
              itemName: "运气潜能（只需填写百分比）",
              elementName: "lucStatPotential",
              value: ""
            },
            {
              itemName: "敏捷潜能（只需填写百分比）",
              elementName: "dexStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "前额",
          isHidden: "none",
          item: [
            {
              itemName: "力量(潜能属性也填写在此处）",
              elementName: "strStat",
              value: ""
            },
            {
              itemName: "运气(潜能属性也填写在此处）",
              elementName: "lucStat",
              value: ""
            },
            {
              itemName: "敏捷(潜能属性也填写在此处）",
              elementName: "dexStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "atk",
              value: ""
            },
            {
              itemName: "力量潜能（只需填写百分比）",
              elementName: "strStatPotential",
              value: ""
            },
            {
              itemName: "运气潜能（只需填写百分比）",
              elementName: "lucStatPotential",
              value: ""
            },
            {
              itemName: "敏捷潜能（只需填写百分比）",
              elementName: "dexStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "眼饰",
          isHidden: "none",
          item: [
            {
              itemName: "力量(潜能属性也填写在此处）",
              elementName: "strStat",
              value: ""
            },
            {
              itemName: "运气(潜能属性也填写在此处）",
              elementName: "lucStat",
              value: ""
            },
            {
              itemName: "敏捷(潜能属性也填写在此处）",
              elementName: "dexStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "atk",
              value: ""
            },
            {
              itemName: "力量潜能（只需填写百分比）",
              elementName: "strStatPotential",
              value: ""
            },
            {
              itemName: "运气潜能（只需填写百分比）",
              elementName: "lucStatPotential",
              value: ""
            },
            {
              itemName: "敏捷潜能（只需填写百分比）",
              elementName: "dexStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "衣服",
          isHidden: "none",
          item: [
            {
              itemName: "力量(潜能属性也填写在此处）",
              elementName: "strStat",
              value: ""
            },
            {
              itemName: "运气(潜能属性也填写在此处）",
              elementName: "lucStat",
              value: ""
            },
            {
              itemName: "敏捷(潜能属性也填写在此处）",
              elementName: "dexStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "atk",
              value: ""
            },
            {
              itemName: "力量潜能（只需填写百分比）",
              elementName: "strStatPotential",
              value: ""
            },
            {
              itemName: "运气潜能（只需填写百分比）",
              elementName: "lucStatPotential",
              value: ""
            },
            {
              itemName: "敏捷潜能（只需填写百分比）",
              elementName: "dexStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "裤子",
          isHidden: "none",
          item: [
            {
              itemName: "力量(潜能属性也填写在此处）",
              elementName: "strStat",
              value: ""
            },
            {
              itemName: "运气(潜能属性也填写在此处）",
              elementName: "lucStat",
              value: ""
            },
            {
              itemName: "敏捷(潜能属性也填写在此处）",
              elementName: "dexStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "atk",
              value: ""
            },
            {
              itemName: "力量潜能（只需填写百分比）",
              elementName: "strStatPotential",
              value: ""
            },
            {
              itemName: "运气潜能（只需填写百分比）",
              elementName: "lucStatPotential",
              value: ""
            },
            {
              itemName: "敏捷潜能（只需填写百分比）",
              elementName: "dexStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "鞋子",
          isHidden: "none",
          item: [
            {
              itemName: "力量(潜能属性也填写在此处）",
              elementName: "strStat",
              value: ""
            },
            {
              itemName: "运气(潜能属性也填写在此处）",
              elementName: "lucStat",
              value: ""
            },
            {
              itemName: "敏捷(潜能属性也填写在此处）",
              elementName: "dexStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "atk",
              value: ""
            },
            {
              itemName: "力量潜能（只需填写百分比）",
              elementName: "strStatPotential",
              value: ""
            },
            {
              itemName: "运气潜能（只需填写百分比）",
              elementName: "lucStatPotential",
              value: ""
            },
            {
              itemName: "敏捷潜能（只需填写百分比）",
              elementName: "dexStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "口袋",
          isHidden: "none",
          item: [
            {
              itemName: "力量(潜能属性也填写在此处）",
              elementName: "strStat",
              value: ""
            },
            {
              itemName: "运气(潜能属性也填写在此处）",
              elementName: "lucStat",
              value: ""
            },
            {
              itemName: "敏捷(潜能属性也填写在此处）",
              elementName: "dexStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "atk",
              value: ""
            },
            {
              itemName: "力量潜能（只需填写百分比）",
              elementName: "strStatPotential",
              value: ""
            },
            {
              itemName: "运气潜能（只需填写百分比）",
              elementName: "lucStatPotential",
              value: ""
            },
            {
              itemName: "敏捷潜能（只需填写百分比）",
              elementName: "dexStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "耳饰",
          isHidden: "none",
          item: [
            {
              itemName: "力量(潜能属性也填写在此处）",
              elementName: "strStat",
              value: ""
            },
            {
              itemName: "运气(潜能属性也填写在此处）",
              elementName: "lucStat",
              value: ""
            },
            {
              itemName: "敏捷(潜能属性也填写在此处）",
              elementName: "dexStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "atk",
              value: ""
            },
            {
              itemName: "力量潜能（只需填写百分比）",
              elementName: "strStatPotential",
              value: ""
            },
            {
              itemName: "运气潜能（只需填写百分比）",
              elementName: "lucStatPotential",
              value: ""
            },
            {
              itemName: "敏捷潜能（只需填写百分比）",
              elementName: "dexStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "肩饰",
          isHidden: "none",
          item: [
            {
              itemName: "力量(潜能属性也填写在此处）",
              elementName: "strStat",
              value: ""
            },
            {
              itemName: "运气(潜能属性也填写在此处）",
              elementName: "lucStat",
              value: ""
            },
            {
              itemName: "敏捷(潜能属性也填写在此处）",
              elementName: "dexStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "atk",
              value: ""
            },
            {
              itemName: "力量潜能（只需填写百分比）",
              elementName: "strStatPotential",
              value: ""
            },
            {
              itemName: "运气潜能（只需填写百分比）",
              elementName: "lucStatPotential",
              value: ""
            },
            {
              itemName: "敏捷潜能（只需填写百分比）",
              elementName: "dexStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "手套",
          isHidden: "none",
          item: [
            {
              itemName: "力量(潜能属性也填写在此处）",
              elementName: "strStat",
              value: ""
            },
            {
              itemName: "运气(潜能属性也填写在此处）",
              elementName: "lucStat",
              value: ""
            },
            {
              itemName: "敏捷(潜能属性也填写在此处）",
              elementName: "dexStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "atk",
              value: ""
            },
            {
              itemName: "力量潜能（只需填写百分比）",
              elementName: "strStatPotential",
              value: ""
            },
            {
              itemName: "运气潜能（只需填写百分比）",
              elementName: "lucStatPotential",
              value: ""
            },
            {
              itemName: "敏捷潜能（只需填写百分比）",
              elementName: "dexStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "纹章",
          isHidden: "none",
          item: [
            {
              itemName: "力量(潜能属性也填写在此处）",
              elementName: "strStat",
              value: ""
            },
            {
              itemName: "运气(潜能属性也填写在此处）",
              elementName: "lucStat",
              value: ""
            },
            {
              itemName: "敏捷(潜能属性也填写在此处）",
              elementName: "dexStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "atk",
              value: ""
            },
            {
              itemName: "力量潜能（只需填写百分比）",
              elementName: "strStatPotential",
              value: ""
            },
            {
              itemName: "运气潜能（只需填写百分比）",
              elementName: "lucStatPotential",
              value: ""
            },
            {
              itemName: "敏捷潜能（只需填写百分比）",
              elementName: "dexStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "徽章",
          isHidden: "none",
          item: [
            {
              itemName: "力量(潜能属性也填写在此处）",
              elementName: "strStat",
              value: ""
            },
            {
              itemName: "运气(潜能属性也填写在此处）",
              elementName: "lucStat",
              value: ""
            },
            {
              itemName: "敏捷(潜能属性也填写在此处）",
              elementName: "dexStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "atk",
              value: ""
            },
            {
              itemName: "力量潜能（只需填写百分比）",
              elementName: "strStatPotential",
              value: ""
            },
            {
              itemName: "运气潜能（只需填写百分比）",
              elementName: "lucStatPotential",
              value: ""
            },
            {
              itemName: "敏捷潜能（只需填写百分比）",
              elementName: "dexStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "勋章",
          isHidden: "none",
          item: [
            {
              itemName: "力量(潜能属性也填写在此处）",
              elementName: "strStat",
              value: ""
            },
            {
              itemName: "运气(潜能属性也填写在此处）",
              elementName: "lucStat",
              value: ""
            },
            {
              itemName: "敏捷(潜能属性也填写在此处）",
              elementName: "dexStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "atk",
              value: ""
            },
            {
              itemName: "力量潜能（只需填写百分比）",
              elementName: "strStatPotential",
              value: ""
            },
            {
              itemName: "运气潜能（只需填写百分比）",
              elementName: "lucStatPotential",
              value: ""
            },
            {
              itemName: "敏捷潜能（只需填写百分比）",
              elementName: "dexStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "副手",
          isHidden: "none",
          item: [
            {
              itemName: "力量(潜能属性也填写在此处）",
              elementName: "strStat",
              value: ""
            },
            {
              itemName: "运气(潜能属性也填写在此处）",
              elementName: "lucStat",
              value: ""
            },
            {
              itemName: "敏捷(潜能属性也填写在此处）",
              elementName: "dexStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "atk",
              value: ""
            },
            {
              itemName: "力量潜能（只需填写百分比）",
              elementName: "strStatPotential",
              value: ""
            },
            {
              itemName: "运气潜能（只需填写百分比）",
              elementName: "lucStatPotential",
              value: ""
            },
            {
              itemName: "敏捷潜能（只需填写百分比）",
              elementName: "dexStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "披风",
          isHidden: "none",
          item: [
            {
              itemName: "力量(潜能属性也填写在此处）",
              elementName: "strStat",
              value: ""
            },
            {
              itemName: "运气(潜能属性也填写在此处）",
              elementName: "lucStat",
              value: ""
            },
            {
              itemName: "敏捷(潜能属性也填写在此处）",
              elementName: "dexStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "atk",
              value: ""
            },
            {
              itemName: "力量潜能（只需填写百分比）",
              elementName: "strStatPotential",
              value: ""
            },
            {
              itemName: "运气潜能（只需填写百分比）",
              elementName: "lucStatPotential",
              value: ""
            },
            {
              itemName: "敏捷潜能（只需填写百分比）",
              elementName: "dexStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "心脏",
          isHidden: "none",
          item: [
            {
              itemName: "力量(潜能属性也填写在此处）",
              elementName: "strStat",
              value: ""
            },
            {
              itemName: "运气(潜能属性也填写在此处）",
              elementName: "lucStat",
              value: ""
            },
            {
              itemName: "敏捷(潜能属性也填写在此处）",
              elementName: "dexStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "atk",
              value: ""
            },
            {
              itemName: "力量潜能（只需填写百分比）",
              elementName: "strStatPotential",
              value: ""
            },
            {
              itemName: "运气潜能（只需填写百分比）",
              elementName: "lucStatPotential",
              value: ""
            },
            {
              itemName: "敏捷潜能（只需填写百分比）",
              elementName: "dexStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "宠物装备1",
          isHidden: "none",
          item: [
            {
              itemName: "力量(潜能属性也填写在此处）",
              elementName: "strStat",
              value: ""
            },
            {
              itemName: "运气(潜能属性也填写在此处）",
              elementName: "lucStat",
              value: ""
            },
            {
              itemName: "敏捷(潜能属性也填写在此处）",
              elementName: "dexStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "atk",
              value: ""
            },
            {
              itemName: "力量潜能（只需填写百分比）",
              elementName: "strStatPotential",
              value: ""
            },
            {
              itemName: "运气潜能（只需填写百分比）",
              elementName: "lucStatPotential",
              value: ""
            },
            {
              itemName: "敏捷潜能（只需填写百分比）",
              elementName: "dexStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "宠物装备2",
          isHidden: "none",
          item: [
            {
              itemName: "力量(潜能属性也填写在此处）",
              elementName: "strStat",
              value: ""
            },
            {
              itemName: "运气(潜能属性也填写在此处）",
              elementName: "lucStat",
              value: ""
            },
            {
              itemName: "敏捷(潜能属性也填写在此处）",
              elementName: "dexStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "atk",
              value: ""
            },
            {
              itemName: "力量潜能（只需填写百分比）",
              elementName: "strStatPotential",
              value: ""
            },
            {
              itemName: "运气潜能（只需填写百分比）",
              elementName: "lucStatPotential",
              value: ""
            },
            {
              itemName: "敏捷潜能（只需填写百分比）",
              elementName: "dexStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "宠物装备3",
          isHidden: "none",
          item: [
            {
              itemName: "力量(潜能属性也填写在此处）",
              elementName: "strStat",
              value: ""
            },
            {
              itemName: "运气(潜能属性也填写在此处）",
              elementName: "lucStat",
              value: ""
            },
            {
              itemName: "敏捷(潜能属性也填写在此处）",
              elementName: "dexStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "atk",
              value: ""
            },
            {
              itemName: "力量潜能（只需填写百分比）",
              elementName: "strStatPotential",
              value: ""
            },
            {
              itemName: "运气潜能（只需填写百分比）",
              elementName: "lucStatPotential",
              value: ""
            },
            {
              itemName: "敏捷潜能（只需填写百分比）",
              elementName: "dexStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "atkPotential",
              value: ""
            }
          ]
        },

        {
          listName: "图腾1",
          isHidden: "none",
          item: [
            {
              itemName: "力量(潜能属性也填写在此处）",
              elementName: "strStat",
              value: ""
            },
            {
              itemName: "运气(潜能属性也填写在此处）",
              elementName: "lucStat",
              value: ""
            },
            {
              itemName: "敏捷(潜能属性也填写在此处）",
              elementName: "dexStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "atk",
              value: ""
            },
            {
              itemName: "力量潜能（只需填写百分比）",
              elementName: "strStatPotential",
              value: ""
            },
            {
              itemName: "运气潜能（只需填写百分比）",
              elementName: "lucStatPotential",
              value: ""
            },
            {
              itemName: "敏捷潜能（只需填写百分比）",
              elementName: "dexStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "图腾2",
          isHidden: "none",
          item: [
            {
              itemName: "力量(潜能属性也填写在此处）",
              elementName: "strStat",
              value: ""
            },
            {
              itemName: "运气(潜能属性也填写在此处）",
              elementName: "lucStat",
              value: ""
            },
            {
              itemName: "敏捷(潜能属性也填写在此处）",
              elementName: "dexStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "atk",
              value: ""
            },
            {
              itemName: "力量潜能（只需填写百分比）",
              elementName: "strStatPotential",
              value: ""
            },
            {
              itemName: "运气潜能（只需填写百分比）",
              elementName: "lucStatPotential",
              value: ""
            },
            {
              itemName: "敏捷潜能（只需填写百分比）",
              elementName: "dexStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "图腾3",
          isHidden: "none",
          item: [
            {
              itemName: "力量(潜能属性也填写在此处）",
              elementName: "strStat",
              value: ""
            },
            {
              itemName: "运气(潜能属性也填写在此处）",
              elementName: "lucStat",
              value: ""
            },
            {
              itemName: "敏捷(潜能属性也填写在此处）",
              elementName: "dexStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "atk",
              value: ""
            },
            {
              itemName: "力量潜能（只需填写百分比）",
              elementName: "strStatPotential",
              value: ""
            },
            {
              itemName: "运气潜能（只需填写百分比）",
              elementName: "lucStatPotential",
              value: ""
            },
            {
              itemName: "敏捷潜能（只需填写百分比）",
              elementName: "dexStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "拼图",
          isHidden: "none",
          item: [
            {
              itemName: "力量(潜能属性也填写在此处）",
              elementName: "strStat",
              value: ""
            },
            {
              itemName: "运气(潜能属性也填写在此处）",
              elementName: "lucStat",
              value: ""
            },
            {
              itemName: "敏捷(潜能属性也填写在此处）",
              elementName: "dexStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "atk",
              value: ""
            },
            {
              itemName: "力量潜能（只需填写百分比）",
              elementName: "strStatPotential",
              value: ""
            },
            {
              itemName: "运气潜能（只需填写百分比）",
              elementName: "lucStatPotential",
              value: ""
            },
            {
              itemName: "敏捷潜能（只需填写百分比）",
              elementName: "dexStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "称号",
          isHidden: "none",
          item: [
            {
              itemName: "力量(潜能属性也填写在此处）",
              elementName: "strStat",
              value: ""
            },
            {
              itemName: "运气(潜能属性也填写在此处）",
              elementName: "lucStat",
              value: ""
            },
            {
              itemName: "敏捷(潜能属性也填写在此处）",
              elementName: "dexStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "atk",
              value: ""
            },
            {
              itemName: "力量潜能（只需填写百分比）",
              elementName: "strStatPotential",
              value: ""
            },
            {
              itemName: "运气潜能（只需填写百分比）",
              elementName: "lucStatPotential",
              value: ""
            },
            {
              itemName: "敏捷潜能（只需填写百分比）",
              elementName: "dexStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "现金装备",
          isHidden: "none",
          item: [
            {
              itemName: "力量(潜能属性也填写在此处）",
              elementName: "strStat",
              value: ""
            },
            {
              itemName: "运气(潜能属性也填写在此处）",
              elementName: "lucStat",
              value: ""
            },
            {
              itemName: "敏捷(潜能属性也填写在此处）",
              elementName: "dexStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "atk",
              value: ""
            },
            {
              itemName: "力量潜能（只需填写百分比）",
              elementName: "strStatPotential",
              value: ""
            },
            {
              itemName: "运气潜能（只需填写百分比）",
              elementName: "lucStatPotential",
              value: ""
            },
            {
              itemName: "敏捷潜能（只需填写百分比）",
              elementName: "dexStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "套装属性（合计）",
          isHidden: "none",
          item: [
            {
              itemName: "力量(潜能属性也填写在此处）",
              elementName: "strStat",
              value: ""
            },
            {
              itemName: "运气(潜能属性也填写在此处）",
              elementName: "lucStat",
              value: ""
            },
            {
              itemName: "敏捷(潜能属性也填写在此处）",
              elementName: "dexStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "atk",
              value: ""
            },
            {
              itemName: "力量潜能（只需填写百分比）",
              elementName: "strStatPotential",
              value: ""
            },
            {
              itemName: "运气潜能（只需填写百分比）",
              elementName: "lucStatPotential",
              value: ""
            },
            {
              itemName: "敏捷潜能（只需填写百分比）",
              elementName: "dexStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "技能属性（合计）",
          isHidden: "none",
          item: [
            {
              itemName: "力量(潜能属性也填写在此处）",
              elementName: "strStat",
              value: ""
            },
            {
              itemName: "运气(潜能属性也填写在此处）",
              elementName: "lucStat",
              value: ""
            },
            {
              itemName: "敏捷(潜能属性也填写在此处）",
              elementName: "dexStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "atk",
              value: ""
            },
            {
              itemName: "力量潜能（只需填写百分比）",
              elementName: "strStatPotential",
              value: ""
            },
            {
              itemName: "运气潜能（只需填写百分比）",
              elementName: "lucStatPotential",
              value: ""
            },
            {
              itemName: "敏捷潜能（只需填写百分比）",
              elementName: "dexStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "LINK（合计）",
          isHidden: "none",
          item: [
            {
              itemName: "力量(潜能属性也填写在此处）",
              elementName: "strStat",
              value: ""
            },
            {
              itemName: "运气(潜能属性也填写在此处）",
              elementName: "lucStat",
              value: ""
            },
            {
              itemName: "敏捷(潜能属性也填写在此处）",
              elementName: "dexStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "atk",
              value: ""
            },
            {
              itemName: "力量潜能（只需填写百分比）",
              elementName: "strStatPotential",
              value: ""
            },
            {
              itemName: "运气潜能（只需填写百分比）",
              elementName: "lucStatPotential",
              value: ""
            },
            {
              itemName: "敏捷潜能（只需填写百分比）",
              elementName: "dexStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "怪怪卡",
          isHidden: "none",
          item: [
            {
              itemName: "力量(潜能属性也填写在此处）",
              elementName: "strStat",
              value: ""
            },
            {
              itemName: "运气(潜能属性也填写在此处）",
              elementName: "lucStat",
              value: ""
            },
            {
              itemName: "敏捷(潜能属性也填写在此处）",
              elementName: "dexStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "atk",
              value: ""
            },
            {
              itemName: "力量潜能（只需填写百分比）",
              elementName: "strStatPotential",
              value: ""
            },
            {
              itemName: "运气潜能（只需填写百分比）",
              elementName: "lucStatPotential",
              value: ""
            },
            {
              itemName: "敏捷潜能（只需填写百分比）",
              elementName: "dexStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "atkPotential",
              value: ""
            }
          ]
        }
      ]
    };
  },
  mounted: function() {
    var list = wx.getStorageSync("list");
    if (list != null && list != "") {
      this.list = list;
    }
  },
  methods: {
    changeShow(index) {
      var open = true;
      if (this.list[index].isHidden == "") {
        open = false;
      }
      for (var i = 0; i <= 38; i++) {
        this.list[i].isHidden = "none";
      }
      if (open) {
        this.list[index].isHidden = "";
      }
    },
    next() {
      var list = this.list;
      wx.setStorage({
        key: "list",
        data: list,
        success: function(res) {
          console.log("异步保存装备信息成功");
          wx.setStorage({
            key: "haveDate",
            data: true,
            success: function(res) {}
          });
          mpvue.navigateTo({ url: "../../pages/xenonResult/main" });
        }
      });
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
  flex-wrap: wrap;
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
  margin-left: 19rpx;
  width: 712rpx;
  height: 122rpx;
}
.pannle {
  width: 750rpx;
  background: rgba(255, 255, 255, 1);
  padding-left: 30rpx;
  align-items: flex-start;
  justify-content: flex-start;
}
.enter {
  margin-top: 45rpx;
  /* height: 55rpx; */
  width: 712rpx;
  padding-block-end: 10rpx;
  border-bottom: 1px solid #eaeaea;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
}
.enter_title {
  height: 30rpx;
  font-size: 28rpx;
  /* margin-left: 29rpx; */
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(153, 153, 153, 1);
}
.enter_title_box {
  margin-top: 36rpx;
  height: 50rpx;
  /* margin-left: 102rpx; */
  border-bottom: 1px solid #eaeaea;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(153, 153, 153, 1);
  flex-flow: nowrap;
}
.enter_box {
  margin-top: 36rpx;
  height: 130rpx;
  /* margin-left: 102rpx; */
  border-bottom: 1px solid #eaeaea;

  flex-flow: nowrap;
}
.enter_input {
  margin-top: 18rpx;
  padding-left: 10rpx;
  width: 519rpx;
  height: 30rpx;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(224, 224, 224, 1);
  border-radius: 35rpx;
}
.enter_input_long {
  height: 50rpx;
  margin-top: 70rpx;
  padding-left: 10rpx;
  font-size: 30rpx;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(153, 153, 153, 1);
  justify-content: flex-end;
}
.enter_box_detail {
  margin-left: 102rpx;
  justify-content: flex-start;
}
.box {
  box-shadow: 0px 3px 44px 2px rgba(0, 0, 0, 0.1);
}
.hidden {
  display: none;
}
</style>