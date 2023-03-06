import "./App.css";
import Navbar from "./components/Navbar/NavBar";
import Projects from "./pages/Projects/Projects";
import { Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil/Accueil";
import Header from "./components/Header/Header";
import Contact from "./pages/Contact/Contact";

function App() {
  const URL = [
    {
      path: "/",
      element: <Accueil />,
    },
    {
      path: "/projets",
      element: <Projects />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ];

  const routeElements = URL.map((step, index) => (
    <Route key={index} path={step.path} element={step.element} />
  ));

  return (
    <>
      <Navbar />
      <Header />

      <Routes>{routeElements}</Routes>
    </>
  );
}

export default App;
