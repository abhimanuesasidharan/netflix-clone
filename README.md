# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

// api = a776feb1fbb500d7e32fca3a4d451ce4
// accss tkn = eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzc2ZmViMWZiYjUwMGQ3ZTMyZmNhM2E0ZDQ1MWNlNCIsInN1YiI6IjY1NzAxNGUwMzgzZGYyMDEwY2VkYjQxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YCqpitSWVpntrvI77ewKwGGLh74XwVC0g55t4me2CnE

map =            {movies.map((movie, index) => {
  const { id, title, backdrop_path, poster_path } = movie;
  const baseImageUrl = 'https://image.tmdb.org/t/p/original/';
  const imageUrl = backdrop_path ? baseImageUrl + backdrop_path : baseImageUrl + poster_path;