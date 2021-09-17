USE `safebourse`;
CREATE TABLE `users`(
    `id` int(11) NOT NULL PRIMARY KEY,
    `firstname` varchar(52) NOT NULL,
    `lastname` varchar(52) NOT NULL,
    `username` varchar(52) NOT NULL,
    `password` TEXT NOT NULL,
    `email` varchar(52) NOT NULL,
    `phone` varchar(52) NOT NULL,
    `link` TEXT NOT NULL,
    `picture` TEXT VARCHAR(52) NOT NULL,
    `creation` datetime DEFAULT current_timestamp()
)ENGINE=  InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `users`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

CREATE TABLE `posts`(
    `id` int(11) NOT NULL PRIMARY KEY,
    `username` varchar(52) NOT NULL,
    `title` varchar(52) NOT NULL,
    `texte` TEXT NOT NULL,
    `pictures` TEXT NOT NULL,
    `price` varchar(52) NOT NULL,
    `class` varchar(52) NOT NULL,
    `link` TEXT NOT NULL,
    `statue` varchar(52) NOT NULL DEFAULT "Available";
)ENGINE=  InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `posts`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;


CREATE TABLE `ban`(
    `id` int(11) NOT NULL PRIMARY KEY,
    `username` varchar(52) NOT NULL,
    `phone` varchar(52) NOT NULL,
    `email` varchar(52) NOT NULL,
    `adminUsername` varchar(52) NOT NULL,
    `reason` TEXT NOT NULL,
    `creation` datetime DEFAULT current_timestamp()
)ENGINE=  InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `ban`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

CREATE TABLE `reports`(
    `id` int(11) NOT NULL PRIMARY KEY,
    `username` varchar(52) NOT NULL,
    `reported_id` varchar(52) NOT NULL,
    `reason` TEXT NOT NULL,
    `creation` datetime DEFAULT current_timestamp()
)ENGINE = InnoDB DEFAULT CHARSEt = latin1;

ALTER TABLE `reports`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

CREATE TABLE `comments`(
    `id` int(11) NOT NULL PRIMARY KEY,
    `usrename` varchar(52) NOT NULL,
    `link` TEXT NOT NULL,
    `comment` TEXT NOT NULL,
    `creation` datetime DEFAULT current_timestamp()
)ENGINE = InnoDB DEFAULT CHARSET=Latin1;
ALTER TABLE `comments`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

CREATE TABLE `admins`(
    `id` int(11) NOT NULL PRIMARY KEY,
    `username` varchar(52) NOT NULL,
    `password` TEXT NOT NULL,
    `email` varchar(52) NOT NULL,
    `passcode` varchar(52) NOT NULL
)ENGINE = InnoDB DEFAULT CHARSET=Latin1;
ALTER TABLE `admins`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

CREATE TABLE `adminsLogs`(
    `id` int(11) NOT NULL PRIMARY KEY,
    `username` varchar(52) NOT NULL,
    `action` TEXT NOT NULL,
    `date` TEXT NOT NULL 
)ENGINE = InnoDB DEFAULT CHARSET=Latin1;
ALTER TABLE `adminsLogs`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

CREATE TABLE `requests`(
    `id` int(11) NOT NULL PRIMARY KEY,
    `username` varchar(52) NOT NULL,
    `userLink` TEXT NOT NULL,
    `request` TEXT NOT NULL,
    `class` varchar(52) NOT NULL,
    `school` varchar(52) NOT NULL,
    `creation` datetime NOT NULL,
)ENGINE =InnoDB DEFAULT CHARSET =Latin1;
ALTER TABLE `requests`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT; 