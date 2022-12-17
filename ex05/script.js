let lista = [];



function adicionar() {
  var num = document.getElementById("txtnum");
  var n = Number(num.value);
  var sel = document.getElementById("sel");
  if (num.length == 0 || n < 1 || n > 100) {
    return window.alert("Digite um número válido entre 1 e 100");
  } else {
    lista.push(n);
    let option = document.createElement("option");
    option.text = `Valor ${n} adicionado`;
    sel.appendChild(option);
    num.value = ''
    num.focus()
  }
}

function finalizar() {
  if (lista.length == 0) {
    window.alert("Digite valores antes de finalizar");
  } else {
    let res = document.getElementById("res");
    let parag = document.createElement("p");
    let total = 0;
    for (indice in lista) {
      total += lista[indice];
    }
    res.appendChild(parag);
    parag.innerHTML = `Ao todo temos ${lista.length} numeros cadastrados`;
    parag.innerHTML += `<br> O maior número é ${Math.max(...lista)}`;
    parag.innerHTML += `<br> O menor número é ${Math.min(...lista)}`;
    parag.innerHTML += `<br> A soma dos valores é ${total}`;
    parag.innerHTML += `<br> A média dos valores é ${total / lista.length}`;
  }
}
