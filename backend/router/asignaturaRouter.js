const express = require('express');
const router = express.Router();
const asignaturaController = require('../controller/asignaturaController');

router.post('/asignatura', asignaturaController.addAsignatura);
router.get('/asignaturas', asignaturaController.getAllAsignaturas);
router.delete('/asignaturas/:id', asignaturaController.deleteAsignatura); 

module.exports = router;
