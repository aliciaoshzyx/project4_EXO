//set the expanding things closed at start
window.onload=function(){
    $("#sehun #expand").hide();
    $("#kai #kexpand").hide();
    $("#chanyeol #cexpand").hide();
    $("#suho #expand").hide();
    $("#baekhyun #expand").hide();
    $("#do #expand").hide();
    $("#luhan #expand").hide();
    $("#kris #expand").hide();
    $("#chen #expand").hide();
    $("#tao #expand").hide();
    $("#xiumin #expand").hide();
    $("#lay #expand").hide();

 };


 //expand and collapse sehun information
 $("#sehun #collapse").click(function(){
     if($("#sehun #expand").is(":visible"))
     {
         $("#sehun #expand").hide();
     }
     else{
     $("#sehun #expand").show();
     }
 });

 //expand and collapse kai information
 $("#kcollapse").click(function(){
     if($("#kai #kexpand").is(":visible"))
     {
         $("#kai #kexpand").hide();
     }
     else{
     $("#kai #kexpand").show();
     }
 });

 //expand and collapse chanyeol 
 $("#chanyeol #ccollapse").click(function(){
     if($("#chanyeol #cexpand").is(":visible"))
     {
         $("#chanyeol #cexpand").hide();
     }
     else{
     $("#chanyeol #cexpand").show();
     }
 });

  //expand and collapse suho information
  $("#suho #collapse").click(function(){
    if($("#suho #expand").is(":visible"))
    {
        $("#suho #expand").hide();
    }
    else{
    $("#suho #expand").show();
    }
});

 //expand and collapse baekhyun information
 $("#baekhyun #collapse").click(function(){
    if($("#baekhyun #expand").is(":visible"))
    {
        $("#baekhyun #expand").hide();
    }
    else{
    $("#baekhyun #expand").show();
    }
});

 //expand and collapse do information
 $("#do #collapse").click(function(){
    if($("#do #expand").is(":visible"))
    {
        $("#do #expand").hide();
    }
    else{
    $("#do #expand").show();
    }
});

 //expand and collapse luhan information
 $("#luhan #collapse").click(function(){
    if($("#luhan #expand").is(":visible"))
    {
        $("#luhan #expand").hide();
    }
    else{
    $("#luhan #expand").show();
    }
});
  
 //expand and collapse xiumin information
 $("#xiumin #collapse").click(function(){
    if($("#xiumin #expand").is(":visible"))
    {
        $("#xiumin #expand").hide();
    }
    else{
    $("#xiumin #expand").show();
    }
});

 //expand and collapse kris information
 $("#kris #collapse").click(function(){
    if($("#kris #expand").is(":visible"))
    {
        $("#kris #expand").hide();
    }
    else{
    $("#kris #expand").show();
    }
});

 //expand and collapse lay information
 $("#lay #collapse").click(function(){
    if($("#lay #expand").is(":visible"))
    {
        $("#lay #expand").hide();
    }
    else{
    $("#lay #expand").show();
    }
});

 //expand and collapse chen information
 $("#chen #collapse").click(function(){
    if($("#chen #expand").is(":visible"))
    {
        $("#chen #expand").hide();
    }
    else{
    $("#chen #expand").show();
    }
});

 //expand and collapse tao information
 $("#tao #collapse").click(function(){
    if($("#tao #expand").is(":visible"))
    {
        $("#tao #expand").hide();
    }
    else{
    $("#tao #expand").show();
    }
});

 /**********************
 SEHUN EXPAND
 ***********************/
 //birthday click
 $("#sehun #birthday").click(function(){
     $("#sehun i").removeClass("infoClick");
     $("#sehun h4").removeClass("infoClick");
     $("#sehun #birthday h4").addClass("infoClick");
     $("#sehun #birthday i").addClass('infoClick');
     document.getElementById("sehunDisplayBox").innerHTML = "<p>April 12, 1994</p>";
     var changeC = anime({
         targets: "#sehunDisplayBox p",
         opacity:{
             value:1,
             duration: 2000,
             easing: 'easeInOutQuad'
         },
     })
 });

 $("#sehun #birthday").mouseenter(function(){
     $("#sehun i").removeClass("infoClick");
     $("#sehun h4").removeClass("infoClick");
     $("#sehun #birthday h4").addClass("infoClick");
     $("#sehun #birthday i").addClass('infoClick');
 });

 //position click
 $("#sehun #position").click(function(){
     $("#sehun i").removeClass("infoClick");
     $("#sehun h4").removeClass("infoClick");
     $("#sehun #position h4").addClass("infoClick");
     $("#sehun #position i").addClass('infoClick');
     document.getElementById("sehunDisplayBox").innerHTML = "<p>Main Dancer, Rapper, Maknae</p>";
     var changeC = anime({
         targets: "#sehunDisplayBox p",
         opacity:{
             value:1,
             duration: 2000,
             easing: 'easeInOutQuad'
         },
     })
 });

 $("#sehun #position").mouseenter(function(){
     $("#sehun i").removeClass("infoClick");
     $("#sehun h4").removeClass("infoClick");
     $("#sehun #position h4").addClass("infoClick");
     $("#sehun #position i").addClass('infoClick');
 });

 //height click
 $("#sehun #height").click(function(){
     $("#sehun i").removeClass("infoClick");
     $("#sehun h4").removeClass("infoClick");
     $("#sehun #height h4").addClass("infoClick");
     $("#sehun #height i").addClass('infoClick');
     document.getElementById("sehunDisplayBox").innerHTML = "<p>183cm (6'0) </p>";
     var changeC = anime({
         targets: "#sehunDisplayBox p",
         opacity:{
             value:1,
             duration: 2000,
             easing: 'easeInOutQuad'
         },
     })
 });

 $("#sehun #height").mouseenter(function(){
     $("#sehun i").removeClass("infoClick");
     $("#sehun h4").removeClass("infoClick");
     $("#sehun #height h4").addClass("infoClick");
     $("#sehun #height i").addClass('infoClick');
 });

 //power click
 $("#sehun #power").click(function(){
     $("#sehun i").removeClass("infoClick");
     $("#sehun h4").removeClass("infoClick");
     $("#sehun #power h4").addClass("infoClick");
     $("#sehun #power i").addClass('infoClick');
     document.getElementById("sehunDisplayBox").innerHTML = "<p>Wind</p>";
     var changeC = anime({
         targets: "#sehunDisplayBox p",
         opacity:{
             value:1,
             duration: 2000,
             easing: 'easeInOutQuad'
         },
     })
 });

 $("#sehun #power").mouseenter(function(){
     $("#sehun i").removeClass("infoClick");
     $("#sehun h4").removeClass("infoClick");
     $("#sehun #power h4").addClass("infoClick");
     $("#sehun #power i").addClass('infoClick');
 });

 //nationality click
 $("#sehun #nationality").click(function(){
     $("#sehun i").removeClass("infoClick");
     $("#sehun h4").removeClass("infoClick");
     $("#sehun #nationality h4").addClass("infoClick");
     $("#sehun #nationality i").addClass('infoClick');
     document.getElementById("sehunDisplayBox").innerHTML = "<p>South Korean</p>";
     var changeC = anime({
         targets: "#sehunDisplayBox p",
         opacity:{
             value:1,
             duration: 2000,
             easing: 'easeInOutQuad'
         },
     })
 });

 $("#sehun #nationality").mouseenter(function(){
     $("#sehun i").removeClass("infoClick");
     $("#sehun h4").removeClass("infoClick");
     $("#sehun #nationality h4").addClass("infoClick");
     $("#sehun #nationality i").addClass('infoClick');
 });

 //unit click
 $("#sehun #unit").click(function(){
     $("#sehun i").removeClass("infoClick");
     $("#sehun h4").removeClass("infoClick");
     $("#sehun #unit h4").addClass("infoClick");
     $("#sehun #unit i").addClass('infoClick');
     document.getElementById("sehunDisplayBox").innerHTML = "<p>EXO-K</p>";
     var changeC = anime({
         targets: "#sehunDisplayBox p",
         opacity:{
             value:1,
             duration: 2000,
             easing: 'easeInOutQuad'
         },
     })
 });

 $("#sehun #unit").mouseenter(function(){
     $("#sehun i").removeClass("infoClick");
     $("#sehun h4").removeClass("infoClick");
     $("#sehun #unit h4").addClass("infoClick");
     $("#sehun #unit i").addClass('infoClick');
 });

 /******************
 KAI EXPAND
 ******************/

 //birthday click
 $("#kai #kbirthday").click(function(){
     $("#kai i").removeClass("infoClick");
     $("#kai h4").removeClass("infoClick");
     $("#kai #kbirthday h4").addClass("infoClick");
     $("#kai #kbirthday i").addClass('infoClick');
     document.getElementById("kaiDisplayBox").innerHTML = "<p>January 14, 1994</p>";
     var changeC = anime({
         targets: "#kaiDisplayBox p",
         opacity:{
             value:1,
             duration: 2000,
             easing: 'easeInOutQuad'
         },
     })
 });

 $("#kai #kbirthday").mouseenter(function(){
     $("#kai i").removeClass("infoClick");
     $("#kai h4").removeClass("infoClick");
     $("#kai #kbirthday h4").addClass("infoClick");
     $("#kai #kbirthday i").addClass('infoClick');
 });

 
 //position click
 $("#kai #kposition").click(function(){
     $("#kai i").removeClass("infoClick");
     $("#kai h4").removeClass("infoClick");
     $("#kai #kposition h4").addClass("infoClick");
     $("#kai #kposition i").addClass('infoClick');
     document.getElementById("kaiDisplayBox").innerHTML = "<p>Main Dancer</p>";
     var changeC = anime({
         targets: "#kaiDisplayBox p",
         opacity:{
             value:1,
             duration: 2000,
             easing: 'easeInOutQuad'
         },
     })
 });

 $("#kai #kposition").mouseenter(function(){
     $("#kai i").removeClass("infoClick");
     $("#kai h4").removeClass("infoClick");
     $("#kai #kposition h4").addClass("infoClick");
     $("#kai #kposition i").addClass('infoClick');
 });

 //height click
 $("#kai #kheight").click(function(){
     $("#kai i").removeClass("infoClick");
     $("#kai h4").removeClass("infoClick");
     $("#kai #kheight h4").addClass("infoClick");
     $("#kai #kheight i").addClass('infoClick');
     document.getElementById("kaiDisplayBox").innerHTML = "<p>183cm (6'0) </p>";
     var changeC = anime({
         targets: "#kaiDisplayBox p",
         opacity:{
             value:1,
             duration: 2000,
             easing: 'easeInOutQuad'
         },
     })
 });

 $("#kai #kheight").mouseenter(function(){
     $("#kai i").removeClass("infoClick");
     $("#kai h4").removeClass("infoClick");
     $("#kai #kheight h4").addClass("infoClick");
     $("#kai #kheight i").addClass('infoClick');
 });

 //power click
 $("#kai #kpower").click(function(){
     $("#kai i").removeClass("infoClick");
     $("#kai h4").removeClass("infoClick");
     $("#kai #kpower h4").addClass("infoClick");
     $("#kai #kpower i").addClass('infoClick');
     document.getElementById("kaiDisplayBox").innerHTML = "<p>Teleportation</p>";
     var changeC = anime({
         targets: "#kaiDisplayBox p",
         opacity:{
             value:1,
             duration: 2000,
             easing: 'easeInOutQuad'
         },
     })
 });

 $("#kai #kpower").mouseenter(function(){
     $("#kai i").removeClass("infoClick");
     $("#kai h4").removeClass("infoClick");
     $("#kai #kpower h4").addClass("infoClick");
     $("#kai #kpower i").addClass('infoClick');
 });
 
 //nationality click
 $("#kai #knationality").click(function(){
     $("#kai i").removeClass("infoClick");
     $("#kai h4").removeClass("infoClick");
     $("#kai #knationality h4").addClass("infoClick");
     $("#kai #knationality i").addClass('infoClick');
     document.getElementById("kaiDisplayBox").innerHTML = "<p>South Korean</p>";
     var changeC = anime({
         targets: "#kaiDisplayBox p",
         opacity:{
             value:1,
             duration: 2000,
             easing: 'easeInOutQuad'
         },
     })
 });

 $("#kai #knationality").mouseenter(function(){
     $("#kai i").removeClass("infoClick");
     $("#kai h4").removeClass("infoClick");
     $("#kai #knationality h4").addClass("infoClick");
     $("#kai #knationality i").addClass('infoClick');
 });
 

 //unit click
 $("#kai #kunit").click(function(){
     $("#kai i").removeClass("infoClick");
     $("#kai h4").removeClass("infoClick");
     $("#kai #kunit h4").addClass("infoClick");
     $("#kai #kunit i").addClass('infoClick');
     document.getElementById("kaiDisplayBox").innerHTML = "<p>EXO-K</p>";
     var changeC = anime({
         targets: "#kaiDisplayBox p",
         opacity:{
             value:1,
             duration: 2000,
             easing: 'easeInOutQuad'
         },
     })
 });

 $("#kai #kunit").mouseenter(function(){
     $("#kai i").removeClass("infoClick");
     $("#kai h4").removeClass("infoClick");
     $("#kai #kunit h4").addClass("infoClick");
     $("#kai #kunit i").addClass('infoClick');
 });

 /******************
 CHANYEOL EXPAND
 ******************/

 //birthday click
 $("#chanyeol #cbirthday").click(function(){
     $("#chanyeol i").removeClass("infoClick");
     $("#chanyeol h4").removeClass("infoClick");
     $("#chanyeol #cbirthday h4").addClass("infoClick");
     $("#chanyeol #cbirthday i").addClass('infoClick');
     document.getElementById("chanyeolDisplayBox").innerHTML = "<p>November 21, 1992</p>";
     var changeC = anime({
         targets: "#chanyeolDisplayBox p",
         opacity:{
             value:1,
             duration: 2000,
             easing: 'easeInOutQuad'
         },
     })
 });

 $("#chanyeol #cbirthday").mouseenter(function(){
     $("#chanyeol i").removeClass("infoClick");
     $("#chanyeol h4").removeClass("infoClick");
     $("#chanyeol #cbirthday h4").addClass("infoClick");
     $("#chanyeol #cbirthday i").addClass('infoClick');
 });

 
 //position click
 $("#chanyeol #cposition").click(function(){
     $("#chanyeol i").removeClass("infoClick");
     $("#chanyeol h4").removeClass("infoClick");
     $("#chanyeol #cposition h4").addClass("infoClick");
     $("#chanyeol #cposition i").addClass('infoClick');
     document.getElementById("chanyeolDisplayBox").innerHTML = "<p>Main Rapper</p>";
     var changeC = anime({
         targets: "#chanyeolDisplayBox p",
         opacity:{
             value:1,
             duration: 2000,
             easing: 'easeInOutQuad'
         },
     })
 });

 $("#chanyeol #cposition").mouseenter(function(){
     $("#chanyeol i").removeClass("infoClick");
     $("#chanyeol h4").removeClass("infoClick");
     $("#chanyeol #cposition h4").addClass("infoClick");
     $("#chanyeol #cposition i").addClass('infoClick');
 });

 //height click
 $("#chanyeol #cheight").click(function(){
     $("#chanyeol i").removeClass("infoClick");
     $("#chanyeol h4").removeClass("infoClick");
     $("#chanyeol #cheight h4").addClass("infoClick");
     $("#chanyeol #cheight i").addClass('infoClick');
     document.getElementById("chanyeolDisplayBox").innerHTML = "<p>188cm (6'2) </p>";
     var changeC = anime({
         targets: "#chanyeolDisplayBox p",
         opacity:{
             value:1,
             duration: 2000,
             easing: 'easeInOutQuad'
         },
     })
 });

 $("#chanyeol #cheight").mouseenter(function(){
     $("#chanyeol i").removeClass("infoClick");
     $("#chanyeol h4").removeClass("infoClick");
     $("#chanyeol #cheight h4").addClass("infoClick");
     $("#chanyeol #cheight i").addClass('infoClick');
 });

 //power click
 $("#chanyeol #cpower").click(function(){
     $("#chanyeol i").removeClass("infoClick");
     $("#chanyeol h4").removeClass("infoClick");
     $("#chanyeol #cpower h4").addClass("infoClick");
     $("#chanyeol #cpower i").addClass('infoClick');
     document.getElementById("chanyeolDisplayBox").innerHTML = "<p>Fire</p>";
     var changeC = anime({
         targets: "#chanyeolDisplayBox p",
         opacity:{
             value:1,
             duration: 2000,
             easing: 'easeInOutQuad'
         },
     })
 });

 $("#chanyeol #cpower").mouseenter(function(){
     $("#chanyeol i").removeClass("infoClick");
     $("#chanyeol h4").removeClass("infoClick");
     $("#chanyeol #cpower h4").addClass("infoClick");
     $("#chanyeol #cpower i").addClass('infoClick');
 });
 
 //nationality click
 $("#chanyeol #cnationality").click(function(){
     $("#chanyeol i").removeClass("infoClick");
     $("#chanyeol h4").removeClass("infoClick");
     $("#chanyeol #cnationality h4").addClass("infoClick");
     $("#chanyeol #cnationality i").addClass('infoClick');
     document.getElementById("chanyeolDisplayBox").innerHTML = "<p>South Korean</p>";
     var changeC = anime({
         targets: "#chanyeolDisplayBox p",
         opacity:{
             value:1,
             duration: 2000,
             easing: 'easeInOutQuad'
         },
     })
 });

 $("#chanyeol #cnationality").mouseenter(function(){
     $("#chanyeol i").removeClass("infoClick");
     $("#chanyeol h4").removeClass("infoClick");
     $("#chanyeol #cnationality h4").addClass("infoClick");
     $("#chanyeol #cnationality i").addClass('infoClick');
 });
 

 //unit click
 $("#chanyeol #cunit").click(function(){
     $("#chanyeol i").removeClass("infoClick");
     $("#chanyeol h4").removeClass("infoClick");
     $("#chanyeol #cunit h4").addClass("infoClick");
     $("#chanyeol #cunit i").addClass('infoClick');
     document.getElementById("chanyeolDisplayBox").innerHTML = "<p>EXO-K</p>";
     var changeC = anime({
         targets: "#chanyeolDisplayBox p",
         opacity:{
             value:1,
             duration: 2000,
             easing: 'easeInOutQuad'
         },
     })
 });

 $("#chanyeol #cunit").mouseenter(function(){
     $("#chanyeol i").removeClass("infoClick");
     $("#chanyeol h4").removeClass("infoClick");
     $("#chanyeol #cunit h4").addClass("infoClick");
     $("#chanyeol #cunit i").addClass('infoClick');
 });
 
 /**********************
 DO EXPAND
 ***********************/
 //birthday click
 $("#do #birthday").click(function(){
    $("#do i").removeClass("infoClick");
    $("#do h4").removeClass("infoClick");
    $("#do #birthday h4").addClass("infoClick");
    $("#do #birthday i").addClass('infoClick');
    document.getElementById("doDisplayBox").innerHTML = "<p>Janueary 12, 1993</p>";
    var changeC = anime({
        targets: "#doDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#do #birthday").mouseenter(function(){
    $("#do i").removeClass("infoClick");
    $("#do h4").removeClass("infoClick");
    $("#do #birthday h4").addClass("infoClick");
    $("#do #birthday i").addClass('infoClick');
});

//position click
$("#do #position").click(function(){
    $("#do i").removeClass("infoClick");
    $("#do h4").removeClass("infoClick");
    $("#do #position h4").addClass("infoClick");
    $("#do #position i").addClass('infoClick');
    document.getElementById("doDisplayBox").innerHTML = "<p>Main Vocalist</p>";
    var changeC = anime({
        targets: "#doDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#do #position").mouseenter(function(){
    $("#do i").removeClass("infoClick");
    $("#do h4").removeClass("infoClick");
    $("#do #position h4").addClass("infoClick");
    $("#do #position i").addClass('infoClick');
});

//height click
$("#do #height").click(function(){
    $("#do i").removeClass("infoClick");
    $("#do h4").removeClass("infoClick");
    $("#do #height h4").addClass("infoClick");
    $("#do #height i").addClass('infoClick');
    document.getElementById("doDisplayBox").innerHTML = "<p>173cm (5'8) </p>";
    var changeC = anime({
        targets: "#doDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#do #height").mouseenter(function(){
    $("#do i").removeClass("infoClick");
    $("#do h4").removeClass("infoClick");
    $("#do #height h4").addClass("infoClick");
    $("#do #height i").addClass('infoClick');
});

//power click
$("#do #power").click(function(){
    $("#do i").removeClass("infoClick");
    $("#do h4").removeClass("infoClick");
    $("#do #power h4").addClass("infoClick");
    $("#do #power i").addClass('infoClick');
    document.getElementById("doDisplayBox").innerHTML = "<p>Force/ Earth</p>";
    var changeC = anime({
        targets: "#doDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#do #power").mouseenter(function(){
    $("#do i").removeClass("infoClick");
    $("#do h4").removeClass("infoClick");
    $("#do #power h4").addClass("infoClick");
    $("#do #power i").addClass('infoClick');
});

//nationality click
$("#do #nationality").click(function(){
    $("#do i").removeClass("infoClick");
    $("#do h4").removeClass("infoClick");
    $("#do #nationality h4").addClass("infoClick");
    $("#do #nationality i").addClass('infoClick');
    document.getElementById("doDisplayBox").innerHTML = "<p>South Korean</p>";
    var changeC = anime({
        targets: "#doDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#do #nationality").mouseenter(function(){
    $("#do i").removeClass("infoClick");
    $("#do h4").removeClass("infoClick");
    $("#do #nationality h4").addClass("infoClick");
    $("#do #nationality i").addClass('infoClick');
});

//unit click
$("#do #unit").click(function(){
    $("#do i").removeClass("infoClick");
    $("#do h4").removeClass("infoClick");
    $("#do #unit h4").addClass("infoClick");
    $("#do #unit i").addClass('infoClick');
    document.getElementById("doDisplayBox").innerHTML = "<p>EXO-K</p>";
    var changeC = anime({
        targets: "#doDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#do #unit").mouseenter(function(){
    $("#do i").removeClass("infoClick");
    $("#do h4").removeClass("infoClick");
    $("#do #unit h4").addClass("infoClick");
    $("#do #unit i").addClass('infoClick');
});

/**********************
 SUHO EXPAND
 ***********************/
 //birthday click
 $("#suho #birthday").click(function(){
    $("#suho i").removeClass("infoClick");
    $("#suho h4").removeClass("infoClick");
    $("#suho #birthday h4").addClass("infoClick");
    $("#suho #birthday i").addClass('infoClick');
    document.getElementById("suhoDisplayBox").innerHTML = "<p>May 22, 1991</p>";
    var changeC = anime({
        targets: "#suhoDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#suho #birthday").mouseenter(function(){
    $("#suho i").removeClass("infoClick");
    $("#suho h4").removeClass("infoClick");
    $("#suho #birthday h4").addClass("infoClick");
    $("#suho #birthday i").addClass('infoClick');
});

//position click
$("#suho #position").click(function(){
    $("#suho i").removeClass("infoClick");
    $("#suho h4").removeClass("infoClick");
    $("#suho #position h4").addClass("infoClick");
    $("#suho #position i").addClass('infoClick');
    document.getElementById("suhoDisplayBox").innerHTML = "<p>Leader, Main Vocalist</p>";
    var changeC = anime({
        targets: "#suhoDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#suho #position").mouseenter(function(){
    $("#suho i").removeClass("infoClick");
    $("#suho h4").removeClass("infoClick");
    $("#suho #position h4").addClass("infoClick");
    $("#suho #position i").addClass('infoClick');
});

//height click
$("#suho #height").click(function(){
    $("#suho i").removeClass("infoClick");
    $("#suho h4").removeClass("infoClick");
    $("#suho #height h4").addClass("infoClick");
    $("#suho #height i").addClass('infoClick');
    document.getElementById("suhoDisplayBox").innerHTML = "<p>173cm (5'8) </p>";
    var changeC = anime({
        targets: "#suhoDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#suho #height").mouseenter(function(){
    $("#suho i").removeClass("infoClick");
    $("#suho h4").removeClass("infoClick");
    $("#suho #height h4").addClass("infoClick");
    $("#suho #height i").addClass('infoClick');
});

//power click
$("#suho #power").click(function(){
    $("#suho i").removeClass("infoClick");
    $("#suho h4").removeClass("infoClick");
    $("#suho #power h4").addClass("infoClick");
    $("#suho #power i").addClass('infoClick');
    document.getElementById("suhoDisplayBox").innerHTML = "<p>Water</p>";
    var changeC = anime({
        targets: "#suhoDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#suho #power").mouseenter(function(){
    $("#suho i").removeClass("infoClick");
    $("#suho h4").removeClass("infoClick");
    $("#suho #power h4").addClass("infoClick");
    $("#suho #power i").addClass('infoClick');
});

//nationality click
$("#suho #nationality").click(function(){
    $("#suho i").removeClass("infoClick");
    $("#suho h4").removeClass("infoClick");
    $("#suho #nationality h4").addClass("infoClick");
    $("#suho #nationality i").addClass('infoClick');
    document.getElementById("suhoDisplayBox").innerHTML = "<p>South Korean</p>";
    var changeC = anime({
        targets: "#suhoDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#suho #nationality").mouseenter(function(){
    $("#suho i").removeClass("infoClick");
    $("#suho h4").removeClass("infoClick");
    $("#suho #nationality h4").addClass("infoClick");
    $("#suho #nationality i").addClass('infoClick');
});

//unit click
$("#suho #unit").click(function(){
    $("#suho i").removeClass("infoClick");
    $("#suho h4").removeClass("infoClick");
    $("#suho #unit h4").addClass("infoClick");
    $("#suho #unit i").addClass('infoClick');
    document.getElementById("suhoDisplayBox").innerHTML = "<p>EXO-K</p>";
    var changeC = anime({
        targets: "#suhoDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#suho #unit").mouseenter(function(){
    $("#suho i").removeClass("infoClick");
    $("#suho h4").removeClass("infoClick");
    $("#suho #unit h4").addClass("infoClick");
    $("#suho #unit i").addClass('infoClick');
});

/**********************
 BAEKHYUN EXPAND
 ***********************/
 //birthday click
 $("#baekhyun #birthday").click(function(){
    $("#baekhyun i").removeClass("infoClick");
    $("#baekhyun h4").removeClass("infoClick");
    $("#baekhyun #birthday h4").addClass("infoClick");
    $("#baekhyun #birthday i").addClass('infoClick');
    document.getElementById("baekhyunDisplayBox").innerHTML = "<p>May 6, 1992</p>";
    var changeC = anime({
        targets: "#baekhyunDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#baekhyun #birthday").mouseenter(function(){
    $("#baekhyun i").removeClass("infoClick");
    $("#baekhyun h4").removeClass("infoClick");
    $("#baekhyun #birthday h4").addClass("infoClick");
    $("#baekhyun #birthday i").addClass('infoClick');
});

//position click
$("#baekhyun #position").click(function(){
    $("#baekhyun i").removeClass("infoClick");
    $("#baekhyun h4").removeClass("infoClick");
    $("#baekhyun #position h4").addClass("infoClick");
    $("#baekhyun #position i").addClass('infoClick');
    document.getElementById("baekhyunDisplayBox").innerHTML = "<p>Main Vocalist</p>";
    var changeC = anime({
        targets: "#baekhyunDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#baekhyun #position").mouseenter(function(){
    $("#baekhyun i").removeClass("infoClick");
    $("#baekhyun h4").removeClass("infoClick");
    $("#baekhyun #position h4").addClass("infoClick");
    $("#baekhyun #position i").addClass('infoClick');
});

//height click
$("#baekhyun #height").click(function(){
    $("#baekhyun i").removeClass("infoClick");
    $("#baekhyun h4").removeClass("infoClick");
    $("#baekhyun #height h4").addClass("infoClick");
    $("#baekhyun #height i").addClass('infoClick');
    document.getElementById("baekhyunDisplayBox").innerHTML = "<p>175cm (5'9) </p>";
    var changeC = anime({
        targets: "#baekhyunDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#baekhyun #height").mouseenter(function(){
    $("#baekhyun i").removeClass("infoClick");
    $("#baekhyun h4").removeClass("infoClick");
    $("#baekhyun #height h4").addClass("infoClick");
    $("#baekhyun #height i").addClass('infoClick');
});

//power click
$("#baekhyun #power").click(function(){
    $("#baekhyun i").removeClass("infoClick");
    $("#baekhyun h4").removeClass("infoClick");
    $("#baekhyun #power h4").addClass("infoClick");
    $("#baekhyun #power i").addClass('infoClick');
    document.getElementById("baekhyunDisplayBox").innerHTML = "<p>Light</p>";
    var changeC = anime({
        targets: "#baekhyunDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#baekhyun #power").mouseenter(function(){
    $("#baekhyun i").removeClass("infoClick");
    $("#baekhyun h4").removeClass("infoClick");
    $("#baekhyun #power h4").addClass("infoClick");
    $("#baekhyun #power i").addClass('infoClick');
});

//nationality click
$("#baekhyun #nationality").click(function(){
    $("#baekhyun i").removeClass("infoClick");
    $("#baekhyun h4").removeClass("infoClick");
    $("#baekhyun #nationality h4").addClass("infoClick");
    $("#baekhyun #nationality i").addClass('infoClick');
    document.getElementById("baekhyunDisplayBox").innerHTML = "<p>South Korean</p>";
    var changeC = anime({
        targets: "#baekhyunDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#baekhyun #nationality").mouseenter(function(){
    $("#baekhyun i").removeClass("infoClick");
    $("#baekhyun h4").removeClass("infoClick");
    $("#baekhyun #nationality h4").addClass("infoClick");
    $("#baekhyun #nationality i").addClass('infoClick');
});

//unit click
$("#baekhyun #unit").click(function(){
    $("#baekhyun i").removeClass("infoClick");
    $("#baekhyun h4").removeClass("infoClick");
    $("#baekhyun #unit h4").addClass("infoClick");
    $("#baekhyun #unit i").addClass('infoClick');
    document.getElementById("baekhyunDisplayBox").innerHTML = "<p>EXO-K</p>";
    var changeC = anime({
        targets: "#baekhyunDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#baekhyun #unit").mouseenter(function(){
    $("#baekhyun i").removeClass("infoClick");
    $("#baekhyun h4").removeClass("infoClick");
    $("#baekhyun #unit h4").addClass("infoClick");
    $("#baekhyun #unit i").addClass('infoClick');
});

/**********************
 luhan EXPAND
 ***********************/
 //birthday click
 $("#luhan #birthday").click(function(){
    $("#luhan i").removeClass("infoClick");
    $("#luhan h4").removeClass("infoClick");
    $("#luhan #birthday h4").addClass("infoClick");
    $("#luhan #birthday i").addClass('infoClick');
    document.getElementById("luhanDisplayBox").innerHTML = "<p>April 20, 1990</p>";
    var changeC = anime({
        targets: "#luhanDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#luhan #birthday").mouseenter(function(){
    $("#luhan i").removeClass("infoClick");
    $("#luhan h4").removeClass("infoClick");
    $("#luhan #birthday h4").addClass("infoClick");
    $("#luhan #birthday i").addClass('infoClick');
});

//position click
$("#luhan #position").click(function(){
    $("#luhan i").removeClass("infoClick");
    $("#luhan h4").removeClass("infoClick");
    $("#luhan #position h4").addClass("infoClick");
    $("#luhan #position i").addClass('infoClick');
    document.getElementById("luhanDisplayBox").innerHTML = "<p>Main Vocalist</p>";
    var changeC = anime({
        targets: "#luhanDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#luhan #position").mouseenter(function(){
    $("#luhan i").removeClass("infoClick");
    $("#luhan h4").removeClass("infoClick");
    $("#luhan #position h4").addClass("infoClick");
    $("#luhan #position i").addClass('infoClick');
});

//height click
$("#luhan #height").click(function(){
    $("#luhan i").removeClass("infoClick");
    $("#luhan h4").removeClass("infoClick");
    $("#luhan #height h4").addClass("infoClick");
    $("#luhan #height i").addClass('infoClick');
    document.getElementById("luhanDisplayBox").innerHTML = "<p>178cm (5'10) </p>";
    var changeC = anime({
        targets: "#luhanDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#luhan #height").mouseenter(function(){
    $("#luhan i").removeClass("infoClick");
    $("#luhan h4").removeClass("infoClick");
    $("#luhan #height h4").addClass("infoClick");
    $("#luhan #height i").addClass('infoClick');
});

//power click
$("#luhan #power").click(function(){
    $("#luhan i").removeClass("infoClick");
    $("#luhan h4").removeClass("infoClick");
    $("#luhan #power h4").addClass("infoClick");
    $("#luhan #power i").addClass('infoClick');
    document.getElementById("luhanDisplayBox").innerHTML = "<p>Telekenesis</p>";
    var changeC = anime({
        targets: "#luhanDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#luhan #power").mouseenter(function(){
    $("#luhan i").removeClass("infoClick");
    $("#luhan h4").removeClass("infoClick");
    $("#luhan #power h4").addClass("infoClick");
    $("#luhan #power i").addClass('infoClick');
});

//nationality click
$("#luhan #nationality").click(function(){
    $("#luhan i").removeClass("infoClick");
    $("#luhan h4").removeClass("infoClick");
    $("#luhan #nationality h4").addClass("infoClick");
    $("#luhan #nationality i").addClass('infoClick');
    document.getElementById("luhanDisplayBox").innerHTML = "<p>Chinese</p>";
    var changeC = anime({
        targets: "#luhanDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#luhan #nationality").mouseenter(function(){
    $("#luhan i").removeClass("infoClick");
    $("#luhan h4").removeClass("infoClick");
    $("#luhan #nationality h4").addClass("infoClick");
    $("#luhan #nationality i").addClass('infoClick');
});

//unit click
$("#luhan #unit").click(function(){
    $("#luhan i").removeClass("infoClick");
    $("#luhan h4").removeClass("infoClick");
    $("#luhan #unit h4").addClass("infoClick");
    $("#luhan #unit i").addClass('infoClick');
    document.getElementById("luhanDisplayBox").innerHTML = "<p>EXO-M</p>";
    var changeC = anime({
        targets: "#luhanDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#luhan #unit").mouseenter(function(){
    $("#luhan i").removeClass("infoClick");
    $("#luhan h4").removeClass("infoClick");
    $("#luhan #unit h4").addClass("infoClick");
    $("#luhan #unit i").addClass('infoClick');
});

/**********************
 xiumin EXPAND
 ***********************/
 //birthday click
 $("#xiumin #birthday").click(function(){
    $("#xiumin i").removeClass("infoClick");
    $("#xiumin h4").removeClass("infoClick");
    $("#xiumin #birthday h4").addClass("infoClick");
    $("#xiumin #birthday i").addClass('infoClick');
    document.getElementById("xiuminDisplayBox").innerHTML = "<p>March 26, 1990</p>";
    var changeC = anime({
        targets: "#xiuminDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#xiumin #birthday").mouseenter(function(){
    $("#xiumin i").removeClass("infoClick");
    $("#xiumin h4").removeClass("infoClick");
    $("#xiumin #birthday h4").addClass("infoClick");
    $("#xiumin #birthday i").addClass('infoClick');
});

//position click
$("#xiumin #position").click(function(){
    $("#xiumin i").removeClass("infoClick");
    $("#xiumin h4").removeClass("infoClick");
    $("#xiumin #position h4").addClass("infoClick");
    $("#xiumin #position i").addClass('infoClick');
    document.getElementById("xiuminDisplayBox").innerHTML = "<p>Vocalist, Rapper</p>";
    var changeC = anime({
        targets: "#xiuminDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#xiumin #position").mouseenter(function(){
    $("#xiumin i").removeClass("infoClick");
    $("#xiumin h4").removeClass("infoClick");
    $("#xiumin #position h4").addClass("infoClick");
    $("#xiumin #position i").addClass('infoClick');
});

//height click
$("#xiumin #height").click(function(){
    $("#xiumin i").removeClass("infoClick");
    $("#xiumin h4").removeClass("infoClick");
    $("#xiumin #height h4").addClass("infoClick");
    $("#xiumin #height i").addClass('infoClick');
    document.getElementById("xiuminDisplayBox").innerHTML = "<p>173cm (5'8) </p>";
    var changeC = anime({
        targets: "#xiuminDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#xiumin #height").mouseenter(function(){
    $("#xiumin i").removeClass("infoClick");
    $("#xiumin h4").removeClass("infoClick");
    $("#xiumin #height h4").addClass("infoClick");
    $("#xiumin #height i").addClass('infoClick');
});

//power click
$("#xiumin #power").click(function(){
    $("#xiumin i").removeClass("infoClick");
    $("#xiumin h4").removeClass("infoClick");
    $("#xiumin #power h4").addClass("infoClick");
    $("#xiumin #power i").addClass('infoClick');
    document.getElementById("xiuminDisplayBox").innerHTML = "<p>Frost</p>";
    var changeC = anime({
        targets: "#xiuminDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#xiumin #power").mouseenter(function(){
    $("#xiumin i").removeClass("infoClick");
    $("#xiumin h4").removeClass("infoClick");
    $("#xiumin #power h4").addClass("infoClick");
    $("#xiumin #power i").addClass('infoClick');
});

//nationality click
$("#xiumin #nationality").click(function(){
    $("#xiumin i").removeClass("infoClick");
    $("#xiumin h4").removeClass("infoClick");
    $("#xiumin #nationality h4").addClass("infoClick");
    $("#xiumin #nationality i").addClass('infoClick');
    document.getElementById("xiuminDisplayBox").innerHTML = "<p>South Korean</p>";
    var changeC = anime({
        targets: "#xiuminDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#xiumin #nationality").mouseenter(function(){
    $("#xiumin i").removeClass("infoClick");
    $("#xiumin h4").removeClass("infoClick");
    $("#xiumin #nationality h4").addClass("infoClick");
    $("#xiumin #nationality i").addClass('infoClick');
});

//unit click
$("#xiumin #unit").click(function(){
    $("#xiumin i").removeClass("infoClick");
    $("#xiumin h4").removeClass("infoClick");
    $("#xiumin #unit h4").addClass("infoClick");
    $("#xiumin #unit i").addClass('infoClick');
    document.getElementById("xiuminDisplayBox").innerHTML = "<p>EXO-M</p>";
    var changeC = anime({
        targets: "#xiuminDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#xiumin #unit").mouseenter(function(){
    $("#xiumin i").removeClass("infoClick");
    $("#xiumin h4").removeClass("infoClick");
    $("#xiumin #unit h4").addClass("infoClick");
    $("#xiumin #unit i").addClass('infoClick');
});

/**********************
 chen EXPAND
 ***********************/
 //birthday click
 $("#chen #birthday").click(function(){
    $("#chen i").removeClass("infoClick");
    $("#chen h4").removeClass("infoClick");
    $("#chen #birthday h4").addClass("infoClick");
    $("#chen #birthday i").addClass('infoClick');
    document.getElementById("chenDisplayBox").innerHTML = "<p>September 21, 1992</p>";
    var changeC = anime({
        targets: "#chenDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#chen #birthday").mouseenter(function(){
    $("#chen i").removeClass("infoClick");
    $("#chen h4").removeClass("infoClick");
    $("#chen #birthday h4").addClass("infoClick");
    $("#chen #birthday i").addClass('infoClick');
});

//position click
$("#chen #position").click(function(){
    $("#chen i").removeClass("infoClick");
    $("#chen h4").removeClass("infoClick");
    $("#chen #position h4").addClass("infoClick");
    $("#chen #position i").addClass('infoClick');
    document.getElementById("chenDisplayBox").innerHTML = "<p>Main Vocalist</p>";
    var changeC = anime({
        targets: "#chenDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#chen #position").mouseenter(function(){
    $("#chen i").removeClass("infoClick");
    $("#chen h4").removeClass("infoClick");
    $("#chen #position h4").addClass("infoClick");
    $("#chen #position i").addClass('infoClick');
});

//height click
$("#chen #height").click(function(){
    $("#chen i").removeClass("infoClick");
    $("#chen h4").removeClass("infoClick");
    $("#chen #height h4").addClass("infoClick");
    $("#chen #height i").addClass('infoClick');
    document.getElementById("chenDisplayBox").innerHTML = "<p>173cm (5'8) </p>";
    var changeC = anime({
        targets: "#chenDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#chen #height").mouseenter(function(){
    $("#chen i").removeClass("infoClick");
    $("#chen h4").removeClass("infoClick");
    $("#chen #height h4").addClass("infoClick");
    $("#chen #height i").addClass('infoClick');
});

//power click
$("#chen #power").click(function(){
    $("#chen i").removeClass("infoClick");
    $("#chen h4").removeClass("infoClick");
    $("#chen #power h4").addClass("infoClick");
    $("#chen #power i").addClass('infoClick');
    document.getElementById("chenDisplayBox").innerHTML = "<p>Lightning</p>";
    var changeC = anime({
        targets: "#chenDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#chen #power").mouseenter(function(){
    $("#chen i").removeClass("infoClick");
    $("#chen h4").removeClass("infoClick");
    $("#chen #power h4").addClass("infoClick");
    $("#chen #power i").addClass('infoClick');
});

//nationality click
$("#chen #nationality").click(function(){
    $("#chen i").removeClass("infoClick");
    $("#chen h4").removeClass("infoClick");
    $("#chen #nationality h4").addClass("infoClick");
    $("#chen #nationality i").addClass('infoClick');
    document.getElementById("chenDisplayBox").innerHTML = "<p>South Korean</p>";
    var changeC = anime({
        targets: "#chenDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#chen #nationality").mouseenter(function(){
    $("#chen i").removeClass("infoClick");
    $("#chen h4").removeClass("infoClick");
    $("#chen #nationality h4").addClass("infoClick");
    $("#chen #nationality i").addClass('infoClick');
});

//unit click
$("#chen #unit").click(function(){
    $("#chen i").removeClass("infoClick");
    $("#chen h4").removeClass("infoClick");
    $("#chen #unit h4").addClass("infoClick");
    $("#chen #unit i").addClass('infoClick');
    document.getElementById("chenDisplayBox").innerHTML = "<p>EXO-M</p>";
    var changeC = anime({
        targets: "#chenDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#chen #unit").mouseenter(function(){
    $("#chen i").removeClass("infoClick");
    $("#chen h4").removeClass("infoClick");
    $("#chen #unit h4").addClass("infoClick");
    $("#chen #unit i").addClass('infoClick');
});

/**********************
 kris EXPAND
 ***********************/
 //birthday click
 $("#kris #birthday").click(function(){
    $("#kris i").removeClass("infoClick");
    $("#kris h4").removeClass("infoClick");
    $("#kris #birthday h4").addClass("infoClick");
    $("#kris #birthday i").addClass('infoClick');
    document.getElementById("krisDisplayBox").innerHTML = "<p>November 6, 1990</p>";
    var changeC = anime({
        targets: "#krisDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#kris #birthday").mouseenter(function(){
    $("#kris i").removeClass("infoClick");
    $("#kris h4").removeClass("infoClick");
    $("#kris #birthday h4").addClass("infoClick");
    $("#kris #birthday i").addClass('infoClick');
});

//position click
$("#kris #position").click(function(){
    $("#kris i").removeClass("infoClick");
    $("#kris h4").removeClass("infoClick");
    $("#kris #position h4").addClass("infoClick");
    $("#kris #position i").addClass('infoClick');
    document.getElementById("krisDisplayBox").innerHTML = "<p>Main Rapper</p>";
    var changeC = anime({
        targets: "#krisDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#kris #position").mouseenter(function(){
    $("#kris i").removeClass("infoClick");
    $("#kris h4").removeClass("infoClick");
    $("#kris #position h4").addClass("infoClick");
    $("#kris #position i").addClass('infoClick');
});

//height click
$("#kris #height").click(function(){
    $("#kris i").removeClass("infoClick");
    $("#kris h4").removeClass("infoClick");
    $("#kris #height h4").addClass("infoClick");
    $("#kris #height i").addClass('infoClick');
    document.getElementById("krisDisplayBox").innerHTML = "<p>188cm (6'2) </p>";
    var changeC = anime({
        targets: "#krisDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#kris #height").mouseenter(function(){
    $("#kris i").removeClass("infoClick");
    $("#kris h4").removeClass("infoClick");
    $("#kris #height h4").addClass("infoClick");
    $("#kris #height i").addClass('infoClick');
});

//power click
$("#kris #power").click(function(){
    $("#kris i").removeClass("infoClick");
    $("#kris h4").removeClass("infoClick");
    $("#kris #power h4").addClass("infoClick");
    $("#kris #power i").addClass('infoClick');
    document.getElementById("krisDisplayBox").innerHTML = "<p>Flight</p>";
    var changeC = anime({
        targets: "#krisDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#kris #power").mouseenter(function(){
    $("#kris i").removeClass("infoClick");
    $("#kris h4").removeClass("infoClick");
    $("#kris #power h4").addClass("infoClick");
    $("#kris #power i").addClass('infoClick');
});

//nationality click
$("#kris #nationality").click(function(){
    $("#kris i").removeClass("infoClick");
    $("#kris h4").removeClass("infoClick");
    $("#kris #nationality h4").addClass("infoClick");
    $("#kris #nationality i").addClass('infoClick');
    document.getElementById("krisDisplayBox").innerHTML = "<p>Chinese/ Canadian</p>";
    var changeC = anime({
        targets: "#krisDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#kris #nationality").mouseenter(function(){
    $("#kris i").removeClass("infoClick");
    $("#kris h4").removeClass("infoClick");
    $("#kris #nationality h4").addClass("infoClick");
    $("#kris #nationality i").addClass('infoClick');
});

//unit click
$("#kris #unit").click(function(){
    $("#kris i").removeClass("infoClick");
    $("#kris h4").removeClass("infoClick");
    $("#kris #unit h4").addClass("infoClick");
    $("#kris #unit i").addClass('infoClick');
    document.getElementById("krisDisplayBox").innerHTML = "<p>EXO-M</p>";
    var changeC = anime({
        targets: "#krisDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#kris #unit").mouseenter(function(){
    $("#kris i").removeClass("infoClick");
    $("#kris h4").removeClass("infoClick");
    $("#kris #unit h4").addClass("infoClick");
    $("#kris #unit i").addClass('infoClick');
});

/**********************
 tao EXPAND
 ***********************/
 //birthday click
 $("#tao #birthday").click(function(){
    $("#tao i").removeClass("infoClick");
    $("#tao h4").removeClass("infoClick");
    $("#tao #birthday h4").addClass("infoClick");
    $("#tao #birthday i").addClass('infoClick');
    document.getElementById("taoDisplayBox").innerHTML = "<p>May 2, 1993</p>";
    var changeC = anime({
        targets: "#taoDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#tao #birthday").mouseenter(function(){
    $("#tao i").removeClass("infoClick");
    $("#tao h4").removeClass("infoClick");
    $("#tao #birthday h4").addClass("infoClick");
    $("#tao #birthday i").addClass('infoClick');
});

//position click
$("#tao #position").click(function(){
    $("#tao i").removeClass("infoClick");
    $("#tao h4").removeClass("infoClick");
    $("#tao #position h4").addClass("infoClick");
    $("#tao #position i").addClass('infoClick');
    document.getElementById("taoDisplayBox").innerHTML = "<p>Main Rapper</p>";
    var changeC = anime({
        targets: "#taoDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#tao #position").mouseenter(function(){
    $("#tao i").removeClass("infoClick");
    $("#tao h4").removeClass("infoClick");
    $("#tao #position h4").addClass("infoClick");
    $("#tao #position i").addClass('infoClick');
});

//height click
$("#tao #height").click(function(){
    $("#tao i").removeClass("infoClick");
    $("#tao h4").removeClass("infoClick");
    $("#tao #height h4").addClass("infoClick");
    $("#tao #height i").addClass('infoClick');
    document.getElementById("taoDisplayBox").innerHTML = "<p>183cm (6'0) </p>";
    var changeC = anime({
        targets: "#taoDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#tao #height").mouseenter(function(){
    $("#tao i").removeClass("infoClick");
    $("#tao h4").removeClass("infoClick");
    $("#tao #height h4").addClass("infoClick");
    $("#tao #height i").addClass('infoClick');
});

//power click
$("#tao #power").click(function(){
    $("#tao i").removeClass("infoClick");
    $("#tao h4").removeClass("infoClick");
    $("#tao #power h4").addClass("infoClick");
    $("#tao #power i").addClass('infoClick');
    document.getElementById("taoDisplayBox").innerHTML = "<p>Time Control</p>";
    var changeC = anime({
        targets: "#taoDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#tao #power").mouseenter(function(){
    $("#tao i").removeClass("infoClick");
    $("#tao h4").removeClass("infoClick");
    $("#tao #power h4").addClass("infoClick");
    $("#tao #power i").addClass('infoClick');
});

//nationality click
$("#tao #nationality").click(function(){
    $("#tao i").removeClass("infoClick");
    $("#tao h4").removeClass("infoClick");
    $("#tao #nationality h4").addClass("infoClick");
    $("#tao #nationality i").addClass('infoClick');
    document.getElementById("taoDisplayBox").innerHTML = "<p>Chinese</p>";
    var changeC = anime({
        targets: "#taoDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#tao #nationality").mouseenter(function(){
    $("#tao i").removeClass("infoClick");
    $("#tao h4").removeClass("infoClick");
    $("#tao #nationality h4").addClass("infoClick");
    $("#tao #nationality i").addClass('infoClick');
});

//unit click
$("#tao #unit").click(function(){
    $("#tao i").removeClass("infoClick");
    $("#tao h4").removeClass("infoClick");
    $("#tao #unit h4").addClass("infoClick");
    $("#tao #unit i").addClass('infoClick');
    document.getElementById("taoDisplayBox").innerHTML = "<p>EXO-M</p>";
    var changeC = anime({
        targets: "#taoDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#tao #unit").mouseenter(function(){
    $("#tao i").removeClass("infoClick");
    $("#tao h4").removeClass("infoClick");
    $("#tao #unit h4").addClass("infoClick");
    $("#tao #unit i").addClass('infoClick');
});

/**********************
 lay EXPAND
 ***********************/
 //birthday click
 $("#lay #birthday").click(function(){
    $("#lay i").removeClass("infoClick");
    $("#lay h4").removeClass("infoClick");
    $("#lay #birthday h4").addClass("infoClick");
    $("#lay #birthday i").addClass('infoClick');
    document.getElementById("layDisplayBox").innerHTML = "<p>Octoper 7, 1991</p>";
    var changeC = anime({
        targets: "#layDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#lay #birthday").mouseenter(function(){
    $("#lay i").removeClass("infoClick");
    $("#lay h4").removeClass("infoClick");
    $("#lay #birthday h4").addClass("infoClick");
    $("#lay #birthday i").addClass('infoClick');
});

//position click
$("#lay #position").click(function(){
    $("#lay i").removeClass("infoClick");
    $("#lay h4").removeClass("infoClick");
    $("#lay #position h4").addClass("infoClick");
    $("#lay #position i").addClass('infoClick');
    document.getElementById("layDisplayBox").innerHTML = "<p>Main Dancer, Main Vocalist</p>";
    var changeC = anime({
        targets: "#layDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#lay #position").mouseenter(function(){
    $("#lay i").removeClass("infoClick");
    $("#lay h4").removeClass("infoClick");
    $("#lay #position h4").addClass("infoClick");
    $("#lay #position i").addClass('infoClick');
});

//height click
$("#lay #height").click(function(){
    $("#lay i").removeClass("infoClick");
    $("#lay h4").removeClass("infoClick");
    $("#lay #height h4").addClass("infoClick");
    $("#lay #height i").addClass('infoClick');
    document.getElementById("layDisplayBox").innerHTML = "<p>178cm (5'10) </p>";
    var changeC = anime({
        targets: "#layDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#lay #height").mouseenter(function(){
    $("#lay i").removeClass("infoClick");
    $("#lay h4").removeClass("infoClick");
    $("#lay #height h4").addClass("infoClick");
    $("#lay #height i").addClass('infoClick');
});

//power click
$("#lay #power").click(function(){
    $("#lay i").removeClass("infoClick");
    $("#lay h4").removeClass("infoClick");
    $("#lay #power h4").addClass("infoClick");
    $("#lay #power i").addClass('infoClick');
    document.getElementById("layDisplayBox").innerHTML = "<p>Healing</p>";
    var changeC = anime({
        targets: "#layDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#lay #power").mouseenter(function(){
    $("#lay i").removeClass("infoClick");
    $("#lay h4").removeClass("infoClick");
    $("#lay #power h4").addClass("infoClick");
    $("#lay #power i").addClass('infoClick');
});

//nationality click
$("#lay #nationality").click(function(){
    $("#lay i").removeClass("infoClick");
    $("#lay h4").removeClass("infoClick");
    $("#lay #nationality h4").addClass("infoClick");
    $("#lay #nationality i").addClass('infoClick');
    document.getElementById("layDisplayBox").innerHTML = "<p>Chinese</p>";
    var changeC = anime({
        targets: "#layDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#lay #nationality").mouseenter(function(){
    $("#lay i").removeClass("infoClick");
    $("#lay h4").removeClass("infoClick");
    $("#lay #nationality h4").addClass("infoClick");
    $("#lay #nationality i").addClass('infoClick');
});

//unit click
$("#lay #unit").click(function(){
    $("#lay i").removeClass("infoClick");
    $("#lay h4").removeClass("infoClick");
    $("#lay #unit h4").addClass("infoClick");
    $("#lay #unit i").addClass('infoClick');
    document.getElementById("layDisplayBox").innerHTML = "<p>EXO-M</p>";
    var changeC = anime({
        targets: "#layDisplayBox p",
        opacity:{
            value:1,
            duration: 2000,
            easing: 'easeInOutQuad'
        },
    })
});

$("#lay #unit").mouseenter(function(){
    $("#lay i").removeClass("infoClick");
    $("#lay h4").removeClass("infoClick");
    $("#lay #unit h4").addClass("infoClick");
    $("#lay #unit i").addClass('infoClick');
});

 /*
 THEME CHANGING
 */
 var images = document.querySelectorAll(".member img");

 /**********************
 MAMA
 ***********************/
 $("#mamaAlbum").click(function(){
     //sehun
     $("img").remove(".themeImg");
     $("#sehun #collapseImg").append("<img src='../media/sehun/sehunMama.jpg'>");
     $("#sehun #collapseImg img").addClass("themeImg");
     $("#sehun #collapseImg img").attr('alt', "sehunMAMATeaserImage");
     $("#sehun #image").append("<img src='../media/sehun/sehunMama.jpg'>");
     $("#sehun #image img").addClass("themeImg");
     $("#sehun #image img").attr('alt', "sehunMAMATeaserImage");
     //kai
     $("#kai #kcollapseImg").append("<img src='../media/kai/kaiMama.jpg'>");
     $("#kai #kcollapseImg img").addClass("themeImg");
     $("#kai #kcollapseImg img").attr('alt', "kaiMAMATeaserImage");
     $("#kai #kimage").append("<img src='../media/kai/kaiMama.jpg'>");
     $("#kai #kimage img").addClass("themeImg");
     $("#kai #kimage img").attr('alt', "kaiMAMATeaserImage");
     //chanyeol
     $("#chanyeol #ccollapseImg").append("<img src='../media/chanyeol/chanyeolMama.jpg'>");
     $("#chanyeol #ccollapseImg img").addClass("themeImg");
     $("#chanyeol #ccollapseImg img").attr('alt', "chanyeolMAMATeaserImage");
     $("#chanyeol #cimage").append("<img src='../media/chanyeol/chanyeolMama.jpg'>");
     $("#chanyeol #cimage img").addClass("themeImg");
     $("#chanyeol #cimage img").attr('alt', "chanyeolMAMATeaserImage");
     //do
     $("#do #collapseImg").append("<img src='../media/do/doMama.jpg'>");
     $("#do #collapseImg img").addClass("themeImg");
     $("#do #collapseImg img").attr('alt', "doMAMATeaserImage");
     $("#do #image").append("<img src='../media/do/doMama.jpg'>");
     $("#do #image img").addClass("themeImg");
     $("#do #image img").attr('alt', "doMAMATeaserImage");
     //suho
     $("#suho #collapseImg").append("<img src='../media/suho/suhoMama.jpg'>");
     $("#suho #collapseImg img").addClass("themeImg");
     $("#suho #collapseImg img").attr('alt', "suhoMAMATeaserImage");
     $("#suho #image").append("<img src='../media/suho/suhoMama.jpg'>");
     $("#suho #image img").addClass("themeImg");
     $("#suho #image img").attr('alt', "suhoMAMATeaserImage");
     //baekhyun
     $("#baekhyun #collapseImg").append("<img src='../media/baekhyun/baekhyunMama.jpg'>");
     $("#baekhyun #collapseImg img").addClass("themeImg");
     $("#baekhyun #collapseImg img").attr('alt', "baekhyunMAMATeaserImage");
     $("#baekhyun #image").append("<img src='../media/baekhyun/baekhyunMama.jpg'>");
     $("#baekhyun #image img").addClass("themeImg");
     $("#baekhyun #image img").attr('alt', "baekhyunMAMATeaserImage");
     //lay
     $("#lay #collapseImg").append("<img src='../media/lay/layMama.jpg'>");
     $("#lay #collapseImg img").addClass("themeImg");
     $("#lay #collapseImg img").attr('alt', "layMAMATeaserImage");
     $("#lay #image").append("<img src='../media/lay/layMama.jpg'>");
     $("#lay #image img").addClass("themeImg");
     $("#lay #image img").attr('alt', "layMAMATeaserImage");
     //chen
     $("#chen #collapseImg").append("<img src='../media/chen/chenMama.jpg'>");
     $("#chen #collapseImg img").addClass("themeImg");
     $("#chen #collapseImg img").attr('alt', "chenMAMATeaserImage");
     $("#chen #image").append("<img src='../media/chen/chenMama.jpg'>");
     $("#chen #image img").addClass("themeImg");
     $("#chen #image img").attr('alt', "chenMAMATeaserImage");
     //xiumin
     $("#xiumin #collapseImg").append("<img src='../media/xiumin/xiuminMama.jpg'>");
     $("#xiumin #collapseImg img").addClass("themeImg");
     $("#xiumin #collapseImg img").attr('alt', "xiuminMAMATeaserImage");
     $("#xiumin #image").append("<img src='../media/xiumin/xiuminMama.jpg'>");
     $("#xiumin #image img").addClass("themeImg");
     $("#xiumin #image img").attr('alt', "xiuminMAMATeaserImage");
     //luhan
     $("#luhan #collapseImg").append("<img src='../media/luhan/luhanMama.jpg'>");
     $("#luhan #collapseImg img").addClass("themeImg");
     $("#luhan #collapseImg img").attr('alt', "luhanMAMATeaserImage");
     $("#luhan #image").append("<img src='../media/luhan/luhanMama.jpg'>");
     $("#luhan #image img").addClass("themeImg");
     $("#luhan #image img").attr('alt', "luhanMAMATeaserImage");
     //kris
     $("#kris #collapseImg").append("<img src='../media/kris/krisMama.jpg'>");
     $("#kris #collapseImg img").addClass("themeImg");
     $("#kris #collapseImg img").attr('alt', "krisMAMATeaserImage");
     $("#kris #image").append("<img src='../media/kris/krisMama.jpg'>");
     $("#kris #image img").addClass("themeImg");
     $("#kris #image img").attr('alt', "krisMAMATeaserImage");
     //tao
     $("#tao #collapseImg").append("<img src='../media/tao/taoMama.jpg'>");
     $("#tao #collapseImg img").addClass("themeImg");
     $("#tao #collapseImg img").attr('alt', "taoMAMATeaserImage");
     $("#tao #kmage").append("<img src='../media/tao/taoMama.jpg'>");
     $("#tao #image img").addClass("themeImg");
     $("#tao #image img").attr('alt', "taoMAMATeaserImage");

     $("img").removeClass("currentTheme");
     $("#mamaAlbum img").addClass("currentTheme");
     document.getElementById("themeName").innerHTML = "Current Theme: MAMA";
 });
 /**********************
 XOXO
 ***********************/
 $("#xoxoAlbum").click(function(){
     $("img").remove(".themeImg");
     //sehun
     $("#sehun #collapseImg").append("<img src='../media/sehun/sehunXOXO.jpg'>");
     $("#sehun #collapseImg img").addClass("themeImg");
     $("#sehun #collapseImg img").attr('alt', "sehunXOXOTeaserImage");
     $("#sehun #image").append("<img src='../media/sehun/sehunXOXO.jpg'>");
     $("#sehun #image img").addClass("themeImg");
     $("#sehun #image img").attr('alt', "sehunXOXOTeaserImage");
     //kai
     $("#kai #kcollapseImg").append("<img src='../media/kai/kaiXOXO.jpg'>");
     $("#kai #kcollapseImg img").addClass("themeImg");
     $("#kai #kcollapseImg img").attr('alt', "kaiXOXOTeaserImage");
     $("#kai #kimage").append("<img src='../media/kai/kaiXOXO.jpg'>");
     $("#kai #kimage img").addClass("themeImg");
     $("#kai #kimage img").attr('alt', "kaiXOXOTeaserImage");
     //chanyeol
     $("#chanyeol #ccollapseImg").append("<img src='../media/chanyeol/chanyeolXOXO.jpg'>");
     $("#chanyeol #ccollapseImg img").addClass("themeImg");
     $("#chanyeol #ccollapseImg img").attr('alt', "chanyeolXOXOTeaserImage");
     $("#chanyeol #cimage").append("<img src='../media/chanyeol/chanyeolXOXO.jpg'>");
     $("#chanyeol #cimage img").addClass("themeImg");
     $("#chanyeol #cimage img").attr('alt', "chanyeolXOXOTeaserImage");
    //do
    $("#do #collapseImg").append("<img src='../media/do/doXOXO.jpg'>");
    $("#do #collapseImg img").addClass("themeImg");
    $("#do #collapseImg img").attr('alt', "doXOXOTeaserImage");
    $("#do #image").append("<img src='../media/do/doXOXO.jpg'>");
    $("#do #image img").addClass("themeImg");
    $("#do #image img").attr('alt', "doXOXOTeaserImage");
     //suho
     $("#suho #collapseImg").append("<img src='../media/suho/suhoXOXO.jpg'>");
     $("#suho #collapseImg img").addClass("themeImg");
     $("#suho #collapseImg img").attr('alt', "suhoXOXOTeaserImage");
     $("#suho #image").append("<img src='../media/suho/suhoXOXO.jpg'>");
     $("#suho #image img").addClass("themeImg");
     $("#suho #image img").attr('alt', "suhoXOXOTeaserImage");
     //baekhyun
     $("#baekhyun #collapseImg").append("<img src='../media/baekhyun/baekhyunXOXO.jpg'>");
     $("#baekhyun #collapseImg img").addClass("themeImg");
     $("#baekhyun #collapseImg img").attr('alt', "baekhyunXOXOTeaserImage");
     $("#baekhyun #image").append("<img src='../media/baekhyun/baekhyunXOXO.jpg'>");
     $("#baekhyun #image img").addClass("themeImg");
     $("#baekhyun #image img").attr('alt', "baekhyunXOXOTeaserImage");
     //lay
     $("#lay #collapseImg").append("<img src='../media/lay/layXOXO.jpg'>");
     $("#lay #collapseImg img").addClass("themeImg");
     $("#lay #collapseImg img").attr('alt', "layXOXOTeaserImage");
     $("#lay #image").append("<img src='../media/lay/layXOXO.jpg'>");
     $("#lay #image img").addClass("themeImg");
     $("#lay #image img").attr('alt', "layXOXOTeaserImage");
     //chen
     $("#chen #collapseImg").append("<img src='../media/chen/chenXOXO.jpg'>");
     $("#chen #collapseImg img").addClass("themeImg");
     $("#chen #collapseImg img").attr('alt', "chenXOXOTeaserImage");
     $("#chen #image").append("<img src='../media/chen/chenXOXO.jpg'>");
     $("#chen #image img").addClass("themeImg");
     $("#chen #image img").attr('alt', "chenXOXOTeaserImage");
     //xiumin
     $("#xiumin #collapseImg").append("<img src='../media/xiumin/xiuminXOXO.jpg'>");
     $("#xiumin #collapseImg img").addClass("themeImg");
     $("#xiumin #collapseImg img").attr('alt', "xiuminXOXOTeaserImage");
     $("#xiumin #image").append("<img src='../media/xiumin/xiuminXOXO.jpg'>");
     $("#xiumin #image img").addClass("themeImg");
     $("#xiumin #image img").attr('alt', "xiuminXOXOTeaserImage");
     //luhan
     $("#luhan #collapseImg").append("<img src='../media/luhan/luhanXOXO.jpg'>");
     $("#luhan #collapseImg img").addClass("themeImg");
     $("#luhan #collapseImg img").attr('alt', "luhanXOXOTeaserImage");
     $("#luhan #image").append("<img src='../media/luhan/luhanXOXO.jpg'>");
     $("#luhan #image img").addClass("themeImg");
     $("#luhan #image img").attr('alt', "luhanXOXOTeaserImage");
     //kris
     $("#kris #collapseImg").append("<img src='../media/kris/krisXOXO.jpg'>");
     $("#kris #collapseImg img").addClass("themeImg");
     $("#kris #collapseImg img").attr('alt', "krisXOXOTeaserImage");
     $("#kris #image").append("<img src='../media/kris/krisXOXO.jpg'>");
     $("#kris #image img").addClass("themeImg");
     $("#kris #image img").attr('alt', "krisXOXOTeaserImage");
     //tao
     $("#tao #collapseImg").append("<img src='../media/tao/taoXOXO.jpg'>");
     $("#tao #collapseImg img").addClass("themeImg");
     $("#tao #collapseImg img").attr('alt', "taoXOXOTeaserImage");
     $("#tao #image").append("<img src='../media/tao/taoXOXO.jpg'>");
     $("#tao #image img").addClass("themeImg");
     $("#tao #image img").attr('alt', "taoXOXOTeaserImage");
    
     $("img").removeClass("currentTheme");
     $("#xoxoAlbum img").addClass("currentTheme");
     document.getElementById("themeName").innerHTML = "Current Theme: XOXO";
 });
 /**********************
 GROWL
 ***********************/
 $("#growlAlbum").click(function(){
     $("img").remove(".themeImg");
     //sehun
     $("#sehun #collapseImg").append("<img src='../media/sehun/sehunG.jpg'>");
     $("#sehun #collapseImg img").addClass("themeImg");
     $("#sehun #collapseImg img").attr('alt', "sehunGrowlTeaserImage");
     $("#sehun #image").append("<img src='../media/sehun/sehunG.jpg'>");
     $("#sehun #image img").addClass("themeImg");
     $("#sehun #image img").attr('alt', "sehunGrwolTeaserImage");
     //kai
     $("#kai #kcollapseImg").append("<img src='../media/kai/kaiG.jpg'>");
     $("#kai #kcollapseImg img").addClass("themeImg");
     $("#kai #kcollapseImg img").attr('alt', "kaiGrowlTeaserImage");
     $("#kai #kimage").append("<img src='../media/kai/kaiG.jpg'>");
     $("#kai #kimage img").addClass("themeImg");
     $("#kai #kimage img").attr('alt', "kaiGrwolTeaserImage");
     //chanyeol
     $("#chanyeol #ccollapseImg").append("<img src='../media/chanyeol/chanyeolG.jpg'>");
     $("#chanyeol #ccollapseImg img").addClass("themeImg");
     $("#chanyeol #ccollapseImg img").attr('alt', "chanyeolGrowlTeaserImage");
     $("#chanyeol #cimage").append("<img src='../media/chanyeol/chanyeolG.jpg'>");
     $("#chanyeol #cimage img").addClass("themeImg");
     $("#chanyeol #cimage img").attr('alt', "chanyeolGrwolTeaserImage");
  //do
    $("#do #collapseImg").append("<img src='../media/do/doG.jpg'>");
     $("#do #collapseImg img").addClass("themeImg");
     $("#do #collapseImg img").attr('alt', "doGrowlTeaserImage");
     $("#do #image").append("<img src='../media/do/doG.jpg'>");
     $("#do #image img").addClass("themeImg");
     $("#do #image img").attr('alt', "doGrwolTeaserImage");
     //suho
     $("#suho #collapseImg").append("<img src='../media/suho/suhoG.jpg'>");
     $("#suho #collapseImg img").addClass("themeImg");
     $("#suho #collapseImg img").attr('alt', "suhoGrowlTeaserImage");
     $("#suho #image").append("<img src='../media/suho/suhoG.jpg'>");
     $("#suho #image img").addClass("themeImg");
     $("#suho #image img").attr('alt', "suhoGrwolTeaserImage");
     //baekhyun
     $("#baekhyun #collapseImg").append("<img src='../media/baekhyun/baekhyunG.jpg'>");
     $("#baekhyun #collapseImg img").addClass("themeImg");
     $("#baekhyun #collapseImg img").attr('alt', "baekhyunGrowlTeaserImage");
     $("#baekhyun #image").append("<img src='../media/baekhyun/baekhyunG.jpg'>");
     $("#baekhyun #image img").addClass("themeImg");
     $("#baekhyun #image img").attr('alt', "baekhyunGrwolTeaserImage");
     //lay  
     $("#lay #collapseImg").append("<img src='../media/lay/layG.jpg'>");
     $("#lay #collapseImg img").addClass("themeImg");
     $("#lay #collapseImg img").attr('alt', "layGrowlTeaserImage");
     $("#lay #image").append("<img src='../media/lay/layG.jpg'>");
     $("#lay #image img").addClass("themeImg");
     $("#lay #image img").attr('alt', "layGrwolTeaserImage");
     //chen
     $("#chen #collapseImg").append("<img src='../media/chen/chenG.jpg'>");
     $("#chen #collapseImg img").addClass("themeImg");
     $("#chen #collapseImg img").attr('alt', "chenGrowlTeaserImage");
     $("#chen #image").append("<img src='../media/chen/chenG.jpg'>");
     $("#chen #image img").addClass("themeImg");
     $("#chen #image img").attr('alt', "chenGrwolTeaserImage");
     //xiumin
     $("#xiumin #collapseImg").append("<img src='../media/xiumin/xiuminG.jpg'>");
     $("#xiumin #collapseImg img").addClass("themeImg");
     $("#xiumin #collapseImg img").attr('alt', "xiuminGrowlTeaserImage");
     $("#xiumin #image").append("<img src='../media/xiumin/xiuminG.jpg'>");
     $("#xiumin #image img").addClass("themeImg");
     $("#xiumin #image img").attr('alt', "xiuminGrwolTeaserImage");
     //luhan
     $("#luhan #collapseImg").append("<img src='../media/luhan/luhanG.jpg'>");
     $("#luhan #collapseImg img").addClass("themeImg");
     $("#luhan #collapseImg img").attr('alt', "luhanGrowlTeaserImage");
     $("#luhan #image").append("<img src='../media/luhan/luhanG.jpg'>");
     $("#luhan #image img").addClass("themeImg");
     $("#luhan #image img").attr('alt', "luhanGrwolTeaserImage");
     //kris
     $("#kris #collapseImg").append("<img src='../media/kris/krisG.jpg'>");
     $("#kris #collapseImg img").addClass("themeImg");
     $("#kris #collapseImg img").attr('alt', "krisGrowlTeaserImage");
     $("#kris #image").append("<img src='../media/kris/krisG.jpg'>");
     $("#kris #image img").addClass("themeImg");
     $("#kris #image img").attr('alt', "krisGrwolTeaserImage");
     //tao
     $("#tao #collapseImg").append("<img src='../media/tao/taoG.jpg'>");
     $("#tao #collapseImg img").addClass("themeImg");
     $("#tao #collapseImg img").attr('alt', "taoGrowlTeaserImage");
     $("#tao #image").append("<img src='../media/tao/taoG.jpg'>");
     $("#tao #image img").addClass("themeImg");
     $("#tao #image img").attr('alt', "taoGrwolTeaserImage");

     $("img").removeClass("currentTheme");
     $("growlAlbum img").addClass("currentTheme");
     document.getElementById("themeName").innerHTML = "Current Theme: Growl";
 });
 /**********************
 MIRACLES IN DECEMBER
 ***********************/
 $("#midAlbum").click(function(){
     $("img").remove(".themeImg");
     //sehun
     $("#sehun #collapseImg").append("<img src='../media/sehun/sehunMID.jpg'>");
     $("#sehun #collapseImg img").addClass("themeImg");
     $("#sehun #collapseImg img").attr('alt', "sehunMiraclesInDecemberTeaserImage");
     $("#sehun #image").append("<img src='../media/sehun/sehunMID.jpg'>");
     $("#sehun #image img").addClass("themeImg");
     $("#sehun #image img").attr('alt', "sehunMiraclesInDecemberTeaserImage");
     //kai
     $("#kai #kcollapseImg").append("<img src='../media/kai/kaiMID.jpg'>");
     $("#kai #kcollapseImg img").addClass("themeImg");
     $("#kai #kcollapseImg img").attr('alt', "kaiMiraclesInDecemberTeaserImage");
     $("#kai #kimage").append("<img src='../media/kai/kaiMID.jpg'>");
     $("#kai #kimage img").addClass("themeImg");
     $("#kai #kimage img").attr('alt', "kaiMiraclesInDecemberTeaserImage");
     //chanyeol
     $("#chanyeol #ccollapseImg").append("<img src='../media/chanyeol/chanyeolMID.jpg'>");
     $("#chanyeol #ccollapseImg img").addClass("themeImg");
     $("#chanyeol #ccollapseImg img").attr('alt', "chanyeolMiraclesInDecemberTeaserImage");
     $("#chanyeol #cimage").append("<img src='../media/chanyeol/chanyeolMID.jpg'>");
     $("#chanyeol #cimage img").addClass("themeImg");
     $("#chanyeol #cimage img").attr('alt', "chanyeolMiraclesInDecemberTeaserImage");
  //do
  $("#do #collapseImg").append("<img src='../media/do/doMID.jpg'>");
  $("#do #collapseImg img").addClass("themeImg");
  $("#do #collapseImg img").attr('alt', "doMiraclesInDecemberTeaserImage");
  $("#do #image").append("<img src='../media/do/doMID.jpg'>");
  $("#do #image img").addClass("themeImg");
  $("#do #image img").attr('alt', "doMiraclesInDecemberTeaserImage");   
     //suho
     $("#suho #collapseImg").append("<img src='../media/suho/suhoMID.jpg'>");
     $("#suho #collapseImg img").addClass("themeImg");
     $("#suho #collapseImg img").attr('alt', "suhoMiraclesInDecemberTeaserImage");
     $("#suho #image").append("<img src='../media/suho/suhoMID.jpg'>");
     $("#suho #image img").addClass("themeImg");
     $("#suho #image img").attr('alt', "suhoMiraclesInDecemberTeaserImage");
     //baekhyun
     $("#baekhyun #collapseImg").append("<img src='../media/baekhyun/baekhyunMID.jpg'>");
     $("#baekhyun #collapseImg img").addClass("themeImg");
     $("#baekhyun #collapseImg img").attr('alt', "baekhyunMiraclesInDecemberTeaserImage");
     $("#baekhyun #image").append("<img src='../media/baekhyun/baekhyunMID.jpg'>");
     $("#baekhyun #image img").addClass("themeImg");
     $("#baekhyun #image img").attr('alt', "baekhyunMiraclesInDecemberTeaserImage");
     //lay
     $("#lay #collapseImg").append("<img src='../media/lay/layMID.jpg'>");
     $("#lay #collapseImg img").addClass("themeImg");
     $("#lay #collapseImg img").attr('alt', "layMiraclesInDecemberTeaserImage");
     $("#lay #image").append("<img src='../media/lay/layMID.jpg'>");
     $("#lay #image img").addClass("themeImg");
     $("#lay #image img").attr('alt', "layMiraclesInDecemberTeaserImage");
     //chen
     $("#chen #collapseImg").append("<img src='../media/chen/chenMID.jpg'>");
     $("#chen #collapseImg img").addClass("themeImg");
     $("#chen #collapseImg img").attr('alt', "chenMiraclesInDecemberTeaserImage");
     $("#chen #image").append("<img src='../media/chen/chenMID.jpg'>");
     $("#chen #image img").addClass("themeImg");
     $("#chen #image img").attr('alt', "chenMiraclesInDecemberTeaserImage");
     //xiumin
     $("#xiumin #collapseImg").append("<img src='../media/xiumin/xiuminMID.jpg'>");
     $("#xiumin #collapseImg img").addClass("themeImg");
     $("#xiumin #collapseImg img").attr('alt', "xiuminMiraclesInDecemberTeaserImage");
     $("#xiumin #image").append("<img src='../media/xiumin/xiuminMID.jpg'>");
     $("#xiumin #image img").addClass("themeImg");
     $("#xiumin #image img").attr('alt', "xiuminMiraclesInDecemberTeaserImage");
     //luhan
     $("#luhan #collapseImg").append("<img src='../media/luhan/luhanMID.jpg'>");
     $("#luhan #collapseImg img").addClass("themeImg");
     $("#luhan #collapseImg img").attr('alt', "luhanMiraclesInDecemberTeaserImage");
     $("#luhan #image").append("<img src='../media/luhan/luhanMID.jpg'>");
     $("#luhan #image img").addClass("themeImg");
     $("#luhan #image img").attr('alt', "luhanMiraclesInDecemberTeaserImage");
     //kris
     $("#kris #collapseImg").append("<img src='../media/kris/krisMID.jpg'>");
     $("#kris #collapseImg img").addClass("themeImg");
     $("#kris #collapseImg img").attr('alt', "krisMiraclesInDecemberTeaserImage");
     $("#kris #image").append("<img src='../media/kris/krisMID.jpg'>");
     $("#kris #image img").addClass("themeImg");
     $("#kris #image img").attr('alt', "krisMiraclesInDecemberTeaserImage");
     //tao
     $("#tao #collapseImg").append("<img src='../media/tao/taoMID.jpg'>");
     $("#tao #collapseImg img").addClass("themeImg");
     $("#tao #collapseImg img").attr('alt', "taoMiraclesInDecemberTeaserImage");
     $("#tao #image").append("<img src='../media/tao/taoMID.jpg'>");
     $("#tao #image img").addClass("themeImg");
     $("#tao #image img").attr('alt', "taoMiraclesInDecemberTeaserImage");

     $("img").removeClass("currentTheme");
     $("#midAlbum img").addClass("currentTheme");
     document.getElementById("themeName").innerHTML = "Current Theme: Miracles in December";
 });
 /**********************
 OVERDOSE
 ***********************/
 $("#overdoseAlbum").click(function(){
     $("img").remove(".themeImg");
     //sehun
     $("#sehun #collapseImg").append("<img src='../media/sehun/sehunO.jpg'>");
     $("#sehun #collapseImg img").addClass("themeImg");
     $("#sehun #collapseImg img").attr('alt', "sehunOverdoseTeaserImage");
     $("#sehun #image").append("<img src='../media/sehun/sehunO.jpg'>");
     $("#sehun #image img").addClass("themeImg");
     $("#sehun #image img").attr('alt', "sehunOverdoseTeaserImage");
     //kai
     $("#kai #kcollapseImg").append("<img src='../media/kai/kaiO.jpg'>");
     $("#kai #kcollapseImg img").addClass("themeImg");
     $("#kai #kcollapseImg img").attr('alt', "kaiOverdoseTeaserImage");
     $("#kai #kimage").append("<img src='../media/kai/kaiO.jpg'>");
     $("#kai #kimage img").addClass("themeImg");
     $("#kai #kimage img").attr('alt', "kaiOverdoseTeaserImage");
     //chanyeol
     $("#chanyeol #ccollapseImg").append("<img src='../media/chanyeol/chanyeolO.jpg'>");
     $("#chanyeol #ccollapseImg img").addClass("themeImg");
     $("#chanyeol #ccollapseImg img").attr('alt', "chanyeolOverdoseTeaserImage");
     $("#chanyeol #cimage").append("<img src='../media/chanyeol/chanyeolO.jpg'>");
     $("#chanyeol #cimage img").addClass("themeImg");
     $("#chanyeol #cimage img").attr('alt', "chanyeolOverdoseTeaserImage");
  //do
  $("#do #collapseImg").append("<img src='../media/do/doO.jpg'>");
  $("#do #collapseImg img").addClass("themeImg");
  $("#do #collapseImg img").attr('alt', "doOverdoseTeaserImage");
  $("#do #image").append("<img src='../media/do/doO.jpg'>");
  $("#do #image img").addClass("themeImg");
  $("#do #image img").attr('alt', "doOverdoseTeaserImage");
     //suho
     $("#suho #collapseImg").append("<img src='../media/suho/suhoO.jpg'>");
     $("#suho #collapseImg img").addClass("themeImg");
     $("#suho #collapseImg img").attr('alt', "suhoOverdoseTeaserImage");
     $("#suho #image").append("<img src='../media/suho/suhoO.jpg'>");
     $("#suho #image img").addClass("themeImg");
     $("#suho #image img").attr('alt', "suhoOverdoseTeaserImage");
     //baekhyun
     $("#baekhyun #collapseImg").append("<img src='../media/baekhyun/baekhyunO.jpg'>");
     $("#baekhyun #collapseImg img").addClass("themeImg");
     $("#baekhyun #collapseImg img").attr('alt', "baekhyunOverdoseTeaserImage");
     $("#baekhyun #image").append("<img src='../media/baekhyun/baekhyunO.jpg'>");
     $("#baekhyun #image img").addClass("themeImg");
     $("#baekhyun #image img").attr('alt', "baekhyunOverdoseTeaserImage");
     //lay
     $("#lay #collapseImg").append("<img src='../media/lay/layO.jpg'>");
     $("#lay #collapseImg img").addClass("themeImg");
     $("#lay #collapseImg img").attr('alt', "layOverdoseTeaserImage");
     $("#lay #image").append("<img src='../media/lay/layO.jpg'>");
     $("#lay #image img").addClass("themeImg");
     $("#lay #image img").attr('alt', "layOverdoseTeaserImage");
     //chen
     $("#chen #collapseImg").append("<img src='../media/chen/chenO.jpg'>");
     $("#chen #collapseImg img").addClass("themeImg");
     $("#chen #collapseImg img").attr('alt', "chenOverdoseTeaserImage");
     $("#chen #image").append("<img src='../media/chen/chenO.jpg'>");
     $("#chen #image img").addClass("themeImg");
     $("#chen #image img").attr('alt', "chenOverdoseTeaserImage");
     //xiumin
     $("#xiumin #collapseImg").append("<img src='../media/xiumin/xiuminO.jpg'>");
     $("#xiumin #collapseImg img").addClass("themeImg");
     $("#xiumin #collapseImg img").attr('alt', "xiuminOverdoseTeaserImage");
     $("#xiumin #image").append("<img src='../media/xiumin/xiuminO.jpg'>");
     $("#xiumin #image img").addClass("themeImg");
     $("#xiumin #image img").attr('alt', "xiuminOverdoseTeaserImage");
     //luhan
     $("#luhan #collapseImg").append("<img src='../media/luhan/luhanO.jpg'>");
     $("#luhan #collapseImg img").addClass("themeImg");
     $("#luhan #collapseImg img").attr('alt', "luhanOverdoseTeaserImage");
     $("#luhan #image").append("<img src='../media/luhan/luhanO.jpg'>");
     $("#luhan #image img").addClass("themeImg");
     $("#luhan #image img").attr('alt', "luhanOverdoseTeaserImage");
     //kris
     $("#kris #collapseImg").append("<img src='../media/kris/krisO.jpg'>");
     $("#kris #collapseImg img").addClass("themeImg");
     $("#kris #collapseImg img").attr('alt', "krisOverdoseTeaserImage");
     $("#kris #image").append("<img src='../media/kris/krisO.jpg'>");
     $("#kris #image img").addClass("themeImg");
     $("#kris #image img").attr('alt', "krisOverdoseTeaserImage");
     //tao
     $("#tao #collapseImg").append("<img src='../media/tao/taoO.jpg'>");
     $("#tao #collapseImg img").addClass("themeImg");
     $("#tao #collapseImg img").attr('alt', "taoOverdoseTeaserImage");
     $("#tao #image").append("<img src='../media/tao/taoO.jpg'>");
     $("#tao #image img").addClass("themeImg");
     $("#tao #image img").attr('alt', "taoOverdoseTeaserImage");

     $("img").removeClass("currentTheme");
     $("#overdoseAlbum img").addClass("currentTheme");
     document.getElementById("themeName").innerHTML = "Current Theme: Overdose";
 });
 /**********************
 EXODUS
 ***********************/
 $("#exodusAlbum").click(function(){
     $("img").remove(".themeImg");
     //sehun
     $("#sehun #collapseImg").append("<img src='../media/sehun/sehunE.jpg'>");
     $("#sehun #collapseImg img").addClass("themeImg");
     $("#sehun #collapseImg img").attr('alt', "sehunExodusTeaserImage");
     $("#sehun #image").append("<img src='../media/sehun/sehunE.jpg'>");
     $("#sehun #image img").addClass("themeImg");
     $("#sehun #image img").attr('alt', "sehunExodusTeaserImage");
     //kai
     $("#kai #kcollapseImg").append("<img src='../media/kai/kaiE.jpg'>");
     $("#kai #kcollapseImg img").addClass("themeImg");
     $("#kai #kcollapseImg img").attr('alt', "kaiExodusTeaserImage");
     $("#kai #kimage").append("<img src='../media/kai/kaiE.jpg'>");
     $("#kai #kimage img").addClass("themeImg");
     $("#kai #kimage img").attr('alt', "kaiExodusTeaserImage");
     //chanyeol
     $("#chanyeol #ccollapseImg").append("<img src='../media/chanyeol/chanyeolE.jpg'>");
     $("#chanyeol #ccollapseImg img").addClass("themeImg");
     $("#chanyeol #ccollapseImg img").attr('alt', "chanyeolExodusTeaserImage");
     $("#chanyeol #cimage").append("<img src='../media/chanyeol/chanyeolE.jpg'>");
     $("#chanyeol #cimage img").addClass("themeImg");
     $("#chanyeol #cimage img").attr('alt', "chanyeolExodusTeaserImage");
  //do
  $("#do #collapseImg").append("<img src='../media/do/doE.jpg'>");
  $("#do #collapseImg img").addClass("themeImg");
  $("#do #collapseImg img").attr('alt', "doExodusTeaserImage");
  $("#do #image").append("<img src='../media/do/doE.jpg'>");
  $("#do #image img").addClass("themeImg");
  $("#do #image img").attr('alt', "doExodusTeaserImage");
     //suho
     $("#suho #collapseImg").append("<img src='../media/suho/suhoE.jpg'>");
     $("#suho #collapseImg img").addClass("themeImg");
     $("#suho #collapseImg img").attr('alt', "suhoExodusTeaserImage");
     $("#suho #image").append("<img src='../media/suho/suhoE.jpg'>");
     $("#suho #image img").addClass("themeImg");
     $("#suho #image img").attr('alt', "suhoExodusTeaserImage");
     //baekhyun
     $("#baekhyun #collapseImg").append("<img src='../media/baekhyun/baekhyunE.jpg'>");
     $("#baekhyun #collapseImg img").addClass("themeImg");
     $("#baekhyun #collapseImg img").attr('alt', "baekhyunExodusTeaserImage");
     $("#baekhyun #image").append("<img src='../media/baekhyun/baekhyunE.jpg'>");
     $("#baekhyun #image img").addClass("themeImg");
     $("#baekhyun #image img").attr('alt', "baekhyunExodusTeaserImage");
     //lay
     $("#lay #collapseImg").append("<img src='../media/lay/layE.jpg'>");
     $("#lay #collapseImg img").addClass("themeImg");
     $("#lay #collapseImg img").attr('alt', "layExodusTeaserImage");
     $("#lay #image").append("<img src='../media/lay/layE.jpg'>");
     $("#lay #image img").addClass("themeImg");
     $("#lay #image img").attr('alt', "layExodusTeaserImage");
     //chen
     $("#chen #collapseImg").append("<img src='../media/chen/chenE.jpg'>");
     $("#chen #collapseImg img").addClass("themeImg");
     $("#chen #collapseImg img").attr('alt', "chenExodusTeaserImage");
     $("#chen #image").append("<img src='../media/chen/chenE.jpg'>");
     $("#chen #image img").addClass("themeImg");
     $("#chen #image img").attr('alt', "chenExodusTeaserImage");
     //xiumin
     $("#xiumin #collapseImg").append("<img src='../media/xiumin/xiuminE.jpg'>");
     $("#xiumin #collapseImg img").addClass("themeImg");
     $("#xiumin #collapseImg img").attr('alt', "xiuminExodusTeaserImage");
     $("#xiumin #image").append("<img src='../media/xiumin/xiuminE.jpg'>");
     $("#xiumin #image img").addClass("themeImg");
     $("#xiumin #image img").attr('alt', "xiuminExodusTeaserImage");
     //luhan
     $("#luhan #collapseImg").append("<img src='../media/left.png'>");
     $("#luhan #collapseImg img").addClass("themeImg");
     $("#luhan #collapseImg img").attr('alt', "leftImage");
     $("#luhan #image").append("<img src='../media/left.png'>");
     $("#luhan #image img").addClass("themeImg");
     $("#luhan #image img").attr('alt', "leftImage");
     //kris
     $("#kris #collapseImg").append("<img src='../media/left.png'>");
     $("#kris #collapseImg img").addClass("themeImg");
     $("#kris #collapseImg img").attr('alt', "leftImage");
     $("#kris #image").append("<img src='../media/left.png'>");
     $("#kris #image img").addClass("themeImg");
     $("#kris #image img").attr('alt', "leftImage");
     //tao
     $("#tao #collapseImg").append("<img src='../media/tao/taoE.jpg'>");
     $("#tao #collapseImg img").addClass("themeImg");
     $("#tao #collapseImg img").attr('alt', "taoExodusTeaserImage");
     $("#tao #image").append("<img src='../media/tao/taoE.jpg'>");
     $("#tao #image img").addClass("themeImg");
     $("#tao #image img").attr('alt', "taoExodusTeaserImage");

     $("img").removeClass("currentTheme");
     $("#exodusAlbum img").addClass("currentTheme");
     document.getElementById("themeName").innerHTML = "Current Theme: EXODUS";
 });
 /**********************
 LOVE ME RIGHT
 ***********************/
 $("#lmrAlbum").click(function(){
     $("img").remove(".themeImg");
     //sehun
     $("#sehun #collapseImg").append("<img src='../media/sehun/sehunLMR.jpg'>");
     $("#sehun #collapseImg img").addClass("themeImg");
     $("#sehun #collapseImg img").attr('alt', "sehunLoveMeRightTeaserImage");
     $("#sehun #image").append("<img src='../media/sehun/sehunLMR.jpg'>");
     $("#sehun #image img").addClass("themeImg");
     $("#sehun #image img").attr('alt', "sehunLoveMeRightTeaserImage");
     //kai
     $("#kai #kcollapseImg").append("<img src='../media/kai/kaiLMR.jpg'>");
     $("#kai #kcollapseImg img").addClass("themeImg");
     $("#kai #kcollapseImg img").attr('alt', "kaiLoveMeRightTeaserImage");
     $("#kai #kimage").append("<img src='../media/kai/kaiLMR.jpg'>");
     $("#kai #kimage img").addClass("themeImg");
     $("#kai #kimage img").attr('alt', "kaiLoveMeRightTeaserImage");
     //chanyeol
     $("#chanyeol #ccollapseImg").append("<img src='../media/chanyeol/chanyeolLMR.jpg'>");
     $("#chanyeol #ccollapseImg img").addClass("themeImg");
     $("#chanyeol #ccollapseImg img").attr('alt', "chanyeolLoveMeRightTeaserImage");
     $("#chanyeol #cimage").append("<img src='../media/chanyeol/chanyeolLMR.jpg'>");
     $("#chanyeol #cimage img").addClass("themeImg");
     $("#chanyeol #cimage img").attr('alt', "chanyeolLoveMeRightTeaserImage");
  //do  
  $("#do #collapseImg").append("<img src='../media/do/doLMR.jpg'>");
  $("#do #collapseImg img").addClass("themeImg");
  $("#do #collapseImg img").attr('alt', "doLoveMeRightTeaserImage");
  $("#do #image").append("<img src='../media/do/doLMR.jpg'>");
  $("#do #image img").addClass("themeImg");
  $("#do #image img").attr('alt', "doLoveMeRightTeaserImage");
     //suho
     $("#suho #collapseImg").append("<img src='../media/suho/suhoLMR.jpg'>");
     $("#suho #collapseImg img").addClass("themeImg");
     $("#suho #collapseImg img").attr('alt', "suhoLoveMeRightTeaserImage");
     $("#suho #image").append("<img src='../media/suho/suhoLMR.jpg'>");
     $("#suho #image img").addClass("themeImg");
     $("#suho #image img").attr('alt', "suhoLoveMeRightTeaserImage");
     //baekhyun
     $("#baekhyun #collapseImg").append("<img src='../media/baekhyun/baekhyunLMR.jpg'>");
     $("#baekhyun #collapseImg img").addClass("themeImg");
     $("#baekhyun #collapseImg img").attr('alt', "baekhyunLoveMeRightTeaserImage");
     $("#baekhyun #image").append("<img src='../media/baekhyun/baekhyunLMR.jpg'>");
     $("#baekhyun #image img").addClass("themeImg");
     $("#baekhyun #image img").attr('alt', "baekhyunLoveMeRightTeaserImage");
     //lay
     $("#lay #collapseImg").append("<img src='../media/lay/layLMR.jpg'>");
     $("#lay #collapseImg img").addClass("themeImg");
     $("#lay #collapseImg img").attr('alt', "layLoveMeRightTeaserImage");
     $("#lay #image").append("<img src='../media/lay/layLMR.jpg'>");
     $("#lay #image img").addClass("themeImg");
     $("#lay #image img").attr('alt', "layLoveMeRightTeaserImage");
     //chen
     $("#chen #collapseImg").append("<img src='../media/chen/chenLMR.jpg'>");
     $("#chen #collapseImg img").addClass("themeImg");
     $("#chen #collapseImg img").attr('alt', "chenLoveMeRightTeaserImage");
     $("#chen #image").append("<img src='../media/chen/chenLMR.jpg'>");
     $("#chen #image img").addClass("themeImg");
     $("#chen #image img").attr('alt', "chenLoveMeRightTeaserImage");
     //xiumin
     $("#xiumin #collapseImg").append("<img src='../media/xiumin/xiuminLMR.jpg'>");
     $("#xiumin #collapseImg img").addClass("themeImg");
     $("#xiumin #collapseImg img").attr('alt', "xiuminLoveMeRightTeaserImage");
     $("#xiumin #image").append("<img src='../media/xiumin/xiuminLMR.jpg'>");
     $("#xiumin #image img").addClass("themeImg");
     $("#xiumin #image img").attr('alt', "xiuminLoveMeRightTeaserImage");
     //luhan
     $("#luhan #collapseImg").append("<img src='../media/left.png'>");
     $("#luhan #collapseImg img").addClass("themeImg");
     $("#luhan #collapseImg img").attr('alt', "leftImage");
     $("#luhan #image").append("<img src='../media/left.png'>");
     $("#luhan #image img").addClass("themeImg");
     $("#luhan #image img").attr('alt', "leftImage");
     //kris
     $("#kris #collapseImg").append("<img src='../media/left.png'>");
     $("#kris #collapseImg img").addClass("themeImg");
     $("#kris #collapseImg img").attr('alt', "leftImage");
     $("#kris #image").append("<img src='../media/left.png'>");
     $("#kris #image img").addClass("themeImg");
     $("#kris #image img").attr('alt', "leftImage");
     //tao
     $("#tao #collapseImg").append("<img src='../media/left.png'>");
     $("#tao #collapseImg img").addClass("themeImg");
     $("#tao #collapseImg img").attr('alt', "leftImage");
     $("#tao #image").append("<img src='../media/left.png'>");
     $("#tao #image img").addClass("themeImg");
     $("#tao #image img").attr('alt', "leftImage");

     $("img").removeClass("currentTheme");
     $("#lmrAlbum img").addClass("currentTheme");
     document.getElementById("themeName").innerHTML = "Current Theme: Love Me Right";
 });
 /**********************
 LOVE ME RIGHT ROMANTIC UNIVERSE
 ***********************/
 $("#lmrruAlbum").click(function(){
     $("img").remove(".themeImg");
     //sehun
     $("#sehun #collapseImg").append("<img src='../media/sehun/sehunLMRRU.jpg'>");
     $("#sehun #collapseImg img").addClass("themeImg");
     $("#sehun #collapseImg img").attr('alt', "sehunLoveMeRightRomanticUniverseTeaserImage");
     $("#sehun #image").append("<img src='../media/sehun/sehunLMRRU.jpg'>");
     $("#sehun #image img").addClass("themeImg");
     $("#sehun #image img").attr('alt', "sehunLoveMeRightRomanticUniverseTeaserImage");
     //kai
     $("#kai #kcollapseImg").append("<img src='../media/kai/kaiLMRRU.jpg'>");
     $("#kai #kcollapseImg img").addClass("themeImg");
     $("#kai #kcollapseImg img").attr('alt', "kaiLoveMeRightRomanticUniverseTeaserImage");
     $("#kai #kimage").append("<img src='../media/kai/kaiLMRRU.jpg'>");
     $("#kai #kimage img").addClass("themeImg");
     $("#kai #kimage img").attr('alt', "kaiLoveMeRightRomanticUniverseTeaserImage");
     //chanyeol
     $("#chanyeol #ccollapseImg").append("<img src='../media/chanyeol/chanyeolLMRRU.jpg'>");
     $("#chanyeol #ccollapseImg img").addClass("themeImg");
     $("#chanyeol #ccollapseImg img").attr('alt', "chanyeolLoveMeRightRomanticUniverseTeaserImage");
     $("#chanyeol #cimage").append("<img src='../media/chanyeol/chanyeolLMRRU.jpg'>");
     $("#chanyeol #cimage img").addClass("themeImg");
     $("#chanyeol #cimage img").attr('alt', "chanyeolLoveMeRightRomanticUniverseTeaserImage");
  //do
  $("#do #collapseImg").append("<img src='../media/do/doLMRRU.jpg'>");
  $("#do #collapseImg img").addClass("themeImg");
  $("#do #collapseImg img").attr('alt', "doLoveMeRightRomanticUniverseTeaserImage");
  $("#do #image").append("<img src='../media/do/doLMRRU.jpg'>");
  $("#do #image img").addClass("themeImg");
  $("#do #image img").attr('alt', "doLoveMeRightRomanticUniverseTeaserImage");
     //suho
     $("#suho #collapseImg").append("<img src='../media/suho/suhoLMRRU.jpg'>");
     $("#suho #collapseImg img").addClass("themeImg");
     $("#suho #collapseImg img").attr('alt', "suhoLoveMeRightRomanticUniverseTeaserImage");
     $("#suho #image").append("<img src='../media/suho/suhoLMRRU.jpg'>");
     $("#suho #image img").addClass("themeImg");
     $("#suho #image img").attr('alt', "suhoLoveMeRightRomanticUniverseTeaserImage");
     //baekhyun
     $("#baekhyun #collapseImg").append("<img src='../media/baekhyun/baekhyunLMRRU.jpg'>");
     $("#baekhyun #collapseImg img").addClass("themeImg");
     $("#baekhyun #collapseImg img").attr('alt', "baekhyunLoveMeRightRomanticUniverseTeaserImage");
     $("#baekhyun #image").append("<img src='../media/baekhyun/baekhyunLMRRU.jpg'>");
     $("#baekhyun #image img").addClass("themeImg");
     $("#baekhyun #image img").attr('alt', "baekhyunLoveMeRightRomanticUniverseTeaserImage");
     //lay
     $("#lay #collapseImg").append("<img src='../media/lay/layLMRRU.jpg'>");
     $("#lay #collapseImg img").addClass("themeImg");
     $("#lay #collapseImg img").attr('alt', "layLoveMeRightRomanticUniverseTeaserImage");
     $("#lay #image").append("<img src='../media/lay/layLMRRU.jpg'>");
     $("#lay #image img").addClass("themeImg");
     $("#lay #image img").attr('alt', "layLoveMeRightRomanticUniverseTeaserImage");
     //chen
     $("#chen #collapseImg").append("<img src='../media/chen/chenLMRRU.jpg'>");
     $("#chen #collapseImg img").addClass("themeImg");
     $("#chen #collapseImg img").attr('alt', "chenLoveMeRightRomanticUniverseTeaserImage");
     $("#chen #image").append("<img src='../media/chen/chenLMRRU.jpg'>");
     $("#chen #image img").addClass("themeImg");
     $("#chen #image img").attr('alt', "chenLoveMeRightRomanticUniverseTeaserImage");
     //xiumin
     $("#xiumin #collapseImg").append("<img src='../media/xiumin/xiuminLMRRU.jpg'>");
     $("#xiumin #collapseImg img").addClass("themeImg");
     $("#xiumin #collapseImg img").attr('alt', "xiuminLoveMeRightRomanticUniverseTeaserImage");
     $("#xiumin #image").append("<img src='../media/xiumin/xiuminLMRRU.jpg'>");
     $("#xiumin #image img").addClass("themeImg");
     $("#xiumin #image img").attr('alt', "xiuminLoveMeRightRomanticUniverseTeaserImage");
     //luhan
     $("#luhan #collapseImg").append("<img src='../media/left.png'>");
     $("#luhan #collapseImg img").addClass("themeImg");
     $("#luhan #collapseImg img").attr('alt', "leftImage");
     $("#luhan #image").append("<img src='../media/left.png'>");
     $("#luhan #image img").addClass("themeImg");
     $("#luhan #image img").attr('alt', "leftImage");
     //kris
     $("#kris #collapseImg").append("<img src='../media/left.png'>");
     $("#kris #collapseImg img").addClass("themeImg");
     $("#kris #collapseImg img").attr('alt', "leftImage");
     $("#kris #image").append("<img src='../media/left.png'>");
     $("#kris #image img").addClass("themeImg");
     $("#kris #image img").attr('alt', "leftImage");
     //tao
     $("#tao #collapseImg").append("<img src='../media/left.png'>");
     $("#tao #collapseImg img").addClass("themeImg");
     $("#tao #collapseImg img").attr('alt', "leftImage");
     $("#tao #image").append("<img src='../media/left.png'>");
     $("#tao #image img").addClass("themeImg");
     $("#tao #image img").attr('alt', "leftImage");

     $("img").removeClass("currentTheme");
     $("#lmrruAlbum img").addClass("currentTheme");
     document.getElementById("themeName").innerHTML = "Current Theme: Love Me Right: Romantic Universe";
 });
 /**********************
 SING FOR YOU
 ***********************/
 $("#sfyAlbum").click(function(){
     $("img").remove(".themeImg");
     //sehun
     $("#sehun #collapseImg").append("<img src='../media/sehun/sehunSFY.jpg'>");
     $("#sehun #collapseImg img").addClass("themeImg");
     $("#sehun #collapseImg img").attr('alt', "sehunSingForYouTeaserImage");
     $("#sehun #image").append("<img src='../media/sehun/sehunSFY.jpg'>");
     $("#sehun #image img").addClass("themeImg");
     $("#sehun #image img").attr('alt', "sehunSingForYouTeaserImage");
     //kai
     $("#kai #kcollapseImg").append("<img src='../media/kai/kaiSFY.jpg'>");
     $("#kai #kcollapseImg img").addClass("themeImg");
     $("#kai #kcollapseImg img").attr('alt', "kaiSingForYouTeaserImage");
     $("#kai #kimage").append("<img src='../media/kai/kaiSFY.jpg'>");
     $("#kai #kimage img").addClass("themeImg");
     $("#kai #kimage img").attr('alt', "kaiSingForYouTeaserImage");
     //chanyeol
     $("#chanyeol #ccollapseImg").append("<img src='../media/chanyeol/chanyeolSFY.jpg'>");
     $("#chanyeol #ccollapseImg img").addClass("themeImg");
     $("#chanyeol #ccollapseImg img").attr('alt', "chanyeolSingForYouTeaserImage");
     $("#chanyeol #cimage").append("<img src='../media/chanyeol/chanyeolSFY.jpg'>");
     $("#chanyeol #cimage img").addClass("themeImg");
     $("#chanyeol #cimage img").attr('alt', "chanyeolSingForYouTeaserImage");
  //do
  $("#do #collapseImg").append("<img src='../media/do/doSFY.jpg'>");
  $("#do #collapseImg img").addClass("themeImg");
  $("#do #collapseImg img").attr('alt', "doSingForYouTeaserImage");
  $("#do #image").append("<img src='../media/do/doSFY.jpg'>");
  $("#do #image img").addClass("themeImg");
  $("#do #image img").attr('alt', "doSingForYouTeaserImage");
     //suho
     $("#suho #collapseImg").append("<img src='../media/suho/suhoSFY.jpg'>");
     $("#suho #collapseImg img").addClass("themeImg");
     $("#suho #collapseImg img").attr('alt', "suhoSingForYouTeaserImage");
     $("#suho #image").append("<img src='../media/suho/suhoSFY.jpg'>");
     $("#suho #image img").addClass("themeImg");
     $("#suho #image img").attr('alt', "suhoSingForYouTeaserImage");
     //baekhyun
     $("#baekhyun #collapseImg").append("<img src='../media/baekhyun/baekhyunSFY.jpg'>");
     $("#baekhyun #collapseImg img").addClass("themeImg");
     $("#baekhyun #collapseImg img").attr('alt', "baekhyunSingForYouTeaserImage");
     $("#baekhyun #image").append("<img src='../media/baekhyun/baekhyunSFY.jpg'>");
     $("#baekhyun #image img").addClass("themeImg");
     $("#baekhyun #image img").attr('alt', "baekhyunSingForYouTeaserImage");
     //lay
     $("#lay #collapseImg").append("<img src='../media/lay/laySFY.jpg'>");
     $("#lay #collapseImg img").addClass("themeImg");
     $("#lay #collapseImg img").attr('alt', "laySingForYouTeaserImage");
     $("#lay #image").append("<img src='../media/lay/laySFY.jpg'>");
     $("#lay #image img").addClass("themeImg");
     $("#lay #image img").attr('alt', "laySingForYouTeaserImage");
     //chen
     $("#chen #collapseImg").append("<img src='../media/chen/chenSFY.jpg'>");
     $("#chen #collapseImg img").addClass("themeImg");
     $("#chen #collapseImg img").attr('alt', "chenSingForYouTeaserImage");
     $("#chen #image").append("<img src='../media/chen/chenSFY.jpg'>");
     $("#chen #image img").addClass("themeImg");
     $("#chen #image img").attr('alt', "chenSingForYouTeaserImage");
     //xiumin
     $("#xiumin #collapseImg").append("<img src='../media/xiumin/xiuminSFY.jpg'>");
     $("#xiumin #collapseImg img").addClass("themeImg");
     $("#xiumin #collapseImg img").attr('alt', "xiuminSingForYouTeaserImage");
     $("#xiumin #image").append("<img src='../media/xiumin/xiuminSFY.jpg'>");
     $("#xiumin #image img").addClass("themeImg");
     $("#xiumin #image img").attr('alt', "xiuminSingForYouTeaserImage");
     //luhan
     $("#luhan #collapseImg").append("<img src='../media/left.png'>");
     $("#luhan #collapseImg img").addClass("themeImg");
     $("#luhan #collapseImg img").attr('alt', "leftImage");
     $("#luhan #image").append("<img src='../media/left.png'>");
     $("#luhan #image img").addClass("themeImg");
     $("#luhan #image img").attr('alt', "leftImage");
     //kris
     $("#kris #collapseImg").append("<img src='../media/left.png'>");
     $("#kris #collapseImg img").addClass("themeImg");
     $("#kris #collapseImg img").attr('alt', "leftImage");
     $("#kris #image").append("<img src='../media/left.png'>");
     $("#kris #image img").addClass("themeImg");
     $("#kris #image img").attr('alt', "leftImage");
     //tao
     $("#tao #collapseImg").append("<img src='../media/left.png'>");
     $("#tao #collapseImg img").addClass("themeImg");
     $("#tao #collapseImg img").attr('alt', "leftImage");
     $("#tao #image").append("<img src='../media/left.png'>");
     $("#tao #image img").addClass("themeImg");
     $("#tao #image img").attr('alt', "leftImage");

     $("img").removeClass("currentTheme");
     $("#sfyAlbum img").addClass("currentTheme");
     document.getElementById("themeName").innerHTML = "Current Theme: Sing For You";
 });
 /**********************
 EX'ACT
 ***********************/
 $("#exactAlbum").click(function(){
     $("img").remove(".themeImg");
     //sehun
     $("#sehun #collapseImg").append("<img src='../media/sehun/sehunLO.jpg'>");
     $("#sehun #collapseImg img").addClass("themeImg");
     $("#sehun #collapseImg img").attr('alt', "sehunEXACTTeaserImage");
     $("#sehun #image").append("<img src='../media/sehun/sehunLO.jpg'>");
     $("#sehun #image img").addClass("themeImg");
     $("#sehun #image img").attr('alt', "sehunLuckyOneTeaserImage");
     //kai
     $("#kai #kcollapseImg").append("<img src='../media/kai/kaiLO.jpg'>");
     $("#kai #kcollapseImg img").addClass("themeImg");
     $("#kai #kcollapseImg img").attr('alt', "kaiEXACTTeaserImage");
     $("#kai #kimage").append("<img src='../media/kai/kaiLO.jpg'>");
     $("#kai #kimage img").addClass("themeImg");
     $("#kai #kimage img").attr('alt', "kaiLuckyOneTeaserImage");
     //chanyeol
     $("#chanyeol #ccollapseImg").append("<img src='../media/chanyeol/chanyeolLO.jpg'>");
     $("#chanyeol #ccollapseImg img").addClass("themeImg");
     $("#chanyeol #ccollapseImg img").attr('alt', "chanyeolEXACTTeaserImage");
     $("#chanyeol #cimage").append("<img src='../media/chanyeol/chanyeolLO.jpg'>");
     $("#chanyeol #cimage img").addClass("themeImg");
     $("#chanyeol #cimage img").attr('alt', "chanyeolLuckyOneTeaserImage");
  //do
  $("#do #collapseImg").append("<img src='../media/do/doLO.jpg'>");
  $("#do #collapseImg img").addClass("themeImg");
  $("#do #collapseImg img").attr('alt', "doEXACTTeaserImage");
  $("#do #image").append("<img src='../media/do/doLO.jpg'>");
  $("#do #image img").addClass("themeImg");
  $("#do #image img").attr('alt', "doLuckyOneTeaserImage");
     //suho
     $("#suho #collapseImg").append("<img src='../media/suho/suhoLO.jpg'>");
     $("#suho #collapseImg img").addClass("themeImg");
     $("#suho #collapseImg img").attr('alt', "suhoEXACTTeaserImage");
     $("#suho #image").append("<img src='../media/suho/suhoLO.jpg'>");
     $("#suho #image img").addClass("themeImg");
     $("#suho #image img").attr('alt', "suhoLuckyOneTeaserImage");
     //baekhyun
     $("#baekhyun #collapseImg").append("<img src='../media/baekhyun/baekhyunLO.jpg'>");
     $("#baekhyun #collapseImg img").addClass("themeImg");
     $("#baekhyun #collapseImg img").attr('alt', "baekhyunEXACTTeaserImage");
     $("#baekhyun #image").append("<img src='../media/baekhyun/baekhyunLO.jpg'>");
     $("#baekhyun #image img").addClass("themeImg");
     $("#baekhyun #image img").attr('alt', "baekhyunLuckyOneTeaserImage");
     //lay
     $("#lay #collapseImg").append("<img src='../media/lay/layLO.jpg'>");
     $("#lay #collapseImg img").addClass("themeImg");
     $("#lay #collapseImg img").attr('alt', "layEXACTTeaserImage");
     $("#lay #image").append("<img src='../media/lay/layLO.jpg'>");
     $("#lay #image img").addClass("themeImg");
     $("#lay #image img").attr('alt', "layLuckyOneTeaserImage");
     //chen
     $("#chen #collapseImg").append("<img src='../media/chen/chenLO.jpg'>");
     $("#chen #collapseImg img").addClass("themeImg");
     $("#chen #collapseImg img").attr('alt', "chenEXACTTeaserImage");
     $("#chen #image").append("<img src='../media/chen/chenLO.jpg'>");
     $("#chen #image img").addClass("themeImg");
     $("#chen #image img").attr('alt', "chenLuckyOneTeaserImage");
     //xiumin
     $("#xiumin #collapseImg").append("<img src='../media/xiumin/xiuminLO.jpg'>");
     $("#xiumin #collapseImg img").addClass("themeImg");
     $("#xiumin #collapseImg img").attr('alt', "xiuminEXACTTeaserImage");
     $("#xiumin #image").append("<img src='../media/xiumin/xiuminLO.jpg'>");
     $("#xiumin #image img").addClass("themeImg");
     $("#xiumin #image img").attr('alt', "xiuminLuckyOneTeaserImage");
     //luhan
     $("#luhan #collapseImg").append("<img src='../media/left.png'>");
     $("#luhan #collapseImg img").addClass("themeImg");
     $("#luhan #collapseImg img").attr('alt', "leftImage");
     $("#luhan #image").append("<img src='../media/left.png'>");
     $("#luhan #image img").addClass("themeImg");
     $("#luhan #image img").attr('alt', "leftImage");
     //kris
     $("#kris #collapseImg").append("<img src='../media/left.png'>");
     $("#kris #collapseImg img").addClass("themeImg");
     $("#kris #collapseImg img").attr('alt', "leftImage");
     $("#kris #image").append("<img src='../media/left.png'>");
     $("#kris #image img").addClass("themeImg");
     $("#kris #image img").attr('alt', "leftImage");
     //tao
     $("#tao #collapseImg").append("<img src='../media/left.png'>");
     $("#tao #collapseImg img").addClass("themeImg");
     $("#tao #collapseImg img").attr('alt', "leftImage");
     $("#tao #image").append("<img src='../media/left.png'>");
     $("#tao #image img").addClass("themeImg");
     $("#tao #image img").attr('alt', "leftImage");

     $("img").removeClass("currentTheme");
     $("#exactAlbum img").addClass("currentTheme");
     document.getElementById("themeName").innerHTML = "Current Theme: EX'ACT";
 });
 /**********************
 LOTTO
 ***********************/
 $("#lottoAlbum").click(function(){
     $("img").remove(".themeImg");
     //sehun
     $("#sehun #collapseImg").append("<img src='../media/sehun/sehunL.jpg'>");
     $("#sehun #collapseImg img").addClass("themeImg");
     $("#sehun #collapseImg img").attr('alt', "sehunLottoTeaserImage");
     $("#sehun #image").append("<img src='../media/sehun/sehunL.jpg'>");
     $("#sehun #image img").addClass("themeImg");
     $("#sehun #image img").attr('alt', "sehunLottoTeaserImage");
     //kai
     $("#kai #kcollapseImg").append("<img src='../media/kai/kaiL.jpg'>");
     $("#kai #kcollapseImg img").addClass("themeImg");
     $("#kai #kcollapseImg img").attr('alt', "kaiLottoTeaserImage");
     $("#kai #kimage").append("<img src='../media/kai/kaiL.jpg'>");
     $("#kai #kimage img").addClass("themeImg");
     $("#kai #kimage img").attr('alt', "kaiLottoTeaserImage");
     //chanyeol
     $("#chanyeol #ccollapseImg").append("<img src='../media/chanyeol/chanyeolL.jpg'>");
     $("#chanyeol #ccollapseImg img").addClass("themeImg");
     $("#chanyeol #ccollapseImg img").attr('alt', "chanyeolLottoTeaserImage");
     $("#chanyeol #cimage").append("<img src='../media/chanyeol/chanyeolL.jpg'>");
     $("#chanyeol #cimage img").addClass("themeImg");
     $("#chanyeol #cimage img").attr('alt', "chanyeolLottoTeaserImage");
  //do
  $("#do #collapseImg").append("<img src='../media/do/doL.jpg'>");
  $("#do #collapseImg img").addClass("themeImg");
  $("#do #collapseImg img").attr('alt', "doLottoTeaserImage");
  $("#do #image").append("<img src='../media/do/doL.jpg'>");
  $("#do #image img").addClass("themeImg");
  $("#do #image img").attr('alt', "doLottoTeaserImage");
     //suho
     $("#suho #collapseImg").append("<img src='../media/suho/suhoL.jpg'>");
     $("#suho #collapseImg img").addClass("themeImg");
     $("#suho #collapseImg img").attr('alt', "suhoLottoTeaserImage");
     $("#suho #image").append("<img src='../media/suho/suhoL.jpg'>");
     $("#suho #image img").addClass("themeImg");
     $("#suho #image img").attr('alt', "suhoLottoTeaserImage");
     //baekhyun
     $("#baekhyun #collapseImg").append("<img src='../media/baekhyun/baekhyunL.jpg'>");
     $("#baekhyun #collapseImg img").addClass("themeImg");
     $("#baekhyun #collapseImg img").attr('alt', "baekhyunLottoTeaserImage");
     $("#baekhyun #image").append("<img src='../media/baekhyun/baekhyunL.jpg'>");
     $("#baekhyun #image img").addClass("themeImg");
     $("#baekhyun #image img").attr('alt', "baekhyunLottoTeaserImage");
     //lay
     $("#lay #collapseImg").append("<img src='../media/lay/layL.jpg'>");
     $("#lay #collapseImg img").addClass("themeImg");
     $("#lay #collapseImg img").attr('alt', "layLottoTeaserImage");
     $("#lay #image").append("<img src='../media/lay/layL.jpg'>");
     $("#lay #image img").addClass("themeImg");
     $("#lay #image img").attr('alt', "layLottoTeaserImage");
     //chen
     $("#chen #collapseImg").append("<img src='../media/chen/chenL.jpg'>");
     $("#chen #collapseImg img").addClass("themeImg");
     $("#chen #collapseImg img").attr('alt', "chenLottoTeaserImage");
     $("#chen #image").append("<img src='../media/chen/chenL.jpg'>");
     $("#chen #image img").addClass("themeImg");
     $("#chen #image img").attr('alt', "chenLottoTeaserImage");
     //xiumin
     $("#xiumin #collapseImg").append("<img src='../media/xiumin/xiuminL.jpg'>");
     $("#xiumin #collapseImg img").addClass("themeImg");
     $("#xiumin #collapseImg img").attr('alt', "xiuminLottoTeaserImage");
     $("#xiumin #image").append("<img src='../media/xiumin/xiuminL.jpg'>");
     $("#xiumin #image img").addClass("themeImg");
     $("#xiumin #image img").attr('alt', "xiuminLottoTeaserImage");
     //luhan
     $("#luhan #collapseImg").append("<img src='../media/left.png'>");
     $("#luhan #collapseImg img").addClass("themeImg");
     $("#luhan #collapseImg img").attr('alt', "leftImage");
     $("#luhan #image").append("<img src='../media/left.png'>");
     $("#luhan #image img").addClass("themeImg");
     $("#luhan #image img").attr('alt', "leftImage");
     //kris
     $("#kris #collapseImg").append("<img src='../media/left.png'>");
     $("#kris #collapseImg img").addClass("themeImg");
     $("#kris #collapseImg img").attr('alt', "leftImage");
     $("#kris #image").append("<img src='../media/left.png'>");
     $("#kris #image img").addClass("themeImg");
     $("#kris #image img").attr('alt', "leftImage");
     //tao
     $("#tao #collapseImg").append("<img src='../media/left.png'>");
     $("#tao #collapseImg img").addClass("themeImg");
     $("#tao #collapseImg img").attr('alt', "leftImage");
     $("#tao #image").append("<img src='../media/left.png'>");
     $("#tao #image img").addClass("themeImg");
     $("#tao #image img").attr('alt', "leftImage");

     $("img").removeClass("currentTheme");
     $("#lottoAlbum img").addClass("currentTheme");
     document.getElementById("themeName").innerHTML = "Current Theme: LOTTO";
 });
 /**********************
 COMING OVER
 ***********************/
 $("#coAlbum").click(function(){
     $("img").remove(".themeImg");
     //sehun
     $("#sehun #collapseImg").append("<img src='../media/sehun/sehunCO.jpg'>");
     $("#sehun #collapseImg img").addClass("themeImg");
     $("#sehun #collapseImg img").attr('alt', "sehunComingOverTeaserImage");
     $("#sehun #image").append("<img src='../media/sehun/sehunCO.jpg'>");
     $("#sehun #image img").addClass("themeImg");
     $("#sehun #image img").attr('alt', "sehunComingOverTeaserImage");
     //kai
     $("#kai #kcollapseImg").append("<img src='../media/kai/kaiCO.jpg'>");
     $("#kai #kcollapseImg img").addClass("themeImg");
     $("#kai #kcollapseImg img").attr('alt', "kaiComingOverTeaserImage");
     $("#kai #kimage").append("<img src='../media/kai/kaiCO.jpg'>");
     $("#kai #kimage img").addClass("themeImg");
     $("#kai #kimage img").attr('alt', "kaiComingOverTeaserImage");
     //chanyeol
     $("#chanyeol #ccollapseImg").append("<img src='../media/chanyeol/chanyeolCO.jpg'>");
     $("#chanyeol #ccollapseImg img").addClass("themeImg");
     $("#chanyeol #ccollapseImg img").attr('alt', "chanyeolComingOverTeaserImage");
     $("#chanyeol #cimage").append("<img src='../media/chanyeol/chanyeolCO.jpg'>");
     $("#chanyeol #cimage img").addClass("themeImg");
     $("#chanyeol #cimage img").attr('alt', "chanyeolComingOverTeaserImage");
  //do
  $("#do #collapseImg").append("<img src='../media/do/doCO.jpg'>");
  $("#do #collapseImg img").addClass("themeImg");
  $("#do #collapseImg img").attr('alt', "doComingOverTeaserImage");
  $("#do #image").append("<img src='../media/do/doCO.jpg'>");
  $("#do #image img").addClass("themeImg");
  $("#do #image img").attr('alt', "doComingOverTeaserImage");
     //suho
     $("#suho #collapseImg").append("<img src='../media/suho/suhoCO.jpg'>");
     $("#suho #collapseImg img").addClass("themeImg");
     $("#suho #collapseImg img").attr('alt', "suhoComingOverTeaserImage");
     $("#suho #image").append("<img src='../media/suho/suhoCO.jpg'>");
     $("#suho #image img").addClass("themeImg");
     $("#suho #image img").attr('alt', "suhoComingOverTeaserImage");
     //baekhyun
     $("#baekhyun #collapseImg").append("<img src='../media/baekhyun/baekhyunCO.jpg'>");
     $("#baekhyun #collapseImg img").addClass("themeImg");
     $("#baekhyun #collapseImg img").attr('alt', "baekhyunComingOverTeaserImage");
     $("#baekhyun #image").append("<img src='../media/baekhyun/baekhyunCO.jpg'>");
     $("#baekhyun #image img").addClass("themeImg");
     $("#baekhyun #image img").attr('alt', "baekhyunComingOverTeaserImage");    
     //lay
     $("#lay #collapseImg").append("<img src='../media/lay/layCO.jpg'>");
     $("#lay #collapseImg img").addClass("themeImg");
     $("#lay #collapseImg img").attr('alt', "layComingOverTeaserImage");
     $("#lay #image").append("<img src='../media/lay/layCO.jpg'>");
     $("#lay #image img").addClass("themeImg");
     $("#lay #image img").attr('alt', "layComingOverTeaserImage");  
     //chen
     $("#chen #collapseImg").append("<img src='../media/chen/chenCO.jpg'>");
     $("#chen #collapseImg img").addClass("themeImg");
     $("#chen #collapseImg img").attr('alt', "chenComingOverTeaserImage");
     $("#chen #image").append("<img src='../media/chen/chenCO.jpg'>");
     $("#chen #image img").addClass("themeImg");
     $("#chen #image img").attr('alt', "chenComingOverTeaserImage");
     //xiumin
     $("#xiumin #collapseImg").append("<img src='../media/xiumin/xiuminCO.jpg'>");
     $("#xiumin #collapseImg img").addClass("themeImg");
     $("#xiumin #collapseImg img").attr('alt', "xiuminComingOverTeaserImage");
     $("#xiumin #image").append("<img src='../media/xiumin/xiuminCO.jpg'>");
     $("#xiumin #image img").addClass("themeImg");
     $("#xiumin #image img").attr('alt', "xiuminComingOverTeaserImage");
     //luhan
     $("#luhan #collapseImg").append("<img src='../media/left.png'>");
     $("#luhan #collapseImg img").addClass("themeImg");
     $("#luhan #collapseImg img").attr('alt', "leftImage");
     $("#luhan #image").append("<img src='../media/left.png'>");
     $("#luhan #image img").addClass("themeImg");
     $("#luhan #image img").attr('alt', "leftImage");
     //kris
     $("#kris #collapseImg").append("<img src='../media/left.png'>");
     $("#kris #collapseImg img").addClass("themeImg");
     $("#kris #collapseImg img").attr('alt', "leftImage");
     $("#kris #image").append("<img src='../media/left.png'>");
     $("#kris #image img").addClass("themeImg");
     $("#kris #image img").attr('alt', "leftImage");
     //tao
     $("#tao #collapseImg").append("<img src='../media/left.png'>");
     $("#tao #collapseImg img").addClass("themeImg");
     $("#tao #collapseImg img").attr('alt', "leftImage");
     $("#tao #image").append("<img src='../media/left.png'>");
     $("#tao #image img").addClass("themeImg");
     $("#tao #image img").attr('alt', "leftImage");

     $("img").removeClass("currentTheme");
     $("#coAlbum img").addClass("currentTheme");
     document.getElementById("themeName").innerHTML = "Current Theme: Coming Over";
 });
 /**********************
 FOR LIFE
 ***********************/
 $("#flAlbum").click(function(){
     $("img").remove(".themeImg");
     //sehun
     $("#sehun #collapseImg").append("<img src='../media/sehun/sehunFL.jpg'>");
     $("#sehun #collapseImg img").addClass("themeImg");
     $("#sehun #collapseImg img").attr('alt', "sehunForLifeTeaserImage");
     $("#sehun #image").append("<img src='../media/sehun/sehunFL.jpg'>");
     $("#sehun #image img").addClass("themeImg");
     $("#sehun #image img").attr('alt', "sehunForLifeTeaserImage");
     //kai
     $("#kai #kcollapseImg").append("<img src='../media/kai/kaiFL.jpg'>");
     $("#kai #kcollapseImg img").addClass("themeImg");
     $("#kai #kcollapseImg img").attr('alt', "kaiForLifeTeaserImage");
     $("#kai #kimage").append("<img src='../media/kai/kaiFL.jpg'>");
     $("#kai #kimage img").addClass("themeImg");
     $("#kai #kimage img").attr('alt', "kaiForLifeTeaserImage");
     //chanyeol
     $("#chanyeol #ccollapseImg").append("<img src='../media/chanyeol/chanyeolFL.jpg'>");
     $("#chanyeol #ccollapseImg img").addClass("themeImg");
     $("#chanyeol #ccollapseImg img").attr('alt', "chanyeolForLifeTeaserImage");
     $("#chanyeol #cimage").append("<img src='../media/chanyeol/chanyeolFL.jpg'>");
     $("#chanyeol #cimage img").addClass("themeImg");
     $("#chanyeol #cimage img").attr('alt', "chanyeolForLifeTeaserImage");
  //do
  $("#do #collapseImg").append("<img src='../media/do/doFL.jpg'>");
  $("#do #collapseImg img").addClass("themeImg");
  $("#do #collapseImg img").attr('alt', "doForLifeTeaserImage");
  $("#do #image").append("<img src='../media/do/doFL.jpg'>");
  $("#do #image img").addClass("themeImg");
  $("#do #image img").attr('alt', "doForLifeTeaserImage");
     //suho
     $("#suho #collapseImg").append("<img src='../media/suho/suhoFL.jpg'>");
     $("#suho #collapseImg img").addClass("themeImg");
     $("#suho #collapseImg img").attr('alt', "suhoForLifeTeaserImage");
     $("#suho #image").append("<img src='../media/suho/suhoFL.jpg'>");
     $("#suho #image img").addClass("themeImg");
     $("#suho #image img").attr('alt', "suhoForLifeTeaserImage");
     //baekhyun
     $("#baekhyun #collapseImg").append("<img src='../media/baekhyun/baekhyunFL.jpg'>");
     $("#baekhyun #collapseImg img").addClass("themeImg");
     $("#baekhyun #collapseImg img").attr('alt', "baekhyunForLifeTeaserImage");
     $("#baekhyun #image").append("<img src='../media/baekhyun/baekhyunFL.jpg'>");
     $("#baekhyun #image img").addClass("themeImg");
     $("#baekhyun #image img").attr('alt', "baekhyunForLifeTeaserImage");
     //lay
     $("#lay #collapseImg").append("<img src='../media/lay/layFL.jpg'>");
     $("#lay #collapseImg img").addClass("themeImg");
     $("#lay #collapseImg img").attr('alt', "layForLifeTeaserImage");
     $("#lay #image").append("<img src='../media/lay/layFL.jpg'>");
     $("#lay #image img").addClass("themeImg");
     $("#lay #image img").attr('alt', "layForLifeTeaserImage");
     //chen
     $("#chen #collapseImg").append("<img src='../media/chen/chenFL.jpg'>");
     $("#chen #collapseImg img").addClass("themeImg");
     $("#chen #collapseImg img").attr('alt', "chenForLifeTeaserImage");
     $("#chen #image").append("<img src='../media/chen/chenFL.jpg'>");
     $("#chen #image img").addClass("themeImg");
     $("#chen #image img").attr('alt', "chenForLifeTeaserImage");
     //xiumin
     $("#xiumin #collapseImg").append("<img src='../media/xiumin/xiuminFL.jpg'>");
     $("#xiumin #collapseImg img").addClass("themeImg");
     $("#xiumin #collapseImg img").attr('alt', "xiuminForLifeTeaserImage");
     $("#xiumin #image").append("<img src='../media/xiumin/xiuminFL.jpg'>");
     $("#xiumin #image img").addClass("themeImg");
     $("#xiumin #image img").attr('alt', "xiuminForLifeTeaserImage");
     //luhan
     $("#luhan #collapseImg").append("<img src='../media/left.png'>");
     $("#luhan #collapseImg img").addClass("themeImg");
     $("#luhan #collapseImg img").attr('alt', "leftImage");
     $("#luhan #image").append("<img src='../media/left.png'>");
     $("#luhan #image img").addClass("themeImg");
     $("#luhan #image img").attr('alt', "leftImage");
     //kris
     $("#kris #collapseImg").append("<img src='../media/left.png'>");
     $("#kris #collapseImg img").addClass("themeImg");
     $("#kris #collapseImg img").attr('alt', "leftImage");
     $("#kris #image").append("<img src='../media/left.png'>");
     $("#kris #image img").addClass("themeImg");
     $("#kris #image img").attr('alt', "leftImage");
     //tao
     $("#tao #collapseImg").append("<img src='../media/left.png'>");
     $("#tao #collapseImg img").addClass("themeImg");
     $("#tao #collapseImg img").attr('alt', "leftImage");
     $("#tao #image").append("<img src='../media/left.png'>");
     $("#tao #image img").addClass("themeImg");
     $("#tao #image img").attr('alt', "leftImage");

     $("img").removeClass("currentTheme");
     $("#flAlbum img").addClass("currentTheme");
     document.getElementById("themeName").innerHTML = "Current Theme: For Life";
 });
 /**********************
 THE WAR
 ***********************/
 $("#thewarAlbum").click(function(){
     $("img").remove(".themeImg");
     //sehun
     $("#sehun #collapseImg").append("<img src='../media/sehun/sehunTW.jpg'>");
     $("#sehun #collapseImg img").addClass("themeImg");
     $("#sehun #collapseImg img").attr('alt', "sehunTheWarTeaserImage");
     $("#sehun #image").append("<img src='../media/sehun/sehunTW.jpg'>");
     $("#sehun #image img").addClass("themeImg");
     $("#sehun #image img").attr('alt', "sehunTheWarTeaserImage");
     //kai
     $("#kai #kcollapseImg").append("<img src='../media/kai/kaiTW.jpg'>");
     $("#kai #kcollapseImg img").addClass("themeImg");
     $("#kai #kcollapseImg img").attr('alt', "kaiTheWarTeaserImage");
     $("#kai #kimage").append("<img src='../media/kai/kaiTW.jpg'>");
     $("#kai #kimage img").addClass("themeImg");
     $("#kai #kimage img").attr('alt', "kaiTheWarTeaserImage");
     //chanyeol
     $("#chanyeol #ccollapseImg").append("<img src='../media/chanyeol/chanyeolTW.jpg'>");
     $("#chanyeol #ccollapseImg img").addClass("themeImg");
     $("#chanyeol #ccollapseImg img").attr('alt', "chanyeolTheWarTeaserImage");
     $("#chanyeol #cimage").append("<img src='../media/chanyeol/chanyeolTW.jpg'>");
     $("#chanyeol #cimage img").addClass("themeImg");
     $("#chanyeol #cimage img").attr('alt', "chanyeolTheWarTeaserImage");
  //do
  $("#do #collapseImg").append("<img src='../media/do/doTW.jpg'>");
  $("#do #collapseImg img").addClass("themeImg");
  $("#do #collapseImg img").attr('alt', "doTheWarTeaserImage");
  $("#do #image").append("<img src='../media/do/doTW.jpg'>");
  $("#do #image img").addClass("themeImg");
  $("#do #image img").attr('alt', "doTheWarTeaserImage");
     //suho
     $("#suho #collapseImg").append("<img src='../media/suho/suhoTW.jpg'>");
     $("#suho #collapseImg img").addClass("themeImg");
     $("#suho #collapseImg img").attr('alt', "suhoTheWarTeaserImage");
     $("#suho #image").append("<img src='../media/suho/suhoTW.jpg'>");
     $("#suho #image img").addClass("themeImg");
     $("#suho #image img").attr('alt', "suhoTheWarTeaserImage");
     //baekhyun
     $("#baekhyun #collapseImg").append("<img src='../media/baekhyun/baekhyunTW.jpg'>");
     $("#baekhyun #collapseImg img").addClass("themeImg");
     $("#baekhyun #collapseImg img").attr('alt', "baekhyunTheWarTeaserImage");
     $("#baekhyun #image").append("<img src='../media/baekhyun/baekhyunTW.jpg'>");
     $("#baekhyun #image img").addClass("themeImg");
     $("#baekhyun #image img").attr('alt', "baekhyunTheWarTeaserImage");
     //lay
     $("#lay #collapseImg").append("<img src='../media/notThere.png'>");
     $("#lay #collapseImg img").addClass("themeImg");
     $("#lay #collapseImg img").attr('alt', "notThereImage");
     $("#lay #image").append("<img src='../media/notThere.png'>");
     $("#lay #image img").addClass("themeImg");
     $("#lay #image img").attr('alt', "notThereImage");
     //chen
     $("#chen #collapseImg").append("<img src='../media/chen/chenTW.jpg'>");
     $("#chen #collapseImg img").addClass("themeImg");
     $("#chen #collapseImg img").attr('alt', "chenTheWarTeaserImage");
     $("#chen #image").append("<img src='../media/chen/chenTW.jpg'>");
     $("#chen #image img").addClass("themeImg");
     $("#chen #image img").attr('alt', "chenTheWarTeaserImage");
     //xiumin
     $("#xiumin #collapseImg").append("<img src='../media/xiumin/xiuminTW.jpg'>");
     $("#xiumin #collapseImg img").addClass("themeImg");
     $("#xiumin #collapseImg img").attr('alt', "xiuminTheWarTeaserImage");
     $("#xiumin #image").append("<img src='../media/xiumin/xiuminTW.jpg'>");
     $("#xiumin #image img").addClass("themeImg");
     $("#xiumin #image img").attr('alt', "xiuminTheWarTeaserImage");
     //luhan
     $("#luhan #collapseImg").append("<img src='../media/left.png'>");
     $("#luhan #collapseImg img").addClass("themeImg");
     $("#luhan #collapseImg img").attr('alt', "leftImage");
     $("#luhan #image").append("<img src='../media/left.png'>");
     $("#luhan #image img").addClass("themeImg");
     $("#luhan #image img").attr('alt', "leftImage");
     //kris
     $("#kris #collapseImg").append("<img src='../media/left.png'>");
     $("#kris #collapseImg img").addClass("themeImg");
     $("#kris #collapseImg img").attr('alt', "leftImage");
     $("#kris #image").append("<img src='../media/left.png'>");
     $("#kris #image img").addClass("themeImg");
     $("#kris #image img").attr('alt', "leftImage");
     //tao
     $("#tao #collapseImg").append("<img src='../media/left.png'>");
     $("#tao #collapseImg img").addClass("themeImg");
     $("#tao #collapseImg img").attr('alt', "leftImage");
     $("#tao #image").append("<img src='../media/left.png'>");
     $("#tao #image img").addClass("themeImg");
     $("#tao #image img").attr('alt', "leftImage");

     $("img").removeClass("currentTheme");
     $("#thewarAlbum img").addClass("currentTheme");
     document.getElementById("themeName").innerHTML = "Current Theme: The War";
 });
 /**********************
 THE POWER OF MUSIC
 ***********************/
 $("#powerAlbum").click(function(){
     $("img").remove(".themeImg");
     //sehun
     $("#sehun #collapseImg").append("<img src='../media/sehun/sehunP.jpg'>");
     $("#sehun #collapseImg img").addClass("themeImg");
     $("#sehun #collapseImg img").attr('alt', "sehunPowerTeaserImage");
     $("#sehun #image").append("<img src='../media/sehun/sehunP.jpg'>");
     $("#sehun #image img").addClass("themeImg");
     $("#sehun #image img").attr('alt', "sehunPowerTeaserImage");
     //kai
     $("#kai #kcollapseImg").append("<img src='../media/kai/kaiP.jpg'>");
     $("#kai #kcollapseImg img").addClass("themeImg");
     $("#kai #kcollapseImg img").attr('alt', "kaiPowerTeaserImage");
     $("#kai #kimage").append("<img src='../media/kai/kaiP.jpg'>");
     $("#kai #kimage img").addClass("themeImg");
     $("#kai #kimage img").attr('alt', "kaiPowerTeaserImage");
     //chanyeol
     $("#chanyeol #ccollapseImg").append("<img src='../media/chanyeol/chanyeolP.jpg'>");
     $("#chanyeol #ccollapseImg img").addClass("themeImg");
     $("#chanyeol #ccollapseImg img").attr('alt', "chanyeolPowerTeaserImage");
     $("#chanyeol #cimage").append("<img src='../media/chanyeol/chanyeolP.jpg'>");
     $("#chanyeol #cimage img").addClass("themeImg");
     $("#chanyeol #cimage img").attr('alt', "chanyeolPowerTeaserImage");
  //do
  $("#do #collapseImg").append("<img src='../media/do/doP.jpg'>");
  $("#do #collapseImg img").addClass("themeImg");
  $("#do #collapseImg img").attr('alt', "doPowerTeaserImage");
  $("#do #image").append("<img src='../media/do/doP.jpg'>");
  $("#do #image img").addClass("themeImg");
  $("#do #image img").attr('alt', "doPowerTeaserImage");
     //suho
     $("#suho #collapseImg").append("<img src='../media/suho/suhoP.jpg'>");
     $("#suho #collapseImg img").addClass("themeImg");
     $("#suho #collapseImg img").attr('alt', "suhoPowerTeaserImage");
     $("#suho #image").append("<img src='../media/suho/suhoP.jpg'>");
     $("#suho #image img").addClass("themeImg");
     $("#suho #image img").attr('alt', "suhoPowerTeaserImage");
     //baekhyun
     $("#baekhyun #collapseImg").append("<img src='../media/baekhyun/baekhyunP.jpg'>");
     $("#baekhyun #collapseImg img").addClass("themeImg");
     $("#baekhyun #collapseImg img").attr('alt', "baekhyunPowerTeaserImage");
     $("#baekhyun #image").append("<img src='../media/baekhyun/baekhyunP.jpg'>");
     $("#baekhyun #image img").addClass("themeImg");
     $("#baekhyun #image img").attr('alt', "baekhyunPowerTeaserImage");
     //lay
     $("#lay #collapseImg").append("<img src='../media/notThere.png'>");
     $("#lay #collapseImg img").addClass("themeImg");
     $("#lay #collapseImg img").attr('alt', "notThereImage");
     $("#lay #image").append("<img src='../media/notThere.png'>");
     $("#lay #image img").addClass("themeImg");
     $("#lay #image img").attr('alt', "notThereImage");
     //chen
     $("#chen #collapseImg").append("<img src='../media/chen/chenP.jpg'>");
     $("#chen #collapseImg img").addClass("themeImg");
     $("#chen #collapseImg img").attr('alt', "chenPowerTeaserImage");
     $("#chen #image").append("<img src='../media/chen/chenP.jpg'>");
     $("#chen #image img").addClass("themeImg");
     $("#chen #image img").attr('alt', "chenPowerTeaserImage");
     //xiumin
     $("#xiumin #collapseImg").append("<img src='../media/xiumin/xiuminP.jpg'>");
     $("#xiumin #collapseImg img").addClass("themeImg");
     $("#xiumin #collapseImg img").attr('alt', "xiuminPowerTeaserImage");
     $("#xiumin #image").append("<img src='../media/xiumin/xiuminP.jpg'>");
     $("#xiumin #image img").addClass("themeImg");
     $("#xiumin #image img").attr('alt', "xiuminPowerTeaserImage");
     //luhan
     $("#luhan #collapseImg").append("<img src='../media/left.png'>");
     $("#luhan #collapseImg img").addClass("themeImg");
     $("#luhan #collapseImg img").attr('alt', "leftImage");
     $("#luhan #image").append("<img src='../media/left.png'>");
     $("#luhan #image img").addClass("themeImg");
     $("#luhan #image img").attr('alt', "leftImage");
     //kris
     $("#kris #collapseImg").append("<img src='../media/left.png'>");
     $("#kris #collapseImg img").addClass("themeImg");
     $("#kris #collapseImg img").attr('alt', "leftImage");
     $("#kris #image").append("<img src='../media/left.png'>");
     $("#kris #image img").addClass("themeImg");
     $("#kris #image img").attr('alt', "leftImage");
     //tao
     $("#tao #collapseImg").append("<img src='../media/left.png'>");
     $("#tao #collapseImg img").addClass("themeImg");
     $("#tao #collapseImg img").attr('alt', "leftImage");
     $("#tao #image").append("<img src='../media/left.png'>");
     $("#tao #image img").addClass("themeImg");
     $("#tao #image img").attr('alt', "leftImage");

     $("img").removeClass("currentTheme");
     $("#powerAlbum img").addClass("currentTheme");
     document.getElementById("themeName").innerHTML = "Current Theme: Power";
 });

 /**********************
UNIVERSE
 ***********************/
$("#universeAlbum").click(function(){
    $("img").remove(".themeImg");
    //sehun
    $("#sehun #collapseImg").append("<img src='../media/sehun/sehunU.jpg'>");
    $("#sehun #collapseImg img").addClass("themeImg");
    $("#sehun #collapseImg img").attr('alt', "sehunUniverseTeaserImage");
    $("#sehun #image").append("<img src='../media/sehun/sehunU.jpg'>");
    $("#sehun #image img").addClass("themeImg");
    $("#sehun #image img").attr('alt', "sehunUniverseTeaserImage");
    //kai
    $("#kai #kcollapseImg").append("<img src='../media/kai/kaiU.jpg'>");
    $("#kai #kcollapseImg img").addClass("themeImg");
    $("#kai #kcollapseImg img").attr('alt', "kaiUniverseTeaserImage");
    $("#kai #kimage").append("<img src='../media/kai/kaiU.jpg'>");
    $("#kai #kimage img").addClass("themeImg");
    $("#kai #kimage img").attr('alt', "kaiUniverseTeaserImage");
    //chanyeol
    $("#chanyeol #ccollapseImg").append("<img src='../media/chanyeol/chanyeolU.jpg'>");
    $("#chanyeol #ccollapseImg img").addClass("themeImg");
    $("#chanyeol #ccollapseImg img").attr('alt', "chanyeolUniverseTeaserImage");
    $("#chanyeol #cimage").append("<img src='../media/chanyeol/chanyeolU.jpg'>");
    $("#chanyeol #cimage img").addClass("themeImg");
    $("#chanyeol #cimage img").attr('alt', "chanyeolUniverseTeaserImage");
 //do
 $("#do #collapseImg").append("<img src='../media/do/doU.jpg'>");
 $("#do #collapseImg img").addClass("themeImg");
 $("#do #collapseImg img").attr('alt', "doUniverseTeaserImage");
 $("#do #image").append("<img src='../media/do/doU.jpg'>");
 $("#do #image img").addClass("themeImg");
 $("#do #image img").attr('alt', "doUniverseTeaserImage");
    //suho
    $("#suho #collapseImg").append("<img src='../media/suho/suhoU.jpg'>");
    $("#suho #collapseImg img").addClass("themeImg");
    $("#suho #collapseImg img").attr('alt', "suhoUniverseTeaserImage");
    $("#suho #image").append("<img src='../media/suho/suhoU.jpg'>");
    $("#suho #image img").addClass("themeImg");
    $("#suho #image img").attr('alt', "suhoUniverseTeaserImage");
    //baekhyun
    $("#baekhyun #collapseImg").append("<img src='../media/baekhyun/baekhyunU.jpg'>");
    $("#baekhyun #collapseImg img").addClass("themeImg");
    $("#baekhyun #collapseImg img").attr('alt', "baekhyunUniverseTeaserImage");
    $("#baekhyun #image").append("<img src='../media/baekhyun/baekhyunU.jpg'>");
    $("#baekhyun #image img").addClass("themeImg");
    $("#baekhyun #image img").attr('alt', "baekhyunUniverseTeaserImage");
    //lay
    $("#lay #collapseImg").append("<img src='../media/notThere.png'>");
    $("#lay #collapseImg img").addClass("themeImg");
    $("#lay #collapseImg img").attr('alt', "notThereImage");
    $("#lay #image").append("<img src='../media/notThere.png'>");
    $("#lay #image img").addClass("themeImg");
    $("#lay #image img").attr('alt', "notThereImage");
    //chen
    $("#chen #collapseImg").append("<img src='../media/chen/chenU.jpg'>");
    $("#chen #collapseImg img").addClass("themeImg");
    $("#chen #collapseImg img").attr('alt', "chenUniverseTeaserImage");
    $("#chen #image").append("<img src='../media/chen/chenU.jpg'>");
    $("#chen #image img").addClass("themeImg");
    $("#chen #image img").attr('alt', "chenUniverseTeaserImage");
    //xiumin
    $("#xiumin #collapseImg").append("<img src='../media/xiumin/xiuminU.jpg'>");
    $("#xiumin #collapseImg img").addClass("themeImg");
    $("#xiumin #collapseImg img").attr('alt', "xiuminUniverseTeaserImage");
    $("#xiumin #image").append("<img src='../media/xiumin/xiuminU.jpg'>");
    $("#xiumin #image img").addClass("themeImg");
    $("#xiumin #image img").attr('alt', "xiuminUniverseTeaserImage");
    //luhan
    $("#luhan #collapseImg").append("<img src='../media/left.png'>");
    $("#luhan #collapseImg img").addClass("themeImg");
    $("#luhan #collapseImg img").attr('alt', "leftImage");
    $("#luhan #image").append("<img src='../media/left.png'>");
    $("#luhan #image img").addClass("themeImg");
    $("#luhan #image img").attr('alt', "leftImage");
    //kris
    $("#kris #collapseImg").append("<img src='../media/left.png'>");
    $("#kris #collapseImg img").addClass("themeImg");
    $("#kris #collapseImg img").attr('alt', "leftImage");
    $("#kris #image").append("<img src='../media/left.png'>");
    $("#kris #image img").addClass("themeImg");
    $("#kris #image img").attr('alt', "leftImage");
    //tao
    $("#tao #collapseImg").append("<img src='../media/left.png'>");
     $("#tao #collapseImg img").addClass("themeImg");
     $("#tao #collapseImg img").attr('alt', "leftImage");
     $("#tao #image").append("<img src='../media/left.png'>");
     $("#tao #image img").addClass("themeImg");
     $("#tao #image img").attr('alt', "leftImage");

    $("img").removeClass("currentTheme");
    $("#universeAlbum img").addClass("currentTheme");
    document.getElementById("themeName").innerHTML = "Current Theme: Universe";
});

/**********************
 COUNTDOWN
 ***********************/
$("#countdownAlbum").click(function(){
    $("img").remove(".themeImg");
    //sehun
    $("#sehun #collapseImg").append("<img src='../media/sehun/sehunC.jpg'>");
    $("#sehun #collapseImg img").addClass("themeImg");
    $("#sehun #collapseImg img").attr('alt', "sehunCountdownTeaserImage");
    $("#sehun #image").append("<img src='../media/sehun/sehunC.jpg'>");
    $("#sehun #image img").addClass("themeImg");
    $("#sehun #image img").attr('alt', "sehunCountdownTeaserImage");
    //kai
    $("#kai #kcollapseImg").append("<img src='../media/kai/kaiC.jpg'>");
    $("#kai #kcollapseImg img").addClass("themeImg");
    $("#kai #kcollapseImg img").attr('alt', "kaiCountdownTeaserImage");
    $("#kai #kimage").append("<img src='../media/kai/kaiC.jpg'>");
    $("#kai #kimage img").addClass("themeImg");
    $("#kai #kimage img").attr('alt', "kaiCountdownTeaserImage");
    //chanyeol
    $("#chanyeol #ccollapseImg").append("<img src='../media/chanyeol/chanyeolC.jpg'>");
    $("#chanyeol #ccollapseImg img").addClass("themeImg");
    $("#chanyeol #ccollapseImg img").attr('alt', "chanyeolCountdownTeaserImage");
    $("#chanyeol #cimage").append("<img src='../media/chanyeol/chanyeolC.jpg'>");
    $("#chanyeol #cimage img").addClass("themeImg");
    $("#chanyeol #cimage img").attr('alt', "chanyeolCountdownTeaserImage");
 //do
 $("#do #collapseImg").append("<img src='../media/do/doC.jpg'>");
 $("#do #collapseImg img").addClass("themeImg");
 $("#do #collapseImg img").attr('alt', "doCountdownTeaserImage");
 $("#do #image").append("<img src='../media/do/doC.jpg'>");
 $("#do #image img").addClass("themeImg");
 $("#do #image img").attr('alt', "doCountdownTeaserImage");
    //suho
    $("#suho #collapseImg").append("<img src='../media/suho/suhoC.jpg'>");
    $("#suho #collapseImg img").addClass("themeImg");
    $("#suho #collapseImg img").attr('alt', "suhoCountdownTeaserImage");
    $("#suho #image").append("<img src='../media/suho/suhoC.jpg'>");
    $("#suho #image img").addClass("themeImg");
    $("#suho #image img").attr('alt', "suhoCountdownTeaserImage");
    //baekhyun
    $("#baekhyun #collapseImg").append("<img src='../media/baekhyun/baekhyunC.jpg'>");
    $("#baekhyun #collapseImg img").addClass("themeImg");
    $("#baekhyun #collapseImg img").attr('alt', "baekhyunCountdownTeaserImage");
    $("#baekhyun #image").append("<img src='../media/baekhyun/baekhyunC.jpg'>");
    $("#baekhyun #image img").addClass("themeImg");
    $("#baekhyun #image img").attr('alt', "baekhyunCountdownTeaserImage");
    //lay
    $("#lay #collapseImg").append("<img src='../media/notThere.png'>");
    $("#lay #collapseImg img").addClass("themeImg");
    $("#lay #collapseImg img").attr('alt', "notThereImage");
    $("#lay #image").append("<img src='../media/notThere.png'>");
    $("#lay #image img").addClass("themeImg");
    $("#lay #image img").attr('alt', "notThereImage");
    //chen
    $("#chen #collapseImg").append("<img src='../media/chen/chenC.jpg'>");
    $("#chen #collapseImg img").addClass("themeImg");
    $("#chen #collapseImg img").attr('alt', "chenCountdownTeaserImage");
    $("#chen #image").append("<img src='../media/chen/chenC.jpg'>");
    $("#chen #image img").addClass("themeImg");
    $("#chen #image img").attr('alt', "chenCountdownTeaserImage");
    //xiumin
    $("#xiumin #collapseImg").append("<img src='../media/xiumin/xiuminC.jpg'>");
    $("#xiumin #collapseImg img").addClass("themeImg");
    $("#xiumin #collapseImg img").attr('alt', "xiuminCountdownTeaserImage");
    $("#xiumin #image").append("<img src='../media/xiumin/xiuminC.jpg'>");
    $("#xiumin #image img").addClass("themeImg");
    $("#xiumin #image img").attr('alt', "xiuminCountdownTeaserImage");
    //luhan
    $("#luhan #collapseImg").append("<img src='../media/left.png'>");
    $("#luhan #collapseImg img").addClass("themeImg");
    $("#luhan #collapseImg img").attr('alt', "leftImage");
    $("#luhan #image").append("<img src='../media/left.png'>");
    $("#luhan #image img").addClass("themeImg");
    $("#luhan #image img").attr('alt', "leftImage");
    //kris
    $("#kris #collapseImg").append("<img src='../media/left.png'>");
    $("#kris #collapseImg img").addClass("themeImg");
    $("#kris #collapseImg img").attr('alt', "leftImage");
    $("#kris #image").append("<img src='../media/left.png'>");
    $("#kris #image img").addClass("themeImg");
    $("#kris #image img").attr('alt', "leftImage");
    //tao
    $("#tao #collapseImg").append("<img src='../media/left.png'>");
     $("#tao #collapseImg img").addClass("themeImg");
     $("#tao #collapseImg img").attr('alt', "leftImage");
     $("#tao #image").append("<img src='../media/left.png'>");
     $("#tao #image img").addClass("themeImg");
     $("#tao #image img").attr('alt', "leftImage");

    $("img").removeClass("currentTheme");
    $("#midAlbum img").addClass("currentTheme");
    document.getElementById("themeName").innerHTML = "Current Theme: Universe";
});
