import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout.jsx";
import Home from "./pages/home.jsx";
import Movies from "./pages/movies.jsx";
import MovieShow from "./pages/MovieShow.jsx";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieShow />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
