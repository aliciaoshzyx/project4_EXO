var player = document.querySelector("#playerAudio");
var cdStart = document.querySelector("#record");
var cdDisplay = document.querySelector("#play");
window.onload = function(){
  $("#exodus #expand").hide();
  $("#theWar #expand").hide();
  //imageSize.reverse();
  //imageSize.play();
}

var image = anime({
      targets: '#playImg',
      scale: 0.5,
      rotate: '1turn',
      duration: 2000,
      complete: function(){
        image.restart();
      }
    });


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
              durration: 5000,
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
              durration: 5000,
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
              durration: 5000,
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
              durration: 5000,
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
              durration: 5000,
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
              durration: 5000,
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
              durration: 5000,
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
              durration: 5000,
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
              durration: 5000,
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
              durration: 5000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
}

//THE WAR ALBUM
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
              durration: 5000,
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
              durration: 5000,
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
              durration: 5000,
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
              durration: 5000,
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
              durration: 5000,
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
              durration: 5000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
  //play playboy
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
              durration: 5000,
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
              durration: 5000,
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
              durration: 5000,
              rotate:'1turn',
              loop: true,
              easing: 'linear'
            })
        }
      })
    })
}
