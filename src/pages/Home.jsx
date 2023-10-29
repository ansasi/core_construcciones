import Hero from "../components/Hero";
import Estadisticas from "../components/Estadisticas";
import Testimonial from "../components/Testimonial";
import AreaNegocio from "../components/AreaNegocio";
import TrabajaConNosotros from "../components/TrabajaConNosotros";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div className="relative bg-neutral-50 w-full overflow-y-auto flex flex-col items-center justify-start">
      <NavBar />
      <Hero />
      <Estadisticas />
      <Testimonial />
      <AreaNegocio />
      <TrabajaConNosotros />
      <Footer />
    </div>
  );
};

export default Home;
