-- to employees seeds.sql list -- 
USE employees;

INSERT INTO department (department_name)
  VALUES
  ('Sales'),
  ('Engineering'),
  ('Finance'),
  ('Legal');

INSERT INTO role (title, salary, department_id)
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
  ('Hans', 'Bethge', 2, 'Ralph Alpher'),
  ('George', 'Gamow', 3, null),
  ('Daisy', 'Delta', 4, 'George Gamow'),
  ('Elsa', 'Engles', 5, null),
  ('Fiona', 'Fowler', 6, 'Elsa Engles'),
  ('Gary', 'Gainer', 7, null),
  ('Helen', 'Hu', 8, 'Gary Gainer');