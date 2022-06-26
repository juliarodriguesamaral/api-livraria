import express from "express"
import LivroController from "../controllers/livrosController.js"

const router = express.Router()

router //Ordem da mais específica para menos específica
    .get("/livros", LivroController.listarLivros)
    .get("livros/busca", LivroController.listarLivroPorEditora)
    .get("/livros/:id", LivroController.listarLivroPorId)
    .post("/livros", LivroController.cadastrarLivro)
    .put("/livros/:id", LivroController.atualizarLivro)
    .delete("/livros/:id", LivroController.excluirLivro)

export default router