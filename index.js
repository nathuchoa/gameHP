function validarRespostaNinfadoraFase1(respostaCerta, msg) {
  var erros = 0;
  while (true) {
    var resposta = prompt("Digite sua resposta", "1, 2 ou 3?");
    if (resposta === respostaCerta) {
      alert("Nossa aventura continua!");
      location.assign("./ninfadora-fase2.html")
      break;
    } else if (resposta === 1){
      if (contador>=2){
        alert("Bagman não teria apostado...");
        location.assign('./game-over-ninfadora.html')
        break;
      }else{
        alert('Hmmm... não estou sei se seguimos pelo caminho correto...')
        location.assign('./ninfadora-fase3.html')
      }
    }
  }
}
