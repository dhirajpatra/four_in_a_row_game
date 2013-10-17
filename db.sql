/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping database structure for simplemvc
CREATE DATABASE IF NOT EXISTS `simplemvc` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `simplemvc`;


-- Dumping structure for table simplemvc.articles
CREATE TABLE IF NOT EXISTS `articles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `intro` text NOT NULL,
  `article` text NOT NULL,
  `date` datetime NOT NULL,
  `status` enum('Y','N') NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_articles_categories` (`category`),
  CONSTRAINT `FK_articles_categories` FOREIGN KEY (`category`) REFERENCES `categories` (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- Dumping data for table simplemvc.articles: ~3 rows (approximately)
/*!40000 ALTER TABLE `articles` DISABLE KEYS */;
INSERT INTO `articles` (`id`, `category`, `title`, `intro`, `article`, `date`, `status`) VALUES
	(1, 1, 'PHP is Awesome!', 'This is an article about PHP!', 'PHP: Hypertext Preprocessor', '2012-10-19 22:36:46', 'Y'),
	(2, 4, 'What is Routing and why do we need it?', 'As you may or may not know, communication on the Internet uses packets for transmitting data.\r\n	So, every time your computer communicates with a computer on the Internet, IP packets are\r\n	used to transmit and receive data. ', '<p>\r\n	As you may or may not know, communication on the Internet uses packets for transmitting data.\r\n	So, every time your computer communicates with a computer on the Internet, IP packets are\r\n	used to transmit and receive data. \r\n</p>\r\n\r\n<p>\r\n	Your computer by itself can&rsquo;t deliver the packets all the way to the destination,\r\n	so it relies on other networking hardware on the way over to do their part. We could say that \r\n	Routing is a process of selecting the best paths through the network for forwarding packets \r\n	from source to their destination. \r\n</p>', '2012-10-19 23:05:15', 'Y'),
	(3, 2, 'What is ASP.NET MVC?', '<strong>MVC</strong> stands for <strong>Model-View-Controller</strong>. MVC enables us to separate our logic from the \r\n	presentation. This philosophy is very popular for all the right reasons. One of the biggest advantages is the code re-usability. \r\n	There are other benefits, such as: We can let the designers edit the Views, without worrying that they will screw up database \r\n	access logic. What if we switch to another programming language, such as PHP? We can still use most of the presentation \r\n	logic with only minimal changes.', '<p>\r\n	<strong>MVC</strong> stands for <strong>Model-View-Controller</strong>. MVC enables us to separate our logic from the \r\n	presentation. This philosophy is very popular for all the right reasons. One of the biggest advantages is the code re-usability. \r\n	There are other benefits, such as: We can let the designers edit the Views, without worrying that they will screw up database \r\n	access logic. What if we switch to another programming language, such as PHP? We can still use most of the presentation \r\n	logic with only minimal changes.\r\n</p>\r\n\r\n<p>\r\n	So, to summarize:\r\n</p>\r\n\r\n<ul>\r\n	<li><strong>Model</strong> - Classes that connect and talk to the database</li>\r\n	<li><strong>View</strong> - presentation logic - HTML/CSS/JSON, etc</li>\r\n	<li><strong>Controller</strong> - loads View, talks to the the Model, does stuff that user asks it to</li>\r\n</ul>', '2012-10-19 23:07:09', 'Y');
/*!40000 ALTER TABLE `articles` ENABLE KEYS */;


-- Dumping structure for table simplemvc.categories
CREATE TABLE IF NOT EXISTS `categories` (
  `category_id` int(11) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(150) NOT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- Dumping data for table simplemvc.categories: ~4 rows (approximately)
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` (`category_id`, `category_name`) VALUES
	(1, 'PHP'),
	(2, 'ASP.NET'),
	(3, 'Photoshop'),
	(4, 'Networking');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;


-- Dumping structure for table simplemvc.contact
CREATE TABLE IF NOT EXISTS `contact` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `message` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*!40000 ALTER TABLE `contact` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
