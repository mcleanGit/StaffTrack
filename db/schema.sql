DROP DATABASE IF EXISTS employee_trackerDB;
CREATE DATABASE employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE department (
 id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(32) NOT NULL,
);

CREATE TABLE role (
 id INT AUTO_INCREMENT PRIMARY KEY,
 title VARCHAR(32) UNIQUE NOT NULL,
 salary DECIMAL UNSIGNED NOT NULL,
 INDEX dep_ind (department_id),
 CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
);

CREATE TABLE employee (
 id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
 first_name VARCHAR(30) NOT NULL,
 last_name VARCHAR(30) NOT NULL,
 role_id INT UNSIGNED NOT NULL,
 INDEX role_ind (role_id),
 CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE
 manager_id INT UNSIGNED,
 INDEX man_ind (manager_id),
 CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES enployee(id) ON DELETE SET NULL
);
