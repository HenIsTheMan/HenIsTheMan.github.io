$(document).ready(function(){
    $("#title1").click(function(){
        TextToSpeech($(".vids").is(":hidden") ? "Revealing quality content" : "Closing quality content");
        if($(".vids").is(":hidden")){
            $(".row1").delay(1500).slideDown(1100, "swing");
            $(".row2").delay(3000).slideDown(1200, "swing");
        } else{
            setTimeout(function(){
                $(".row2").slideUp(1200, "swing");
            }, 1500);
            setTimeout(function(){
                $(".row1").slideUp(1200, "swing");
            }, 3000);
        }
    });
    $("#title2").click(function(){
        TextToSpeech(document.getElementById("content1").style.display == "none" ? "Maximising About Me section" : "Minimising About Me section");
        if(document.getElementById("content1").style.display != "none"){
            $("#content1").delay(1500).slideUp(2000);
        } else{
            $("#content1").delay(1500).slideDown(2000);
        }
    });
    $("#title3").click(function(){
        TextToSpeech(document.getElementById("content2").style.display == "none" ? "Maximising Cubing section" : "Minimising Cubing section");
        if(document.getElementById("content2").style.display != "none"){
            setTimeout(function(){
                $("#content2").slideUp(2000);
            }, 1500);
        } else{
            $("header").fadeOut(400);
            setTimeout(function(){
                $("html, body").animate({scrollTop: $("#cubing").offset().top}, 1000);
            }, 500);
            setTimeout(function(){
                $("#content2").slideDown(2000);
            }, 1500);
        }
    });
    var name;
    window.onload = function(){
        winSize();
        bgSwitch(localStorage.getItem("index"));
        if(localStorage.getItem("Name") !== null){
            getTTS();
            document.getElementById("name").textContent = "Change name";
            document.getElementById("nameDisplay").textContent = "Name: " + localStorage.getItem("Name");
            setTimeout(function(){
                $("#nameDisplay").css("color", "rgb(99, 220, 99)");
            }, 3000);
        }
    };
    window.onresize = winSize;
    function winSize(){
        $("#dimensions").css("color", "green");
        document.getElementById("dimensions").textContent = "Window size: " + window.innerWidth + " x " + window.innerHeight;
        $("#dimensions").fadeIn(1500);
        setTimeout(function(){
            $("#dimensions").css("color", "rgb(99, 220, 99)");
        }, 1500);
    }
    document.addEventListener("keypress", function(){
        if(event.keyCode >= 48 && event.keyCode < 58){
            var bgIndex = event.keyCode - 48;
            if(typeof(Storage) == "undefined"){
                bgSwitch(bgIndex);
            } else{
                localStorage.setItem("index", bgIndex);
                bgSwitch(localStorage.getItem("index"));
            }
        }
        switch(event.keyCode){
            case 66: case 98: $("a[href = '#goToBottom']").trigger("click"); break;
            case 84: case 116: $("a[href = '#goToTop']").trigger("click");
        }
    });
    function bgSwitch(index){
        $("section, .button").css("background", "url(images/" + index.toString() + ".jpg)");
        $("section, .button").css("background-position", "center bottom");
        $("section, .button").css("background-size", "cover");
        $("section, .button").css("background-attachment", "fixed");
    }
    function getTTS(){
        if(window.speechSynthesis.getVoices().length === 0){
            window.speechSynthesis.addEventListener("voiceschanged", TextToSpeech("Hi " + localStorage.getItem("Name") + ", how are you doing?"));
        } else{
            TextToSpeech("Hi " + localStorage.getItem("Name") + ", how are you doing?");
        }
    }
    function TextToSpeech(Text){
        var voice;
        var getVoices = window.speechSynthesis.getVoices();
        for(var i = 0; i < getVoices.length; i++){
            voice = getVoices[i];
            if(voice.lang == "en-GB"){
                break;
            } else if(i == getVoices.length - 1){
                voice = getVoices[0];
            }
        }
        var speech = new SpeechSynthesisUtterance();
        speech.onend = function(){
            document.getElementById("name").textContent = "Change name";
            if(document.getElementById("nameDisplay").textContent != "Name: " + localStorage.getItem("Name")){
                document.getElementById("nameDisplay").textContent = "Name: " + localStorage.getItem("Name");
                $("#nameDisplay").css("color", "rgb(99, 220, 99)");
            }
        };
        speech.voice = voice;
        speech.rate = 1;
        speech.pitch = 0.5;
        speech.text = Text;
        window.speechSynthesis.speak(speech);
    }
    $("#name").click(function(){
        if(typeof(Storage) == "undefined"){
            alert("Web Storage is not supported here.");
        } else{
            name = prompt(name === null ? "Enter your name" : "Enter your new name", name === null ? "Jeff" : name);
            if(name !== null){
                localStorage.setItem("Name", name);
                getTTS();
            }
        }
    });
});