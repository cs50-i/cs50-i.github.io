const he=document.getElementById("he");

he.addEventListener("click",next)



    let c="#1178ed"
    function changec(c){
        c=prompt("what's ur fav color?")
        but.style.color=c
    }

    function h(){

        but.style.color="white";
    }


function al(){
    x=prompt("Hello\n what is ur name?");
    if (x==null){
        return 0;
    }

    but.innerText="Hi"+" "+x
    alert("hey "+x);
}

function defpage(){
    location.href="default.html"
}

function next(){
    location.href="web.html"
}
