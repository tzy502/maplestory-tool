var count = function (level, arc, mapleWarrior, sumMainStat, sumViecStat, sumAtk, sumMainStatPotential, sumViecStatPotential,
    sumAtkPotential, union, union2, finalDamage, bossDamage, damage, crit, critDamage, coefficient,superMain) {
    var realMainStat = (((parseInt(level) * 5 + 18) * (1 + parseInt(mapleWarrior) / 100)+parseInt(sumMainStat) + parseInt(union))*(1 + parseInt(sumMainStatPotential) / 100)) + parseInt(arc) * 10 + parseInt(union2)+parseInt(superMain)

    var realViecStat =(4+parseInt(sumViecStat))*(1 + (parseInt(sumViecStatPotential))/100);
  
    var totalDamage=1+(parseInt(damage)+parseInt(bossDamage)) /100

    var realatk=sumAtk * (1 + sumAtkPotential / 100)
 
    var level = wx.getStorageSync("level");
    console.log(level)

    var total = ((realMainStat*4+realViecStat)*coefficient*(realatk/100)*totalDamage*(1 + finalDamage/100) * ((1.35+ critDamage / 100) * crit / 100));
     return total;
}
export {
    count
}