DROP DATABASE IF EXISTS portfolio;

CREATE DATABASE portfolio;
USE portfolio;

CREATE TABLE portfolioMessage (

  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR (100) NOT NULL,
  emailAdress VARCHAR (30) NOT NULL,
  message VARCHAR (400) NOT NULL,
  PRIMARY KEY (id)
  
);