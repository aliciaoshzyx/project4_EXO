var player = document.querySelector("#playerAudio");
var cdStart = document.querySelector("#record");
var cdDisplay = document.querySelector("#play");
window.onload = function(){
  $("#exodus #expand").hide();
  $("#theWar #expand").hide();
  $("#mama #expand").hide();
  $("#xoxo #expand").hide();
  $("#growl #expand").hide();
  $("#midA #expand").hide();
  $("#overdose #expand").hide();
  $("#lmrA #expand").hide();
  $("#lmrruA #expand").hide();
  $("#sfyA #expand").hide();
  $("#exact #expand").hide();
  $("#lotto #expand").hide();
  $("#coming #expand").hide();
  $("#forlife #expand").hide();
  $("#power #expand").hide();
  //imageSize.reverse();
  //imageSize.play();
}

$("#exodusAlbum").click(function(){
  if($("#exodus #expand").is(":visible"))
  {
    $("#exodus #expand").hide();
  }
  else{
    $("#exodus #expand").show();
  }
  
});

$("#theWarAlbum").click(function(){
  if($("#theWar #expand").is(":visible"))
  {
    $("#theWar #expand").hide();
  }
  else{
    $("#theWar #expand").show();
  }
  
});

$("#mamaAlbum").click(function(){
  if($("#mama #expand").is(":visible"))
  {
    $("#mama #expand").hide();
  }
  else{
    $("#mama #expand").show();
  }
  
});
$("#xoxoAlbum").click(function(){
  if($("#xoxo #expand").is(":visible"))
  {
    $("#xoxo #expand").hide();
  }
  else{
    $("#xoxo #expand").show();
  }
  
});
$("#growlAlbum").click(function(){
  if($("#growl #expand").is(":visible"))
  {
    $("#growl #expand").hide();
  }
  else{
    $("#growl #expand").show();
  }
  
});
$("#midAlbum").click(function(){
  if($("#midA #expand").is(":visible"))
  {
    $("#midA #expand").hide();
  }
  else{
    $("#midA #expand").show();
  }
  
});
$("#overdoseAlbum").click(function(){
  if($("#overdose #expand").is(":visible"))
  {
    $("#overdose #expand").hide();
  }
  else{
    $("#overdose #expand").show();
  }
  
});
$("#lmrAlbum").click(function(){
  if($("#lmrA #expand").is(":visible"))
  {
    $("#lmrA #expand").hide();
  }
  else{
    $("#lmrA #expand").show();
  }
  
});
$("#lmrruAlbum").click(function(){
  if($("#lmrruA #expand").is(":visible"))
  {
    $("#lmrruA #expand").hide();
  }
  else{
    $("#lmrruA #expand").show();
  }
  
});
$("#sfyAlbum").click(function(){
  if($("#sfyA #expand").is(":visible"))
  {
    $("#sfyA #expand").hide();
  }
  else{
    $("#sfyA #expand").show();
  }
  
});
$("#exactAlbum").click(function(){
  if($("#exact #expand").is(":visible"))
  {
    $("#exact #expand").hide();
  }
  else{
    $("#exact #expand").show();
  }
  
});
$("#lottoAlbum").click(function(){
  if($("#lotto #expand").is(":visible"))
  {
    $("#lotto #expand").hide();
  }
  else{
    $("#lotto #expand").show();
  }
  
});
$("#comingAlbum").click(function(){
  if($("#coming #expand").is(":visible"))
  {
    $("#coming #expand").hide();
  }
  else{
    $("#coming #expand").show();
  }
  
});
$("#forlifeAlbum").click(function(){
  if($("#forlife #expand").is(":visible"))
  {
    $("#forlife #expand").hide();
  }
  else{
    $("#forlife #expand").show();
  }
  
});
$("#powerAlbum").click(function(){
  if($("#power #expand").is(":visible"))
  {
    $("#power #expand").hide();
  }
  else{
    $("#power #expand").show();
  }
  
});

/***********************
 * MAMA ALBUM
 **********************/
if($("#mama #expand").is(":visible"))
  {
  //mama
  $("#ma").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          
          player.innerHTML = '<audio autoplay controls id="playing"><source src="../media/songs/m.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/mamaRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> MAMA";
            
          //setInterval(console.log(document.getElementById("playing").paused), 1000);
          //if(document.getElementById("playing").paused == true){
          // player.innerHTML = '<audio autoplay controls id="playing"><source src="../media/songs/cmb.mp3" type="audio/mp3"></audio>';
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear',
            })
          //}
          //if(document.getElementById("playing").paused == false){
          //  player.innerHTML = '<audio autoplay controls><source src="../media/songs/cmb.mp3" type="audio/mp3"></audio>';
          //}
        }
      })
      
    })
    //play what is love
  $("#wil").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/wil.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/mamaRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> What Is Love (사랑은 무엇인가)";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            }) 
        }
      })
    })
    //play history
  $("#his").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/his.mp3" type="audio/mp3"></audio>';
            cdDisplay.innerHTML = '<img id="playImg" src="../media/records/mamaRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> History (역사)";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
    //play angel
  $("#a").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/a.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/mamaRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> Angel (너의 세상으로)";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
  //play two moons
  $("#tm").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/tm.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/mamaRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> Two Moons (두 개의 달이 뜨는 밤)";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })  
  //machine
  $("#mac").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/mac.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/mamaRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> Machine";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
  }
/******************************
 * XOXO ALBUM
 *****************************/
if($("#xoxo #expand").is(":visible"))
  {
  //wolf
  $("#wolf").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          
          player.innerHTML = '<audio autoplay controls id="playing"><source src="../media/songs/wolf.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/xoxoRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> 늑대와 미녀 (Wolf)";
            
          //setInterval(console.log(document.getElementById("playing").paused), 1000);
          //if(document.getElementById("playing").paused == true){
          // player.innerHTML = '<audio autoplay controls id="playing"><source src="../media/songs/cmb.mp3" type="audio/mp3"></audio>';
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear',
            })
          //}
          //if(document.getElementById("playing").paused == false){
          //  player.innerHTML = '<audio autoplay controls><source src="../media/songs/cmb.mp3" type="audio/mp3"></audio>';
          //}
        }
      })
      
    })
    //baby dont cry
  $("#bdc").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/bdc.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/xoxoRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> Baby Don't Cry (인어의 눈물)";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            }) 
        }
      })
    })
    //black pearl
  $("#bp").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/bp.mp3" type="audio/mp3"></audio>';
            cdDisplay.innerHTML = '<img id="playImg" src="../media/records/xoxoRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> Black Pearl";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
    //dont go
  $("#dg").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/dg.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/xoxoRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> 나비소녀 (Don't Go)";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
  //play let out the beast
  $("#lotb").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/lotb.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/xoxoRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> Let Out The Beast";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })  
  //play 365
  $("#365").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/365.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/xoxoRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> 3.6.5";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
  //play heart attack
  $("#ha").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/ha.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/xoxoRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> Heart Attack";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
    //play peter pan
  $("#pp").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/pp.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/xoxoRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> 피터팬 (Peter Pan)";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
    //play baby
  $("#baby").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/baby.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/xoxoRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> Baby";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
    //play my lady
    $("#ml").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/ml.mp3" type="audio/mp3"></audio>';
            cdDisplay.innerHTML = '<img id="playImg" src="../media/records/xoxoRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> My Lady";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
    //play wolf k ver
    $("#wolfk").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/wolfk.mp3" type="audio/mp3"></audio>';
            cdDisplay.innerHTML = '<img id="playImg" src="../media/records/xoxoRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> 늑대와 미녀 (Wolf) EXO-K Ver.";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
    //play my lady
    $("#wolfm").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/wolfm.mp3" type="audio/mp3"></audio>';
            cdDisplay.innerHTML = '<img id="playImg" src="../media/records/xoxoRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> 狼与美女 (Wolf) - Mandarin version";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
}
/******************************
 * GROWL ALBUM
 *****************************/
if($("#growl #expand").is(":visible"))
  {
  //play growl
  $("#g").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          
          player.innerHTML = '<audio autoplay controls id="playing"><source src="../media/songs/g.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/growlRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> 으르렁 (Growl)";
            
          //setInterval(console.log(document.getElementById("playing").paused), 1000);
          //if(document.getElementById("playing").paused == true){
          // player.innerHTML = '<audio autoplay controls id="playing"><source src="../media/songs/cmb.mp3" type="audio/mp3"></audio>';
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear',
            })
          //}
          //if(document.getElementById("playing").paused == false){
          //  player.innerHTML = '<audio autoplay controls><source src="../media/songs/cmb.mp3" type="audio/mp3"></audio>';
          //}
        }
      })
      
    })
    //play transformer
  $("#x").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/x.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/growlRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> XOXO (Kisses & Hugs)";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            }) 
        }
      })
    })
    //play lucky
  $("#lu").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/lu.mp3" type="audio/mp3"></audio>';
            cdDisplay.innerHTML = '<img id="playImg" src="../media/records/growlRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> Lucky";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
  }
 /******************************
 * MIRACLES ALBUM
 *****************************/
if($("#midA #expand").is(":visible"))
  {
  //play mid
  $("#mid").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          
          player.innerHTML = '<audio autoplay controls id="playing"><source src="../media/songs/mid.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/midRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> 12월의 기적 (Miracles in December)";
            
          //setInterval(console.log(document.getElementById("playing").paused), 1000);
          //if(document.getElementById("playing").paused == true){
          // player.innerHTML = '<audio autoplay controls id="playing"><source src="../media/songs/cmb.mp3" type="audio/mp3"></audio>';
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear',
            })
          //}
          //if(document.getElementById("playing").paused == false){
          //  player.innerHTML = '<audio autoplay controls><source src="../media/songs/cmb.mp3" type="audio/mp3"></audio>';
          //}
        }
      })
      
    })
    //play christmas day
  $("#chd").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/cd.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/midRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> Christmas Day";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            }) 
        }
      })
    })
    //play the star
  $("#ts").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/ts.mp3" type="audio/mp3"></audio>';
            cdDisplay.innerHTML = '<img id="playImg" src="../media/records/midRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> The Star";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
    //play my turn to cry
  $("#mttc").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/mttc.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/midRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> My Turn To Cry";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
  //play first snow
  $("#fs").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/fs.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/midRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> 첫 눈 (The First Snow)";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })  
  //play mid oc
  $("#midco").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/mido.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/midRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> 12월의 기적 (Miracles in December) – Classical Orchestra Version";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
  }
 /******************************
 * OVERDOSE ALBUM
 *****************************/
if($("#overdose #expand").is(":visible"))
  {
  //play overdose
  $("#o").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          
          player.innerHTML = '<audio autoplay controls id="playing"><source src="../media/songs/o.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/overdoseRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> 중독 (Overdose)";
            
          //setInterval(console.log(document.getElementById("playing").paused), 1000);
          //if(document.getElementById("playing").paused == true){
          // player.innerHTML = '<audio autoplay controls id="playing"><source src="../media/songs/cmb.mp3" type="audio/mp3"></audio>';
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear',
            })
          //}
          //if(document.getElementById("playing").paused == false){
          //  player.innerHTML = '<audio autoplay controls><source src="../media/songs/cmb.mp3" type="audio/mp3"></audio>';
          //}
        }
      })
      
    })
    //play moonlight
  $("#moon").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/moon.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/overdoseRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> 월광 (Moonlight)";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            }) 
        }
      })
    })
    //play thunder
  $("#th").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/th.mp3" type="audio/mp3"></audio>';
            cdDisplay.innerHTML = '<img id="playImg" src="../media/records/overdoseRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> Thunder";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
    //run
  $("#r").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/r.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/overdoseRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> Run";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
  //play love lov elove
  $("#lll").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/lll.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/overdoseRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> Love, Love, Love";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })  
  //play overdose exo
  $("#oexo").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/oexo.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/overdoseRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> 중독 (Overdose) (EXO version)";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
  }
 /******************************
 * EXODUS ALBUM
 *****************************/
if($("#exodus #expand").is(":visible"))
  {
  //play call me baby
  $("#exodus #cmb").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          
          player.innerHTML = '<audio autoplay controls id="playing"><source src="../media/songs/cmb.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/exodusRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> Call Me Baby";
            
          //setInterval(console.log(document.getElementById("playing").paused), 1000);
          //if(document.getElementById("playing").paused == true){
          // player.innerHTML = '<audio autoplay controls id="playing"><source src="../media/songs/cmb.mp3" type="audio/mp3"></audio>';
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear',
            })
          //}
          //if(document.getElementById("playing").paused == false){
          //  player.innerHTML = '<audio autoplay controls><source src="../media/songs/cmb.mp3" type="audio/mp3"></audio>';
          //}
        }
      })
      
    })
    //play transformer
  $("#exodus #t").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/t.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/exodusRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> TRANSFORMER";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            }) 
        }
      })
    })
    //play what if
  $("#exodus #wi").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/wi.mp3" type="audio/mp3"></audio>';
            cdDisplay.innerHTML = '<img id="playImg" src="../media/records/exodusRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> 시선들, 시선 하나 (What if...)";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
    //play my answer
  $("#exodus #ma").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/ma.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/exodusRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> MY ANSWER";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
  //play exodus
  $("#exodus #e").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/e.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/exodusRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> EXODUS";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })  
  //play el dorado
  $("#exodus #ed").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/ed.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/exodusRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> EL DORADO";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
  //play playboy
  $("#exodus #p").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/p.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/exodusRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> PLAYBOY";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
    //play hurt
  $("#exodus #h").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/h.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/exodusRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> HURT";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
    //play lady luck
  $("#exodus #ll").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/ll.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/exodusRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> 유성우[流星雨](Lady Luck)";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
    //play beautiful
    $("#exodus #b").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/b.mp3" type="audio/mp3"></audio>';
            cdDisplay.innerHTML = '<img id="playImg" src="../media/records/exodusRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> BEAUTIFUL";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
}

/******************************
 * LOVE ME RIGHT ALBUM
 *****************************/
if($("#lmrA #expand").is(":visible"))
  {
  //play call me baby
  $("#lmr").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          
          player.innerHTML = '<audio autoplay controls id="playing"><source src="../media/songs/lmr.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/lmrRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> LOVE ME RIGHT";
            
          //setInterval(console.log(document.getElementById("playing").paused), 1000);
          //if(document.getElementById("playing").paused == true){
          // player.innerHTML = '<audio autoplay controls id="playing"><source src="../media/songs/cmb.mp3" type="audio/mp3"></audio>';
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear',
            })
          //}
          //if(document.getElementById("playing").paused == false){
          //  player.innerHTML = '<audio autoplay controls><source src="../media/songs/cmb.mp3" type="audio/mp3"></audio>';
          //}
        }
      })
      
    })
    //play tender love
  $("#tl").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/tl.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/lmrRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> Tender Love";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            }) 
        }
      })
    })
    //play first love
  $("#filo").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/filo.mp3" type="audio/mp3"></audio>';
            cdDisplay.innerHTML = '<img id="playImg" src="../media/records/lmrRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> First Love";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
    //promise
  $("#p2014").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/p2014.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/lmrRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> 약속 (EXO 2014)(Promise)";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
  }
 /******************************
 * LMR ROMANTIC UNIVERSE ALBUM
 *****************************/
if($("#lmrruA #expand").is(":visible"))
  {
  //play lmrru
  $("#lmrru").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          
          player.innerHTML = '<audio autoplay controls id="playing"><source src="../media/songs/lmrru.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/lmrruRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> Love Me Right - Romantic Universe";
            
          //setInterval(console.log(document.getElementById("playing").paused), 1000);
          //if(document.getElementById("playing").paused == true){
          // player.innerHTML = '<audio autoplay controls id="playing"><source src="../media/songs/cmb.mp3" type="audio/mp3"></audio>';
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear',
            })
          //}
          //if(document.getElementById("playing").paused == false){
          //  player.innerHTML = '<audio autoplay controls><source src="../media/songs/cmb.mp3" type="audio/mp3"></audio>';
          //}
        }
      })
      
    })
    //play transformer
  $("#dt").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/dt.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/lmrruRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> Drop That";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            }) 
        }
      })
    })
    //play lmrru lv
  $("#lmrrulv").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/lmrrulv.mp3" type="audio/mp3"></audio>';
            cdDisplay.innerHTML = '<img id="playImg" src="../media/records/lmrruRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> Love Me Right - Romantic Universe - Less Vocal";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
    //play drop that lv
  $("#dtlv").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/dtlv.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/lmrruRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> Drop That - Less Vocal";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
  }
/******************************
 * SING FOR YOU ALBUM
 *****************************/
if($("#sfyA #expand").is(":visible"))
  {
  //play unfair
  $("#u").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          
          player.innerHTML = '<audio autoplay controls id="playing"><source src="../media/songs/u.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/sfyRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> Unfair (불공평해)";
            
          //setInterval(console.log(document.getElementById("playing").paused), 1000);
          //if(document.getElementById("playing").paused == true){
          // player.innerHTML = '<audio autoplay controls id="playing"><source src="../media/songs/cmb.mp3" type="audio/mp3"></audio>';
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear',
            })
          //}
          //if(document.getElementById("playing").paused == false){
          //  player.innerHTML = '<audio autoplay controls><source src="../media/songs/cmb.mp3" type="audio/mp3"></audio>';
          //}
        }
      })
      
    })
    //play sing for you
  $("#sfy").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/sfy.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/sfyRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> Sing For You";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            }) 
        }
      })
    })
    //play girl x friend
  $("#gxf").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/gxf.mp3" type="audio/mp3"></audio>';
            cdDisplay.innerHTML = '<img id="playImg" src="../media/records/sfyRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> Girl X Friend";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
    //on the snow
  $("#ots").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/ots.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/sfyRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> On the Snow (발자국)";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
  //play lightsaber
  $("#li").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/li.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/sfyRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> LightSaber";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })  
  }
 /******************************
 * EXACT ALBUM
 *****************************/
if($("#exact #expand").is(":visible"))
  {
  //lucky one
  $("#lo").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          
          player.innerHTML = '<audio autoplay controls id="playing"><source src="../media/songs/lo.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/exactRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> Lucky One";
            
          //setInterval(console.log(document.getElementById("playing").paused), 1000);
          //if(document.getElementById("playing").paused == true){
          // player.innerHTML = '<audio autoplay controls id="playing"><source src="../media/songs/cmb.mp3" type="audio/mp3"></audio>';
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear',
            })
          //}
          //if(document.getElementById("playing").paused == false){
          //  player.innerHTML = '<audio autoplay controls><source src="../media/songs/cmb.mp3" type="audio/mp3"></audio>';
          //}
        }
      })
      
    })
    //play monster
  $("#mo").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/mo.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/exactRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> Monster";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            }) 
        }
      })
    })
    //play artifical love
  $("#al").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/al.mp3" type="audio/mp3"></audio>';
            cdDisplay.innerHTML = '<img id="playImg" src="../media/records/exactRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> Artifical Love";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
    //cloud 9
  $("#c9").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/c9.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/exactRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> Cloud 9";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
  //play heaven
  $("#hea").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/hea.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/exactRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> Heaven";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })  
  //play white noise
  $("#wn").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/wn.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/exactRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> White Noise (백색소음)";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
  //play one and only
  $("#oao").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/oao.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/exactRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> One and Only (유리어항)";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
    //play they never know
  $("#tnk").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/tnk.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/exactRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> They Never Know";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
    //play stronger
  $("#s").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/s.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/exactRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> Stronger";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
   
}
/******************************
 * LOTTO ALBUM
 *****************************/
if($("#lotto #expand").is(":visible"))
  {
  //play lotto
  $("#l").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          
          player.innerHTML = '<audio autoplay controls id="playing"><source src="../media/songs/l.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/lottoRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> Lotto";
            
          //setInterval(console.log(document.getElementById("playing").paused), 1000);
          //if(document.getElementById("playing").paused == true){
          // player.innerHTML = '<audio autoplay controls id="playing"><source src="../media/songs/cmb.mp3" type="audio/mp3"></audio>';
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear',
            })
          //}
          //if(document.getElementById("playing").paused == false){
          //  player.innerHTML = '<audio autoplay controls><source src="../media/songs/cmb.mp3" type="audio/mp3"></audio>';
          //}
        }
      })
      
    })
    //play cant 
  $("#cbmd").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/cbmd.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/lottoRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> Can't Bring Me Down";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            }) 
        }
      })
    })
    //play shes dreaming
  $("#sd").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/sd.mp3" type="audio/mp3"></audio>';
            cdDisplay.innerHTML = '<img id="playImg" src="../media/records/lottoRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> She's Dreaming 꿈";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
    //Monster (LDN Noise Creeper Bass Remix)
  $("#mlcbr").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/mlcbr.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/lottoRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> Monster (LDN Noise Creeper Bass Remix)";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
  }
/******************************
 * COMING OVER ALBUM
 *****************************/
if($("#coming #expand").is(":visible"))
  {
  //play coming over
  $("#co").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          
          player.innerHTML = '<audio autoplay controls id="playing"><source src="../media/songs/co.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/comingOverRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> Coming Over";
            
          //setInterval(console.log(document.getElementById("playing").paused), 1000);
          //if(document.getElementById("playing").paused == true){
          // player.innerHTML = '<audio autoplay controls id="playing"><source src="../media/songs/cmb.mp3" type="audio/mp3"></audio>';
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear',
            })
          //}
          //if(document.getElementById("playing").paused == false){
          //  player.innerHTML = '<audio autoplay controls><source src="../media/songs/cmb.mp3" type="audio/mp3"></audio>';
          //}
        }
      })
      
    })
    //play tactix
  $("#tac").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/tac.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/comingOverRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> TACTIX";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            }) 
        }
      })
    })
    //play run this
  $("#rt").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/rt.mp3" type="audio/mp3"></audio>';
            cdDisplay.innerHTML = '<img id="playImg" src="../media/records/comingOverRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> Run This";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
    //play co lv
  $("#colv").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/colv.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/comingOverRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> Coming Over - Less Vocal";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
  //play tactix less vocal
  $("#taclv").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/taclv.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/comingOverRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> TACTIX - Less Vocal";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })  
  //play run this lv
  $("#rtlv").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/rtlv.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/comingOverRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> Run This - Less Vocal ";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
  }
/******************************
 *  FOR LIFE ALBUM
 *****************************/
if($("#forlife #expand").is(":visible"))
  {
  //play for life
  $("#fl").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          
          player.innerHTML = '<audio autoplay controls id="playing"><source src="../media/songs/fl.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/forLifeRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> For Life";
            
          //setInterval(console.log(document.getElementById("playing").paused), 1000);
          //if(document.getElementById("playing").paused == true){
          // player.innerHTML = '<audio autoplay controls id="playing"><source src="../media/songs/cmb.mp3" type="audio/mp3"></audio>';
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear',
            })
          //}
          //if(document.getElementById("playing").paused == false){
          //  player.innerHTML = '<audio autoplay controls><source src="../media/songs/cmb.mp3" type="audio/mp3"></audio>';
          //}
        }
      })
      
    })
    //play falling for you
  $("#ffy").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/ffy.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/forLifeRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> Falling For You";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            }) 
        }
      })
    })
    //play what I want for shristmans
  $("#wiwfc").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/wiwfc.mp3" type="audio/mp3"></audio>';
            cdDisplay.innerHTML = '<img id="playImg" src="../media/records/forLifeRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> What I Want For Christmas";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
    //play twenty four
  $("#tf").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/tf.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/forLifeRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> Twenty Four";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
  //play winter heat
  $("#wh").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/wh.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/forLifeRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> Winter Heat";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })  
  }
/******************************
 * THE WAR ALBUM
 *****************************/
if($("#theWar #expand").is(":visible"))
  {
  //play the eve
  $("#theWar #te").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/te.mp3" type="audio/mp3"></audio>';
            cdDisplay.innerHTML = '<img id="playImg" src="../media/records/theWarRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> 전야(前夜)(The Eve)";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
    //play kokobop
  $("#theWar #kkb").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/kkb.mp3" type="audio/mp3"></audio>';
            cdDisplay.innerHTML = '<img id="playImg" src="../media/records/theWarRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> Ko Ko Bop";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
    //play what u do 
  $("#theWar #wud").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/wud.mp3" type="audio/mp3"></audio>';
            cdDisplay.innerHTML = '<img id="playImg" src="../media/records/theWarRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> WHAT U DO?";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
    //play forever
  $("#theWar #f").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/f.mp3" type="audio/mp3"></audio>';
            cdDisplay.innerHTML = '<img id="playImg" src="../media/records/theWarRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> Forever";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
  //play diamond
  $("#theWar #d").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/d.mp3" type="audio/mp3"></audio>';
            cdDisplay.innerHTML = '<img id="playImg" src="../media/records/theWarRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> 다이아몬드 (Diamond)";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })  
  //play touch it
  $("#theWar #ti").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/ti.mp3" type="audio/mp3"></audio>';
            cdDisplay.innerHTML = '<img id="playImg" src="../media/records/theWarRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> 너의 손짓 (Touch It)";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
  //play chill
  $("#theWar #c").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/c.mp3" type="audio/mp3"></audio>';
            cdDisplay.innerHTML = '<img id="playImg" src="../media/records/theWarRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> 소름 (Chill)";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
    //play walk on memories
  $("#theWar #wom").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/wom.mp3" type="audio/mp3"></audio>';
            cdDisplay.innerHTML = '<img id="playImg" src="../media/records/theWarRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> 기억을 걷는 밤 (Walk On Memories)";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
    //play going crazy
  $("#theWar #gc").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/gc.mp3" type="audio/mp3"></audio>';
            cdDisplay.innerHTML = '<img id="playImg" src="../media/records/theWarRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> 내가 미쳐 (Going Crazy)";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
}

/******************************
 * POWER ALBUM
 *****************************/
if($("#power #expand").is(":visible"))
  {
  //play power
  $("#po").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          
          player.innerHTML = '<audio autoplay controls id="playing"><source src="../media/songs/po.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/powerRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> POWER";
            
          //setInterval(console.log(document.getElementById("playing").paused), 1000);
          //if(document.getElementById("playing").paused == true){
          // player.innerHTML = '<audio autoplay controls id="playing"><source src="../media/songs/cmb.mp3" type="audio/mp3"></audio>';
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear',
            })
          //}
          //if(document.getElementById("playing").paused == false){
          //  player.innerHTML = '<audio autoplay controls><source src="../media/songs/cmb.mp3" type="audio/mp3"></audio>';
          //}
        }
      })
      
    })
    //play sweet lies
  $("#sl").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/sl.mp3" type="audio/mp3"></audio>';
          cdDisplay.innerHTML = '<img id="playImg" src="../media/records/powerRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> Sweet Lies";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            }) 
        }
      })
    })
    //play boomerang
  $("#bo").click(function(){
      cdStart.innerHTML= '<img src="../media/record.svg.svg">'
      $("#record img").draggable();
      $("#player").droppable({
        drop: function(event, ui){
          player.innerHTML = '<audio autoplay controls><source src="../media/songs/bo.mp3" type="audio/mp3"></audio>';
            cdDisplay.innerHTML = '<img id="playImg" src="../media/records/powerRecord.png">';
          cdStart.innerHTML = "<p>Currently Playing:<br/> Boomerang (부메랑)";
            var rotate = anime({
              targets: '#playImg',
              duration: 3000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
  }
