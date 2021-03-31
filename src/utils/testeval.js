var damage="650+10*x";
var maxLevel="30";

function sys(level){
  if(level>(maxLevel+5)){
    level=maxLevel+5;
  }
  damage.replace(x,level);
  var str= eval("str="+str);
  console.log(str)
}