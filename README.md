# 📽️ Movie App

This project is a movie application that allows users to search movies, see what trending right now and rating of it's movies. The application may include features like movie listings, and external API integration (e.g., TMDB).

## Features

🎬 Browse movies </br>
🔍 Search for movies by title </br>
⭐ Popular & Recommended Movies
📅 View release date and ratings </br>
📡 API integration for movie data

## Technologies Used

- React.js
- HTML5
- CSS/Tailwind
- JavaScript (ES6+)
- TMDB API
- Appwrite Database

## Preview

<img width="1896" height="935" alt="image" src="https://github.com/user-attachments/assets/5647552d-bce2-44cf-a151-8ab86def4c91" />

## Installation

1. Clone the repository:
```
git clone https://github.com/HansLeon-stack/Movie.git
```

2. Navigate into the project directory:
```
cd Movie
```

3. Setup environment variables
```
API_KEY=your_api_key_here
VITE_APPWRITE_PROJECT_ID="From Appwrite"
VITE_APPWRITE_ENDPOINT="From Appwrite"
VITE_APPWRITE_DATABASE_ID="From Appwrite"
VITE_APPWRITE_TABLE_ID="From Appwrite"
```

4. Install dependencies:
```
npm install
```

5. Run the development server:
```
npm run dev
```

The Trending Movies feature is currently not working.
This issue occurs due to an error in the backend (Appwrite Database) that handles search logging and ranking.
