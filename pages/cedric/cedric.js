//FASE 1//

function validarRespostaCedrictFase1(respostaCerta) {
  while (true) {
    var resposta = prompt("Digite sua resposta", "1, 2 ou 3?");

    if (resposta === respostaCerta) {
      alert("Nossa aventura continua!");
      location.assign("./cedric-fase2.html");
      break;
    } else if (resposta === "2") {
      alert("Bagman não teria apostado...");
      location.assign("./game-over-cedric.html");
      break;
    } else (resposta === "1"); {
      alert("Hmmm... não estou sei se seguimos pelo caminho correto...");
      location.assign("./cedric-fase-extra.html");
      break;
    }
  }
}

//FASE 2//

function validarRespostaCedricFase2(respostaCerta) {
  while (true) {
    var resposta = prompt("Digite sua resposta", "1, 2 ou 3?");

    if (resposta === respostaCerta) {
      alert("Nossa aventura continua!");
      location.assign("./cedric-fase3.html");
      break;
    } else if (resposta === "1") {
      alert("Bagman não teria apostado...");
      location.assign("./game-over-cedric.html");
      break;
    } else (resposta === "3"); {
      alert("Hmmm... não deve ser isso. Tente outra vez!");
      location.assign("./cedric-fase2.html");
      break;
    }
  }
}

//FASE 3 - FINAL//

function validarRespostacedricFase3(respostaCerta) {
  while (true) {
    var resposta = prompt("Digite sua resposta", "1, 2 ou 3?");

    if (resposta === respostaCerta) {
      alert("Nossa aventura continua!");
      location.assign("../final-vencedor.html");
      break;
    } else if (resposta === "3") {
      alert("Bagman não teria apostado...");
      location.assign("game-over-cedric.html");
      break;
    } else (resposta === "1");{
      alert("Não parece muito a cara do cedric! Tente outra vez.");
      location.assign("./cedric-fase3.html");
      break;
    }
  }
}

//FASE - EXTRA - CAMINHO LONGO//

function validarRespostacedricFaseExtra(respostaCerta) {
  while (true) {
    var resposta = prompt("Digite sua resposta", "1, 2 ou 3?");

    if (resposta === respostaCerta) {
      alert("Nossa aventura continua!");
      location.assign("./cedric-fase2.html");
      break;
    } else if (resposta === "1") {
      alert("Definitivamente não estamos no caminho certo...");
      location.assign("./game-over-cedric.html");
      break;
    } else if (resposta === "3"); {
      alert("Hmmm... esse ainda não é o caminho correto. Melhor tentar do início.");
      location.assign("./cedric-fase1.html");
      break;
    }
  }
}
