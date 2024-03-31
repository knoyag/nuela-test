let asignaturas = [];

exports.addAsignatura = (req, res) => {
  try {
    const { asignatura, tipo, curso, grupo, horas, espacio } = req.body;
    const nuevaAsignatura = {
      id: asignaturas.length + 1, 
      asignatura,
      tipo,
      curso,
      grupo,
      horas,
      espacio
    };
    asignaturas.push(nuevaAsignatura);
    res.status(201).json({ success: true, data: nuevaAsignatura });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Error al añadir la asignatura' });
  }
};

exports.editAsignatura = (req, res) => {
  try {
    const { id } = req.params;
    const { asignatura, tipo, curso, grupo, horas, espacio } = req.body;

    const index = asignaturas.findIndex((asignatura) => asignatura.id === parseInt(id));
    if (index !== -1) {
      asignaturas[index] = {
        id: parseInt(id),
        asignatura,
        tipo,
        curso,
        grupo,
        horas,
        espacio
      };
      res.status(200).json({ success: true, data: asignaturas[index] });
    } else {
      res.status(404).json({ success: false, error: 'Asignatura no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Error al editar la asignatura' });
  }
};

exports.getAllAsignaturas = (req, res) => {
  try {
    res.status(200).json({ success: true, data: asignaturas });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Error al obtener las asignaturas' });
  }
};

exports.deleteAsignatura = (req, res) => {
  try {
    const { id } = req.params;

    const index = asignaturas.findIndex((asignatura) => asignatura.id === parseInt(id));
    if (index !== -1) {
      const deletedAsignatura = asignaturas.splice(index, 1);
      res.status(200).json({ success: true, data: deletedAsignatura });
    } else {
      res.status(404).json({ success: false, error: 'Asignatura no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Error al eliminar la asignatura' });
  }
};

