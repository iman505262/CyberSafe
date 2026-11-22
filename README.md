# CyberSafe — Cybersecurity Tips Website

**CISW 128 — Web App Development**  
**College of Southern Idaho**

## About the Project

CyberSafe is a simple website that shares helpful cybersecurity tips. The goal is to help people learn how to protect their personal information and stay safe online.

Users can add, view, edit, and delete cybersecurity tips.

## Features

- Home page with information about CyberSafe.
- About section explaining the purpose of the website.
- Cybersecurity tips with helpful information.
- Show More Information button.
- Add a cybersecurity tip.
- Add a security category for each tip.
- View saved tips and categories.
- Edit both the tip and its category.
- Delete tips from the database.
- Website styling that works on desktop and mobile screens.

## Additional Database Field

I expanded the original CRUD starter project by adding a new database field called **category**.

Each cybersecurity tip now has two fields:

- **Title:** The cybersecurity tip.
- **Category:** The type of security tip, such as Password Safety or Account Security.

For example:

- Tip: Always use a different strong password for every account.
- Category: Password Safety

I created a new database migration to add the category column without changing the original migration.

## Technologies Used

- HTML
- CSS
- JavaScript
- Netlify Functions
- Netlify Database
- SQL
- GitHub
- Netlify

## Project Files

```text
src/
  index.html
  styles.css
  app.js

netlify/
  functions/
    get-items.mjs
    add-item.mjs
    update-item.mjs
    delete-item.mjs

  database/
    migrations/
      .../migration.sql
      20261119000000_add-category/
        migration.sql

README.md
```

## How the Website Works

The website uses JavaScript to communicate with Netlify Functions.

The functions use SQL to communicate with the database.

The browser does not connect directly to the database.

```text
Website
   |
   v
app.js
   |
   v
Netlify Functions
   |
   v
Database
```

## Running the Project Locally

### 1. Install Dependencies

Open the project in Visual Studio Code and open a terminal.

Run:

```bash
npm install
```

### 2. Apply Database Migrations

Run:

```bash
npm run db:migrate
```

This creates the database table and applies the additional category column.

### 3. Start the Website

Run:

```bash
npm run dev
```

Open this address in your browser:

http://localhost:8888

Keep the terminal running while testing the website.

## Testing CRUD Features

I tested all four CRUD operations:

1. **Create:** Add a cybersecurity tip and category.
2. **Read:** Display saved tips and categories.
3. **Update:** Edit a tip and its category.
4. **Delete:** Remove a saved tip.

I also refreshed the website to make sure the information remained saved in the database.

## GitHub Repository

GitHub repository:

https://github.com/iman505262/CyberSafe

## Live Website

Netlify website:

https://cybersafe-5xti.netlify.app

## Known Issues

- The website does not currently have user accounts or login functionality.
- The website is a basic cybersecurity tips project and does not provide professional security services.

## Project Goal

The goal of this project is to demonstrate how a web application works and how its functionality can be expanded using HTML, CSS, JavaScript, backend functions, and a database.

The project started with a basic CRUD application and was customized into CyberSafe by adding a cybersecurity theme and a new database field.