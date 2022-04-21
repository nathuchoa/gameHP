//FASE 1//

function validarRespostaNinfadoraFase1(respostaCerta) {
  while (true) {
    var resposta = prompt("Digite sua resposta", "1, 2 ou 3?");

    if (resposta === respostaCerta) {
      alert("Nossa aventura continua!");
      location.assign("ninfadora-fase2.html");
      break;
    } else if (resposta === "1") {
      alert("Bagman não teria apostado...");
      location.assign("game-over-ninfadora.html");
      break;
    } else (resposta === "3");{
      alert("Hmmm... não estou sei se seguimos pelo caminho correto...");
      location.assign("ninfadora-fase-extra.html");
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
    } else if (resposta === "1") {
        alert("Bagman não teria apostado...");
        location.assign("game-over-ninfadora.html");
        break;
    } else (resposta === "2");{
      alert("Hmmm... não deve ser isso. Tente outra vez!");
      location.assign("ninfadora-fase2.html");
      break;
    }
  }
}

//FASE 3 - FINAL//

function validarRespostaNinfadoraFase3(respostaCerta) {
  while (true) {

    var resposta = prompt("Digite sua resposta", "1, 2 ou 3?");

    if (resposta === respostaCerta) {
      alert("Nossa aventura continua!");
      location.assign("../final-vencedor.html");
      break;
    } else if (resposta === "3"){
        alert("Bagman não teria apostado...");
        location.assign("game-over-ninfadora.html");
        break;
    } else(resposta === "1");{
      alert("Pelas barbas de Merlim, isso seria muita loucura! Tente outra vez.");
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
    } else if (resposta === "2"){
        alert("Definitivamente não estamos no caminho certo...");
        location.assign("game-over-ninfadora.html");
        break;
    } else if (resposta === "3");{
      alert("Hmmm... esse ainda não é o caminho correto. Melhor tentar de novo.");
      location.assign("ninfadora-fase1.html");
      break;
    }
  }
}
