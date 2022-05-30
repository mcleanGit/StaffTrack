# 12 SQL: Employee Tracker

EmployeeTracker is a command-line application to manage a company's employee database. The app uses Node.js, Inquirer, and MySQL. The database is set up with `mysql` using a created employee_tracker_db. The db is sourced with schema and seeded from the mysql prompt line. Queries can be made within mysql. However, mysql is quit so the command-line application can be launched with `node index`. Interactions through `inquirer` prompts are set up so that user responses are fed through functions to read, create, update, and delete information on employees, roles, and departments which is displayed via `console.table`. As the app is not deployed, a link to a walkthrough video is provided at the end of this README. The github repository for the app is found here: https://github.com/mcleanGit/StaffTrack.

This is the received background User Story the app addresses:

## User Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
  SO THAT I can organize and plan my business
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
  THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
  THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
  THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
  THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
  THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
  THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
  THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
  THEN I am prompted to select an employee to update and their new role and this information is updated in the database
```

## Mock-Up

The following video shows an example of the requisite application being used from the command line:

[![A video thumbnail shows the command-line employee management application with a play button overlaying the view.](./Assets/12-sql-homework-video-thumbnail.png)]
Link to the video version: (https://2u-20.wistia.com/medias/2lnle7xnpk)

## Getting Started

The app uses the [MySQL2 package](https://www.npmjs.com/package/mysql2) to connect to the MySQL database and perform queries, the [Inquirer package](https://www.npmjs.com/package/inquirer) to interact with the user via the command line, and the [console.table package](https://www.npmjs.com/package/console.table) to print MySQL rows to the console.

**Important**: Comments were provided on password security issues issues with the potential GitHub exposure of the MySQL password. Suggest changing to 'root' and 'blank' or some default form like "1234". I often use a placeholder non-secure password based on pitch-class set theory partitions: "02468a13579B!". The use of 'a' and 'B' and '!' satisfies most password character set restrictions.

Making queries asynchronous: MySQL2 exposes a `.promise()` function on Connections to upgrade an existing non-Promise connection to use Promises. See the [npm documentation on MySQL2](https://www.npmjs.com/package/mysql2).
*Note:* The code in db/index.js uses MySQL2 promissory syntax to `return this.connection.promise().query(...` that embeds standard SQL commands for each function.

## DB Schema and Seeds

The database schema is shown in the following image:

![Database schema includes tables labeled “employee,” role,” and “department.”](./Assets/12-sql-homework-demo-01.png)

The overall schema contains three tables (departments, roles, and employees):

* `departments`
  * `id`: `INT PRIMARY KEY`
  * `name`: `VARCHAR(30)` to hold department name

* `roles`
  * `id`: `INT PRIMARY KEY`
  * `title`: `VARCHAR(30)` to hold role title
  * `salary`: `DECIMAL` to hold role salary
  * `department_id`: `INT` to hold reference to department role belongs to

* `employees`
  * `id`: `INT PRIMARY KEY`
  * `first_name`: `VARCHAR(30)` to hold employee first name
  * `last_name`: `VARCHAR(30)` to hold employee last name
  * `role_id`: `INT` to hold reference to employee role
  * `manager_id`: `INT` to hold reference to another employee that is the manager of the current employee (`null` if the employee has no manager)

  The three tables are found in db/schema.sql.

Suggestions to consider included: 
You might want to use a separate file that contains functions for performing specific SQL queries you'll need to use. A *constructor function* or *class* could be helpful for organizing these. 
*Note:* although I initially experimented with creating a separate sqlQueries.js file to hold queries, as well as other modularized code, I opted in the end to embed a Class DB within the main db/index.js file to organize the promissory queries within the various functions (e.g., findAllDepartments, updateEmployeeRole, etc.) that, along with the inquirer.prompt questions, and switch cases for user responses, are run through functions in a main index.js file that calls upon the db/index which holds the SQL queries.

You might also want to include a `seeds.sql` file to pre-populate your database, making the development of individual features much easier.
*Note:* a `db/seeds.sql` file was created and pre-populated with fake data. The staff names include reference to Ralph Alpher, Hans Bethe, and George Gamow, who were actual renowned physicists, witty authors of the so-called `alpha-beta-gamma` (or alphabetical) article in cosmology research. In keeping with the witty spirit of alpha-beta-gamma, my additional seeded and created employees continue to invoke greek alphabet allusions.

## Current functionality (limits and 'bonus' options)

The functionality of this application is admittedly quite limited in its SQL usage. At a later date, I hope to revisit the application and the SQL material to implement additional functionality which draws upon slightly more advanced multi-table SQL queries. Of the various 'bonus' options suggested, I did, however, manage to include DELETE functions for departments, roles, and employees in the current app.

## Review

The following items are submitted for review:

* A walkthrough video demonstrating the functionality of the application.
  Link to video walkthrough in README:
 ![](https://vimeo.com/715050312/e6b7445f4b)


* The URL of the GitHub repository, with a unique name and a README describing the project.
  Link to GitHub repo:  
  ![](https://github.com/mcleanGit/StaffTrack)


- - -
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
