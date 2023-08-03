function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");


//   Mudar Profile

const img = document.querySelector("#profile img")


  if (html.classList.contains("light")) {
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute('alt', ' Foto do  Mayk Brito da Rocketseat sorrindo. Ele usa óculos, possui a barba e os cabelos pretos e esta vestindo uma camisa preta. O fundo da imagem é amarelo.')
    
  } else {
    img.setAttribute('src', './assets/avatar.png')
    img.setAttribute('alt', ' Foto do  Mayk Brito da Rocketseat sorrindo. Ele usa óculos preto, possui a barba e os cabelos pretos e esta vestindo uma jaqueta preta. O fundo da imagem é azul.')
  }

}
 