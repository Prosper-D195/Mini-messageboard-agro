const express = require('express');
const app = express();
const path = require('path');
const indexRouter = require('./routes/index');

// 1. Configuration du moteur de template EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 2. Middlewares indispensables
// Permet de lire les données envoyées par les formulaires (req.body)
app.use(express.urlencoded({ extended: true }));
// Permet de servir des fichiers statiques (CSS, images) depuis le dossier public
app.use(express.static(path.join(__dirname, 'public')));

// 3. Liaison vers notre routeur principal
app.use('/', indexRouter);

// 4. Lancement du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur agricole en ligne sur : http://localhost:${PORT}`);
});