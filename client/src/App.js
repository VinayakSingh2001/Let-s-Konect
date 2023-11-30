import "./App.css";
import Flex from "./components/Flex";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Header />
      <Flex />
      <Footer />
    </>
  );
}

export default App;
