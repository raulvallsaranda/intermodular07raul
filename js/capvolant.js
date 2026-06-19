function inici(){
//crear imatge 
let pagina = document.getElementsByTagName("html")[0];
let imatge = document.createElement("img");
imatge.setAttribute("alt","Cap terminator");
imatge.setAttribute("src","./img/cap.png");
imatge.setAttribute("id","terminator");
imatge.style.width="80px";
imatge.style.position="absolute";
imatge.style.top=((window.innerHeight)/2)+"px";
imatge.style.left=((window.innerWidth)/2)+"px";

pagina.appendChild(imatge);
let interval = setInterval(mouAleatori,100);
increment = 20;
}

function mouAleatori(){
    let imatge = document.getElementById("terminator");
    let posicioLeftActual = (imatge.style.left).substring(0,((imatge.style.left).length)-2);
    let posicioTopActual = (imatge.style.top).substring(0,((imatge.style.top).length)-2);
    //console.log("top:"+posicioTopActual+", left: "+posicioLeftActual);

    let moviment = Math.floor(Math.random()*4);

    switch(moviment){
        case 0 : posicioLeftActual=parseInt(posicioLeftActual)+increment;
                posicioTopActual=parseInt(posicioTopActual)+increment;
                if(posicioLeftActual>window.innerWidth) posicioLeftActual = 0;
                if(posicioTopActual>window.innerHeight) posicioTopActual = 0;
                imatge.style.left=posicioLeftActual+"px";
                imatge.style.top=posicioTopActual+"px";
                break;
        case 1: posicioLeftActual=parseInt(posicioLeftActual)-increment;
                posicioTopActual=parseInt(posicioTopActual)-increment;
                if(posicioLeftActual<0) posicioLeftActual =window.innerWidth;
                if(posicioTopActual<0) posicioTopActual = window.innerHeight;
                imatge.style.left=posicioLeftActual+"px";
                imatge.style.top=posicioTopActual+"px";
                break; 
        case 2: posicioLeftActual=parseInt(posicioLeftActual)-increment;
                posicioTopActual=parseInt(posicioTopActual)+increment;
                if(posicioLeftActual<0) posicioLeftActual =window.innerWidth;
                if(posicioTopActual>window.innerHeight) posicioTopActual = 0;
                imatge.style.left=posicioLeftActual+"px";
                imatge.style.top=posicioTopActual+"px";
                break; 
        case 3: posicioLeftActual=parseInt(posicioLeftActual)+increment;
                posicioTopActual=parseInt(posicioTopActual)-increment;
                 if(posicioLeftActual>window.innerWidth) posicioLeftActual = 0;
                if(posicioTopActual<0) posicioTopActual = window.innerHeight;
                imatge.style.left=posicioLeftActual+"px";
                imatge.style.top=posicioTopActual+"px";
                break; 
    }
}
window.onload=inici;