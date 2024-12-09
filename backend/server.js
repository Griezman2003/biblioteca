const express = require('express');
const multer = require('multer');
const mysql = require('mysql2');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); 
  }
});

const upload = multer({ storage: storage });

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'biblioteca'
});

db.connect(err => {
  if (err) throw err;
  console.log('Conectado a la base de datos');
});

app.post('/subir-libro', upload.fields([{ name: 'archivo_pdf' }, { name: 'imagen' }]), (req, res) => {
  const { titulo, autor } = req.body;
  const archivo_pdf = '/uploads/' + req.files['archivo_pdf'][0].filename;  
  const imagen_url = '/uploads/' + req.files['imagen'][0].filename;

  
  const query = 'INSERT INTO libros (titulo, autor, archivo_pdf, imagen_url) VALUES (?, ?, ?, ?)';
  db.query(query, [titulo, autor, archivo_pdf, imagen_url], (err, result) => {
    if (err) {
      res.status(500).send('Error al guardar en la base de datos');
      return;
    }
    res.status(200).send('Libro guardado correctamente');
  });
});


app.use('/uploads', express.static('uploads'));

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
