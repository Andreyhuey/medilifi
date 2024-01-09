import {
  About,
  Features,
  Header,
  Navbar,
  Services,
  Team,
  Footer,
  Contact,
} from "../components";

const Homepage = () => {
  return (
    <div className="relative">
      <Navbar />
      <Header />
      <About />
      <Features />
      <Services />
      <Contact />
      <Team />
      <Footer />
    </div>
  );
};

export default Homepage;
