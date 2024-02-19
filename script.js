function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const image = document.querySelector("#profile img")

  //substituir a img
  if (html.classList.contains("light")) {
    // se tiver light mode adc a img light
    image.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem light mode, masnter a img normal
    image.setAttribute("src", "./assets/avatar.png")
  }

  //if(html.classList.contains('light')) {
  //  html.classList.remove('light')
  //} else {
  // html.classList.add('light')
  //}
}
