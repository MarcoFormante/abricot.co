-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Feb 17, 2026 alle 17:06
-- Versione del server: 10.4.32-MariaDB
-- Versione PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `abricot`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `comments`
--

CREATE TABLE `comments` (
  `id` varchar(191) NOT NULL,
  `content` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `taskId` varchar(191) NOT NULL,
  `authorId` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dump dei dati per la tabella `comments`
--

INSERT INTO `comments` (`id`, `content`, `createdAt`, `updatedAt`, `taskId`, `authorId`) VALUES
('cmlpvh2r0001r14gxvj3mh0vg', 'Intégration Stripe prévue pour la semaine prochaine. Documentation consultée.', '2026-02-17 00:35:58.381', '2026-02-17 00:35:58.381', 'cmlpvh2qr001n14gx5zxz5xb5', 'cmlpvh201000014gxs2imfviu'),
('cmlpvh2r5001t14gxkdkvvfnw', 'Tests unitaires écrits pour 80% des fonctions. Tests d\'intégration à venir.', '2026-02-17 00:35:58.385', '2026-02-17 00:35:58.385', 'cmlpvh2qr001n14gx5zxz5xb5', 'cmlpvh201000014gxs2imfviu'),
('cmlpvh2r8001v14gxnbaaot6k', 'Module congés bien avancé. Workflow d\'approbation fonctionnel.', '2026-02-17 00:35:58.389', '2026-02-17 00:35:58.389', 'cmlpvh2qr001n14gx5zxz5xb5', 'cmlpvh27y000314gx2jhpxxp5'),
('cmlpvh2rz002314gxn3q2buq8', 'Formulaires d\'évaluation créés. Interface intuitive et responsive.', '2026-02-17 00:35:58.416', '2026-02-17 00:35:58.416', 'cmlpvh2re001x14gxrkycda3v', 'cmlpvh201000014gxs2imfviu'),
('cmlpvh2s4002514gx2dk44z11', 'Dashboard RH en cours. Statistiques de base affichées.', '2026-02-17 00:35:58.421', '2026-02-17 00:35:58.421', 'cmlpvh2re001x14gxrkycda3v', 'cmlpvh201000014gxs2imfviu'),
('cmlpvh2sa002714gxy5me7bh3', 'Design mobile terminé et validé par le client. Interface moderne et intuitive.', '2026-02-17 00:35:58.426', '2026-02-17 00:35:58.426', 'cmlpvh2re001x14gxrkycda3v', 'cmlpvh258000214gxd517myhc'),
('cmlpvh2sp002d14gxtaq8iq9d', 'Intégration Stripe prévue pour la semaine prochaine. Documentation consultée.', '2026-02-17 00:35:58.441', '2026-02-17 00:35:58.441', 'cmlpvh2sf002914gxir7kis8u', 'cmlpvh201000014gxs2imfviu'),
('cmlpvh2te002l14gxrncobax1', 'Tests unitaires écrits pour 80% des fonctions. Tests d\'intégration à venir.', '2026-02-17 00:35:58.467', '2026-02-17 00:35:58.467', 'cmlpvh2sv002f14gxz8rrz4o8', 'cmlpvh258000214gxd517myhc'),
('cmlpvh2up003314gxxcg51d8i', 'Attention à la sécurité des données. Vérifier les permissions utilisateur.', '2026-02-17 00:35:58.513', '2026-02-17 00:35:58.513', 'cmlpvh2ud002z14gxma1s5zyp', 'cmlpvh201000014gxs2imfviu'),
('cmlpvh2ut003514gxke0mcfiv', 'Deadline respectée, bravo à toute l\'équipe !', '2026-02-17 00:35:58.518', '2026-02-17 00:35:58.518', 'cmlpvh2ud002z14gxma1s5zyp', 'cmlpvh2fg000614gxh5imxwgo'),
('cmlpvh2uy003714gx9nxh1832', 'Petit bug détecté sur mobile. À corriger avant la livraison.', '2026-02-17 00:35:58.523', '2026-02-17 00:35:58.523', 'cmlpvh2ud002z14gxma1s5zyp', 'cmlpvh201000014gxs2imfviu'),
('cmlpvh2vj003f14gxh5abpw4i', 'Graphiques en cours. Chart.js intégré, premiers graphiques affichés.', '2026-02-17 00:35:58.543', '2026-02-17 00:59:54.832', 'cmlpvh2v4003914gxtgn8q9b5', 'cmlpvh201000014gxs2imfviu'),
('cmlpvh2vw003l14gxd7sjo2jv', 'Système d\'alertes planifié. Notifications par email et push prévues.', '2026-02-17 00:35:58.557', '2026-02-17 00:35:58.557', 'cmlpvh2vo003h14gxnfy42jfz', 'cmlpvh201000014gxs2imfviu'),
('cmlpvh2w1003n14gxxxflhu84', 'Excellent travail sur cette tâche ! Le code est propre et bien documenté.', '2026-02-17 00:35:58.562', '2026-02-17 00:35:58.562', 'cmlpvh2vo003h14gxnfy42jfz', 'cmlpvh201000014gxs2imfviu'),
('cmlpvh2wk003v14gxnfq51ojw', 'Attention à la sécurité des données. Vérifier les permissions utilisateur.', '2026-02-17 00:35:58.580', '2026-02-17 00:35:58.580', 'cmlpvh2w6003p14gxcqb6dlsz', 'cmlpvh2kd000814gxer4uddcb'),
('cmlpvh2wo003x14gx8z8q1qfn', 'Deadline respectée, bravo à toute l\'équipe !', '2026-02-17 00:35:58.585', '2026-02-17 00:35:58.585', 'cmlpvh2w6003p14gxcqb6dlsz', 'cmlpvh2kd000814gxer4uddcb'),
('cmlpvh2xl004b14gxj5c8vwci', 'Système de cours opérationnel. Interface d\'administration complète.', '2026-02-17 00:35:58.617', '2026-02-17 00:35:58.617', 'cmlpvh2xb004714gxtzd83oki', 'cmlpvh2mu000914gxqvbbac83'),
('cmlpvh2y2004j14gxi3yb490c', 'Déploiement en production réussi. Monitoring en place.', '2026-02-17 00:35:58.635', '2026-02-17 00:35:58.635', 'cmlpvh2xp004d14gx5ud1qywd', 'cmlpvh201000014gxs2imfviu'),
('cmlpvh2y6004l14gx12e0kqaz', 'Base de données créée avec succès. Toutes les tables sont en place et les relations sont correctes.', '2026-02-17 00:35:58.639', '2026-02-17 00:35:58.639', 'cmlpvh2xp004d14gx5ud1qywd', 'cmlpvh2mu000914gxqvbbac83'),
('cmlpvh2yk004r14gx2mf1yt2c', 'API REST en cours de développement. Les endpoints produits et utilisateurs sont terminés.', '2026-02-17 00:35:58.652', '2026-02-17 00:35:58.652', 'cmlpvh2yb004n14gxd619wtr9', 'cmlpvh201000014gxs2imfviu'),
('cmlpvh2yp004t14gxdk6frxfg', 'Interface responsive en cours. Les composants de base sont créés, reste à implémenter le panier.', '2026-02-17 00:35:58.657', '2026-02-17 00:35:58.657', 'cmlpvh2yb004n14gxd619wtr9', 'cmlpvh201000014gxs2imfviu'),
('cmlpvh2z3004z14gxrgxpafpt', 'Intégration Stripe prévue pour la semaine prochaine. Documentation consultée.', '2026-02-17 00:35:58.671', '2026-02-17 00:35:58.671', 'cmlpvh2yu004v14gxp6mp7vtd', 'cmlpvh201000014gxs2imfviu'),
('cmlpvh2z7005114gxi0bly67l', 'Tests unitaires écrits pour 80% des fonctions. Tests d\'intégration à venir.', '2026-02-17 00:35:58.675', '2026-02-17 00:35:58.675', 'cmlpvh2yu004v14gxp6mp7vtd', 'cmlpvh201000014gxs2imfviu'),
('cmlpvh30i005j14gxe7r79yin', 'Dashboard RH en cours. Statistiques de base affichées.', '2026-02-17 00:35:58.722', '2026-02-17 00:35:58.722', 'cmlpvh309005f14gx333sa8id', 'cmlpvh201000014gxs2imfviu'),
('cmlpvh30m005l14gxgenrijoi', 'Design mobile terminé et validé par le client. Interface moderne et intuitive.', '2026-02-17 00:35:58.727', '2026-02-17 00:35:58.727', 'cmlpvh309005f14gx333sa8id', 'cmlpvh22q000114gxbw99or79');

-- --------------------------------------------------------

--
-- Struttura della tabella `projects`
--

CREATE TABLE `projects` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `description` varchar(191) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `ownerId` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dump dei dati per la tabella `projects`
--

INSERT INTO `projects` (`id`, `name`, `description`, `createdAt`, `updatedAt`, `ownerId`) VALUES
('cmlpvh2ni000j14gxs6yumpt1', 'Système de Gestion RH', 'Application web pour la gestion des ressources humaines : congés, évaluations, planning.', '2026-02-17 00:35:58.254', '2026-02-17 00:35:58.254', 'cmlpvh201000014gxs2imfviu'),
('cmlpvh2o7000r14gx51am92vj', 'Application Mobile Fitness', 'App mobile pour le suivi d\'entraînement, nutrition et objectifs fitness personnalisés.', '2026-02-17 00:35:58.279', '2026-02-17 00:49:26.779', 'cmlpvh201000014gxs2imfviu'),
('cmlpvh2or000x14gx3inap2fo', 'Plateforme de Formation', 'Système de gestion de cours en ligne avec vidéos, quiz et suivi des progrès.', '2026-02-17 00:35:58.299', '2026-02-17 01:10:11.789', 'cmlpvh201000014gxs2imfviu'),
('cmlpvh2p7001314gxe3vom65m', 'Dashboard Analytics', 'Interface de visualisation de données avec graphiques interactifs et rapports automatisés.', '2026-02-17 00:35:58.315', '2026-02-17 02:15:03.226', 'cmlpvh201000014gxs2imfviu'),
('cmlpwlmrf001e1aovk0b07moa', 'asdsad', 'asdasd', '2026-02-17 01:07:30.554', '2026-02-17 01:07:30.554', 'cmlpvh201000014gxs2imfviu'),
('cmlqsnwap002z10qkrz70in5p', 'asd', 'asdasd', '2026-02-17 16:05:03.929', '2026-02-17 16:05:03.929', 'cmlpvh201000014gxs2imfviu');

-- --------------------------------------------------------

--
-- Struttura della tabella `project_members`
--

CREATE TABLE `project_members` (
  `id` varchar(191) NOT NULL,
  `role` varchar(191) NOT NULL DEFAULT 'CONTRIBUTOR',
  `joinedAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `userId` varchar(191) NOT NULL,
  `projectId` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dump dei dati per la tabella `project_members`
--

INSERT INTO `project_members` (`id`, `role`, `joinedAt`, `userId`, `projectId`) VALUES
('cmlpvh2nn000l14gx5gnhlqnl', 'CONTRIBUTOR', '2026-02-17 00:35:58.259', 'cmlpvh201000014gxs2imfviu', 'cmlpvh2ni000j14gxs6yumpt1'),
('cmlpvh2oc000t14gxhnqzv5tt', 'CONTRIBUTOR', '2026-02-17 00:35:58.284', 'cmlpvh201000014gxs2imfviu', 'cmlpvh2o7000r14gx51am92vj'),
('cmlpvh2p2001114gx15kakhic', 'CONTRIBUTOR', '2026-02-17 00:35:58.310', 'cmlpvh201000014gxs2imfviu', 'cmlpvh2or000x14gx3inap2fo'),
('cmlpvh2pc001514gxdwp14xr4', 'CONTRIBUTOR', '2026-02-17 00:35:58.320', 'cmlpvh201000014gxs2imfviu', 'cmlpvh2p7001314gxe3vom65m'),
('cmlpvqex800011aovnmamdjjx', 'CONTRIBUTOR', '2026-02-17 00:43:14.056', 'cmlpvh27y000314gx2jhpxxp5', 'cmlpvh2o7000r14gx51am92vj'),
('cmlpvqg4m00031aovedjhmnht', 'CONTRIBUTOR', '2026-02-17 00:43:15.622', 'cmlpvh2ai000414gxasiieeiu', 'cmlpvh2o7000r14gx51am92vj'),
('cmlpvqgx800051aovyiicp0qx', 'CONTRIBUTOR', '2026-02-17 00:43:16.653', 'cmlpvh2fg000614gxh5imxwgo', 'cmlpvh2o7000r14gx51am92vj'),
('cmlpvqkay00071aov08asht1u', 'CONTRIBUTOR', '2026-02-17 00:43:21.034', 'cmlpvh2d0000514gxrbkuwxl9', 'cmlpvh2o7000r14gx51am92vj'),
('cmlpvqm2c00091aovjo3x9xen', 'CONTRIBUTOR', '2026-02-17 00:43:23.316', 'cmlpvh2kd000814gxer4uddcb', 'cmlpvh2o7000r14gx51am92vj'),
('cmlpvsya5000j1aov8tlgc2ja', 'CONTRIBUTOR', '2026-02-17 00:45:12.461', 'cmlpvh258000214gxd517myhc', 'cmlpvh2o7000r14gx51am92vj'),
('cmlpwlmrs001g1aovqeax7e8a', 'CONTRIBUTOR', '2026-02-17 01:07:30.569', 'cmlpvh201000014gxs2imfviu', 'cmlpwlmrf001e1aovk0b07moa'),
('cmlpwlmry001i1aovksxn8h5i', 'CONTRIBUTOR', '2026-02-17 01:07:30.575', 'cmlpvh27y000314gx2jhpxxp5', 'cmlpwlmrf001e1aovk0b07moa'),
('cmlpwlms3001k1aovtbngtou8', 'CONTRIBUTOR', '2026-02-17 01:07:30.580', 'cmlpvh2d0000514gxrbkuwxl9', 'cmlpwlmrf001e1aovk0b07moa'),
('cmlpwlms9001m1aovt26dz0us', 'CONTRIBUTOR', '2026-02-17 01:07:30.585', 'cmlpvh2hx000714gx2n48uowq', 'cmlpwlmrf001e1aovk0b07moa'),
('cmlpwlmse001o1aova5itkg6k', 'CONTRIBUTOR', '2026-02-17 01:07:30.591', 'cmlpvh2kd000814gxer4uddcb', 'cmlpwlmrf001e1aovk0b07moa'),
('cmlpwnvdf002c1aovc7j7v4g1', 'CONTRIBUTOR', '2026-02-17 01:09:15.028', 'cmlpvh27y000314gx2jhpxxp5', 'cmlpvh2or000x14gx3inap2fo'),
('cmlpwnvvk002e1aov6kzf6979', 'CONTRIBUTOR', '2026-02-17 01:09:15.681', 'cmlpvh2fg000614gxh5imxwgo', 'cmlpvh2or000x14gx3inap2fo'),
('cmlpwnx76002g1aovpb2n6poc', 'CONTRIBUTOR', '2026-02-17 01:09:17.394', 'cmlpvh2d0000514gxrbkuwxl9', 'cmlpvh2or000x14gx3inap2fo'),
('cmlpwp2jk002l1aovfajzpd0d', 'CONTRIBUTOR', '2026-02-17 01:10:10.976', 'cmlpvh2ai000414gxasiieeiu', 'cmlpvh2or000x14gx3inap2fo'),
('cmlpyxdfh00651aovj8m3zjw7', 'CONTRIBUTOR', '2026-02-17 02:12:37.565', 'cmlpvh258000214gxd517myhc', 'cmlpvh2p7001314gxe3vom65m'),
('cmlpz0cck00691aovsfiuuce9', 'CONTRIBUTOR', '2026-02-17 02:14:56.133', 'cmlpvh2hx000714gx2n48uowq', 'cmlpvh2p7001314gxe3vom65m'),
('cmlpz0cyr006b1aovoapj823e', 'CONTRIBUTOR', '2026-02-17 02:14:56.932', 'cmlpvh2d0000514gxrbkuwxl9', 'cmlpvh2p7001314gxe3vom65m'),
('cmlpz0dil006d1aov2hlacw4q', 'CONTRIBUTOR', '2026-02-17 02:14:57.645', 'cmlpvh2ai000414gxasiieeiu', 'cmlpvh2p7001314gxe3vom65m'),
('cmlpz0e9y006f1aovhuk5oerz', 'CONTRIBUTOR', '2026-02-17 02:14:58.630', 'cmlpvh2mu000914gxqvbbac83', 'cmlpvh2p7001314gxe3vom65m'),
('cmlpz0f4t006h1aovt1uln1ed', 'CONTRIBUTOR', '2026-02-17 02:14:59.741', 'cmlpvh22q000114gxbw99or79', 'cmlpvh2p7001314gxe3vom65m'),
('cmlpz0fuh006j1aov1yzwdfr8', 'CONTRIBUTOR', '2026-02-17 02:15:00.665', 'cmlpvh27y000314gx2jhpxxp5', 'cmlpvh2p7001314gxe3vom65m'),
('cmlpz0giy006l1aov52p7g7i6', 'CONTRIBUTOR', '2026-02-17 02:15:01.546', 'cmlpvh2fg000614gxh5imxwgo', 'cmlpvh2p7001314gxe3vom65m'),
('cmlpz0ha6006n1aov7qyqxorv', 'CONTRIBUTOR', '2026-02-17 02:15:02.527', 'cmlpvh2kd000814gxer4uddcb', 'cmlpvh2p7001314gxe3vom65m'),
('cmlqsnwc8003110qkj0727uzw', 'CONTRIBUTOR', '2026-02-17 16:05:03.992', 'cmlpvh201000014gxs2imfviu', 'cmlqsnwap002z10qkrz70in5p'),
('cmlqsnwcj003310qk6xk7re1a', 'CONTRIBUTOR', '2026-02-17 16:05:04.003', 'cmlpvh2ai000414gxasiieeiu', 'cmlqsnwap002z10qkrz70in5p');

-- --------------------------------------------------------

--
-- Struttura della tabella `tasks`
--

CREATE TABLE `tasks` (
  `id` varchar(191) NOT NULL,
  `title` varchar(191) NOT NULL,
  `description` varchar(191) DEFAULT NULL,
  `status` varchar(191) NOT NULL DEFAULT 'TODO',
  `priority` varchar(191) NOT NULL DEFAULT 'MEDIUM',
  `dueDate` datetime(3) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `projectId` varchar(191) NOT NULL,
  `creatorId` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dump dei dati per la tabella `tasks`
--

INSERT INTO `tasks` (`id`, `title`, `description`, `status`, `priority`, `dueDate`, `createdAt`, `updatedAt`, `projectId`, `creatorId`) VALUES
('cmlpvh2qr001n14gx5zxz5xb5', 'Développement de l\'API REST', 'Implémenter les endpoints pour la gestion des produits, panier et commandes.', 'IN_PROGRESS', 'HIGH', '2024-02-01 00:00:00.000', '2026-02-17 00:35:58.371', '2026-02-17 00:35:58.371', 'cmlpvh2ni000j14gxs6yumpt1', 'cmlpvh201000014gxs2imfviu'),
('cmlpvh2re001x14gxrkycda3v', 'Interface utilisateur responsive', 'Créer les composants React pour la liste des produits, panier et checkout.', 'TODO', 'MEDIUM', '2024-02-15 00:00:00.000', '2026-02-17 00:35:58.394', '2026-02-17 00:43:41.851', 'cmlpvh2o7000r14gx51am92vj', 'cmlpvh201000014gxs2imfviu'),
('cmlpvh2sf002914gxir7kis8u', 'Intégration système de paiement', 'Intégrer Stripe pour le traitement des paiements sécurisés.', 'TODO', 'HIGH', '2024-02-28 00:00:00.000', '2026-02-17 00:35:58.432', '2026-02-17 01:09:27.200', 'cmlpvh2or000x14gx3inap2fo', 'cmlpvh201000014gxs2imfviu'),
('cmlpvh2sv002f14gxz8rrz4o8', 'Tests automatisés', 'Écrire les tests unitaires et d\'intégration pour l\'API et l\'interface.', 'DONE', 'MEDIUM', '2026-02-14 00:00:00.000', '2026-02-17 00:35:58.447', '2026-02-17 02:22:23.045', 'cmlpvh2p7001314gxe3vom65m', 'cmlpvh201000014gxs2imfviu'),
('cmlpvh2ud002z14gxma1s5zyp', 'Interface d\'évaluation des employés', 'Créer les formulaires d\'évaluation et le système de notation.', 'TODO', 'MEDIUM', '2024-02-05 00:00:00.000', '2026-02-17 00:35:58.502', '2026-02-17 00:35:58.502', 'cmlpvh2ni000j14gxs6yumpt1', 'cmlpvh201000014gxs2imfviu'),
('cmlpvh2v4003914gxtgn8q9b5', 'Tableau de bord RH', 'Dashboard avec statistiques sur les effectifs, congés et performances.', 'TODO', 'LOW', '2024-02-20 00:00:00.000', '2026-02-17 00:35:58.528', '2026-02-17 00:59:14.847', 'cmlpvh2o7000r14gx51am92vj', 'cmlpvh201000014gxs2imfviu'),
('cmlpvh2vo003h14gxnfy42jfz', 'Design de l\'interface mobile', 'Créer les maquettes et prototypes pour l\'application mobile.', 'DONE', 'HIGH', '2024-01-10 00:00:00.000', '2026-02-17 00:35:58.548', '2026-02-17 01:09:23.090', 'cmlpvh2or000x14gx3inap2fo', 'cmlpvh201000014gxs2imfviu'),
('cmlpvh2w6003p14gxcqb6dlsz', 'Développement des écrans principaux', 'Implémenter les écrans d\'accueil, profil utilisateur et suivi d\'entraînement.', 'IN_PROGRESS', 'HIGH', '2024-01-25 00:00:00.000', '2026-02-17 00:35:58.566', '2026-02-17 01:18:04.097', 'cmlpvh2p7001314gxe3vom65m', 'cmlpvh201000014gxs2imfviu'),
('cmlpvh2xb004714gxtzd83oki', 'Système de gestion des cours', 'Créer l\'interface d\'administration pour ajouter et organiser les cours.', 'DONE', 'HIGH', '2024-01-05 00:00:00.000', '2026-02-17 00:35:58.608', '2026-02-17 00:35:58.608', 'cmlpvh2ni000j14gxs6yumpt1', 'cmlpvh201000014gxs2imfviu'),
('cmlpvh2xp004d14gx5ud1qywd', 'Lecteur vidéo personnalisé', 'Développer un lecteur vidéo avec contrôles de progression et notes.', 'IN_PROGRESS', 'HIGH', '2024-01-30 00:00:00.000', '2026-02-17 00:35:58.621', '2026-02-17 00:59:20.704', 'cmlpvh2o7000r14gx51am92vj', 'cmlpvh201000014gxs2imfviu'),
('cmlpvh2yb004n14gxd619wtr9', 'Système de quiz interactif', 'Créer les quiz avec questions à choix multiples et évaluation automatique.', 'TODO', 'MEDIUM', '2024-02-15 00:00:00.000', '2026-02-17 00:35:58.643', '2026-02-17 01:09:12.484', 'cmlpvh2or000x14gx3inap2fo', 'cmlpvh201000014gxs2imfviu'),
('cmlpvh2yu004v14gxp6mp7vtd', 'Architecture des données', 'Concevoir l\'architecture pour la collecte et le stockage des données analytiques.', 'DONE', 'HIGH', '2024-01-08 00:00:00.000', '2026-02-17 00:35:58.662', '2026-02-17 01:08:20.008', 'cmlpvh2p7001314gxe3vom65m', 'cmlpvh201000014gxs2imfviu'),
('cmlpvh309005f14gx333sa8id', 'Système d\'alertes', 'Créer le système de notifications pour les seuils et anomalies détectées.', 'TODO', 'MEDIUM', '2024-02-08 00:00:00.000', '2026-02-17 00:35:58.713', '2026-02-17 00:35:58.713', 'cmlpvh2ni000j14gxs6yumpt1', 'cmlpvh201000014gxs2imfviu'),
('cmlqs0jyq002w10qklfzxgu4i', 'Développement composant Navbar', 'Créer une barre de navigation responsive.', 'TODO', 'MEDIUM', '2026-02-12 00:00:00.000', '2026-02-17 15:46:54.866', '2026-02-17 15:46:54.866', 'cmlpvh2o7000r14gx51am92vj', 'cmlpvh201000014gxs2imfviu');

-- --------------------------------------------------------

--
-- Struttura della tabella `task_assignees`
--

CREATE TABLE `task_assignees` (
  `id` varchar(191) NOT NULL,
  `assignedAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `taskId` varchar(191) NOT NULL,
  `userId` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dump dei dati per la tabella `task_assignees`
--

INSERT INTO `task_assignees` (`id`, `assignedAt`, `taskId`, `userId`) VALUES
('cmlpvr0de000a1aov3zq0npx9', '2026-02-17 00:43:41.859', 'cmlpvh2re001x14gxrkycda3v', 'cmlpvh201000014gxs2imfviu'),
('cmlpvr0de000b1aovyzqslrqc', '2026-02-17 00:43:41.859', 'cmlpvh2re001x14gxrkycda3v', 'cmlpvh2fg000614gxh5imxwgo'),
('cmlpvr0de000c1aov4ndlxcw1', '2026-02-17 00:43:41.859', 'cmlpvh2re001x14gxrkycda3v', 'cmlpvh2kd000814gxer4uddcb'),
('cmlpwb0a8000w1aovj2huj3nf', '2026-02-17 00:59:14.864', 'cmlpvh2v4003914gxtgn8q9b5', 'cmlpvh2fg000614gxh5imxwgo'),
('cmlpwb0a8000x1aovym62s0ei', '2026-02-17 00:59:14.864', 'cmlpvh2v4003914gxtgn8q9b5', 'cmlpvh2kd000814gxer4uddcb'),
('cmlpwb4sm000y1aovtzbvmlg3', '2026-02-17 00:59:20.711', 'cmlpvh2xp004d14gx5ud1qywd', 'cmlpvh2fg000614gxh5imxwgo'),
('cmlpwb4sm000z1aov22ywlx1v', '2026-02-17 00:59:20.711', 'cmlpvh2xp004d14gx5ud1qywd', 'cmlpvh258000214gxd517myhc'),
('cmlpwmox900251aovuf5jji8w', '2026-02-17 01:08:20.013', 'cmlpvh2yu004v14gxp6mp7vtd', 'cmlpvh2kd000814gxer4uddcb'),
('cmlpwmox900261aovjij13ryv', '2026-02-17 01:08:20.013', 'cmlpvh2yu004v14gxp6mp7vtd', 'cmlpvh2mu000914gxqvbbac83'),
('cmlpwntey002a1aovat7qy9af', '2026-02-17 01:09:12.491', 'cmlpvh2yb004n14gxd619wtr9', 'cmlpvh201000014gxs2imfviu'),
('cmlpwo1lk002h1aovyhnf7sh9', '2026-02-17 01:09:23.097', 'cmlpvh2vo003h14gxnfy42jfz', 'cmlpvh27y000314gx2jhpxxp5'),
('cmlpwo1lk002i1aov8pnk4ixi', '2026-02-17 01:09:23.097', 'cmlpvh2vo003h14gxnfy42jfz', 'cmlpvh2d0000514gxrbkuwxl9'),
('cmlpwo4rp002j1aovkxnblf0h', '2026-02-17 01:09:27.206', 'cmlpvh2sf002914gxir7kis8u', 'cmlpvh2fg000614gxh5imxwgo'),
('cmlpwz7mw002m1aovqjj4tmai', '2026-02-17 01:18:04.135', 'cmlpvh2w6003p14gxcqb6dlsz', 'cmlpvh201000014gxs2imfviu'),
('cmlpwz7mx002n1aovq63pstgp', '2026-02-17 01:18:04.135', 'cmlpvh2w6003p14gxcqb6dlsz', 'cmlpvh2kd000814gxer4uddcb'),
('cmlpwz7mx002o1aovkeyhktpz', '2026-02-17 01:18:04.135', 'cmlpvh2w6003p14gxcqb6dlsz', 'cmlpvh2mu000914gxqvbbac83'),
('cmlpwz7mx002p1aovb3tf4gv8', '2026-02-17 01:18:04.135', 'cmlpvh2w6003p14gxcqb6dlsz', 'cmlpvh2hx000714gx2n48uowq'),
('cmlpz9x72006w1aov9jiysjiu', '2026-02-17 02:22:23.055', 'cmlpvh2sv002f14gxz8rrz4o8', 'cmlpvh201000014gxs2imfviu'),
('cmlpz9x72006x1aovzvq1joas', '2026-02-17 02:22:23.055', 'cmlpvh2sv002f14gxz8rrz4o8', 'cmlpvh27y000314gx2jhpxxp5'),
('cmlpz9x72006y1aovw2z3pegf', '2026-02-17 02:22:23.055', 'cmlpvh2sv002f14gxz8rrz4o8', 'cmlpvh2hx000714gx2n48uowq'),
('cmlpz9x72006z1aovhi3bdsfu', '2026-02-17 02:22:23.055', 'cmlpvh2sv002f14gxz8rrz4o8', 'cmlpvh2kd000814gxer4uddcb'),
('cmlqs0jyy002x10qkmmz1qwjg', '2026-02-17 15:46:54.874', 'cmlqs0jyq002w10qklfzxgu4i', 'cmlpvh2fg000614gxh5imxwgo');

-- --------------------------------------------------------

--
-- Struttura della tabella `users`
--

CREATE TABLE `users` (
  `id` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL,
  `name` varchar(191) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dump dei dati per la tabella `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `name`, `createdAt`, `updatedAt`) VALUES
('cmlpvh201000014gxs2imfviu', 'alice@example.com', '$2a$10$.6NJ1yVIYQguoddYsJYHOOdhyMmBOsRpBcNOyx88.bo3l.hbtTYpC', 'Alice Martin', '2026-02-17 00:35:57.409', '2026-02-17 00:35:57.409'),
('cmlpvh22q000114gxbw99or79', 'bob@example.com', '$2a$10$kwBYPAn5O0VubgWw8tZbpOx7Xz/JJDL2h84pVuDh6twCPsmu1ZCwS', 'Bob Dupont', '2026-02-17 00:35:57.506', '2026-02-17 00:35:57.506'),
('cmlpvh258000214gxd517myhc', 'caroline@example.com', '$2a$10$2c1dRSiMsFWwroGqED/efuvUUHbLWRLvPdqMYr9EIBzrbeNii0916', 'Caroline Leroy', '2026-02-17 00:35:57.596', '2026-02-17 00:35:57.596'),
('cmlpvh27y000314gx2jhpxxp5', 'david@example.com', '$2a$10$EOZjf7EjSWM/s3LMx6NhDOEdjjZkZ7kEJJ5.D4CtgQT8O28s.1Kk.', 'David Moreau', '2026-02-17 00:35:57.694', '2026-02-17 00:35:57.694'),
('cmlpvh2ai000414gxasiieeiu', 'emma@example.com', '$2a$10$iyAJFTBqxHlFbE2r0ajTReLPncwiCuKTKxjK539m6fs8XoSrLa86a', 'Emma Rousseau', '2026-02-17 00:35:57.787', '2026-02-17 00:35:57.787'),
('cmlpvh2d0000514gxrbkuwxl9', 'francois@example.com', '$2a$10$Tp6lISODOQ1WYLbx8tQnZuq1oRGgF87YtPl/ivUKH21dBLMXSjcOy', 'François Dubois', '2026-02-17 00:35:57.876', '2026-02-17 00:35:57.876'),
('cmlpvh2fg000614gxh5imxwgo', 'gabrielle@example.com', '$2a$10$HyOYrQMr6HEPEVvns9NWXu.lCxX6Rc1y.mMCroEJFyGgFNFilm4hm', 'Gabrielle Simon', '2026-02-17 00:35:57.965', '2026-02-17 00:35:57.965'),
('cmlpvh2hx000714gx2n48uowq', 'henri@example.com', '$2a$10$O7cA4AXVrb4d7BHL8n4wwOaz5JRJPUoHzT6LJzcMeFVPUyM9UQXiS', 'Henri Laurent', '2026-02-17 00:35:58.053', '2026-02-17 00:35:58.053'),
('cmlpvh2kd000814gxer4uddcb', 'isabelle@example.com', '$2a$10$v1AaRfhqR9YFCmeN54KfEe.oxlSFcyWmXWtRRc3hURwLGRKtow90i', 'Isabelle Petit', '2026-02-17 00:35:58.142', '2026-02-17 00:35:58.142'),
('cmlpvh2mu000914gxqvbbac83', 'jacques@example.com', '$2a$10$NZqwzGSNwkiHLpkJ86e6W.NbxBNiKbZIq.YlPW8TAbal2/9FN9bxu', 'Jacques Durand', '2026-02-17 00:35:58.230', '2026-02-17 00:35:58.230'),
('cmlqpv49h000010qks3gfd91n', 'test@gmail.com', '$2a$12$62SAbIzpVlNiSNNfRPfnB.fnT/xab4cp9sjj/8Huy9Wp8ZZ/KhHK6', 'Gicco Best', '2026-02-17 14:46:42.005', '2026-02-17 14:46:58.454');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `comments_taskId_fkey` (`taskId`),
  ADD KEY `comments_authorId_fkey` (`authorId`);

--
-- Indici per le tabelle `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`),
  ADD KEY `projects_ownerId_fkey` (`ownerId`);

--
-- Indici per le tabelle `project_members`
--
ALTER TABLE `project_members`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `project_members_userId_projectId_key` (`userId`,`projectId`),
  ADD KEY `project_members_projectId_fkey` (`projectId`);

--
-- Indici per le tabelle `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tasks_projectId_fkey` (`projectId`),
  ADD KEY `tasks_creatorId_fkey` (`creatorId`);

--
-- Indici per le tabelle `task_assignees`
--
ALTER TABLE `task_assignees`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `task_assignees_taskId_userId_key` (`taskId`,`userId`),
  ADD KEY `task_assignees_userId_fkey` (`userId`);

--
-- Indici per le tabelle `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_key` (`email`);

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comments_taskId_fkey` FOREIGN KEY (`taskId`) REFERENCES `tasks` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limiti per la tabella `projects`
--
ALTER TABLE `projects`
  ADD CONSTRAINT `projects_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limiti per la tabella `project_members`
--
ALTER TABLE `project_members`
  ADD CONSTRAINT `project_members_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `projects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `project_members_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limiti per la tabella `tasks`
--
ALTER TABLE `tasks`
  ADD CONSTRAINT `tasks_creatorId_fkey` FOREIGN KEY (`creatorId`) REFERENCES `users` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `tasks_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `projects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limiti per la tabella `task_assignees`
--
ALTER TABLE `task_assignees`
  ADD CONSTRAINT `task_assignees_taskId_fkey` FOREIGN KEY (`taskId`) REFERENCES `tasks` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `task_assignees_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
