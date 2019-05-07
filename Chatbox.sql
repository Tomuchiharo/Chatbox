-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Mar 07 Mai 2019 à 11:25
-- Version du serveur :  5.7.26-0ubuntu0.16.04.1
-- Version de PHP :  7.0.33-0ubuntu0.16.04.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `Chatbox`
--

-- --------------------------------------------------------

--
-- Structure de la table `Chat`
--

CREATE TABLE `Chat` (
  `Id` int(11) NOT NULL,
  `chatName` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `Chat`
--

INSERT INTO `Chat` (`Id`, `chatName`) VALUES
(1, 'chat'),
(2, 'bonjour'),
(3, 'coucou'),
(4, 'bonjour'),
(5, ''),
(6, 'COUCOU'),
(7, 'BLA'),
(8, 'BONJOUR!'),
(9, 'BONJOUR!'),
(10, 'YRDE'),
(11, 'YO'),
(12, 'BLA'),
(13, 'BLA'),
(14, 'BLA'),
(15, 'AEEA'),
(16, 'AZEAZEAZ'),
(17, 'AZEAZ'),
(18, 'AZEAE'),
(19, 'AZEAE'),
(20, 'AZEAZ'),
(21, 'AZEAZ'),
(22, 'AZEAZ'),
(23, 'TY\'E'),
(24, 'BLU'),
(25, 'BLU'),
(26, 'BLU'),
(27, 'BLU'),
(28, 'BLU'),
(29, 'BLU'),
(30, 'BLU'),
(31, ''),
(32, 'BLA'),
(33, 'AEAE'),
(34, 'LOLOLOLOLOOLLOGFJKDFJKLAQFKLI'),
(35, 'AEZAZ'),
(36, 'CJ'),
(37, 'YR('),
(38, 'BV'),
(39, 'YE('),
(40, 'YTZ(E'),
(41, 'YTZ(E'),
(42, 'TER\''),
(43, 'COUCOU'),
(44, 'BLA'),
(45, 'JIO'),
(46, 'YE(');

-- --------------------------------------------------------

--
-- Structure de la table `msg`
--

CREATE TABLE `msg` (
  `Id` int(11) NOT NULL,
  `User_Id` int(11) NOT NULL,
  `Content` text NOT NULL,
  `dateTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `chat_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `msg`
--

INSERT INTO `msg` (`Id`, `User_Id`, `Content`, `dateTime`, `chat_Id`) VALUES
(1, 1, 'blabla', '2019-05-03 15:58:00', 1),
(2, 5, 'coucou', '2019-05-06 13:58:04', 2),
(3, 5, 'coucou', '2019-05-06 13:58:06', 2),
(4, 6, 'quoi de neuf?', '2019-05-06 13:58:51', 2),
(5, 6, 'quoi de neuf?', '2019-05-06 14:08:46', 2),
(6, 6, 'quoi de neuf?', '2019-05-06 14:08:47', 2),
(7, 6, 'quoi de neuf?', '2019-05-06 14:08:49', 2),
(8, 6, 'quoi de neuf?', '2019-05-06 14:08:50', 2),
(9, 6, 'quoi de neuf?', '2019-05-06 14:08:51', 2),
(10, 6, 'quoi de neuf?', '2019-05-06 14:08:52', 2),
(11, 5, 'rien de spécial', '2019-05-06 14:39:09', 2),
(12, 5, 'et toi', '2019-05-06 14:39:42', 2),
(13, 6, 'pareil', '2019-05-06 14:39:53', 2),
(14, 6, 'coucou!', '2019-05-06 14:40:52', 2),
(15, 5, 'ça va?', '2019-05-06 14:40:59', 2),
(16, 6, 'et toi', '2019-05-06 14:41:16', 2),
(17, 1, 'léa !', '2019-05-06 14:50:49', 1),
(18, 1, 'hey', '2019-05-06 14:51:18', 1),
(19, 3, 'j\'ai reçu', '2019-05-06 14:51:19', 1),
(20, 11, 'hey!', '2019-05-07 11:09:53', 2);

-- --------------------------------------------------------

--
-- Structure de la table `User`
--

CREATE TABLE `User` (
  `Id` int(6) NOT NULL,
  `Pseudo` varchar(25) NOT NULL,
  `dateTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `mail` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `User`
--

INSERT INTO `User` (`Id`, `Pseudo`, `dateTime`, `mail`, `password`) VALUES
(1, 'toto', '2019-05-03 13:51:36', '', ''),
(2, 'lulu', '2019-05-06 12:35:59', '', ''),
(3, 'moi', '2019-05-06 13:46:07', '', ''),
(4, 'bla', '2019-05-06 13:57:01', '', ''),
(5, 'yo', '2019-05-06 13:57:52', '', ''),
(6, 'jj', '2019-05-06 13:58:43', '', ''),
(7, 'lulu', '2019-05-06 14:43:26', '', ''),
(8, 'moi', '2019-05-06 14:51:12', '', ''),
(9, 'vtygu', '2019-05-06 15:24:15', 'gui', 'bnjuki'),
(10, 'ter', '2019-05-06 15:29:06', 'test@3wa.fr', 't\'er'),
(11, 'jiji', '2019-05-06 16:05:18', 'legars@gmail.com', 'bla'),
(12, 'truc', '2019-05-06 16:30:04', 'trutqz\'ertfl', 'gf'),
(13, 'te', '2019-05-06 16:33:51', 'ye', 'tz\''),
(14, 'truc', '2019-05-06 16:36:04', 'truc@gmail.com', '123');

-- --------------------------------------------------------

--
-- Structure de la table `user_liste`
--

CREATE TABLE `user_liste` (
  `Id_User` int(11) NOT NULL,
  `Id_chat` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Index pour les tables exportées
--

--
-- Index pour la table `Chat`
--
ALTER TABLE `Chat`
  ADD PRIMARY KEY (`Id`);

--
-- Index pour la table `msg`
--
ALTER TABLE `msg`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `User_Id` (`User_Id`),
  ADD KEY `chat_Id` (`chat_Id`);

--
-- Index pour la table `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`Id`);

--
-- Index pour la table `user_liste`
--
ALTER TABLE `user_liste`
  ADD KEY `Id_User` (`Id_User`),
  ADD KEY `Id_chat` (`Id_chat`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `Chat`
--
ALTER TABLE `Chat`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;
--
-- AUTO_INCREMENT pour la table `msg`
--
ALTER TABLE `msg`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT pour la table `User`
--
ALTER TABLE `User`
  MODIFY `Id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `msg`
--
ALTER TABLE `msg`
  ADD CONSTRAINT `msg_ibfk_1` FOREIGN KEY (`User_Id`) REFERENCES `User` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `msg_ibfk_2` FOREIGN KEY (`chat_Id`) REFERENCES `Chat` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `user_liste`
--
ALTER TABLE `user_liste`
  ADD CONSTRAINT `user_liste_ibfk_1` FOREIGN KEY (`Id_chat`) REFERENCES `Chat` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_liste_ibfk_2` FOREIGN KEY (`Id_User`) REFERENCES `User` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
