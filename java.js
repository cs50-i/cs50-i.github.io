
const heart=document.getElementById("heart_l");

var vid = document.getElementById("gaya3_sing");
vid.autoplay = true;
vid.load(); 


heart.addEventListener("click",defpage)


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
    location.href="default.html";
}
