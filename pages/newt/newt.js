//FASE 1//

function validarRespostaNewtFase1(respostaCerta) {
  while (true) {
    var resposta = prompt("Digite sua resposta", "1, 2 ou 3?");

    if (resposta === respostaCerta) {
      alert("Nossa aventura continua!");
      location.assign("./newt-fase2.html");
      break;
    } else if (resposta === "3") {
      alert("Bagman não teria apostado...");
      location.assign("./game-over-newt.html");
      break;
    } else (resposta === "1"); {
      alert("Hmmm... não estou sei se seguimos pelo caminho correto...");
      location.assign("./newt-fase-extra.html");
      break;
    }
  }
}

//FASE 2//

function validarRespostaNewtFase2(respostaCerta) {
  while (true) {
    var resposta = prompt("Digite sua resposta", "1, 2 ou 3?");

    if (resposta === respostaCerta) {
      alert("Nossa aventura continua!");
      location.assign("./newt-fase3.html");
      break;
    } else if (resposta === "1") {
      alert("Bagman não teria apostado...");
      location.assign("./game-over-newt.html");
      break;
    } else (resposta === "2"); {
      alert("Hmmm... não deve ser isso. Tente outra vez!");
      location.assign("./newt-fase2.html");
      break;
    }
  }
}

//FASE 3 - FINAL//

function validarRespostaNewtFase3(respostaCerta) {
  while (true) {
    var resposta = prompt("Digite sua resposta", "1, 2 ou 3?");

    if (resposta === respostaCerta) {
      alert("Nossa aventura continua!");
      location.assign("../final-vencedor.html");
      break;
    } else if (resposta === "2") {
      alert("Bagman não teria apostado...");
      location.assign("game-over-newt.html");
      break;
    } else (resposta === "1");{
      alert("Não parece muito a cara do Newt! Tente outra vez.");
      location.assign("./newt-fase3.html");
      break;
    }
  }
}

//FASE - EXTRA - CAMINHO LONGO//

function validarRespostaNewtFaseExtra(respostaCerta) {
  while (true) {
    var resposta = prompt("Digite sua resposta", "1, 2 ou 3?");

    if (resposta === respostaCerta) {
      alert("Nossa aventura continua!");
      location.assign("./newt-fase2.html");
      break;
    } else if (resposta === "2") {
      alert("Definitivamente não estamos no caminho certo...");
      location.assign("./game-over-newt.html");
      break;
    } else if (resposta === "1"); {
      alert("Hmmm... esse ainda não é o caminho correto. Melhor tentar do início.");
      location.assign("./newt-fase1.html");
      break;
    }
  }
}
