const express = require('express');
const router = express.Router();

// Notre tableau de données initiales
const messages = [
  {
    id: 0,
    user: "Responsable Bloc Togoudo",
    text: "Inspection du jour : Excellente nouaison constatée sur les papayers Calina. Prévoir le début de la récolte d'ici 10 jours.",
    category: "Production",
    added: new Date()
  },
  {
    id: 1,
    user: "Service Commercial",
    text: "Nouveau contact avec un grossiste de Dakar intéressé par un approvisionnement hebdomadaire de 500 kg.",
    category: "Business",
    added: new Date()
  }
];

// 1. Route d'index (Affichage)
router.get('/', (req, res) => {
  res.render('index', { 
    title: "L'AIGLE ROYAL - Tableau de Bord Agricole", 
    messages: messages 
  });
});

// 2. Route GET pour afficher le formulaire
router.get('/new', (req, res) => {
  res.render('form');
});

// 3. Route POST pour intercepter la soumission du formulaire
router.post('/new', (req, res) => {
  // On récupère les données grâce aux attributs "name" de nos inputs HTML
  const { messageUser, messageText } = req.body;
  
  // On pousse le nouvel objet dans notre tableau avec un ID unique
  messages.push({
    id: messages.length, // Génère un ID basé sur la taille du tableau
    user: messageUser,
    text: messageText,
    added: new Date()
  });

  // Une fois ajouté, on redirige l'utilisateur vers l'index
  res.redirect('/');
});

// 4. Route GET pour afficher les détails d'un message spécifique
router.get('/message/:id', (req, res) => {
  // On récupère l'ID passé dans l'URL (il arrive sous forme de chaîne de caractères)
  const messageId = parseInt(req.params.id, 10);
  
  // On cherche le message correspondant dans notre tableau
  const message = messages.find(msg => msg.id === messageId);

  // Si le message existe, on l'affiche, sinon on renvoie une erreur 404
  if (message) {
    res.render('detail', { message: message });
  } else {
    res.status(404).send("Note de terrain introuvable.");
  }
});

module.exports = router;