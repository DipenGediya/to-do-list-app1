import Banner from "./components/Banner";
import Features from "./components/Features";
import Header from "./components/Header";
import Pricing from "./components/Pricing";
import Saving from "./components/Saving";
import Testimonial from "./components/Testimonial";
import Work from "./components/Work";

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Features />
        <Saving />
        <Work />
        <Testimonial />
        <Pricing/>
      </main>
    </>
  );
}

export default App;
