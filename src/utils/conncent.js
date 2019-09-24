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
  var method="Post"
  var haveDate = wx.getStorageSync("haveDate");
  console.log("haveDate"+haveDate)
  if(haveDate==1){
    method="Put"
  }
  var token=wx.getStorageSync("token");
  wx.request({
    url: "http://127.0.0.1:9333/api/item",
    method: method,
    data: data,
    header: {
      'content-type': 'application/json', 
      'Authorization':token
    },
    success: function (res) {
      // wx.hideLoading();
      var RequestBody = res.data
      if (RequestBody.status == 200) {
   
      } else {
      }
    }
  })
}
var backendCount = function () {
  return new Promise((resolve, reject) => {
    wx.request({
      url: "http://127.0.0.1:9333/api/analyse/result",
      method: 'Post',
      data: "",
      header: {
        'content-type': 'application/json' , 
        'Authorization':wx.getStorageSync("token")
      },
      success: function (res) {
        var data = res.data

        if (data.code = 200) {
          resolve(data.data);
        }
      }
    })
  })
}

var loginOrRegister = function (baseUser) {
  console.log(wx.getStorageSync("token"))
  return new Promise((resolve, reject) => {
    wx.request({
      url: "http://127.0.0.1:9333/api/base/wechant/auth",
      method: 'Post',
      data: baseUser,
      header: {
        'content-type': 'application/json' , 
        'Authorization':wx.getStorageSync("token")
      },
      success: function (res) {
        var data = res.data

        if (data.code = 200) {
          resolve(data.data);
        }
      }
    })
  })
}
var barChange = function () {
  return new Promise((resolve, reject) => {
    wx.request({
      url: "http://127.0.0.1:9333/api/analyse/barChange",
      method: 'Post',
      data: "",
      header: {
        'content-type': 'application/json', 
        'Authorization':wx.getStorageSync("token")
      },
      success: function (res) {
        var data = res.data

        if (data.code = 200) {
          resolve(data.data);
        }
      }
    })
  })
}
var ignoreChange = function (igoneChange) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: "http://127.0.0.1:9333/api/analyse/IgoneChange",
      method: "Post",
      data: igoneChange,
      header: {
        "content-type": "application/json", 
        'Authorization':wx.getStorageSync("token")
      },
      success: function (res) {
          resolve(res.data.data);
          var realIgrone=res.data.data
        if (realIgrone == null || realIgrone == "") {
          wx.setStorage({
            key: "igone",
            data: "",
            success: function (res) {
              console.log("异步保存无视成功");
            }
          });
        } else {
          wx.setStorage({
            key: "igone",
            data: realIgrone,
            success: function (res) {
              console.log("异步保存无视成功");
            }
          });
        }
      }
    });
  })
}
var getItem = function (avgent) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: "http://127.0.0.1:9333/api/item?avgent="+avgent,
      method: "Get",
      data: avgent,
      header: {
        'Authorization':wx.getStorageSync("token")
      },
      success: function (res) {
          var date=res.data.data;
          console.log(date)
          wx.setStorage({
            key: "haveDate",
            data: date.haveDate,
            success: function(res) {
              console.log("设置标志位");
            }
          });
          var item =date.item
          var level = item.level;
      
          wx.setStorage({
            key: "level",
            data: level,
            success: function(res) {
              console.log("异步保存等级成功");
            }
          });
          var arc = item.arc;
    
          if (arc == null || arc == "") {
            console.log(arc);
            wx.setStorage({
              key: "arc",
              data: "",
              success: function(res) {
                console.log("异步保存神秘成功");
              }
            });
          } else {
            wx.setStorage({
              key: "arc",
              data: arc,
              success: function(res) {
                console.log("异步保存神秘成功");
              }
            });
          }
          var igone = item.igone;
          if (igone == null || igone == "") {
            wx.setStorage({
              key: "igone",
              data: "",
              success: function(res) {
                console.log("异步保存无视成功");
              }
            });
          } else {
            wx.setStorage({
              key: "igone",
              data: igone,
              success: function(res) {
                console.log("异步保存无视成功");
              }
            });
          }
          var crit = item.crit;
          if (crit == null || crit == "") {
            wx.setStorage({
              key: "crit",
              data: "",
              success: function(res) {
                console.log("异步保存暴击成功");
              }
            });
          } else {
            wx.setStorage({
              key: "crit",
              data: crit,
              success: function(res) {
                console.log("异步保存暴击成功");
              }
            });
          }
          var critDamage = item.critDamage;
          if (critDamage == null || critDamage == "") {
            wx.setStorage({
              key: "critDamage",
              data: "",
              success: function(res) {
                console.log("异步保存爆伤成功");
              }
            });
          } else {
            wx.setStorage({
              key: "critDamage",
              data: critDamage,
              success: function(res) {
                console.log("异步保存爆伤成功");
              }
            });
          }
          var mapleWarrior = item.mapleWarrior;
          if (mapleWarrior == null || mapleWarrior == "") {
            wx.setStorage({
              key: "mapleWarrior",
              data: "",
              success: function(res) {
                console.log("异步保存勇士成功");
              }
            });
          } else {
            wx.setStorage({
              key: "mapleWarrior",
              data: mapleWarrior,
              success: function(res) {
                console.log(mapleWarrior);
                console.log("异步保存勇士成功");
              }
            });
          }
          var superMain = item.superMain;
          if (superMain == null || superMain == "") {
            wx.setStorage({
              key: "superMain",
              data: "",
              success: function(res) {
                console.log("异步保存超级主属性成功");
              }
            });
          } else {
            wx.setStorage({
              key: "superMain",
              data: superMain,
              success: function(res) {
                console.log("异步保存超级主属性成功");
              }
            });
          }
          var union = item.union;
          if (union == null || union == "") {
            wx.setStorage({
              key: "union",
              data: "",
              success: function(res) {
                console.log("异步保存联盟1成功");
              }
            });
          } else {
            wx.setStorage({
              key: "union",
              data: union,
              success: function(res) {
                console.log("异步保存联盟1成功");
              }
            });
          }
          var union2 = item.union2;
          if (union2 == null || union2 == "") {
            wx.setStorage({
              key: "union2",
              data: "",
              success: function(res) {
                console.log("异步保存联盟2成功");
              }
            });
          } else {
            wx.setStorage({
              key: "union2",
              data: union2,
              success: function(res) {
                console.log("异步保存联盟2成功");
              }
            });
          }
          var job = item.job;
          if (job == null || job == "") {
            wx.setStorage({
              key: "job",
              data: "",
              success: function(res) {
                console.log("异步保存武器类型成功");
              }
            });
          } else {
            wx.setStorage({
              key: "job",
              data: job,
              success: function(res) {
                console.log("异步保存武器类型成功");
              }
            });
          }
    
          var value = item.value;
          if (value == null || value == "") {
            wx.setStorage({
              key: "value",
              data: 1,
              success: function(res) {
                console.log("异步保存职业下标成功");
              }
            });
          } else {
            wx.setStorage({
              key: "value",
              data: value,
    
              success: function(res) {
                console.log("异步保存职业下标成功");
              }
            });
          }
          var coefficient = item.coefficient;
          if (coefficient == null || coefficient == "") {
            wx.setStorage({
              key: "coefficient",
              data: "",
              success: function(res) {
                console.log("异步保存系数成功");
              }
            });
          } else {
            wx.setStorage({
              key: "coefficient",
              data: coefficient,
              success: function(res) {
                console.log("异步保存系数成功");
              }
            });
          }
    
          var name = item.name;
          if (name == null || name == "") {
            wx.setStorage({
              key: "name",
              data: "",
              success: function(res) {
                console.log("异步保存姓名成功");
              }
            });
          } else {
            wx.setStorage({
              key: "name",
              data: name,
              success: function(res) {
                console.log("异步保存姓名成功");
              }
            });
          }
          var finalDamage = item.finalDamage;
          if (finalDamage == null || finalDamage == "") {
            wx.setStorage({
              key: "finalDamage",
              data: "",
              success: function(res) {
                console.log("异步保存终伤成功");
              }
            });
          } else {
            wx.setStorage({
              key: "finalDamage",
              data: finalDamage,
              success: function(res) {
                console.log("异步保存终伤成功");
              }
            });
          }
          var damage = item.damage;
          console.log(damage)
          if (damage == null || damage == "") {
            wx.setStorage({
              key: "damage",
              data: "",
              success: function(res) {
                console.log("异步保存伤害空");
              }
            });
          } else {
            wx.setStorage({
              key: "damage",
              data: damage,
              success: function(res) {
                console.log("异步保存终伤成功");
              }
            });
          }
          var bossDamage = item.bossDamage;
          if (bossDamage == null || bossDamage == "") {
            wx.setStorage({
              key: "bossDamage",
              data: "",
              success: function(res) {
                console.log("异步保存boss空");
              }
            });
          } else {
            wx.setStorage({
              key: "bossDamage",
              data: bossDamage,
              success: function(res) {
                console.log("异步保存终伤成功");
              }
            });
          }
          var inside = item.inside;
          if (inside == null || inside == "") {
            wx.setStorage({
              key: "inside",
              data: "",
              success: function(res) {
                console.log("异步保存内在百分比成功");
              }
            });
          } else {
            wx.setStorage({
              key: "inside",
              data: inside,
              success: function(res) {
                console.log("异步保存内在百分比成功");
              }
            });
          }
          var start = item.start;
          if (start == null || start == "") {
            wx.setStorage({
              key: "start",
              data: "",
              success: function(res) {
                console.log("异步保存星星数成功");
              }
            });
          } else {
            wx.setStorage({
              key: "start",
              data: start,
              success: function(res) {
                console.log("异步保存星星数成功");
              }
            });
          }
                var black = item.black;
          if (black == null || black == "") {
            wx.setStorage({
              key: "black",
              data: "",
              success: function(res) {
                console.log("异步保存黑骑卡成功");
              }
            });
          } else {
            wx.setStorage({
              key: "black",
              data: black,
              success: function(res) {
                console.log("异步保存黑骑卡成功");
              }
            });
          }
          var list = item.list;

          if (list == null || list == "") {
            wx.setStorage({
              key: "list",
              data: "",
              success: function(res) {
                console.log("异步保存装备空");
          
              }
            });
          } else {
            wx.setStorage({
              key: "list",
              data: JSON.parse(list) ,
              success: function(res) {
                console.log("异步保存装备成功");
              }
            });
          }
      }
    });
  })
}
export {
  conncent,
  backendCount,
  barChange,
  ignoreChange,
  getItem,
  loginOrRegister
}