# Multi-Container Application with Docker, Node.js, and React

## Overview

This project demonstrates a **multi-container application** using Docker, combining a **PostgreSQL database**, a **Node.js backend**, and a **React frontend**. The application fetches and displays data stored in a PostgreSQL database. The data represents information about Docker, Ansible, Jenkins, and other DevOps tools. The backend API serves the data in a paginated form, and the React frontend displays it with basic pagination.

## Project Structure

- **PostgreSQL Service**: Stores application data and is configured with credentials and connection details in the Docker Compose file.
- **Node.js Backend**: Built with Express.js, connects to PostgreSQL, and serves data through an API.
- **React Frontend**: Fetches and displays data from the Node.js backend with pagination.

## Technologies Used

- **PostgreSQL**: Database management.
- **Node.js (Express)**: Backend API.
- **React**: Frontend user interface.
- **Docker**: Containerization of services.

## Prerequisites

- Docker and Docker Compose installed on your local machine.

## Getting Started

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone <repository-url>
cd <project-directory>

```

### 2. Setup the Docker Containers

Run the following command to build and start the application:

```bash
docker-compose up --build
```

This command will:

- Start the PostgreSQL database container with predefined credentials (`devuser`, `devpassword`, `devdb`).
- Build and start the Node.js backend service.
- Build and start the React frontend service.

### 3. Access the Application

- **Backend API**: [http://localhost:5000/information](http://localhost:5000/information)
- **Frontend**: [http://localhost:3000](http://localhost:3000)

## Database Setup

The PostgreSQL service is initialized with a sample SQL script (`init.sql`) that creates a table called `information` and inserts 30 records related to Docker, Ansible, Jenkins, and other DevOps tools.

### Table Structure

```sql
CREATE TABLE information (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description TEXT
);
```

## API Endpoints

### `/information`
- **Method**: `GET`
- **Description**: Fetches information records with pagination support.
- **Query Parameters**:
  - `page` (optional, default is 0): The page number for pagination.

#### Example Request:

```bash
GET http://localhost:5000/information?page=0
```

#### Example Response:

```json
[
  {
    "id": 1,
    "title": "Docker Overview",
    "description": "Docker is a platform for developing, shipping, and running applications."
  },
  ...
]
```

## React Frontend

The React frontend fetches the information from the backend and displays it. The data is shown in a list, and the frontend supports pagination to view records one page at a time.

### Components

- **App**: The main component that handles data fetching and rendering. It displays the list of records and includes pagination buttons.

### Pagination

The frontend fetches one record per page and uses buttons to navigate through the pages. The data is dynamically fetched based on the `page` query parameter.

## Docker Compose Configuration

The `docker-compose.yml` file defines three services: `db`, `node`, and `react`.

## Development

### Backend (Node.js)

The backend service is built using Node.js and Express. The code is located in the `./node-app` directory. The Dockerfile in this directory builds the Node.js backend.

### Frontend (React)

The frontend service is a React application located in the `./react-app` directory. The Dockerfile in this directory builds the React application.

## Conclusion

This project showcases the power of Docker in running multi-container applications. It provides a full-stack solution with PostgreSQL as the database, Node.js for the backend, and React for the frontend. The application is containerized using Docker Compose, making setup and scalability easy and efficient.

```

