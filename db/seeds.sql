-- to employees seeds.sql list -- 
INSERT INTO employees (first_name, last_name, role_id, manager_id )
VALUES
  ('Ralph', 'Alpher', 'Sales Lead' , null),
  ('Hans', 'Bethge', 'Salesperson', 'Ralph Alpher'),
  ('George', 'Gamow', 'Lead Engineer', null),
  ('Daisy', 'Delta', 'Software Engineer', 'George Gamow'),
  ('Elsa', 'Engles', 'Account Manager', null),
  ('Fiona', 'Fowler', 'Accountant', 'Elsa Engles'),
  ('Gary', 'Gainer', 'Legal Team Lead', null),
  ('Helen', 'Hu', 'Lawyer', 'Gary Gainer'),
  ('Ines', 'Innocenza', 'Intern', 'George Gamow');