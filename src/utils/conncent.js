var host="www.maplestory-tool.com/api"
var conncent = function () {
    var date=[];
    var level;
    var dexAp;
    var strAp
    var lucAp
    var avgent = wx.getStorageSync("avgent");
    if(avgent==2){
        dexAp = wx.getStorageSync("dexAp");
        if (dexAp == null || dexAp == "") {
          dexAp = 0;
        }
        date.push(dexAp);
        strAp = wx.getStorageSync("strAp");
        if (strAp == null || strAp == "") {
          strAp = 0;
        }
        date.push(strAp);
        lucAp = wx.getStorageSync("lucAp");
        if (lucAp == null || lucAp == "") {
          lucAp = 0;
        }
        date.push(lucAp);
    }else{
        level = wx.getStorageSync("level");
        date.push(level);
    }

    var arc = wx.getStorageSync("arc");
    date.push(arc);
    var crit = wx.getStorageSync("crit");
    if (crit == null || crit == "") {
      crit = 0;
    }
    date.push(crit);
    var critDamage = wx.getStorageSync("critDamage");
    if (critDamage == null || critDamage == "") {
      critDamage = 0;
    }
    date.push(critDamage);
    var mapleWarrior = wx.getStorageSync("mapleWarrior");
    if (mapleWarrior == null || mapleWarrior == "") {
      mapleWarrior = 15;
    }
    date.push(mapleWarrior);
    var superMain = wx.getStorageSync("superMain");
    if (superMain == null || superMain == "") {
      superMain = 0;
    }
    date.push(superMain);
    var union = wx.getStorageSync("union");
    if (union == null || union == "") {
      union = 0;
    }
    date.push(union);
    var union2 = wx.getStorageSync("union2");
    if (union2 == null || union2 == "") {
      union2 = 0;
    }
    date.push(union2);
    var job = wx.getStorageSync("job");
    date.push(job);
    var coefficient = wx.getStorageSync("coefficient");
    if (coefficient == null || coefficient == "") {
      coefficient = 1.0;
    }
    date.push(coefficient);
    var value = wx.getStorageSync("value");//武器下标
    date.push(value);
    var list = wx.getStorageSync("list");
    date.push(list);
    var finalDamage = wx.getStorageSync("finalDamage");
    if (finalDamage == null || finalDamage == "") {
      finalDamage = 0;
    }
    date.push(finalDamage);
    var bossDamage = wx.getStorageSync("bossDamage");
    if (bossDamage == null || bossDamage == "") {
      bossDamage = 0;
    }
    date.push(bossDamage);
    var damage = wx.getStorageSync("damage");
    if (damage == null || damage == "") {
      damage = 0;
    }
    date.push(damage);
    console.log(host)
}
export {
    conncent
}