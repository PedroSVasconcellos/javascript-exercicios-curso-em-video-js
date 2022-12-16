function tabuada() {
  let inputNumbe = document.getElementById("inputNumero").value;
  let inputNumber = Number(inputNumbe);
  let select = document.getElementById("selectTabuada");
  if (inputNumbe.length == 0) {
    window.alert("Digite um valor válido");
  } else {
    select.innerHTML = "";
    for (c = 0; c <= 10; c++) {
      let item = document.createElement("option");
      item.text = `${inputNumber} x ${c} = ${inputNumber * c}`;
      item.value = `tab${c}`;
      select.appendChild(item);
    }
  }
}
