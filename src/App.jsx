
import Form from "../src/companetes/Form/Form.jsx";
import Projects from "../src/companetes/projects/projects.jsx";
import Team from "../src/companetes/Team/Team.jsx"
import Home from "../src/companetes/Banner/Banner.jsx";
import Header from "./companetes/Header/Header.jsx";
import Footer from "./companetes/Footer/Fotter.jsx";
import { Routes, Route } from 'react-router-dom';
Header
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Form />} />
        <Route path="/listProjects" element={<Projects />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <Footer />
    </>
  );
}



export default App;
