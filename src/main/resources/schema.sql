CREATE DATABASE mobile;

USE mobile;

CREATE TABLE `mobile` (
  `id` int(11) NOT NULL auto_increment,
  `nm` varchar(255) NOT NULL,
  `commMode` varchar(255) NOT NULL,
  `commPlac` varchar(255) NOT NULL,
  `commType` varchar(255) NOT NULL,
  `commTime` varchar(255) NOT NULL,
  `remark` varchar(255) NOT NULL,
  `startTime` varchar(255) NOT NULL,
  `anotherNm` varchar(255) NOT NULL,
  `mealFavorable` varchar(255) NOT NULL,
  `commFee` varchar(255) NOT NULL,
--  `content` mediumtext NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
