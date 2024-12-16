-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: booksdb
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `genre` varchar(100) NOT NULL,
  `publication_year` int DEFAULT NULL,
  `language` varchar(100) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `isbn` varchar(50) NOT NULL,
  `publisher` varchar(255) DEFAULT NULL,
  `rating` decimal(2,1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `isbn` (`isbn`),
  CONSTRAINT `books_chk_1` CHECK (((`rating` >= 1.0) and (`rating` <= 5.0)))
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES (1,'The Great Gatsby','F. Scott Fitzgerald','Tragedy and Mystery',1932,'English and Spanish',1099.00,'978-0743273565','Charles Scribners Sons',4.7),(2,'Angles and Demons','Dan Brown','Mystery-thriller',2000,'English',899.99,'0-671-02735-2(US)/9780552160896(UK)','Corgi Books',4.7),(3,'Interstellar:The complete story','Christopher Nolan & Jonathan Nolan','Sci-Fi',2014,'English',999.00,'0571314406/9780571314409','Faber & Faber',4.9),(4,'1984','George Orwell','Dystopian',1949,'English',719.00,'978-0451524935','Secker & Warburg',4.7),(5,'Pride and Prejudice','Jane Austen','Romance',1813,'English',1049.00,'978-1503290563','T. Egerton',4.6),(6,'To Kill a Mockingbird','Harper Lee','Fiction',1960,'English',1199.00,'978-0061120084','J.B. Lippincott & Co.',4.8),(8,'War and Peace','Leo Tolstoy','Historical Fiction',1869,'Russian',1799.00,'978-1853260629','The Russian Messenger',4.5);
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-10 16:00:38
