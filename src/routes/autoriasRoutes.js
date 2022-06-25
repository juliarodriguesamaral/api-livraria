import express from "express"
import AutoriaController from "../controllers/autoriasController.js"

const router = express.Router()

router
    .get("/autorias", AutoriaController.listarAutorias)
    .get("/autorias/:id", AutoriaController.listarAutoriaPorId)
    .post("/autorias", AutoriaController.cadastrarAutoria)
    .put("/autorias/:id", AutoriaController.atualizarAutoria)
    .delete("/autorias/:id", AutoriaController.excluirAutoria)

export default router