
# Item Management API - Hometask by Connect

This API allows users to manage items and categories with endpoints for adding, updating, searching, and retrieving items and categories.

---

## Table of Contents
- [Setup Instructions](#setup-instructions)
  - [Step 1: Download & Navigate to Project Folder](#step-1-download--navigate-to-project-folder)
  - [Step 2: Install Dependencies](#step-2-install-dependencies)
  - [Step 3: Set Up MySQL Database with XAMPP](#step-3-set-up-mysql-database-with-xampp)
  - [Step 4: Configure Environment Variables](#step-4-configure-environment-variables)
  - [Step 5: Run the Server](#step-5-run-the-server)
- [Test the API](#test-the-api)
  - [Endpoints](#endpoints)
  - [API Key Authentication](#api-key-authentication)

---

## Setup Instructions

### Step 1: Download & Navigate to Project Folder

Navigate to the project folder via terminal:
```bash
cd <project_folder>
```

### Step 2: Install Dependencies

In the project folder, run the following command to install the required Node.js packages (dotenv, MySQL2, Joi, Express, and Sequelize):
```bash
npm install
```

### Step 3: Set Up MySQL Database with XAMPP

1. **Start XAMPP**: Open XAMPP and start the **Apache** and **MySQL** modules.
2. **Access phpMyAdmin**:
   - Open a browser and go to [http://localhost/phpmyadmin](http://localhost/phpmyadmin).
3. **Create a Database**:
   - In phpMyAdmin, create a new database named `connect_api`.
4. **Create Tables Using Sequelize**:
   - Instead of manually creating tables, use Sequelize to handle migrations. Run the following commands to automatically create tables and populate mock data:

#### Run Migrations
This command creates the tables in the database based on the models and migration files:
```bash
npx sequelize-cli db:migrate
```

#### Run Seeders
This command inserts mock data into the tables (10 items and 2 categories as per requirements):
```bash
npx sequelize-cli db:seed:all
```

### Step 4: Configure Environment Variables

In the project folder, update the `.env` file according to your database configuration. Below is an example of the necessary variables:

```plaintext
DB_HOST=localhost
DB_USERNAME=root
DB_PASSWORD=yourpassword
DB_DATABASE=connect_api
DB_DIALECT=mysql
API_KEY=your_api_key_here
```

- Replace `yourpassword` with the MySQL root password (if using XAMPP with no password, leave it blank).
- Replace `your_api_key_here` with a secure API key of your choice, or use the one provided in the existing `.env` file.

### Step 5: Run the Server

Start the server by running:
```bash
node app.js
```

You should see a message indicating that the server is running on **port 3000**.

---

## Test the API

### Endpoints

The API includes the following endpoints:

- **POST** `/api/category` - Add a new category
- **GET** `/api/category/:id` - Get category details and associated items by category ID
- **POST** `/api/items` - Create or update an item with volumes
- **GET** `/api/items` - Retrieve all items
- **GET** `/api/item/:id` - Retrieve item details by ID
- **GET** `/api/item/search?query=<string>` - Search for items and categories based on a search string

### API Key Authentication

All endpoints require an API key for authentication. Include the key in the `apikey` header for each request:

```plaintext
apikey: your_api_key_here
```

---

Thank you for your time! 😊
