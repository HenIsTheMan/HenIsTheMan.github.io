$(document).ready(function(){
    window.onbeforeunload = function(){
        window.scrollTo(0, 0);
    };
    $(".vids").hide();
    $("#buttons").fadeIn(1000, "linear");
    $("section").slideDown(2000, "swing");
    $("nav").fadeIn(1000, "swing");
    document.getElementById("email").addEventListener("click", function(){
        window.location.href = "mailto:193541T@mymail.nyp.edu.sg";
    });
    $(".fa-facebook").on("mouseenter", function(){
        $(this).animate({opacity: 0.5}, 800);
    });
    $(".fa-facebook").on("mouseleave", function(){
        $(this).animate({opacity: 1}, 800);
    });
    $(".fa-instagram").on("mouseenter", function(){
        $(this).animate({opacity: 0.5}, 800);
    });
    $(".fa-instagram").on("mouseleave", function(){
        $(this).animate({opacity: 1}, 800);
    });
    $(".fa-twitter").on("mouseenter", function(){
        $(this).animate({opacity: 0.5}, 800);
    });
    $(".fa-twitter").on("mouseleave", function(){
        $(this).animate({opacity: 1}, 800);
    });
    $(".fa-youtube").on("mouseenter", function(){
        $(this).animate({opacity: 0.5}, 800);
    });
    $(".fa-youtube").on("mouseleave", function(){
        $(this).animate({opacity: 1}, 800);
    });
    document.getElementById("first").addEventListener("click", function(){
        $("header").css({"display": "none"});
        $("html, body").animate({scrollTop: $("#aboutMe").offset().top}, 800);
    });
    $("#last").click(function(){
        $("header").css({"display": "none"});
        $("html, body").animate({scrollTop: $("#cubing").offset().top}, 800);
    });
    document.getElementById("1st").addEventListener("click", function(){
        $("#first").trigger("click");
    });
    $("#2nd").click(function(){
        $("#last").trigger("click");
    });
    window.addEventListener("wheel", function(){
        $("header").css({"display": ""});
    });
    var elements1 = document.getElementsByClassName("button");
    var elements2 = document.getElementsByTagName("li");
    var elements3 = document.getElementsByTagName("a");
    for(var i = 0; i < elements1.length; i++){ 
        elements1[i].style.cursor = "pointer";
    }
    for(var j = 0; j < elements2.length; j++){ 
        elements2[j].style.cursor = "pointer";
    }
    for(var k = 0; k < elements3.length; k++){
        elements3[k].style.cursor = "pointer";
    }
    var addDot;
    var addDots;
    var removeDots;
    var removeAddDot;
    document.getElementById("Chris1").addEventListener("dragstart", function(){
        document.getElementById("heading").textContent = "Currently dragging Chris";
        addDot = setInterval(function(){ document.getElementById("heading").textContent += "."; }, 1000);
        removeDots = setTimeout(function(){ document.getElementById("heading").textContent = "Currently dragging Chris"; }, 3700); 
        removeAddDot = setTimeout(function(){ clearInterval(addDot); }, 3500);
        addDots = setInterval(function(){
            addDot = setInterval(function(){ document.getElementById("heading").textContent += "."; }, 1000);
            removeDots = setTimeout(function(){ document.getElementById("heading").textContent = "Currently dragging Chris"; }, 3700); 
            removeAddDot = setTimeout(function(){ clearInterval(addDot); }, 3500);
        }, 3800);
    });
    document.addEventListener("dragend", function(){
        clearInterval(addDot);
        clearInterval(addDots);
        clearTimeout(removeDots);
        clearTimeout(removeAddDot);
        document.getElementById("heading").textContent = "Welcome to a website about me!";
    });
    $("a[href = '#goToTop']").click(function(){
        if($("html, body").scrollTop() !== 0){
            $("html, body").animate({scrollTop: 0}, 800);
            $("header").fadeOut(400);
            $("header").fadeIn(400);
        }
    });
    $("a[href = '#goToBottom']").click(function(){
        if($(window).scrollTop() + $(window).height() != $(document).height()){
            $("html, body").animate({scrollTop: document.body.scrollHeight}, 800);
            $("header").fadeOut(400);
            $("header").fadeIn(400);
        }
    });
    var media = window.matchMedia("(max-width: 900px)");
    changeImg(media);
    media.addListener(changeImg);
    function changeImg(media){
        if(media.matches){
            document.getElementById("SPS").src = "images/SPS_V2.png";
            document.getElementById("PHS").src = "images/PHS_V2.png";
            document.getElementById("NYP").src = "images/NYP_V2.png";
        } else{
            document.getElementById("SPS").src = "images/SPS.png";
            document.getElementById("PHS").src = "images/PHS.png";
            document.getElementById("NYP").src = "images/NYP.jpg";
        }
    }
    var count = 0;
    var text = ["Stay here as long as you like :)",
                "Always remember to brush your teeth",
                "Why are you still scrolling on this page?",
                "Pls move on",
                "You have to keep moving forward in life",
                "Or else you will be standing still in life",
                "And you should not be standing still ever",
                "Because you might get sniped",
                "And you don't want that to happen",
                "Because there are 2 things involved",
                "You either scream in pain",
                "Or don't scream at all",
                "The End"];
    $(window).scroll(function(){
        if($(window).scrollTop() === 0 || $(window).scrollTop() + $(window).height() == $(document).height()){
            document.getElementById("heading").textContent = text[count];
            count += count != text.length - 1;
        }
    });
});