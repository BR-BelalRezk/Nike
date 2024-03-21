import CustomerReviews from "../components/CustomerReviews";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import PopularProducts from "../components/PopularProducts";
import Services from "../components/Services";
import SpecialOffer from "../components/SpecialOffer";
import Subscribe from "../components/Subscribe";
import SuperQuality from "../components/SuperQuality";

export default function App() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <PopularProducts />
      <SuperQuality />
      <Services />
      <SpecialOffer />
      <CustomerReviews />
      <Subscribe />
      <Footer />
    </main>
  );
}
