CREATE DATABASE mobile;

USE mobile;

CREATE TABLE IF NOT EXISTS `mobile` (
  `id` int(11) NOT NULL auto_increment,
  `nm` varchar(255),
  `commMode` varchar(255),
  `commPlac` varchar(255),
  `commType` varchar(255),
  `commTime` varchar(255),
  `remark` varchar(255),
  `startTime` varchar(255),
  `anotherNm` varchar(255),
  `mealFavorable` varchar(255),
  `commFee` varchar(255),
--  `content` mediumtext NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `mobile_detail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `phoneNumber` varchar(15) DEFAULT NULL,
  `detailReportSrc` longtext,
  `reportTime` datetime DEFAULT NULL,
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
