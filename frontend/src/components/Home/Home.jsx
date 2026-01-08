import Navbar from "../NavBar";
import Footer from "./Footer";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section1 from "./Section1";

function Home() {
  return (
    <div>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  );
}

export default Home;
