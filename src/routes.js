const express = require('express');
const router = express.Router();

const ClienteController = require('./controllers/ClienteControllers');
const AdministradorControllers = require('./controllers/AdministradorControllers');
const ClinicaControllers = require('./controllers/ClinicaControllers');
const FichaControllers = require('./controllers/FichaControllers');

router.get('/clientes', ClienteController.pegarTodos);
router.get('/administradores', AdministradorControllers.pegarTodos);
router.get('/clinicas', ClinicaControllers.pegarTodos);
router.get('/fichas', FichaControllers.pegarTodos);
router.get('/cliente/:id_cliente', ClienteController.pegarUmapenas);
router.get('/administrador/:id_funcionarios', AdministradorControllers.pegarUmapenas);
router.get('/clinica/:id_empresa', ClinicaControllers.pegarUmapenas);
router.get('/ficha/:id_ficha', FichaControllers.pegarUmapenas);
router.post('/cliente', ClienteController.inserir);
router.post('/administrador', AdministradorControllers.inserir);
router.put('/cliente/:id_cliente', ClienteController.alterar);
router.put('/administrador/:id_funcionarios', AdministradorControllers.alterar);
router.delete('/cliente/:id_cliente', ClienteController.excluir);
router.delete('/administrador/:id_funcionarios', AdministradorControllers.excluir);
module.exports = router;