# 🏢 Urban Listings

This repository contains a project that scrapes apartment listings using Selenium, saves the data to a PostgreSQL database, and displays the listings through React. All components are containerized and orchestrated using Docker.

## 🌟 Features

- **Apartment Listings Scraper**: Using Selenium for scraping apartment listings.
- **PostgreSQL Database**: Storage for the scraped apartment data.
- **React Frontend**: User interface to browse and view apartment listings.
- **Docker Compose**: Services orchestrated using Docker for easy deployment.

## 🛠️ Technologies Used

![React Badge](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=for-the-badge)
![TypeScript Badge](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=for-the-badge)
![PostgreSQL Badge](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=fff&style=for-the-badge)
![Python Badge](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=fff&style=for-the-badge)
![Selenium Badge](https://img.shields.io/badge/Selenium-43B02A?logo=selenium&logoColor=fff&style=for-the-badge)
![Docker Badge](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=fff&style=for-the-badge)

## 🚀 Getting Started

### Prerequisites

Make sure you have Docker installed on your system.

### Installation

1. Clone the repository: `git clone https://github.com/klemen-s/Urban-Listings.git`
2. Navigate to the project directory: `cd Urban-Listings`

### Usage

1. Run Docker Compose: `docker-compose up -d`
2. Access the frontend at `http://localhost:8080` in your web browser.

### Services

- **Backend**: Node.js backend running at `http://localhost:8000`.
- **React** : React frontend running at `http://localhost:8080`.
- **Database**: PostgreSQL database running at `http://localhost:5432`.
- **Python**: Apartment ads scraping service.

### Development

- The frontend source code resides in the `client` directory.
- Backend code is in the `server` directory.
- Python scraper code is in the `flatScraper` directory.

### Configuration

Check the `compose.yml` file for service configuration details.
