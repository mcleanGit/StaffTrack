-- to employees seeds.sql list -- 
use employee_tracker_db;

INSERT INTO departments (name)
  VALUES
  ('Sales'),
  ('Engineering'),
  ('Finance'),
  ('Legal');

INSERT INTO roles (title, salary, dept_id)
  VALUES
  ('Sales Lead', 1000000, 1),
  ('Salesperson', 80000, 1),
  ('Lead Engineer', 150000, 2),
  ('Software Engineer', 120000, 2),
  ('Account Manager', 160000, 3),
  ('Acountant', 125000, 3),
  ('Legal Team Lead', 250000, 4),
  ('Lawyer', 190000, 4);

INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES
  ('Ralph', 'Alpher', 1, null),
  ('Hans', 'Bethe', 2, 1),
  ('George', 'Gamow', 3, null),
  ('Daisy', 'Delta', 4, 3),
  ('Oliver', 'Omicron', 5, null),
  ('Ellie', 'Epsilon', 6, 5),
  ('Kathy', 'Kappa', 7, null),
  ('Peter', 'Pi', 8, 7);