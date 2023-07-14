const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// Konfigurasi multer
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

// Menampilkan halaman upload file
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Menangani permintaan upload file
app.post('/upload', upload.single('file'), function(req, res) {
  // req.file berisi informasi file yang diunggah
  res.send('File berhasil diunggah');
});

// Menjalankan server pada port 3000
app.listen(3000, function() {
  console.log('Server berjalan pada port 3000');
});
