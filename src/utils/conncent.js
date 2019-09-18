// var host="www.maplestory-tool.com/api"
var host = "127.0.0.1:9100/api"
var conncent = function () {

  var data = {
    name: ""
    , level: ""
    , arc: ""
    , crit: ""
    , critDamage: ""
    , mapleWarrior: ""
    , superMain: ""
    , union: ""
    , union2: ""
    , job: ""
    , coefficient: ""
    , value: ""
    , finalDamage: ""
    , bossDamage: ""
    , damage: ""
    , igone: ""
    , avgent: ""
    , inside: ""
    , start: ""
    , black: ""
    , dexAp: ""
    , strAp: ""
    , lucAp: ""
    , list: ""
  }
  var level;
  var dexAp;
  var strAp;
  var lucAp;
  var avgent = wx.getStorageSync("avgent");
  data.avgent = avgent;
  var name = wx.getStorageSync("name");
  data.name = name;
  if (avgent == 2) {
    dexAp = wx.getStorageSync("dexAp");
    if (dexAp == null || dexAp == "") {
      dexAp = 0;
    }
    data.dexAp = dexAp;
    strAp = wx.getStorageSync("strAp");
    if (strAp == null || strAp == "") {
      strAp = 0;
    }
    data.strAp = strAp;
    lucAp = wx.getStorageSync("lucAp");
    if (lucAp == null || lucAp == "") {
      lucAp = 0;
    }
    data.lucAp = lucAp;
  } else {
    level = wx.getStorageSync("level");
    data.level = level;
  }

  var arc = wx.getStorageSync("arc");
  data.arc = arc;
  var crit = wx.getStorageSync("crit");
  if (crit == null || crit == "") {
    crit = 0;
  }
  data.crit = crit;
  var igone = wx.getStorageSync("igone");
  if (igone == null || igone == "") {
    igone = 0;
  }
  data.igone = igone;
  var critDamage = wx.getStorageSync("critDamage");
  if (critDamage == null || critDamage == "") {
    critDamage = 0;
  }
  data.critDamage = critDamage;
  var mapleWarrior = wx.getStorageSync("mapleWarrior");
  if (mapleWarrior == null || mapleWarrior == "") {
    mapleWarrior = 15;
  }
  data.mapleWarrior = mapleWarrior;
  var superMain = wx.getStorageSync("superMain");
  if (superMain == null || superMain == "") {
    superMain = 0;
  }
  data.superMain = superMain;
  var union = wx.getStorageSync("union");
  if (union == null || union == "") {
    union = 0;
  }
  data.union = union;
  var union2 = wx.getStorageSync("union2");
  if (union2 == null || union2 == "") {
    union2 = 0;
  }
  data.union2 = union2;
  var job = wx.getStorageSync("job");
  data.job = job;
  var coefficient = wx.getStorageSync("coefficient");
  if (coefficient == null || coefficient == "") {
    coefficient = 1.0;
  }
  data.coefficient = coefficient;
  var value = wx.getStorageSync("value");//武器下标
  data.value = value;
  var list = wx.getStorageSync("list");
  data.list = list;
  var finalDamage = wx.getStorageSync("finalDamage");
  if (finalDamage == null || finalDamage == "") {
    finalDamage = 0;
  }
  data.finalDamage = finalDamage;
  var bossDamage = wx.getStorageSync("bossDamage");
  if (bossDamage == null || bossDamage == "") {
    bossDamage = 0;
  }
  data.bossDamage = bossDamage;
  var damage = wx.getStorageSync("damage");
  if (damage == null || damage == "") {
    damage = 0;
  }
  data.damage = damage;
  console.log(data)
  wx.request({
    url: "http://127.0.0.1:9333/api/analyse/setItem",
    method: 'Post',
    data: data,
    headers: {
      'content-type': 'application/json' // 默认值
    },
    success: function (res) {
      // wx.hideLoading();
      console.log(res)
      var RequestBody = res.data
      if (RequestBody.status == 200) {
        console.log(RequestBody.data)
      } else {
        console.log("raes.dat")
      }
    }
  })
}
export {
  conncent
}