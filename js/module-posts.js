
async function carregaPosts() {
    const divPosts = document.getElementById("card")
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1/") //Fetch & Promise
    const postRecebido = await response.json()
  
    divPosts.innerHTML = `
    <br>
    <h5>${postRecebido.title}</h5>
    <p>${postRecebido.body}</p>
    `
  }
  
  carregaPosts()
  
 async function carregaComments() {
    const divComentarios = document.getElementById("comment")
      const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1/comments"
    )
    const comentarioRecebido = await response.json()
  
    let i = 1
    comentarioRecebido.forEach((Comment) => {
      if (i <= 2) {
        let divComment = document.createElement("div")
  
        divComment.innerHTML = `
        <br>
        <h6>${Comment.name}</h6>
        <p>${Comment.body}</p>
        <br>
        `
  
        divComentarios.appendChild(divComment)
        i++
      }
    })
  }
  
  carregaComments()

  