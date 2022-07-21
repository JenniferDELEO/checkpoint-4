DROP TABLE IF EXISTS `users`;      
CREATE TABLE `users` 
( 
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(255) NOT NULL,
  `lastname` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL, 
  `password` VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories`
(
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS `stuff`;      
CREATE TABLE `stuff`
(
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `imageUrl` TEXT NOT NULL,
  `price` INT NOT NULL,
  `categoryId` INT NOT NULL,
  `userId` INT NOT NULL,
  CONSTRAINT fk_users
  FOREIGN KEY (`userId`)
  REFERENCES users(id),
  CONSTRAINT fk_categories
  FOREIGN KEY (`categoryId`)
  REFERENCES categories(id)
);

INSERT INTO `categories` (name)
VALUES ("Véhicules"), ("Mode"), ("Maison"), ("Multimédia"), ("Loisirs");

INSERT INTO `users` (firstname, lastname, email, password)
VALUES ("Jennifer", "DE LEO", "deleo.jennifer@yahoo.fr", "Yoshi007!");

INSERT INTO `stuff` (title, description, imageUrl, price, categoryId, userId)
VALUES ('Ordinateur portable ASUS', "A vendre ordinateur portable de marque Asus fonctionne très bien sûr secteur il manque une batterie et un chargeur c'est un Intel core i7 disque dur 500 giga sous windows 10", 'https://www.grosbill.com/images_produits/7752544c-2184-40cb-85af-f0a12e85cd59.jpg', 750, 4, 1),
('Téléphone Smartphone Samsung Galaxy A13', "Téléphone, état neuf
Achat boutique Orange , 30 mai 2022
Facture à l'appui, garanti 2 ans
Charge rapide, dual sim...je le cède car offre d'un autre, si intérêt, me contacter par téléphone Merci", "https://cdn.lesnumeriques.com/optim/product/68/68179/52d9d1cc-galaxy-a13__450_400.webp", 150, 4, 1),
("Audi a3 tfsi 160 cv 1ere main entretien audi", "bonjour
nous vendons cette belle audi A3 sportback
vehicule francais
toujours entretenu chez audi (factures)
cuir
clim auto
gps
excellent fonctionnement routier
reprise possible
visible a paris 15eme", "https://img.leboncoin.fr/api/v1/lbcpb1/images/b8/a9/0f/b8a90f8183196ddb1ecdb3ce883fc8d69e4a968f.jpg?rule=classified-1200x800-webp", 12000, 1, 1),
("Thermomix TM6", "TM6 vendu avec le panier cuisson le varoma le fouet la spatule ( à changer)
Révisé avec changement des couteaux, et du joint, étalonnage de la balance
il y a 2 ans
il a très peu servi depuis car qq mr/a0 j en ai gagné un plus récent", "https://www.vorwerk.com/fr/fr/c/dam-home/products/thermomix/tm6/thermomix_tm6_black.jpg.imgRendition/1x1/md.jpg", 700, 3, 1),
("Cafetière Tassimo", "Vend cafetière tasimo de marque boch.
En très bonne état de marche.
La vend avec 32 dosette classique et 26 dosette petit déjeuner....", "https://img.leboncoin.fr/api/v1/lbcpb1/images/82/5e/cf/825ecff881efb377e0b717dfa1fec74adde2b1be.jpg?rule=classified-1200x800-webp", 30, 3, 1),
("Téléviseur samsung", "Bonjour vend téléviseur Samsung état neuf sans télécommande mais boutons sur le côté vend cause déménagement", "https://img.leboncoin.fr/api/v1/lbcpb1/images/49/02/20/4902209c887d7c8b1b1a4ee1451a3b414a68b7c4.jpg?rule=classified-1200x800-webp", 40, 4, 1),
("Canapé modulable", "Canapé modulable à votre guise. 6 places
- 2 pièces simples ( 3eme photo )
- 2 pièces d'extrémité, pouvant être ouverte ( 2ème photo )
- 1 pièce d'angle contenant deux places ensemble

Imitation cuir, marron foncé.", "https://img.leboncoin.fr/api/v1/lbcpb1/images/a9/fe/b3/a9feb397ef179aaaca83d2f188beae6acad47847.jpg?rule=classified-1200x800-webp", 300, 3, 1),
("Bureau et chaise en bois pour enfant", "Atmosphera bureau blanc en bois adapté à l enfant doté d'un large casier de rangement avec la chaise en bois blanche et bleue", "https://img.leboncoin.fr/api/v1/lbcpb1/images/c3/89/e8/c389e81d603a0b3e4252a72891829183c0e133e3.jpg?rule=classified-1200x800-webp", 40, 3, 1),
("A vendre table allongé pour 10 a 12 personnes, table neuve", "Table en céramique avec rallonge et ses 6 chaises très Bon état cause déménagement", "https://img.leboncoin.fr/api/v1/lbcpb1/images/d1/3b/d0/d13bd0c212ab9f35abad599d2b1d9ecaaa61a5c9.jpg?rule=classified-1200x800-webp", 3000, 3, 1),
("Taille M - Déguisement Harry Potter très complet", "Costume jamais utilisé , taille M ( adulte)
Comprend :
- Une cape avec écusson brodé et range-baguette
- Une cravate assortie
- Une écharpe
- Une paire de lunette Harry Potter
- Une baguette magique en PVC", "https://img.leboncoin.fr/api/v1/lbcpb1/images/a1/e2/b5/a1e2b566aee05b53983be83362380c53d9e935e6.jpg?rule=classified-1200x800-webp", 32, 2, 1),
("La voleuse de livres, Markus Zusak", "Je vend le livre La voleuse de livres de Markus Zusak, format poche :)", "https://img.leboncoin.fr/api/v1/lbcpb1/images/49/43/e9/4943e94759a244f1b0e6644b33e9683082481fb2.jpg?rule=classified-1200x800-webp", 2, 5, 1),
("Console ps4 pro", "Vendre console ps4 pro 1 to avec deux manettes et charges manettes prix 250€ ferme", "https://img.leboncoin.fr/api/v1/lbcpb1/images/34/23/ca/3423caffd33af4e775d4779c5a877863a49761c6.jpg?rule=classified-1200x800-webp", 250, 4, 1);