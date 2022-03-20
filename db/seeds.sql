-- to employees seeds.sql list -- 
USE employeeTracker_db;

INSERT INTO departments (department_name)
  VALUES
  ('Sales'),
  ('Engineering'),
  ('Finance'),
  ('Legal');

INSERT INTO roles (title, salary, department_id)
  VALUES
  ('Sales Lead', 1000000, 1),
  ('Salesperson', 80000, 1),
  ('Lead Engineer', 150000, 2),
  ('Software Engineer', 120000, 2),
  ('Account Manager', 160000, 3),
  ('Acountant', 125000, 3),
  ('Legal Team Lead', 250000, 4),
  ('Lawyer', 19000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id )
VALUES
  ('Ralph', 'Alpher', 1, null),
  ('Hans', 'Bethge', 2, 1),
  ('George', 'Gamow', 3, null),
  ('Daisy', 'Delta', 4, 3),
  ('Elsa', 'Engles', 5, null),
  ('Fiona', 'Fowler', 6, 5),
  ('Gary', 'Gainer', 7, null),
  ('Helen', 'Hu', 8, 7);