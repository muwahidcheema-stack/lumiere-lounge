# 🎬 Lumiére Lounge
**Lumiére Lounge** is a modern, responsive React web application that allows movie enthusiasts to explore trending titles, search through vast catalogs, filter movies by genre or release year, view detailed movie information, and bookmark their personal favorite movies.

---

Powered by TMDB (The Movie Database) API and styled with Tailwind CSS.

# ✨ Features

*  **🔥 Home Dashboard:** Sections featuring Trending, Top-Rated, Upcoming, and Popular movies.

*  **🔍 Search Capabilities:** Real-time search functionality allowing users to instantly look up movies.

*  **🎛️ Advanced Filtering & Sorting:** Filter movies dynamically by genre, release year, language, or sort by popularity and rating using TMDB's /discover endpoint.

*  **❤️ Favorite Movies:** Save favorite movies using React Context and local state to build a personal watchlist.

*  **📱 Fully Responsive Design:** Clean, mobile-first design with smooth layouts across devices—from smartphones to ultra-wide displays.

---

## 🛠️ Tech Stack
*  **Frontend:** React.js (Vite)

*  **Styling:** Tailwind CSS

*  **Routing:** React Router DOM (react-router-dom)

*  **API:** TMDB API (The Movie Database)

*  **HTTP Client:** Axios / Fetch API

*  **Icons:** Heroicons / Inline SVGs

---

## 📁 Project Structure

```text
src/
├── components/
│   ├── FilterBar.jsx      # Dynamic filter controls (Genre, Year, Sort)
│   ├── MovieCard.jsx      # Reusable movie item component
│   ├── Navbar.jsx         # Sticky header navigation bar
│   ├── Footer.jsx         # Application footer
│   └── Loader.jsx         # Skeleton loading screen
├── context/
│   └── FavoriteContext.jsx # Global context state for saved favorites
├── pages/
│   ├── Home.jsx           # Main landing page
│   ├── Favorites.jsx      # Bookmarked movies page
│   ├── MovieDetails.jsx   # Detailed view of a single title
│   └── NotFound.jsx       # Custom 404 error screen
├── services/
│   └── tmdbApi.js         # API integration & endpoints logic
├── App.jsx                # Application routes layout
└── main.jsx               # Entry point
```
---

## 🚀 Getting Started
Follow these steps to set up and run the project locally on your machine.

* 1. Clone the Repository
  ```text
  git clone https://github.com/your-username/lumiere-lounge.git
  cd lumiere-lounge
  ```
* 2. Install Dependencies
  ```text
  npm install
  ```
* 3. Set Up Environment Variables
  ```text
  Create a .env file in the root directory and add your TMDB API Key:
  ```
* 4. Code snippet
  ```text
  VITE_TMDB_API_KEY=your_tmdb_api_key_here
  VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
  ```

* 5. Run Development Server
  ```text
  npm run dev
  ```
---

## 👨‍💻 Developer
Developed with ❤️ by Muwahid Cheema.
