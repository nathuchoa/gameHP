function fase1Cedric() {
  var contador = 0;

  while (true) {
    var resposta = prompt(
      "Digite a letra da opção correta",
      "A, B ou C?"
    ).toLowerCase;
    if (resposta == "c") {
      alert("Resposta correta!");
      location.assign("./pages/cedric-h2.html");
      break;
    } else if (option == "a" || option == "b") {
      if (contador >= 2) {
      }
    }
  }
}
