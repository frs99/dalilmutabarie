var startResponsive = document.getElementById("startResponsive");
var list = document.getElementById("list");
var open = document.getElementsByClassName("open");
var close = document.getElementsByClassName("close");
    document.getElementById("list").style.heigh
    startResponsive.onclick = function(){
        if (document.getElementById("list").style.height === "0px" || document.getElementById("list").style.height === ""){
            document.getElementById("list").style.height = "auto";
            document.getElementsByClassName("open")[0].style.display = "none";
            document.getElementsByClassName("close")[0].style.display = "block"
        }
        else if (document.getElementById("list").style.height = "auto"){
            document.getElementById("list").style.height = "0";
            document.getElementsByClassName("open")[0].style.display = "block";
            document.getElementsByClassName("close")[0].style.display = "none"
        };
    };