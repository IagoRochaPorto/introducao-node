const express = require("express")

const app = express()

app.get('/item', (requisition, response) => {
  const id = requisition.query.id

  if (!id) {
    response.send("não teve id")
  } else {
    response.send(`Você solicitou o id: ${id}`)
  }
})

app.listen(3000, () => console.log("Servidor está rodando"))

/*
  [GET] => retorna o que foi solicitado
  [POST] => Cria o que foi solicitado
  [PUT] => atualiza o que foi solicitado
  [DELETE] => deleta o que foi solicitado
  [PATCH] => atualiza partes do que foi solicitado
  
  const foo = [{ id: 1, nome: "iago", sobrenome: "jorge"}]

  GET foo
  [{ id: 1, nome: "iago" }]

  POST foo {nome: "samuel"} => { id: 2, nome: "samuel", sobrenome: "jorge"}

  PUT foo {id: 2, nome: "Rebeca", sobrenome: "jorge"} => {id: 2, nome: "Rebeca"}

  GET foo
  [{
    id: 1,
    nome: "iago",
    sobrenome: "jorge"
  }, {
    id: 2,
    nome: "Rebeca", 
    sobrenome: "jorge"
  }]

  DELETE foo => {id: 2} 

  GET foo
  [{
    id: 1,
    nome: "iago",
    sobrenome: "jorge"
  }]

  PATCH foo {id: 1, sobrenome: "Rocha"}

  GET foo
  [{
    id: 1,
    nome: "iago",
    sobrenome: "rocha"
  }]

*/