import logo from './logo.svg';
import About from './pages/About';
import Home from './pages/Home';
import Skills from './pages/Skills';
//import './App.css';
import "./AllCss/Portfolio.css"
import "bootstrap/dist/css/bootstrap.min.css"
import PortfolioNavBar from './componants/PortfolioNavBar';
import MyCarausel from './componants/MyCarausel';
import 'react-owl-carousel2/lib/styles.css';
import MyOffCanva from './componants/MyOffCanva';
import CanvaRoutes from './CanvaRoutes';


function App() {
  return (
    <>
      {/* <PortfolioNavBar />
      <section id='home'>
        <Home />
      </section>

      <section id='about'>
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section> */}

      {/* <MyCarausel /> */}

      {/* <MyOffCanva /> */}
      <CanvaRoutes/>



    </>
  );
}

export default App;
