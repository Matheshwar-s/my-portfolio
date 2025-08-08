import Hero from "../src/sections/Hero";
import { About, Projects, Contact } from "../src/sections/Hero"; // if exported from same file

function App() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
