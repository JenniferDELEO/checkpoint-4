DROP TABLE IF EXISTS `user`;      
CREATE TABLE `user` 
( 
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT, 
  `email` VARCHAR(255) NOT NULL, 
  `password` VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS `stuff`;      
CREATE TABLE `stuff`
(
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `imageUrl` VARCHAR(255) NOT NULL,
  `price` INT NOT NULL,
  `userId` INT,
  CONSTRAINT fk_user
  FOREIGN KEY (`userId`)
  REFERENCES user(id)
);