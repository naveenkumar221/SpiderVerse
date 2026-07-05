import Hero from "../Components/Hero/Hero";
import MovieSection from "../Components/MovieSection/MovieSection";
import CharacterSection from "../Components/CharacterSection/CharacterSection";
import VillainSection from "../Components/VillainSection/VillainSection";
import Timeline from "../Components/Timeline/Timeline";
import Gallery from "../Components/Gallery/Gallery";
import FeaturedMovie from "../Components/FeaturedMovie/FeaturedMovie";
import Footer from "../Components/Footer/Footer";
import SearchBar from "../Components/SearchBar/SearchBar";

function Home() {
  return (
    <>
      <Hero />
      <FeaturedMovie/>
      <MovieSection />
      <CharacterSection />
      <VillainSection />
      <Timeline />
      <Gallery />
      <SearchBar />
      
    </>
  );
}

export default Home;