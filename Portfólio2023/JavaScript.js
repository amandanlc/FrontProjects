function mask_tel(){
    var cel = document.getElementById("telefone").value
    console.log(cel)
    cel=cel.slice(0,14)
    console.log(cel)
    document.getElementById("telefone").value=cel

    var cel_formato = document.getElementById("telefone").value
    if(cel_formato[0] != "(")
    {
        if(cel_formato[0] != undefined)
        {
            document.getElementById("telefone").value = "(" + cel_formato[0];
        }
    }

    if(cel_formato[3] != ")")
    {
        if(cel_formato[3] != undefined)
        {
            document.getElementById("telefone").value=cel_formato.slice(0,3) +")"+cel_formato[3];
        }
    }

    if(cel_formato[9] != "-")
    {
        if(cel_formato[9] != undefined)
        {
            document.getElementById("telefone").value=cel_formato.slice(0,9) +"-"+cel_formato[9];
        }
    }
}

function onlyNumbers(tel){
    tel = tel.replace(/[^0-9]/, '');
    // Set to HTML
    var inputResult   = document.getElementById('telefone');
    inputResult.value = tel;
}

function mask_nome(){
    var nome = document.getElementById("nomes").value;
    nome = nome.split("");
    var letra = "";
    for (i = 0; i < nome.length; i++) {
        if (nome[i - 1]) {
            if (nome[i - 1] == " " || nome[i - 1] == ".") {
                nome[i] = nome[i].replace(letra[i], nome[i].toUpperCase());
            }
        } else {
            nome[i] = nome[i].replace(nome[i], nome[i].toUpperCase());
        }
        letra += nome[i];
    }
    document.getElementById("nomes").value = letra;
}

function mask_nome1(){
    var nome = document.getElementById("nomes1").value;
    nome = nome.split("");
    var letra = "";
    for (i = 0; i < nome.length; i++) {
        if (nome[i - 1]) {
            if (nome[i - 1] == " " || nome[i - 1] == ".") {
                nome[i] = nome[i].replace(letra[i], nome[i].toUpperCase());
            }
        } else {
            nome[i] = nome[i].replace(nome[i], nome[i].toUpperCase());
        }
        letra += nome[i];
    }
    document.getElementById("nomes1").value = letra;
}

function mask_msg(){
    var msg = document.getElementById("txtarea").value;
    msg = msg.split("");
    var letra = "";
    for (i = 0; i < msg.length; i++) {
        if (msg[i - 1]) {
            if (msg[i - 1] == " " || msg[i - 1] == ".") {
                msg[i] = msg[i].replace(letra[i], msg[i].toUpperCase());
            }
        } else {
            msg[i] = msg[i].replace(msg[i], msg[i].toUpperCase());
        }
        letra += msg[i];
    }
    document.getElementById("txtarea").value = letra;
}


function ModoEscuro() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}  