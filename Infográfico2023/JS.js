const terminal = document.getElementsByClassName("root")[0];
const body = document.getElementsByTagName("body")[0];
let newLine = document.createElement("p");
const skipBtn = document.querySelector(".control span");
terminal.appendChild(newLine);

let str = `
Olá, bem vindo ao infográfico feito pelas alunas: 
AMANDA NOGUEIRA, JÚLIA CÂMARA E MARIA FERNANDA.
Com esse infográfico você aprenderá tudo o que tem 
que saber de um jeito prático e rápido sobre
finanças pessoais. Na página a seguir, siga o caminho
e descubra quais são os passos para se ter uma
educação financeira.
`

sayItSlowly(str);

function sayItSlowly(str){
  let username = ``;
  let arr = `${str}`.split("");
  let counter = 0;
  let isPaused = false;

  let interval = setInterval(function(){
    if (!isPaused) {
      printChar(arr[counter]);
      counter++;   
    }

    if (counter === arr.length) {
      clearInterval(interval);
      skipBtn.textContent = "";
      skipBtn.classList.remove("hidden");
      skipBtn.addEventListener("click", () => {
        newLine.textContent = ""
        sayItSlowly(user, place, str)
      })
    }

    if (terminal.clientHeight > (body.clientHeight/2)) {
      if(arr[counter] === " "){
        // toggle alway toggling and wont stop, we need to toggle skipBTN outside interval
        isPaused = true;
        skipBtn.classList.remove("hidden");
        
        skipBtn.addEventListener("click", function(){
          newLine.textContent = `${username}`;
          skipBtn.classList.add("hidden");
          isPaused = false;
      })
      }
    }
  }, 50)
}


function pause(){
  clearInterval(interval);
}

function printChar(char){
  newLine.textContent += char;
}
