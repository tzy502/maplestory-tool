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
        </div>
      </li>
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
    return {
      list: [
        {
          listName: "戒指1",
          isHidden: "none",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "01mainStat",
              value: ""
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "01viecStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "01atk",
              value: ""
            },
            {
              itemName: "主属性潜能（只需填写百分比）",
              elementName: "01mainStatPotential",
              value: ""
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "01viecStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "01atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "戒指2",
          isHidden: "none",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "02mainStat",
              value: ""
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "02viecStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "02atk",
              value: ""
            },
            {
              itemName: "主属性潜能（只需填写百分比）",
              elementName: "02mainStatPotential",
              value: ""
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "02viecStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "02atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "戒指3",
          isHidden: "none",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "03mainStat",
              value: ""
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "03viecStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "03atk",
              value: ""
            },
            {
              itemName: "主属性潜能（只需填写百分比）",
              elementName: "03mainStatPotential",
              value: ""
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "03viecStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "03atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "戒指4",
          isHidden: "none",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "04mainStat",
              value: ""
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "04viecStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "04atk",
              value: ""
            },
            {
              itemName: "主属性潜能（只需填写百分比）",
              elementName: "04mainStatPotential",
              value: ""
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "04viecStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "04atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "戒指5",
          isHidden: "none",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "05mainStat",
              value: ""
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "05viecStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "05atk",
              value: ""
            },
            {
              itemName: "主属性潜能（只需填写百分比）",
              elementName: "05mainStatPotential",
              value: ""
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "05viecStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "05atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "戒指6",
          isHidden: "none",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "06mainStat",
              value: ""
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "06viecStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "06atk",
              value: ""
            },
            {
              itemName: "主属性潜能（只需填写百分比）",
              elementName: "06mainStatPotential",
              value: ""
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "06viecStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "06atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "吊坠1",
          isHidden: "none",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "07mainStat",
              value: ""
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "07viecStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "07atk",
              value: ""
            },
            {
              itemName: "主属性潜能（只需填写百分比）",
              elementName: "07mainStatPotential",
              value: ""
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "07viecStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "07atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "吊坠2",
          isHidden: "none",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "08mainStat",
              value: ""
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "08viecStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "08atk",
              value: ""
            },
            {
              itemName: "主属性潜能（只需填写百分比）",
              elementName: "08mainStatPotential",
              value: ""
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "08viecStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "08atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "武器",
          isHidden: "none",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "09mainStat",
              value: ""
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "09viecStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "09atk",
              value: ""
            },
            {
              itemName: "主属性潜能（只需填写百分比）",
              elementName: "09mainStatPotential",
              value: ""
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "09viecStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "09atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "腰带",
          isHidden: "none",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "10mainStat",
              value: ""
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "10viecStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "10atk",
              value: ""
            },
            {
              itemName: "主属性潜能（只需填写百分比）",
              elementName: "10mainStatPotential",
              value: ""
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "10viecStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "10atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "帽子",
          isHidden: "none",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "11mainStat",
              value: ""
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "11viecStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "11atk",
              value: ""
            },
            {
              itemName: "主属性潜能（只需填写百分比）",
              elementName: "11mainStatPotential",
              value: ""
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "11viecStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "11atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "前额",
          isHidden: "none",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "12mainStat",
              value: ""
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "12viecStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "12atk",
              value: ""
            },
            {
              itemName: "主属性潜能（只需填写百分比）",
              elementName: "12mainStatPotential",
              value: ""
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "12viecStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "12atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "眼饰",
          isHidden: "none",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "13mainStat",
              value: ""
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "13viecStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "13atk",
              value: ""
            },
            {
              itemName: "主属性潜能（只需填写百分比）",
              elementName: "13mainStatPotential",
              value: ""
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "13viecStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "13atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "衣服",
          isHidden: "none",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "14mainStat",
              value: ""
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "14viecStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "14atk",
              value: ""
            },
            {
              itemName: "主属性潜能（只需填写百分比）",
              elementName: "14mainStatPotential",
              value: ""
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "14viecStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "14atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "裤子",
          isHidden: "none",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "15mainStat",
              value: ""
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "15viecStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "15atk",
              value: ""
            },
            {
              itemName: "主属性潜能（只需填写百分比）",
              elementName: "15mainStatPotential",
              value: ""
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "15viecStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "15atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "鞋子",
          isHidden: "none",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "16mainStat",
              value: ""
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "16viecStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "16atk",
              value: ""
            },
            {
              itemName: "主属性潜能（只需填写百分比）",
              elementName: "16mainStatPotential",
              value: ""
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "16viecStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "16atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "口袋",
          isHidden: "none",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "17mainStat",
              value: ""
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "17viecStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "17atk",
              value: ""
            },
            {
              itemName: "主属性潜能（只需填写百分比）",
              elementName: "17mainStatPotential",
              value: ""
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "17viecStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "17atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "耳饰",
          isHidden: "none",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "18mainStat",
              value: ""
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "18viecStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "18atk",
              value: ""
            },
            {
              itemName: "主属性潜能（只需填写百分比）",
              elementName: "18mainStatPotential",
              value: ""
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "18viecStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "18atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "肩饰",
          isHidden: "none",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "19mainStat",
              value: ""
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "19viecStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "19atk",
              value: ""
            },
            {
              itemName: "主属性潜能（只需填写百分比）",
              elementName: "19mainStatPotential",
              value: ""
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "19viecStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "19atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "手套",
          isHidden: "none",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "20mainStat",
              value: ""
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "20viecStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "20atk",
              value: ""
            },
            {
              itemName: "主属性潜能（只需填写百分比）",
              elementName: "20mainStatPotential",
              value: ""
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "20viecStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "20atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "纹章",
          isHidden: "none",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "21mainStat",
              value: ""
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "21viecStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "21atk",
              value: ""
            },
            {
              itemName: "主属性潜能（只需填写百分比）",
              elementName: "21mainStatPotential",
              value: ""
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "21viecStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "21atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "徽章",
          isHidden: "none",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "22mainStat",
              value: ""
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "22viecStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "22atk",
              value: ""
            },
            {
              itemName: "主属性潜能（只需填写百分比）",
              elementName: "22mainStatPotential",
              value: ""
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "22viecStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "22atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "勋章",
          isHidden: "none",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "23mainStat",
              value: ""
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "23viecStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "23atk",
              value: ""
            },
            {
              itemName: "主属性潜能（只需填写百分比）",
              elementName: "23mainStatPotential",
              value: ""
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "23viecStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "23atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "副手",
          isHidden: "none",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "24mainStat",
              value: ""
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "24viecStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "24atk",
              value: ""
            },
            {
              itemName: "主属性潜能（只需填写百分比）",
              elementName: "24mainStatPotential",
              value: ""
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "24viecStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "24atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "披风",
          isHidden: "none",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "25mainStat",
              value: ""
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "25viecStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "25atk",
              value: ""
            },
            {
              itemName: "主属性潜能（只需填写百分比）",
              elementName: "25mainStatPotential",
              value: ""
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "25viecStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "25atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "心脏",
          isHidden: "none",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "26mainStat",
              value: ""
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "26viecStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "26atk",
              value: ""
            },
            {
              itemName: "主属性潜能（只需填写百分比）",
              elementName: "26mainStatPotential",
              value: ""
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "26viecStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "26atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "宠物装备1",
          isHidden: "none",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "27mainStat",
              value: ""
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "27viecStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "27atk",
              value: ""
            },
            {
              itemName: "主属性潜能（只需填写百分比）",
              elementName: "27mainStatPotential",
              value: ""
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "27viecStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "27atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "宠物装备2",
          isHidden: "none",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "28mainStat",
              value: ""
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "28viecStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "28atk",
              value: ""
            },
            {
              itemName: "主属性潜能（只需填写百分比）",
              elementName: "28mainStatPotential",
              value: ""
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "28viecStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "28atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "宠物装备3",
          isHidden: "none",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "29mainStat",
              value: ""
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "29viecStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "29atk",
              value: ""
            },
            {
              itemName: "主属性潜能（只需填写百分比）",
              elementName: "29mainStatPotential",
              value: ""
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "29viecStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "29atkPotential",
              value: ""
            }
          ]
        },
       
        {
          listName: "图腾1",
          isHidden: "none",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "31mainStat",
              value: ""
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "31viecStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "31atk",
              value: ""
            },
            {
              itemName: "主属性潜能（只需填写百分比）",
              elementName: "31mainStatPotential",
              value: ""
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "31viecStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "31atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "图腾2",
          isHidden: "none",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "32mainStat",
              value: ""
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "32viecStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "32atk",
              value: ""
            },
            {
              itemName: "主属性潜能（只需填写百分比）",
              elementName: "32mainStatPotential",
              value: ""
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "32viecStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "32atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "图腾3",
          isHidden: "none",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "33mainStat",
              value: ""
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "33viecStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "33atk",
              value: ""
            },
            {
              itemName: "主属性潜能（只需填写百分比）",
              elementName: "33mainStatPotential",
              value: ""
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "33viecStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "33atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "拼图",
          isHidden: "none",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "34mainStat",
              value: ""
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "34viecStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "34atk",
              value: ""
            },
            {
              itemName: "主属性潜能（只需填写百分比）",
              elementName: "34mainStatPotential",
              value: ""
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "34viecStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "34atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "称号",
          isHidden: "none",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "35mainStat",
              value: ""
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "35viecStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "35atk",
              value: ""
            },
            {
              itemName: "主属性潜能（只需填写百分比）",
              elementName: "35mainStatPotential",
              value: ""
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "35viecStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "35atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "现金装备",
          isHidden: "none",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "36mainStat",
              value: ""
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "36viecStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "36atk",
              value: ""
            },
            {
              itemName: "主属性潜能（只需填写百分比）",
              elementName: "36mainStatPotential",
              value: ""
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "36viecStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "36atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "套装属性（合计）",
          isHidden: "none",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "37mainStat",
              value: ""
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "37viecStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "37atk",
              value: ""
            },
            {
              itemName: "主属性潜能（只需填写百分比）",
              elementName: "37mainStatPotential",
              value: ""
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "37viecStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "37atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "技能属性（合计）",
          isHidden: "none",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "38mainStat",
              value: ""
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "38viecStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "38atk",
              value: ""
            },
            {
              itemName: "主属性潜能（只需填写百分比）",
              elementName: "38mainStatPotential",
              value: ""
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "38viecStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "38atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "LINK（合计）",
          isHidden: "none",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "39mainStat",
              value: ""
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "39viecStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "39atk",
              value: ""
            },
            {
              itemName: "主属性潜能（只需填写百分比）",
              elementName: "39mainStatPotential",
              value: ""
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "39viecStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "39atkPotential",
              value: ""
            }
          ]
        },
        {
          listName: "怪怪卡",
          isHidden: "none",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "40mainStat",
              value: ""
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "40viecStat",
              value: ""
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "40atk",
              value: ""
            },
            {
              itemName: "主属性潜能（只需填写百分比）",
              elementName: "40mainStatPotential",
              value: ""
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "40viecStatPotential",
              value: ""
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "40atkPotential",
              value: ""
            }
          ]
        }
      ]
    };
  },
  mounted: function() {
    var list= wx.getStorageSync("list");
    if(list!=null&&list!=""){
    this.list =list;
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
          mpvue.navigateTo({ url: "../../pages/result/main" });
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
  width: 519rpx;
  height: 30rpx;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(224, 224, 224, 1);
  border-radius: 35rpx;
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