import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import WhyChoose from "./components/WhyChoose/WhyChoose";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Banner />
      <WhyChoose />
      <About />
      <Footer />
    </div>
  );
}

export default App;
