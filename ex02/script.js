function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.querySelector("#res");
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente.");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var sexo = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      sexo = "Masculino";
      if (idade >= 0 && idade < 12) {
        //CRIANÇA
        img.setAttribute("src", "./img/homem-crianca.png");
        img.setAttribute("width", "250px");
      } else if (idade >= 12 && idade < 18) {
        //JOVEM
        img.setAttribute("src", "./img/homem-jovem.png");
        img.setAttribute("width", "250px");
      } else if (idade >= 18 && idade < 65) {
        //ADULTO
        img.setAttribute("src", "./img/homem-adulto.png");
        img.setAttribute("width", "250px");
      } else if (idade > 65) {
        //IDOSO
        img.setAttribute("src", "./img/homem-idoso.png");
        img.setAttribute("width", "250px");
      }
    } else if (fsex[1].checked) {
      sexo = "Feminino";
      if (idade >= 0 && idade < 12) {
        //CRIANÇA
        img.setAttribute("src", "./img/mulher-crianca.png");
        img.setAttribute("width", "250px");
      } else if (idade >= 12 && idade < 18) {
        //JOVEM
        img.setAttribute("src", "./img/mulher-jovem.png");
        img.setAttribute("width", "250px");
      } else if (idade >= 18 && idade < 65) {
        //ADULTO
        img.setAttribute("src", "./img/mulher-adulta.png");
        img.setAttribute("width", "250px");
      } else if (idade > 65) {
        //IDOSO
        img.setAttribute("src", "./img/mulher-idosa.png");
        img.setAttribute("width", "250px");
      }
    }
    res.innerHTML = `<p>Idade: ${idade} | Sexo: ${sexo}</p>`;
    res.appendChild(img);
  }
}
