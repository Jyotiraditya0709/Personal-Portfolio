import "./App.css";
import { Navbar } from "./component/navbar";
import { Profile } from "./component/profile";
import { About } from "./component/about";
import { Project } from "./component/project";
import { Contact } from "./component/contact";
import { Footer } from "./component/footer";
import { useScrollAnimation } from "./useScrollAnimation";

function App() {
  useScrollAnimation();

  return (
    <div className="App">
      <Navbar />
      <Profile />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
