# checkpoint-4

Ce site a été réalisé avec REACT pour la partie front et Tailwind pour le CSS. La partie backend a été réalisé avec NODE, EXPRESS et MYSQL.

# Démarer le serveur back

1. Cloner le repo depuis GitHub.
2. Se rendre dans le dossier `backend`.
3. Utiliser la commande `npm install` pour installer toutes les dépendances.
4. Utiliser la commande `cp .env.sample .env`(copie le ficher .env.sample et renomme la copie .env).
5. Compléter les variables `DB_USER` et `DB_PASSWORD` avec vos identifiants Mysql. Modifier la variable `DB_PORT` en 3309 si vous passez par Docker.
6. Utilser la commande `npm run resetDB` afin de créer la base de donnée.
7. Lancer le serveur avec la commande `npm start`.

# Démarer le serveur front

1. Ouvrir un nouveau terminal.
2. Se rendre dans le dossier `frontend`.
3. Utiliser la commande `npm install`pour installer toutes les dépendances.
4. Utiliser la commande `npm start`pour lancer le serveur.
