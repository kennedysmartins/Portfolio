import "./module-posts.js"

const imagemCelular1 = document.getElementById("fvec")
const imagemCelular2 = document.getElementById("smartofficern")
const imagemCelular3 = document.getElementById("portalmanaon")

const caminhoDasImagens1 = [ // Vetor de Objetos
  { src: "../src/phone-x-fvec.png" },
  { src: "../src/phone-x-fvec2.png" },
  { src: "../src/phone-x-fvec3.png" },
]
const caminhoDasImagens2 = [
  { src: "../src/phone-x-smartoffice.png" },
  { src: "../src/phone-x-smartoffice2.png" },
  { src: "../src/phone-x-smartoffice3.png" },
]
const caminhoDasImagens3 = [
  { src: "../src/phone-x-manaon.png" },
  { src: "../src/phone-x-manaon2.png" },
  { src: "../src/phone-x-manaon3.png" },
]

let indiceBannerAtual = 0

function atualizaBanner(indice) {
  imagemCelular1.src = caminhoDasImagens1[indice].src
  imagemCelular2.src = caminhoDasImagens2[indice].src
  imagemCelular3.src = caminhoDasImagens3[indice].src
}

function nextSlide() {
  if (imagemCelular1) {
    if (indiceBannerAtual == caminhoDasImagens1.length - 1) {
      indiceBannerAtual = 0
    } else {
      indiceBannerAtual = indiceBannerAtual + 1
    }
    atualizaBanner(indiceBannerAtual)
  }
}

let meuIntervalo = setInterval(nextSlide, 3000)

const projectImg = document.querySelectorAll(".projectImg")
for(let image of projectImg) {
  image.onclick = () => {
    // Adiciona a classe de animação quando a imagem for clicada
    image.classList.add("zoomIn");

    // Remove a classe de animação após um período de tempo (por exemplo, 1 segundo)
    setTimeout(() => {
      image.classList.remove("zoomIn");
    }, 1000); // 1000ms = 1 segundo
  };
}



