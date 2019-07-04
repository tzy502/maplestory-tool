<template>
  <div class="container">
    <div class="first_box">
      <div class="litter_bule"></div>
      <p class="first_content">第二步，请根据装备以及技能填写以下属性</p>
    </div>
    <div class="pannle">
      <li v-for="eq in list" :key="eq">
        <div class="box"></div>
        <div class="enter_title_box">
          <p class="enter_title">{{eq.listName}}</p>
        </div>
        <div class="enter_box">
          <div class="enter_box_detail">
            <p class="enter_title">{{eq.item[0].itemName}}</p>
            <input type="number" class="enter_input" v-model="eq.item[0].value" placeholder="请输入数值" />
          </div>
        </div>
        <div class="enter_box">
          <div class="enter_box_detail">
            <p class="enter_title">{{eq.item[1].itemName}}</p>
            <input type="number" class="enter_input" v-model="eq.item[1].value" placeholder="请输入数值" />
          </div>
        </div>
        <div class="enter_box">
          <div class="enter_box_detail">
            <p class="enter_title">{{eq.item[2].itemName}}</p>
            <input type="number" class="enter_input" v-model="eq.item[2].value" placeholder="请输入数值" />
          </div>
        </div>
        <div class="enter_box">
          <div class="enter_box_detail">
            <p class="enter_title">{{eq.item[3].itemName}}</p>
            <input type="number" class="enter_input" v-model="eq.item[3].value" placeholder="请输入数值" />
          </div>
        </div>
        <div class="enter_box">
          <div class="enter_box_detail">
            <p class="enter_title">{{eq.item[4].itemName}}</p>
            <input type="number" class="enter_input" v-model="eq.item[4].value" placeholder="请输入数值" />
          </div>
        </div>
        <div class="enter_box">
          <div class="enter_box_detail">
            <p class="enter_title">{{eq.item[5].itemName}}</p>
            <input type="number" class="enter_input" v-model="eq.item[5].value" placeholder="请输入数值" />
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
          isHidden: "true",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "01mainStat"
              //value: 0
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "01viecStat"
              //value: 0
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "01atk"
              //value: 0
            },
            {
              itemName: "属性潜能（只需填写百分比）",
              elementName: "01mainStatPotential"
              //value: 0
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "01viecStatPotential"
              //value: 0
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "01atkPotential"
              //value: 0
            }
          ]
        },
        {
          listName: "戒指2",
          isHidden: "true",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "02mainStat"
              //value: 0
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "02viecStat"
              //value: 0
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "02atk"
              //value: 0
            },
            {
              itemName: "属性潜能（只需填写百分比）",
              elementName: "02mainStatPotential"
              //value: 0
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "02viecStatPotential"
              //value: 0
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "02atkPotential"
              //value: 0
            }
          ]
        },
        {
          listName: "戒指3",
          isHidden: "true",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "03mainStat"
              //value: 0
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "03viecStat"
              //value: 0
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "03atk"
              //value: 0
            },
            {
              itemName: "属性潜能（只需填写百分比）",
              elementName: "03mainStatPotential"
              //value: 0
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "03viecStatPotential"
              //value: 0
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "03atkPotential"
              //value: 0
            }
          ]
        },
        {
          listName: "戒指4",
          isHidden: "true",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "04mainStat"
              //value: 0
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "04viecStat"
              //value: 0
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "04atk"
              //value: 0
            },
            {
              itemName: "属性潜能（只需填写百分比）",
              elementName: "04mainStatPotential"
              //value: 0
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "04viecStatPotential"
              //value: 0
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "04atkPotential"
              //value: 0
            }
          ]
        },
        {
          listName: "戒指5",
          isHidden: "true",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "05mainStat"
              //value: 0
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "05viecStat"
              //value: 0
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "05atk"
              //value: 0
            },
            {
              itemName: "属性潜能（只需填写百分比）",
              elementName: "05mainStatPotential"
              //value: 0
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "05viecStatPotential"
              //value: 0
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "05atkPotential"
              //value: 0
            }
          ]
        },
        {
          listName: "戒指6",
          isHidden: "true",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "06mainStat"
              //value: 0
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "06viecStat"
              //value: 0
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "06atk"
              //value: 0
            },
            {
              itemName: "属性潜能（只需填写百分比）",
              elementName: "06mainStatPotential"
              //value: 0
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "06viecStatPotential"
              //value: 0
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "06atkPotential"
              //value: 0
            }
          ]
        },
        {
          listName: "吊坠1",
          isHidden: "true",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "07mainStat"
              //value: 0
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "07viecStat"
              //value: 0
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "07atk"
              //value: 0
            },
            {
              itemName: "属性潜能（只需填写百分比）",
              elementName: "07mainStatPotential"
              //value: 0
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "07viecStatPotential"
              //value: 0
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "07atkPotential"
              //value: 0
            }
          ]
        },
        {
          listName: "吊坠2",
          isHidden: "true",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "08mainStat"
              //value: 0
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "08viecStat"
              //value: 0
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "08atk"
              //value: 0
            },
            {
              itemName: "属性潜能（只需填写百分比）",
              elementName: "08mainStatPotential"
              //value: 0
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "08viecStatPotential"
              //value: 0
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "08atkPotential"
              //value: 0
            }
          ]
        },
        {
          listName: "武器",
          isHidden: "true",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "09mainStat"
              //value: 0
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "09viecStat"
              //value: 0
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "09atk"
              //value: 0
            },
            {
              itemName: "属性潜能（只需填写百分比）",
              elementName: "09mainStatPotential"
              //value: 0
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "09viecStatPotential"
              //value: 0
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "09atkPotential"
              //value: 0
            }
          ]
        },
        {
          listName: "腰带",
          isHidden: "true",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "10mainStat"
              //value: 0
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "10viecStat"
              //value: 0
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "10atk"
              //value: 0
            },
            {
              itemName: "属性潜能（只需填写百分比）",
              elementName: "10mainStatPotential"
              //value: 0
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "10viecStatPotential"
              //value: 0
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "10atkPotential"
              //value: 0
            }
          ]
        },
        {
          listName: "帽子",
          isHidden: "true",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "11mainStat"
              //value: 0
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "11viecStat"
              //value: 0
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "11atk"
              //value: 0
            },
            {
              itemName: "属性潜能（只需填写百分比）",
              elementName: "11mainStatPotential"
              //value: 0
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "11viecStatPotential"
              //value: 0
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "11atkPotential"
              //value: 0
            }
          ]
        },
        {
          listName: "前额",
          isHidden: "true",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "12mainStat"
              //value: 0
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "12viecStat"
              //value: 0
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "12atk"
              //value: 0
            },
            {
              itemName: "属性潜能（只需填写百分比）",
              elementName: "12mainStatPotential"
              //value: 0
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "12viecStatPotential"
              //value: 0
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "12atkPotential"
              //value: 0
            }
          ]
        },
        {
          listName: "眼饰",
          isHidden: "true",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "13mainStat"
              //value: 0
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "13viecStat"
              //value: 0
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "13atk"
              //value: 0
            },
            {
              itemName: "属性潜能（只需填写百分比）",
              elementName: "13mainStatPotential"
              //value: 0
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "13viecStatPotential"
              //value: 0
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "13atkPotential"
              //value: 0
            }
          ]
        },
        {
          listName: "衣服",
          isHidden: "true",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "14mainStat"
              //value: 0
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "14viecStat"
              //value: 0
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "14atk"
              //value: 0
            },
            {
              itemName: "属性潜能（只需填写百分比）",
              elementName: "14mainStatPotential"
              //value: 0
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "14viecStatPotential"
              //value: 0
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "14atkPotential"
              //value: 0
            }
          ]
        },
        {
          listName: "裤子",
          isHidden: "true",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "15mainStat"
              //value: 0
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "15viecStat"
              //value: 0
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "15atk"
              //value: 0
            },
            {
              itemName: "属性潜能（只需填写百分比）",
              elementName: "15mainStatPotential"
              //value: 0
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "15viecStatPotential"
              //value: 0
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "15atkPotential"
              //value: 0
            }
          ]
        },
        {
          listName: "鞋子",
          isHidden: "true",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "16mainStat"
              //value: 0
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "16viecStat"
              //value: 0
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "16atk"
              //value: 0
            },
            {
              itemName: "属性潜能（只需填写百分比）",
              elementName: "16mainStatPotential"
              //value: 0
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "16viecStatPotential"
              //value: 0
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "16atkPotential"
              //value: 0
            }
          ]
        },
        {
          listName: "口袋",
          isHidden: "true",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "17mainStat"
              //value: 0
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "17viecStat"
              //value: 0
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "17atk"
              //value: 0
            },
            {
              itemName: "属性潜能（只需填写百分比）",
              elementName: "17mainStatPotential"
              //value: 0
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "17viecStatPotential"
              //value: 0
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "17atkPotential"
              //value: 0
            }
          ]
        },
        {
          listName: "耳饰",
          isHidden: "true",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "18mainStat"
              //value: 0
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "18viecStat"
              //value: 0
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "18atk"
              //value: 0
            },
            {
              itemName: "属性潜能（只需填写百分比）",
              elementName: "18mainStatPotential"
              //value: 0
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "18viecStatPotential"
              //value: 0
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "18atkPotential"
              //value: 0
            }
          ]
        },
        {
          listName: "肩饰",
          isHidden: "true",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "19mainStat"
              //value: 0
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "19viecStat"
              //value: 0
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "19atk"
              //value: 0
            },
            {
              itemName: "属性潜能（只需填写百分比）",
              elementName: "19mainStatPotential"
              //value: 0
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "19viecStatPotential"
              //value: 0
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "19atkPotential"
              //value: 0
            }
          ]
        },
        {
          listName: "手套",
          isHidden: "true",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "20mainStat"
              //value: 0
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "20viecStat"
              //value: 0
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "20atk"
              //value: 0
            },
            {
              itemName: "属性潜能（只需填写百分比）",
              elementName: "20mainStatPotential"
              //value: 0
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "20viecStatPotential"
              //value: 0
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "20atkPotential"
              //value: 0
            }
          ]
        },
        {
          listName: "纹章",
          isHidden: "true",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "21mainStat"
              //value: 0
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "21viecStat"
              //value: 0
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "21atk"
              //value: 0
            },
            {
              itemName: "属性潜能（只需填写百分比）",
              elementName: "21mainStatPotential"
              //value: 0
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "21viecStatPotential"
              //value: 0
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "21atkPotential"
              //value: 0
            }
          ]
        },
        {
          listName: "徽章",
          isHidden: "true",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "22mainStat"
              //value: 0
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "22viecStat"
              //value: 0
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "22atk"
              //value: 0
            },
            {
              itemName: "属性潜能（只需填写百分比）",
              elementName: "22mainStatPotential"
              //value: 0
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "22viecStatPotential"
              //value: 0
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "22atkPotential"
              //value: 0
            }
          ]
        },
        {
          listName: "勋章",
          isHidden: "true",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "23mainStat"
              //value: 0
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "23viecStat"
              //value: 0
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "23atk"
              //value: 0
            },
            {
              itemName: "属性潜能（只需填写百分比）",
              elementName: "23mainStatPotential"
              //value: 0
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "23viecStatPotential"
              //value: 0
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "23atkPotential"
              //value: 0
            }
          ]
        },
        {
          listName: "副手",
          isHidden: "true",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "24mainStat"
              //value: 0
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "24viecStat"
              //value: 0
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "24atk"
              //value: 0
            },
            {
              itemName: "属性潜能（只需填写百分比）",
              elementName: "24mainStatPotential"
              //value: 0
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "24viecStatPotential"
              //value: 0
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "24atkPotential"
              //value: 0
            }
          ]
        },
        {
          listName: "披风",
          isHidden: "true",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "25mainStat"
              //value: 0
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "25viecStat"
              //value: 0
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "25atk"
              //value: 0
            },
            {
              itemName: "属性潜能（只需填写百分比）",
              elementName: "25mainStatPotential"
              //value: 0
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "25viecStatPotential"
              //value: 0
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "25atkPotential"
              //value: 0
            }
          ]
        },
        {
          listName: "心脏",
          isHidden: "true",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "26mainStat"
              //value: 0
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "26viecStat"
              //value: 0
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "26atk"
              //value: 0
            },
            {
              itemName: "属性潜能（只需填写百分比）",
              elementName: "26mainStatPotential"
              //value: 0
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "26viecStatPotential"
              //value: 0
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "26atkPotential"
              //value: 0
            }
          ]
        },
        {
          listName: "宠物装备1",
          isHidden: "true",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "27mainStat"
              //value: 0
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "27viecStat"
              //value: 0
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "27atk"
              //value: 0
            },
            {
              itemName: "属性潜能（只需填写百分比）",
              elementName: "27mainStatPotential"
              //value: 0
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "27viecStatPotential"
              //value: 0
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "27atkPotential"
              //value: 0
            }
          ]
        },
        {
          listName: "宠物装备2",
          isHidden: "true",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "28mainStat"
              //value: 0
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "28viecStat"
              //value: 0
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "28atk"
              //value: 0
            },
            {
              itemName: "属性潜能（只需填写百分比）",
              elementName: "28mainStatPotential"
              //value: 0
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "28viecStatPotential"
              //value: 0
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "28atkPotential"
              //value: 0
            }
          ]
        },
        {
          listName: "宠物装备3",
          isHidden: "true",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "29mainStat"
              //value: 0
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "29viecStat"
              //value: 0
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "29atk"
              //value: 0
            },
            {
              itemName: "属性潜能（只需填写百分比）",
              elementName: "29mainStatPotential"
              //value: 0
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "29viecStatPotential"
              //value: 0
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "29atkPotential"
              //value: 0
            }
          ]
        },
        {
          listName: "心脏",
          isHidden: "true",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "30mainStat"
              //value: 0
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "30viecStat"
              //value: 0
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "30atk"
              //value: 0
            },
            {
              itemName: "属性潜能（只需填写百分比）",
              elementName: "30mainStatPotential"
              //value: 0
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "30viecStatPotential"
              //value: 0
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "30atkPotential"
              //value: 0
            }
          ]
        },
        {
          listName: "图腾1",
          isHidden: "true",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "31mainStat"
              //value: 0
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "31viecStat"
              //value: 0
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "31atk"
              //value: 0
            },
            {
              itemName: "属性潜能（只需填写百分比）",
              elementName: "31mainStatPotential"
              //value: 0
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "31viecStatPotential"
              //value: 0
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "31atkPotential"
              //value: 0
            }
          ]
        },
        {
          listName: "图腾2",
          isHidden: "true",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "32mainStat"
              //value: 0
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "32viecStat"
              //value: 0
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "32atk"
              //value: 0
            },
            {
              itemName: "属性潜能（只需填写百分比）",
              elementName: "32mainStatPotential"
              //value: 0
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "32viecStatPotential"
              //value: 0
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "32atkPotential"
              //value: 0
            }
          ]
        },
        {
          listName: "图腾3",
          isHidden: "true",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "33mainStat"
              //value: 0
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "33viecStat"
              //value: 0
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "33atk"
              //value: 0
            },
            {
              itemName: "属性潜能（只需填写百分比）",
              elementName: "33mainStatPotential"
              //value: 0
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "33viecStatPotential"
              //value: 0
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "33atkPotential"
              //value: 0
            }
          ]
        },
        {
          listName: "拼图",
          isHidden: "true",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "34mainStat"
              //value: 0
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "34viecStat"
              //value: 0
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "34atk"
              //value: 0
            },
            {
              itemName: "属性潜能（只需填写百分比）",
              elementName: "34mainStatPotential"
              //value: 0
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "34viecStatPotential"
              //value: 0
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "34atkPotential"
              //value: 0
            }
          ]
        },
        {
          listName: "称号",
          isHidden: "true",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "35mainStat"
              //value: 0
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "35viecStat"
              //value: 0
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "35atk"
              //value: 0
            },
            {
              itemName: "属性潜能（只需填写百分比）",
              elementName: "35mainStatPotential"
              //value: 0
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "35viecStatPotential"
              //value: 0
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "35atkPotential"
              //value: 0
            }
          ]
        },
        {
          listName: "现金装备",
          isHidden: "true",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "36mainStat"
              //value: 0
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "36viecStat"
              //value: 0
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "36atk"
              //value: 0
            },
            {
              itemName: "属性潜能（只需填写百分比）",
              elementName: "36mainStatPotential"
              //value: 0
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "36viecStatPotential"
              //value: 0
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "36atkPotential"
              //value: 0
            }
          ]
        },
        {
          listName: "套装属性（合计）",
          isHidden: "true",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "37mainStat"
              //value: 0
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "37viecStat"
              //value: 0
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "37atk"
              //value: 0
            },
            {
              itemName: "属性潜能（只需填写百分比）",
              elementName: "37mainStatPotential"
              //value: 0
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "37viecStatPotential"
              //value: 0
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "37atkPotential"
              //value: 0
            }
          ]
        },
        {
          listName: "技能属性（合计）",
          isHidden: "true",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "38mainStat"
              //value: 0
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "38viecStat"
              //value: 0
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "38atk"
              //value: 0
            },
            {
              itemName: "属性潜能（只需填写百分比）",
              elementName: "38mainStatPotential"
              //value: 0
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "38viecStatPotential"
              //value: 0
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "38atkPotential"
              //value: 0
            }
          ]
        },
        {
          listName: "LINK（合计）",
          isHidden: "true",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "39mainStat"
              //value: 0
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "39viecStat"
              //value: 0
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "39atk"
              //value: 0
            },
            {
              itemName: "属性潜能（只需填写百分比）",
              elementName: "39mainStatPotential"
              //value: 0
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "39viecStatPotential"
              //value: 0
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "39atkPotential"
              //value: 0
            }
          ]
        },
        {
          listName: "怪怪卡",
          isHidden: "true",
          item: [
            {
              itemName: "主属性(潜能属性也填写在此处）",
              elementName: "40mainStat"
              //value: 0
            },
            {
              itemName: "副属性(潜能属性也填写在此处）",
              elementName: "40viecStat"
              //value: 0
            },
            {
              itemName: "攻击(潜能攻击也填写在此处）",
              elementName: "40atk"
              //value: 0
            },
            {
              itemName: "属性潜能（只需填写百分比）",
              elementName: "40mainStatPotential"
              //value: 0
            },
            {
              itemName: "副属性潜能（只需填写百分比）",
              elementName: "40viecStatPotential"
              //value: 0
            },
            {
              itemName: "攻击潜能（只需填写百分比）",
              elementName: "40atkPotential"
              //value: 0
            }
          ]
        }
      ]
    };
  },

  methods: {}
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
  margin-left: 29rpx;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(153, 153, 153, 1);
}
.enter_title_box {
  margin-top: 36rpx;
  height: 50rpx;
  /* margin-left: 102rpx; */
  border-bottom: 1px solid #eaeaea;

  flex-flow: nowrap;
}
.enter_box {
  margin-top: 36rpx;
  height: 130rpx;
  /* margin-left: 102rpx; */
  border-bottom: 1px solid #eaeaea;
  /* justify-content: flex-start;
  flex-flow: nowrap; */
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
}
.box{
  box-shadow:0px 3px 44px 2px rgba(0, 0, 0, 0.1);
}
</style>