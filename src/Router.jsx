import Header from "./companetes/Header/Header";
import Footer from "./companetes/Footer/Fotter";
import Form from "./companetes/Form/Form";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import App from "./App";
import Projects from "./companetes/projects/projects";
import Team  from './companetes/Team/Team'



const AppRoutes = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/contato" element={<Form />} />
          <Route path="/listProjects" element={<Projects />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </Router>
    );
  };
  
export default AppRoutes