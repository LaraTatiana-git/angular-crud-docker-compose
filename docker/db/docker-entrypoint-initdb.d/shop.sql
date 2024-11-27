--
-- Table structure for table `products`
--
USE shop;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` float UNSIGNED NOT NULL DEFAULT '0',
  `stock` tinyint(4) NOT NULL DEFAULT '1',
  `iva` float NOT NULL,
  `send_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--
INSERT INTO `products` (`id`, `title`, `price`, `stock`, `iva`, `send_date`) VALUES
(0, 'Leche', 0.4, 1, 0.1, '2023-10-25 00:00:00'),
(0, 'Pan', 0.6, 1, 0.21, '2023-10-30 00:00:00'),
(0, 'Carne', 4.25, 0, 0.21, '2023-09-14 19:32:51'),
(0, 'Pasta	', 0.9, 1, 0.21, '2023-09-14 19:34:12');

