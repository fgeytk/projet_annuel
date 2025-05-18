-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : lun. 12 mai 2025 à 08:47
-- Version du serveur : 9.1.0
-- Version de PHP : 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `projet_simulation`
--

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

DROP TABLE IF EXISTS `utilisateurs`;
CREATE TABLE IF NOT EXISTS `utilisateurs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Nom` varchar(100) NOT NULL,
  `Genre` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `utilisateurs`
--

INSERT INTO `utilisateurs` (`id`, `Nom`, `Genre`) VALUES
(23, 'Nassim', 'Homme'),
(24, 'nom', 'Homme'),
(25, 'MLMCVNFN', 'Homme'),
(26, 'nom', 'Homme'),
(27, 'nom', 'Homme'),
(28, 'MLMCVNFN', 'Femme'),
(29, 'aurelie', 'Homme'),
(30, 'aurelie', 'Homme'),
(37, 'MLMCVNFN', 'Homme'),
(36, 'MLMCVNFN', 'Homme'),
(35, 'MLMCVNFN', 'Homme'),
(34, 'MLMCVNFN', 'Homme'),
(33, 'aurelie', 'Homme'),
(32, 'aurelie', 'Homme'),
(31, 'aurelie', 'Homme'),
(38, 'MLMCVNFN', 'Homme'),
(39, 'MBOUROU', 'Homme'),
(40, 'MBOUROU', 'Homme'),
(41, 'maman', 'Femme');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
