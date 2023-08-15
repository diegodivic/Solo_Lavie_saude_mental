const express = require('express');
const pacienteController = require("../controller/pacienteController");
const psicologoController = require("../controller/psicologoController");
const atendimentoController = require("../controller/atendimentoController");
const authLoginValidation = require("../validations/auth/login")
const authController = require("../controller/authController")
const psicologoPostValidation = require("../validations/psicologos/cadastro");
const pacientePostValidation = require("../validations/pacientes/cadastro")
const routes = express.Router();

// Rotas Paciente

routes.get("/pacientes", pacienteController.listarPaciente);
/*routes.get("/pacientes/:id", pacienteController.listarPacienteById);*/
routes.post("/pacientes", pacientePostValidation, pacienteController.cadastrarPaciente);
routes.put("/pacientes/:id", pacienteController.atualizarPaciente);
routes.delete("/pacientes/:id", pacienteController.deletarPaciente);


// Rota Psicologo

routes.get("/psicologos", psicologoController.listarPsicologo);
routes.get("/psicologos/:id", psicologoController.listarPsicologoById);
routes.post("/psicologos", psicologoPostValidation, psicologoController.cadastrarPsicologo);
routes.post("/login", authLoginValidation, authController.login);
routes.put("/psicologos/:id", psicologoController.atualizarPsicologo);
routes.delete("/psicologos/:id", psicologoController.deletarPsicologo);

// Rota Atendimento

routes.get("/atendimentos", atendimentoController.listarAtendimento);
routes.post("/atendimentos", atendimentoController.cadastrarAtendimento);


module.exports = routes;