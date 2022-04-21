//FASE 1//

function validarRespostaNinfadoraFase1(respostaCerta) {
  while (true) {
    var resposta = prompt("Digite sua resposta", "1, 2 ou 3?");

    if (resposta === respostaCerta) {
      alert("Nossa aventura continua!");
      location.assign("ninfadora-fase2.html");
      break;
    } else if (resposta != respostaCerta) {
      if (resposta === "1");
      {
        alert("Bagman não teria apostado...");
        location.assign("game-over-ninfadora.html");
        break;
      }
    } else if (resposta === "3");
    {
      alert("Hmmm... não estou sei se seguimos pelo caminho correto...");
      location.assign("ninfadora-fase3.html");
      break;
    }
  }
}

//FASE 2//

function validarRespostaNinfadoraFase2(respostaCerta) {
  while (true) {
    var resposta = prompt("Digite sua resposta", "1, 2 ou 3?");

    if (resposta === respostaCerta) {
      alert("Nossa aventura continua!");
      location.assign("ninfadora-fase3.html");
      break;
    } else if (resposta != respostaCerta) {
      if (resposta === "1");
      {
        alert("Bagman não teria apostado...");
        location.assign("game-over-ninfadora.html");
        break;
      }
    } else if (resposta === "3");
    {
      alert("Hmmm... não estou sei se seguimos pelo caminho correto...");
      location.assign("ninfadora-fase2.html");
      break;
    }
  }
}

//FASE 3 - FINAL//

function validarRespostaNinfadoraFaseExtra(respostaCerta) {
  while (true) {
    var resposta = prompt("Digite sua resposta", "1, 2 ou 3?");

    if (resposta === respostaCerta) {
      alert("Nossa aventura continua!");
      location.assign("ninfadora-fase2.html");
      break;
    } else if (resposta != respostaCerta) {
      if (resposta === "1");
      {
        alert("Bagman não teria apostado...");
        location.assign("game-over-ninfadora.html");
        break;
      }
    } else if (resposta === "3");
    {
      alert("Hmmm... não estou sei se seguimos pelo caminho correto...");
      location.assign("ninfadora-fase3.html");
      break;
    }
  }
}


//FASE - EXTRA - CAMINHO LONGO//

function validarRespostaNinfadoraFaseExtra(respostaCerta) {
  while (true) {
    var resposta = prompt("Digite sua resposta", "1, 2 ou 3?");

    if (resposta === respostaCerta) {
      alert("Nossa aventura continua!");
      location.assign("ninfadora-fase2.html");
      break;
    } else if (resposta != respostaCerta) {
      if (resposta === "1");
      {
        alert("Bagman não teria apostado...");
        location.assign("game-over-ninfadora.html");
        break;
      }
    } else if (resposta === "3");
    {
      alert("Hmmm... não estou sei se seguimos pelo caminho correto...");
      location.assign("ninfadora-fase3.html");
      break;
    }
  }
}