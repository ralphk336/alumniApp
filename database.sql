CREATE SCHEMA alumni;
USE alumni;

CREATE TABLE alumnus(
alumnus_id INTEGER PRIMARY  KEY AUTO_INCREMENT,
name VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL UNIQUE,
completion_year INTEGER NOT NULL,
phone_number VARCHAR(20) NOT NULL,
password VARCHAR(255) NOT NULL
);

CREATE TABLE users(
user_id INTEGER AUTO_INCREMENT PRIMARY KEY,
username VARCHAR(100) NOT NULL UNIQUE,
password VARCHAR(100) NOT NULL,
role VARCHAR(50) NOT NULL
);


CREATE TABLE events(
event_id INTEGER PRIMARY  KEY AUTO_INCREMENT,
event_name VARCHAR(100) NOT NULL,
event_description VARCHAR(255) NOT NULL,
event_date TIMESTAMP NOT NULL
);


CREATE TABLE subscribers (event_id INTEGER NOT NULL, FOREIGN KEY (event_id) REFERENCES events(EVENT_ID),
  						  alumnus_id INTEGER NOT NULL, FOREIGN KEY (alumnus_id) REFERENCES alumnus(alumnus_id),
  						  PRIMARY KEY(event_id,alumnus_id)
  						  );

/*admin user identified by username admin@admin.com and password admin1234*/
INSERT INTO `users` (`user_id`, `username`, `password`, `role`) VALUES (NULL, 'admin@admin.com', '$2a$10$xmgvfihs7/aelOru9D3Rj.PZQbE7Qm19/P86ykG3L.OrhAW34rvy6', 'admin');
