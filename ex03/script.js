function contar() {
  let ini = document.getElementById("txti");
  let fim = document.getElementById("txtf");
  let pas = document.getElementById("txtp");
  let res = document.getElementById("res");

  if (
    ini.value.length === 0 ||
    fim.value.length === 0 ||
    pas.value.length === 0
  ) {
    window.alert("[ERRO] Preencha todos os dados.");
  } else {
    res.innerHTML = "Contando: <br>";
    let numini = Number(ini.value);
    let numfim = Number(fim.value);
    let numpas = Number(pas.value);
    if (numpas === 0) {
        window.alert('[ERRO] Neste campo "0" é invalido. O valor adotado será "1".' )
        numpas = 1
    }
    if (numini < numfim) {
      // Contagem crescente
      for (let c = numini; c <= numfim; c += numpas) {
        res.innerHTML += `${c} \u{1F449} `;
      }
    } else if (numini > numfim) {
      //Contagem decrescente
      for (let c = numini; c >= numfim; c -= numpas) {
        res.innerHTML += `${c} \u{1F449} `;
      }
    }
    res.innerHTML += `\u{1F3C1}`;
  }
}
