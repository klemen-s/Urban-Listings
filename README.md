# 🏢 Apartment Listing Full-Stack App

This repository contains a project that scrapes apartment listings using Selenium, saves the data to a PostgreSQL database, and displays the listings through a React frontend. All components are containerized and orchestrated using Docker.

## 🌟 Features

- **Apartment Listing Scraper**: Using Selenium for scraping apartment listings.
- **PostgreSQL Database**: Storage for the scraped apartment data.
- **React Frontend**: User interface to browse and view apartment listings.
- **Docker Compose**: Services orchestrated using Docker for easy deployment.

## 🛠️ Technologies Used

- React
- Typescript
- Node.js
- PostgreSQL
- Python

## 🚀 Getting Started

### Prerequisites

Make sure you have Docker installed on your system.

### Installation

1. Clone the repository: `git clone https://github.com/klemen-s/react-node.git`
2. Navigate to the project directory: `cd react-node`

### Usage

1. Run Docker Compose: `docker-compose up -d`
2. Access the frontend at `http://localhost:8080` in your web browser.

### Services

- **Backend**: Node.js backend running at `http://localhost:8000`.
- **React** : React frontend running at `http://localhost:8080`.
- **Database**: PostgreSQL database running at `http://localhost:5432`.
- **Python Scraper**: Apartment ads scraping service.

### Development

- The frontend source code resides in the `client` directory.
- Backend code is in the `server` directory.
- Python scraper code is in the `flatScraper` directory.

### Configuration

Check the `compose.yml` file for service configuration details.
