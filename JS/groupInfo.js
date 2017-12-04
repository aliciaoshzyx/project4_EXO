var clicked1 = false;
var clickedNum1 = 0;
var clicked2 = false;
var clickedNum2 = 0;
var clicked3 = false;
var clickedNum3 = 0;
var clicked4 = false;
var clickedNum4 = 0;
var clicked5 = false;
var clickedNum5 = 0;

var makeVisible1 = anime({
  targets:"#show, #date, #songAlbum, #winNum",
  opacity:{
    value:1,
    durration:2000,
    easing: 'easeInOutQuad',
  },
  autoplay:false
});

var makeVisible2 = anime({
  targets:"#show, #date, #songAlbum, #winNum",
  opacity:{
    value:1,
    durration:2000,
    easing: 'easeInOutQuad',
  },
  autoplay:false
});

var makeVisible3 = anime({
  targets:"#show, #date, #songAlbum, #winNum",
  opacity:{
    value:1,
    durration:2000,
    easing: 'easeInOutQuad',
  },
  autoplay:false
});

var makeVisible4 = anime({
  targets:"#show, #date, #songAlbum, #winNum",
  opacity:{
    value:1,
    durration:2000,
    easing: 'easeInOutQuad',
  },
  autoplay:false
});

var makeVisible5 = anime({
  targets:"#show, #date, #songAlbum, #winNum",
  opacity:{
    value:1,
    durration:2000,
    easing: 'easeInOutQuad',
  },
  autoplay:false
});

var moveT1 = anime({
  targets:"#t1 img",
  translateX: {
    value: window.innerWidth * 0.3,
  },
  translateY: {
    value: window.innerHeight *0.45,
  },
  durration: 300,
  scale:2,
  autoplay:false,
});

var moveT2 = anime({
  targets:"#t2 img",
  translateX: {
    value: window.innerWidth * 0.15,
  },
  translateY:{
    value: window.innerHeight *0.45,
  },
  durration: 300,
  scale:2,
  autoplay:false,
});

var moveT3 = anime({
  targets:"#t3 img",
  translateX:{
    value: window.innerWidth * 0.01,
  },
  translateY:{
    value: window.innerHeight *0.45,
  },
  durration: 300,
  scale:2,
  autoplay:false,
});

var moveT4 = anime({
  targets:"#t4 img",
  translateX:  window.innerWidth * -0.13,
  translateY:{
    value: window.innerHeight *0.45,
  },
  durration: 300,
  scale:2,
  autoplay:false,
});

var moveT5 = anime({
  targets:"#t5 img",
  translateX: window.innerWidth * -0.28,
  translateY: {
    value: window.innerHeight *0.45,
  },
  durration: 300,
  scale:2,
  autoplay:false,
});


$("#t1").click(function(){
$("#t1 img").addClass("moveT1");
if(clicked1){
  clicked1 = false;
  $("#t1 img").addClass("moveT1");
  moveT1.reverse();
  makeVisible1.reverse();
}
else{
  clicked1 = true;
  $("#t1 img").addClass("moveT1");
  if(clickedNum1>0)
  {
  moveT1.reverse();
  makeVisible1.reverse();
  }
  clickedNum1++;
}

if($("#t1 img").hasClass("moveT1")){
  document.getElementById("show").innerHTML ="Mnet Asian Music Awards";
  document.getElementById("date").innerHTML ="December 2, 2016";
  document.getElementById("songAlbum").innerHTML ="EX'ACT";
  document.getElementById("winNum").innerHTML ="15th Daesang";
  $("img").remove(".logo");
  $("#middle").css('width', '400px');
  moveT1.play();
  makeVisible1.play();
  
}
$("#t1 img").removeClass("moveT1");
});

$("#t2").click(function(){
$("#t2 img").addClass("moveT2");
if(clicked2){
  clicked2 = false;
  $("#t2 img").addClass("moveT2");
  moveT2.reverse();
  makeVisible2.reverse();
}
else{
  clicked2 = true;
  $("#t2 img").addClass("moveT2");
  if(clickedNum2>0)
  {
  moveT2.reverse();
  makeVisible2.reverse();
  }
  clickedNum2++;
}

  document.getElementById("show").innerHTML ="Melon Music Awards";
  document.getElementById("date").innerHTML ="November 19, 2016";
  document.getElementById("songAlbum").innerHTML ="Artist of the Year";
  document.getElementById("winNum").innerHTML ="14th Daesang";
  $("img").remove(".logo");
  $("#middle").css('width', '400px');
  moveT2.play();
  makeVisible2.play();
$("#t2 img").removeClass("moveT2");
});

$("#t3").click(function(){
$("#t3 img").addClass("moveT3");
if(clicked3){
  clicked3 = false;
  $("#t3 img").addClass("moveT3");
  moveT3.reverse();
  makeVisible3.reverse();
}
else{
  clicked3 = true;
  $("#t3 img").addClass("moveT3");
  if(clickedNum3>0)
  {
  moveT3.reverse();
  makeVisible3.reverse();
  }
  clickedNum3++;
}

  document.getElementById("show").innerHTML ="Golden Disc Awards";
  document.getElementById("date").innerHTML ="January 13, 2017";
  document.getElementById("songAlbum").innerHTML ="EX'ACT";
  document.getElementById("winNum").innerHTML ="16th Daesang";
  $("img").remove(".logo");
  $("#middle").css('width', '400px');
  moveT3.play();
  makeVisible3.play();
$("#t3 img").removeClass("moveT3");
});

$("#t4").click(function(){
$("#t4 img").addClass("moveT4");
if(clicked4){
  clicked4 = false;
  $("#t4 img").addClass("moveT4");
  moveT4.reverse();
  makeVisible4.reverse();
}
else{
  clicked4 = true;
  $("#t4 img").addClass("moveT4");
  if(clickedNum4>0)
  {
  moveT4.reverse();
  makeVisible4.reverse();
  }
  clickedNum4++;
}

  document.getElementById("show").innerHTML ="Seoul Music Awards";
  document.getElementById("date").innerHTML ="January 19th, 2017";
  document.getElementById("songAlbum").innerHTML ="Grand Prize";
  document.getElementById("winNum").innerHTML ="17th Daesang";
  $("img").remove(".logo");
  $("#middle").css('width', '400px');
  moveT4.play();
  makeVisible4.play();
$("#t4 img").removeClass("moveT4");
});

$("#t5").click(function(){
$("#t5 img").addClass("moveT5");
if(clicked5){
  clicked5 = false;
  $("#t5 img").addClass("moveT5");
  moveT5.reverse();
  makeVisible5.reverse();
}
else{
  clicked5 = true;
  $("#t5 img").addClass("moveT5");
  if(clickedNum5>0)
  {
  moveT5.reverse();
  makeVisible5.reverse();
  }
  clickedNum5++;
}

  document.getElementById("show").innerHTML ="Asian Artist Awards";
  document.getElementById("date").innerHTML ="November 16, 2016";
  document.getElementById("songAlbum").innerHTML ="Monster, Lotto";
  document.getElementById("winNum").innerHTML ="13th Daesang";
  $("img").remove(".logo");
  $("#middle").css('width', '400px');
  moveT5.play();
  makeVisible5.play();
$("#t5 img").removeClass("moveT5");
});