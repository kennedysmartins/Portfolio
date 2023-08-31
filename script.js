const imagemCelular1 = document.getElementById("fvec")

const caminhoDasImagens = [
  { src: "../src/phone-x-fvec.png" },
  { src: "../src/phone-x-smartoffice.png" },
  { src: "../src/phone-x-manaon.png" },
]

let indiceBannerAtual = 0

function atualizaBanner(indice) {
  imagemCelular1.src = caminhoDasImagens[indice].src
}

function nextSlide() {
  if (imagemCelular1) {
    if (indiceBannerAtual == caminhoDasImagens.length - 1) {
      indiceBannerAtual = 0
    } else {
      indiceBannerAtual = indiceBannerAtual + 1
    }
    atualizaBanner(indiceBannerAtual)
  }
}

let meuIntervalo = setInterval(nextSlide, 3000)

async function carregaPosts() {
  const divPosts = document.getElementById("card")
  console.log(divPosts)
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1/");
  const postRecebido = await response.json();

  divPosts.innerHTML = `
  <br>
  <h5>${postRecebido.title}</h5>
  <p>${postRecebido.body}</p>
  `

}

carregaPosts()

async function carregaComments() {
  const divComentarios = document.getElementById("comment")
  console.log(divComentarios)
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
  const comentarioRecebido = await response.json();

  let i = 1;
  comentarioRecebido.forEach(Comment => {
    if (i<=2) {
      let divComment = document.createElement("div");

      divComment.innerHTML = `
      <br>
      <h6>${Comment.name}</h6>
      <p>${Comment.body}</p>
      <br>
      `

      divComentarios.appendChild(divComment)
      i++
    }
  });


}

carregaComments()