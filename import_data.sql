-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.29 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.0.0.6468
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for coffee_shop
CREATE DATABASE IF NOT EXISTS `coffee_shop` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `coffee_shop`;

-- Dumping structure for table coffee_shop.category
CREATE TABLE IF NOT EXISTS `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table coffee_shop.category: ~8 rows (approximately)
INSERT INTO `category` (`id`, `name`) VALUES
	(1, 'Cà phê'),
	(2, 'Cà phê pha phin'),
	(3, 'Trà'),
	(4, 'Trà sữa'),
	(5, 'Sinh tố'),
	(6, 'Khác'),
	(7, 'Bánh'),
	(8, 'Kẹo');

-- Dumping structure for table coffee_shop.equiment
CREATE TABLE IF NOT EXISTS `equiment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `quantity` int NOT NULL,
  `year_of_manufacture` int DEFAULT NULL,
  `status` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table coffee_shop.equiment: ~10 rows (approximately)
INSERT INTO `equiment` (`id`, `name`, `quantity`, `year_of_manufacture`, `status`) VALUES
	(1, 'Bàn', 20, 2017, 'Còn dùng được'),
	(2, 'ghế', 80, 2019, 'Còn dùng được'),
	(3, 'Cốc ho', 500, 2021, 'Còn dùng được'),
	(4, 'Chén', 1000, 2021, 'Còn dùng được'),
	(5, 'Menu', 100, 2022, 'Còn dùng được'),
	(7, 'bàn nhỏ', 100, 2018, 'Còn dùng được'),
	(8, 'Rổ', 10, 2018, 'Còn dùng được'),
	(9, 'Máy lọc nước', 5, 2018, 'Còn dùng được'),
	(10, 'Ghế to', 50, 2019, 'Còn dùng được'),
	(11, 'giường', 1, 2019, 'Đã hỏng');

-- Dumping structure for table coffee_shop.menu
CREATE TABLE IF NOT EXISTS `menu` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `category_id` int NOT NULL,
  `price` int NOT NULL,
  `discount` int DEFAULT '0',
  `detail` varchar(500) DEFAULT NULL,
  `description` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `status` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT 'Còn hàng',
  `createAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `image_path` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `menu_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table coffee_shop.menu: ~29 rows (approximately)
INSERT INTO `menu` (`id`, `name`, `category_id`, `price`, `discount`, `detail`, `description`, `status`, `createAt`, `image_path`) VALUES
	(1, 'Cafe ngọt cuc', 2, 30000, 5, 'Cafe làm từ lá cây', 'cafe này đằng lắm', 'Còn hàng', '2022-07-12 01:39:30', 'https://img.thuthuatphanmem.vn/uploads/2018/10/04/anh-dep-ly-cafe-dep_110730470.jpg'),
	(2, 'Cafe đắng', 2, 50000, 5, 'Cafe làm từ thiên nhiên', 'cafe này đằng lắm', 'Hết hàng', '2022-07-12 01:48:12', 'https://serano.vn/wp-content/uploads/2019/03/09032019-hinh-anh-ly-ca-phe-buoi-sang-dep-Serano-9.jpg'),
	(3, 'Cafe ngọt', 2, 30000, 5, 'Cafe làm từ lá cây', 'cafe này đằng lắm', 'Còn hàng', '2022-07-12 01:50:14', 'https://serano.vn/wp-content/uploads/2019/03/09032019-hinh-anh-ly-ca-phe-buoi-sang-dep-Serano-5.jpg'),
	(4, 'Cafe chồn', 1, 30000, 5, 'Cafe làm từ lá cây', 'cafe này đằng lắm', 'Còn hàng', '2022-07-12 01:50:28', 'https://serano.vn/wp-content/uploads/2019/03/09032019-hinh-anh-ly-ca-phe-buoi-sang-dep-Serano-4.jpg'),
	(5, 'Cafe mèo', 1, 100000, 8, 'Cafe làm từ phân mèo', 'cafe này đằng lắm', 'Còn hàng', '2022-07-12 01:50:48', 'https://serano.vn/wp-content/uploads/2019/03/09032019-hinh-anh-ly-ca-phe-buoi-sang-dep-Serano-2-1.jpg'),
	(6, 'Cafe chó', 1, 100000, 8, 'Cafe làm từ ưef', 'cafe này đằng lắm', 'Còn hàng', '2022-07-12 01:50:59', 'https://serano.vn/wp-content/uploads/2019/03/09032019-hinh-anh-ly-ca-phe-buoi-sang-dep-Serano-3.jpg'),
	(7, 'Cafe pha phin', 2, 100000, 8, '', 'ngon', 'Còn hàng', '2022-07-12 01:51:49', 'https://img.thuthuatphanmem.vn/uploads/2018/10/04/anh-dep-ben-ly-cafe-den_110730392.jpg'),
	(8, 'Cafe pha phin loại 1', 2, 6000, 18, '', 'ngon', 'Còn hàng', '2022-07-12 01:52:06', 'https://serano.vn/wp-content/uploads/2019/03/09032019-hinh-anh-ly-ca-phe-buoi-sang-dep-Serano.jpg'),
	(9, 'Cafe pha phin loại 3', 2, 600000, 18, '', 'THượng hạng', 'Còn hàng', '2022-07-12 01:52:21', 'https://img.thuthuatphanmem.vn/uploads/2018/10/04/anh-dep-ben-ly-cafe-den_110730392.jpg'),
	(10, 'special cafe ', 2, 6000000, 18, 'đẳng cấp nhất', 'thượng THượng hạng', 'Còn hàng', '2022-07-12 01:52:52', 'https://media.loveitopcdn.com/1229/tra-thai-nguyen-la-gi-10.jpg'),
	(11, 'trà thái nguyên ', 3, 6000, 18, 'trà trồng từ thái nguyên', '', 'Còn hàng', '2022-07-12 01:53:58', 'https://media.loveitopcdn.com/1229/tra-thai-nguyen-la-gi-13.jpg'),
	(12, 'trà ninh bình ', 3, 8000, 8, 'trà trồng từ ninh bình', 'sản phẩm đặc biệt của shop', 'Còn hàng', '2022-07-12 01:54:32', 'https://media.loveitopcdn.com/1229/tra-non-tom-thai-nguyen-loc-tan-cuong-6-1.jpg'),
	(13, 'trà giả ', 3, 800, 8, 'trà giả', 'sản phẩm không đặc biệt của shop', 'Còn hàng', '2022-07-12 01:54:47', 'https://statics.vinpearl.com/tra-sua-ha-long-5_1631527549.jpg'),
	(14, 'trà sữa trân châu ', 4, 800, 8, 'trà sữa', 'trà sữa ngon', 'Hết hàng', '2022-07-12 01:55:58', 'https://statics.vinpearl.com/tra-sua-ha-long-4_1631527376.jpg'),
	(15, 'trà sữa trân châu 1 ', 4, 800, 8, 'trà sữa', 'trà sữa ngon', 'Còn hàng', '2022-07-12 01:56:04', 'https://statics.vinpearl.com/tra-sua-ha-long-2_1631527267.jpg'),
	(16, 'trà sữa hạ long ', 4, 800, 8, 'trà sữa mèo ', 'trà sữa không ngon', 'Hết hàng', '2022-07-12 01:56:17', 'https://statics.vinpearl.com/tra-sua-ha-long-1_1631527220.jpg'),
	(17, 'trà sữa đặc biệt ', 4, 80000, 6, 'trà sữa ngon nhất ', 'trà sữa không ngon', 'Còn hàng', '2022-07-12 01:56:37', 'http://gongcha.com.vn/wp-content/uploads/2022/03/CHOCOLATE-TOFFEE-1.png'),
	(18, 'sinh tố dâu ', 5, 8000, 6, 'sinh tố ngon nhất ', 'không ngon', 'Hết hàng', '2022-07-12 01:57:18', 'https://cdn.tgdd.vn/2021/10/CookRecipe/GalleryStep/so-che-dau-tay-1.jpg'),
	(19, 'sinh tố dưa hấu ', 5, 8000, 6, 'sinh tố ngon nhất ', 'không ngon', 'Còn hàng', '2022-07-12 01:57:23', 'https://cdn.tgdd.vn/2022/01/CookRecipe/GalleryStep/xay-sinh-to-dua-hau.jpg'),
	(20, 'sinh tố dưa leo ', 5, 18000, 26, ' nước sinh tố ngon nhất ', 'không ngon', 'Còn hàng', '2022-07-12 01:57:40', 'https://cdn.tgdd.vn/2022/01/CookDish/cach-lam-sinh-to-dua-leo-ca-rot-tao-giam-beo-sau-tet-avt-1200x676-1.jpg'),
	(21, 'bé mèo cute', 6, 18000, 26, ' bé mèo để ôm ', 'ngoan hiền', 'Còn hàng', '2022-07-12 01:58:06', 'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2020/8/21/829850/Bat-Cuoi-Truoc-Nhung-07.jpg'),
	(22, 'bé chó cute', 6, 18000, 26, ' bé mèo để ôm ', 'ngoan hiền', 'Còn hàng', '2022-07-12 01:58:12', 'https://ben.com.vn/tin-tuc/wp-content/uploads/2021/12/anh-che-cho-hai-huoc-cho-dien-thoai-4.jpg'),
	(23, 'rubik', 6, 60000, 26, ' rubik xoay giết thời gian ', 'ngoan hiền', 'Còn hàng', '2022-07-12 01:58:42', 'https://cdn.chiaki.vn/unsafe/0x900/left/top/smart/filters:quality(90)/https://chiaki.vn/upload/product/2022/02/rubik-3x3-gan-356-rs-ba-n-thuo-ng-ki-ch-thuo-c-56mm-620a2663d47b3-14022022165235.jpg'),
	(24, 'bánh bông lan', 7, 6000, 26, ' bánh bông lan ', 'mềm xốp', 'Còn hàng', '2022-07-12 01:59:21', 'https://lanchi.vn/wp-content/uploads/2021/12/BANH-BONG-LAN-TANG-KEM-DAU-SOLITE-360G-300x225.jpg'),
	(25, 'bánh trứng', 7, 8000, 26, ' bánh bông lan ', 'mềm xốp', 'Còn hàng', '2022-07-12 01:59:28', 'https://lanchi.vn/wp-content/uploads/2021/11/BANH-TRUNG-CUSTAS-HOP-12C-276G-300x225.jpg'),
	(26, 'bánh gạo', 7, 8000, 26, ' bánh gạo ', 'hơi cứng', 'Còn hàng', '2022-07-12 01:59:41', 'https://cdn.tgdd.vn/Products/Images/3361/83120/bhx/banh-gao-nhat-ichi-100gam-2-org.jpg'),
	(27, 'kẹo', 7, 9000, 26, ' kẹo cân ', 'hơi cứng', 'Hết hàng', '2022-07-12 01:59:58', 'https://cafebiz.cafebizcdn.vn/thumb_w/600/2017/muon-thanh-cong-thi-dung-an-dong-keo-deo-nay-1504856526614-crop-1504858830143.jpg'),
	(28, 'oreo', 7, 9000, 26, ' kẹo cân ', 'hơi cứng', 'Còn hàng', '2022-07-12 02:00:14', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Oreo-Two-Cookies.jpg/230px-Oreo-Two-Cookies.jpg'),
	(30, 'Kẹo bông', 1, 30000, 5, 'Cafe làm từ lá cây', 'cafe này đằng lắm', 'Đã xóa', '2022-07-13 01:59:04', 'https://image.voso.vn/users/vosoimage/images/a39a58ccf2145128564f07d6518a963a?t%5B0%5D=compress%3Alevel%3D100&accessToken=dbab2e836cbd1a1d78233267991fd53404dbb9553a0e691b4a1d503055d0911f'),
	(31, 'keo can', 1, 25000, 0, 'wef', 'ưefe', 'Còn hàng', '2022-07-19 06:44:39', 'http://res.cloudinary.com/trungkien2022001/image/upload/v1658213080/upload/pg7c4aczgse8tmafglds.png');

-- Dumping structure for table coffee_shop.order
CREATE TABLE IF NOT EXISTS `order` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(200) DEFAULT NULL,
  `note` varchar(1000) DEFAULT NULL,
  `total_cost` int NOT NULL,
  `payment` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT 'Tiền mặt',
  `status` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `phone` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `address` varchar(500) DEFAULT NULL,
  `order_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table coffee_shop.order: ~15 rows (approximately)
INSERT INTO `order` (`id`, `username`, `note`, `total_cost`, `payment`, `status`, `phone`, `address`, `order_time`) VALUES
	(1, 'Nguyễn Kiên', 'Cho nhiều nước xíu', 30000, 'MoMo', 'Hủy', NULL, NULL, '2022-06-12 02:04:13'),
	(2, 'Nguyễn Lan anh', 'Cho ít muối', 90800, 'Tiền mặt', 'Hủy', NULL, NULL, '2022-07-12 02:04:36'),
	(3, 'Nguyễn Văn định', 'Trà sữa không đá, kẹo bóc sẵn, mèo phải béo', 300000, 'Tiền mặt', 'Thành công', NULL, NULL, '2022-07-12 02:05:12'),
	(4, 'Phạm B', 'Trà sphải béo', 30000, 'Tiền mặt', 'Thành công', NULL, NULL, '2022-07-12 02:05:39'),
	(5, 'Đỗ thị nhung', '', 20000, 'Tiền mặt', 'Thành công', NULL, NULL, '2022-07-11 02:06:02'),
	(6, 'Đỗ Văn tú', 'nhanhhhhhhh', 60000, 'Tiền mặt', 'Thành công', NULL, NULL, '2022-05-12 02:06:24'),
	(7, 'Đỗ thị mai', 'nhdfgdfanhhhhhhh', 60000, 'Tiền mặt', 'Thành công', NULL, NULL, '2022-07-12 02:06:32'),
	(8, 'Đặng xuân thắng', 'chó phải đpẹ', 600000, 'Tiền mặt', 'Thành công', NULL, NULL, '2022-06-12 02:06:47'),
	(9, 'Đặng xuân', 'cdgfhó phải đpẹ', 600000, 'Tiền mặt', 'Thành công', NULL, NULL, '2022-07-12 02:06:52'),
	(16, 'ẻger', 'ẻgergr', 85500, 'Tiền mặt', 'Thành công', 'ẻgerg', 'ẻgre', '2022-07-18 10:01:21'),
	(17, 'ẻger', 'ẻgergr', 85500, 'Tiền mặt', 'Hủy', 'ẻgerg', 'ẻgre', '2022-07-18 10:02:07'),
	(18, 'rger', 'rgherger', 28500, 'Tiền mặt', 'Thành công', 'ẻgre', 'ẻgre', '2022-07-18 10:04:20'),
	(19, 'kien', 'oẹnge', 160620, 'MoMo', 'Thành công', 'ọitg4', 'oiqjtg', '2022-07-18 10:24:40'),
	(20, 'kien', 'oẹnge', 160620, 'MoMo', 'Thành công', 'ọitg4', 'oiqjtg', '2022-07-18 10:25:04'),
	(22, 'Nguyễn Trung Kien', 'hahaha', 119920, 'ATM', 'Thành công', '0989983025', 'Yen dong, yen mo, ninh ninh', '2022-07-19 06:36:00');

-- Dumping structure for table coffee_shop.order_detail
CREATE TABLE IF NOT EXISTS `order_detail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int NOT NULL,
  `menu_id` int NOT NULL,
  `quantity` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `menu_id` (`menu_id`),
  KEY `order_id` (`order_id`),
  CONSTRAINT `order_detail_ibfk_1` FOREIGN KEY (`menu_id`) REFERENCES `menu` (`id`),
  CONSTRAINT `order_detail_ibfk_2` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table coffee_shop.order_detail: ~53 rows (approximately)
INSERT INTO `order_detail` (`id`, `order_id`, `menu_id`, `quantity`) VALUES
	(10, 3, 1, 9),
	(11, 3, 2, 3),
	(12, 3, 20, 3),
	(13, 3, 21, 3),
	(14, 4, 1, 1),
	(15, 4, 2, 1),
	(16, 4, 16, 1),
	(17, 4, 17, 1),
	(18, 4, 18, 1),
	(19, 4, 23, 1),
	(20, 5, 3, 1),
	(21, 5, 4, 1),
	(22, 5, 5, 1),
	(23, 5, 6, 1),
	(24, 5, 16, 1),
	(25, 5, 18, 3),
	(26, 6, 1, 3),
	(27, 6, 2, 3),
	(28, 6, 3, 3),
	(29, 6, 9, 8),
	(30, 6, 5, 6),
	(31, 6, 19, 1),
	(32, 7, 19, 1),
	(33, 7, 1, 1),
	(34, 7, 2, 1),
	(35, 7, 9, 1),
	(36, 8, 9, 1),
	(37, 8, 1, 3),
	(38, 8, 2, 1),
	(39, 8, 6, 4),
	(40, 8, 8, 2),
	(41, 8, 18, 9),
	(42, 9, 1, 1),
	(43, 9, 13, 1),
	(44, 9, 14, 1),
	(45, 9, 15, 1),
	(46, 9, 22, 2),
	(61, 19, 30, 4),
	(62, 19, 28, 4),
	(63, 19, 27, 3),
	(64, 20, 30, 4),
	(65, 20, 28, 4),
	(66, 20, 27, 3),
	(68, 22, 30, 4),
	(69, 22, 26, 1);

-- Dumping structure for table coffee_shop.user
CREATE TABLE IF NOT EXISTS `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL DEFAULT '0',
  `password` varchar(50) NOT NULL DEFAULT '0',
  `isAdmin` int DEFAULT '0',
  `name` varchar(200) NOT NULL DEFAULT '0',
  `phone` varchar(50) NOT NULL DEFAULT '0',
  `email` varchar(50) NOT NULL DEFAULT '0',
  `address` varchar(500) NOT NULL DEFAULT '0',
  `token` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table coffee_shop.user: ~2 rows (approximately)
INSERT INTO `user` (`id`, `username`, `password`, `isAdmin`, `name`, `phone`, `email`, `address`, `token`) VALUES
	(1, 'admin', '123456', 1, 'admin', '0989983025', 'nguyenkien2022001@gmail.com', 'Yen dong, yen mo, ninh binh', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJpYXQiOjE2NTgyMTM3MTB9.FUNVkkCOXL2hqisaJpJpknFrFbMpMH3Utin4Mmo27WM'),
	(5, 'kien', '123456', 0, 'Kiên', '0989983025', 'trungkien07yd@gmail.com', 'undefined', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoia2llbiIsImlhdCI6MTY1ODIxMjM3MX0.GhehDsAblAU0BrMnfLaT-P2ERvd_k12ZcBjqOfWyGZ0'),
	(7, 'kien9', '123456', 0, 'dinh', '156', 'erger@gmail.com', 'undefined', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoia2llbjkiLCJpYXQiOjE2NTgyMTI4OTV9.zYiuDrHWGD3T-dYnAnGJBKvvtxPZixp9mwQvAN2p87U');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
