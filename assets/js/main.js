$(document).ready(function () {
  reset(1);
});
function reset(init) {
  var initdata = {
    mainchr: "嘉然",
    myname: "新户眠子",
    mychr: "老鼠",
    mychrs: "鼠",
    mychr2: "狗",
    mainlike: "猫",
  };
  for (key in initdata) {
    $("[name$='" + key + "']").val(initdata[key]);
  }
  if (init === 1) {
    $("#app-result-card").hide();
  } else {
    $("#app-result-card").fadeOut();
  }
}
$("#reset").click(function () {
  reset(0);
  console.log("reset");
  return false;
});
$("#generate-form").submit(function () {
  d = $(this).serializeArray();
  var data = new Array();
  $.each(d, function (i, field) {
    data[field.name] = field.value;
  });
  var text =
    '<p>我好想做${mainchr}小姐的${mychr2}啊。</p><p>可是${mainchr}小姐说她喜欢的是${mainlike}，我哭了。<br />我知道既不是${mychr2}也不是${mainlike}的我为什么要哭的。因为我其实是一只${mychr}。<br />我从没奢望${mainchr}小姐能喜欢自己。我明白的，所有人都喜欢理解余裕上手天才打钱的萌萌的${mychr2}或者${mainlike}，没有人会喜欢阴湿带病的${mychr}。<br />但我还是问了${mainchr}小姐：“我能不能做你的${mychr2}？”<br />我知道我是注定做不了${mychr2}的。但如果她喜欢${mychr2}，我就可以一直在身边看着她了，哪怕她怀里抱着的永远都是${mychr2}。<br />可是她说喜欢的是${mainlike}。<br />她现在还在看着我，还在逗我开心，是因为${mainlike}还没有出现，只有我这${mychr}每天蹑手蹑脚地从洞里爬出来，远远地和她对视。<br />等她喜欢的${mainlike}来了的时候，我就该重新滚回我的洞了吧。<br />但我还是好喜欢她，她能在我还在她身边的时候多看我几眼吗？<br />${mainchr}小姐说接下来的每个圣诞夜都要和大家一起过。我不知道大家指哪些人。好希望这个集合能够对我做一次胞吞。<br />${mainlike}${mainlike}还在害怕${mainchr}小姐。<br />我会去把她爱的${mainlike}${mainlike}引来的。<br />我知道稍有不慎，我就会葬身${mainlike}口。<br />那时候${mainchr}小姐大概会把我的身体好好地装起来扔到门外吧。<br />那我就成了一包${mychrs}条，嘻嘻。<br />我希望她能把我扔得近一点，因为我还是好喜欢她。会一直喜欢下去的。</p><p>我的灵魂透过窗户向里面看去，挂着的铃铛在轻轻鸣响，${mainchr}小姐慵懒地靠在沙发上，表演得非常温顺的${mainlike}坐在她的肩膀。壁炉的火光照在她的脸庞，我冻僵的心脏在风里微微发烫。</p><p align="right">——${myname}</p>';
  var result = juicer(text, data);

  // console.log(result);
  $("#app-result").html(result);

  $("#app-result-card").fadeIn();

  return false;
});
