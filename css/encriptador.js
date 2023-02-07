var botonencriptar=document.querySelector(".btn-en");
var botondesencriptado=document.querySelector(".btn-des");
var botoncopiar=document.querySelector(".btn-cop");

botoncopiar.onclick=copiar;
botonencriptar.onclick=encriptar;
botondesencriptado.onclick=desencriptar;

function encriptar(){
    var frase=document.getElementById("textoEncriptado").value.toLowerCase();

    var textoEncriptado=frase.replace(/e/img, "enter");
    var textoEncriptado=textoEncriptado.replace(/o/img, "ober");
    var textoEncriptado=textoEncriptado.replace(/i/img, "imes");
    var textoEncriptado=textoEncriptado.replace(/a/img, "ai");
    var textoEncriptado=textoEncriptado.replace(/u/img, "ufat");

    document.getElementById("textodesencriptado").innerHTML=textoEncriptado;
    
    
    document.getElementById("botonC").style.display="inline-block";  
    document.getElementById("titulo3").style.visibility="hidden";
}
function desencriptar(){
    var frase=document.getElementById("textoEncriptado").value.toLowerCase();

    var textoEncriptado=frase.replace(/enter/img, "e");
    var textoEncriptado=textoEncriptado.replace(/ober/img, "o");
    var textoEncriptado=textoEncriptado.replace(/imes/img, "i");
    var textoEncriptado=textoEncriptado.replace(/ai/img, "a");
    var textoEncriptado=textoEncriptado.replace(/ufat/img, "u");

    document.getElementById("textodesencriptado").innerHTML=textoEncriptado;

    document.getElementById("titulo3").style.visibility="hidden"
}   

function copiar() { /*esta funcion 1ero agarra el contenido en un variable*/
    var contenido=document.querySelector("#textodesencriptado");
    contenido.select();/*aqui lo pone en una caja*/
    document.execCommand("copy");/*aqui lo copia en el sistema para usarlo despues*/
}
