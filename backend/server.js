const express = require('express');
const bodyParser = require('body-parser');
const asignaturaRouter = require('./router/asignaturaRouter');

const app = express();

app.use(bodyParser.json());

app.use('/api', asignaturaRouter);

app.use((req, res) => {
  res.status(404).json({ success: false, error: 'Ruta no encontrada' });
});

app.use((err, res) => {
  console.error(err.stack);
  res.status(500).json({ success: false, error: 'Error interno del servidor' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
