//set the expanding things closed at start
window.onload=function(){
    $("#expand").hide();
    $("#kai #kexpand").hide();
    $("#chanyeol #cexpand").hide();
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
     document.getElementById("sehunDisplayBox").innerHTML = "<p>Main Dancer, Rapper</p>";
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

     $("img").removeClass("currentTheme");
     $("#powerAlbum img").addClass("currentTheme");
     document.getElementById("themeName").innerHTML = "Current Theme: Power";
 });
