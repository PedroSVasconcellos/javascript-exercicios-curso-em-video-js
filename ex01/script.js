function horaDiaMes() {
  var msg = document.getElementById('msg')
  var img = document.getElementById('imagem')
  var data = new Date();
  var horaAgora = data.getHours();
  var minAgora = data.getMinutes();
  
  msg.innerHTML = `São <strong>${horaAgora}:${minAgora}</strong>`;
  
  if (12 <= horaAgora && horaAgora < 18) {
    mtn.innerHTML = 'Tarde'
    img.src = './img/tarde.png'
  } else if (0 <= horaAgora && horaAgora < 6 ){
    mtn.innerHTML = 'Madrugada'
    img.src = './img/noite.png'
    document.body.style.background = '#11111f'  
  } else if (18 <= horaAgora && horaAgora < 24) {
    mtn.innerHTML = 'Noite'
    img.src = './img/noite.png'
    document.body.style.background = '#173d64'
  } else if (6 <= horaAgora && horaAgora < 12) {
    mtn.innerHTML = 'Manhã'
    img.src = './img/manha.png'
    document.body.style.background = '#c8ac83'
  }

}
