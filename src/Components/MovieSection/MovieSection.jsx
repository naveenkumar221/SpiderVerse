import "./MovieSection.css";
import movies from "../../data/movies";
import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import MovieModal from "../MovieModal/MovieModal";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import MovieCard from "../MovieCard/MovieCard";

function MovieSection() {

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);
  const toggleFavorite = (id) => {
  if (favorites.includes(id)) {
    setFavorites(favorites.filter((item) => item !== id));
  } else {
    setFavorites([...favorites, id]);
  }
};

  return (
    <section id="movies" className="movies">

      <h1>Latest Movies</h1>
      <SearchBar
        search={search}
        setSearch={setSearch}
    />

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1.2,
          },
          768: {
            slidesPerView: 2.2,
          },
          1024: {
            slidesPerView: 3.2,
          },
          1400: {
            slidesPerView: 4.2,
          },
        }}
      >

     {movies
        .filter((movie) =>
            movie.title.toLowerCase().includes(search.toLowerCase())
        )
        .map((movie) => (

            <SwiperSlide key={movie.id}>

            <div onClick={() => setSelectedMovie(movie)}>
                <MovieCard
                        movie={movie}
                        isFavorite={favorites.includes(movie.id)}
                        toggleFavorite={toggleFavorite}
                />
            </div>

            </SwiperSlide>

        ))}

      </Swiper>

      <MovieModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />

    </section>
  );
}

export default MovieSection;