# Mini-messageboard-agro

# L'AIGLE ROYAL - Mini Tableau de Bord Agricole 🦅🌱

Ce projet est un mini tableau d'affichage (Messageboard) interactif développé avec **Node.js**, **Express**, et **EJS**. Initialement conçu comme un exercice classique de gestion de routes, il a été entièrement adapté et personnalisé pour le secteur de l'**agrobusiness** et de la gestion de plantations tropicales (suivi des cultures de papayes, alertes phytosanitaires, gestion commerciale, etc.).

## 🚀 Fonctionnalités

- **Affichage dynamique (Index) :** Visualisation de toutes les notes, rapports et observations de terrain sous forme de cartes d'affichage fluides et lisibles.
- **Ajout de rapports (Formulaire) :** Possibilité pour les techniciens, responsables de blocs ou commerciaux de publier de nouvelles notes en temps réel via une requête HTTP `POST`.
- **Détails de note (Route dynamique) :** Consultation isolée et détaillée de chaque observation grâce à un système d'identifiants dynamiques (`/message/:id`).
- **Interface thématique :** Design épuré aux couleurs tropicales et agricoles pour une immersion métier complète.

## 🛠️ Technologies utilisées

- **Backend :** Node.js, Express.js
- **Moteur de template :** EJS (Embedded JavaScript)
- **Stylisation :** CSS3 (Responsive Design)
- **Gestion de versions :** Git & GitHub

## 📁 Structure du projet

```text
mini-messageboard-agro/
├── public/          # Fichiers statiques (CSS, images)
├── routes/
│   └── index.js     # Routeur principal (Logique des routes GET/POST et données)
├── views/
│   ├── index.ejs    # Page d'accueil (Tableau de bord)
│   ├── form.ejs     # Formulaire d'ajout de note
│   └── detail.ejs   # Vue détaillée d'un rapport
├── app.js           # Point d'entrée de l'application (Configuration Express)
├── package.json     # Dépendances et scripts du projet
└── README.md        # Documentation du projet