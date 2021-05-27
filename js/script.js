var startResponsive = document.getElementById("startResponsive");
var list = document.getElementById("list");
var open = document.getElementsByClassName("open")[0];
var close = document.getElementsByClassName("close")[0];
var clickList = document.getElementsByClassName("click-list");

/*startResponsive.onclick = function(){
    list.classList.toggle("hide");
};*/
//for open and close navbar with responsive, and show and hide the icons
    startResponsive.onclick = function(){
        if (list.style.maxHeight === "0px" || list.style.maxHeight === ""){
            list.style.maxHeight = "236px";
            open.style.display = "none";
            close.style.display = "block"
        }
        else if (list.style.maxHeight = "236px"){
            list.style.maxHeight = "0";
            open.style.display = "block";
            close.style.display = "none"
        };
    };

//for hide navebar whin click
    for( i = 0; i <= clickList.length; i++){
        clickList[i].onclick = function(){
            list.style.maxHeight = "0";
            open.style.display = "block";
            close.style.display = "none"
        }
    };