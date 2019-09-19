var count = function (level, arc, mapleWarrior, sumMainStat, sumViecStat, sumAtk, sumMainStatPotential, sumViecStatPotential,
    sumAtkPotential, union, union2, finalDamage, bossDamage, damage, crit, critDamage, coefficient, superMain) {
    var avgent = wx.getStorageSync("avgent");
    if (avgent == 1) {
        // 545+90*等级/3.5+0.8*（（装备火花 潜能 联盟）血量*（1+潜能%+勇士被动%+内在%）-545+90*等级/3.5+0.8）+神秘*175
        var baseMaxHp = (parseInt(level) * 90 + 535) / 3.5;
        var inside = wx.getStorageSync("inside");
        if (inside == null || inside == "") {
            inside = 0;
        }
        var start = wx.getStorageSync("start");
        if (start == null || start == "") {
            start = 0;
        }
        var black = wx.getStorageSync("black");
        if (black == null || black == "") {
            black = 0;
        }
        var startHp = 0
        if (start <= 15 && start >= 0) {
            startHp = start * 50;
        } else if (start <= 36 && start >= 16) {
            startHp = start * 75;
        } else if (start <= 60 && start >= 36) {
            startHp = start * 95;
        } else if (start <= 90 && start >= 61) {
            startHp = start * 50;
        } else if (start >= 91) {
            startHp = start * 135;
        }
        //  + parseInt(superMain)
        // var trueMaxHp = (parseInt(sumMainStat) / 2 + parseInt(union) / 2 + startHp) * (1 + parseInt(sumMainStatPotential) / 100 +parseInt(inside)/100 +parseInt(superMain)/100) + parseInt(arc) * 175+ parseInt(union2)
        var tableHp = ((parseInt(level) * 90 + 535) + (parseInt(sumMainStat) / 2) + (parseInt(union) / 2) + startHp) * (1 + parseInt(black) / 100 + parseInt(sumMainStatPotential) / 100 + parseInt(inside) / 100 + parseInt(superMain) / 100) + parseInt(arc) * 175 + parseInt(union2)
        var realMainStat = baseMaxHp + 0.8 * (tableHp - baseMaxHp)
    } else {
        var realMainStat = (((parseInt(level) * 5 + 18) * (1 + parseInt(mapleWarrior) / 100) + parseInt(sumMainStat) + parseInt(union)) * (1 + parseInt(sumMainStatPotential) / 100)) + parseInt(arc) * 10 + parseInt(union2) + parseInt(superMain)
        console.log(realMainStat)
        realMainStat = realMainStat * 4
    }
    var realViecStat = (4 + parseInt(sumViecStat)) * (1 + (parseInt(sumViecStatPotential)) / 100);
    var totalDamage = 1 + (parseInt(damage) + parseInt(bossDamage)) / 100
    var realatk = sumAtk * (1 + sumAtkPotential / 100)
    var total = ((realMainStat + realViecStat) * coefficient * (realatk / 100) * totalDamage * (1 + finalDamage / 100) * ((1.35 + critDamage / 100) * crit / 100));
    return total;
}
var xenoncount = function (strAp, lucAp, dexAp, sumStrStat, sumDexStat, sumLucStat, sumStrStatPotential, sumDexStatPotential, sumLucStatPotential, arc, mapleWarrior, sumAtk, sumAtkPotential,
    union, union2, finalDamage, bossDamage, damage, crit, critDamage, coefficient, superMain) {
    arc = arc / 10

    var str = (strAp * (1 + parseInt(mapleWarrior) / 100) + parseInt(sumStrStat)) * (1 + parseInt(sumStrStatPotential) / 100) + parseInt(arc) * 37
    var dex = (dexAp * (1 + parseInt(mapleWarrior) / 100) + parseInt(sumDexStat)) * (1 + parseInt(sumDexStatPotential) / 100) + parseInt(arc) * 37
    var luc = (lucAp * (1 + parseInt(mapleWarrior) / 100) + parseInt(sumLucStat)) * (1 + parseInt(sumLucStatPotential) / 100) + parseInt(arc) * 37
    var realMainStat = parseInt(str) + parseInt(dex) + parseInt(luc) + parseInt(union2) + parseInt(superMain) + parseInt(union)
    var totalDamage = 1 + (parseInt(damage) + parseInt(bossDamage)) / 100
    var realatk = sumAtk * (1 + sumAtkPotential / 100)
    var total = ((realMainStat * 3) * coefficient * (realatk / 100) * totalDamage * (1 + finalDamage / 100) * ((1.35 + critDamage / 100) * crit / 100));
    return total;
}
export {
    count,
    xenoncount
}