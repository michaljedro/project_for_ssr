const admin = require('firebase-admin');
const serviceAccount = require('./config/serviceAccountKey.json'); // Poprawna ścieżka do pliku

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
