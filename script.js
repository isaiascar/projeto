function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/assets/avatar-light.png")
     img.setAttribute("alt","Foto de mayke Brito sorrindo, usando óculos escuros e camisa e jaqueta de couro preta, sem barba e fundo roxo e azul.")
  } else {
    img.setAttribute("src", "./assets/assets/avatar.png")
    img.setAttribute("alt","Foto de mayke Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo.")
  }
}
