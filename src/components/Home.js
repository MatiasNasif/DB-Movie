import CarouselHome from "./CarouselHome";
import MoviesGrid from "./MoviesGrid";
import Search from "./Search";

const Home = () => {
  return (
    <div>
      <CarouselHome/>
      <Search />
      <MoviesGrid />
    </div>
  );
};

export default Home;
