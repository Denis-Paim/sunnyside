import './App.css';
import NavBar from './componentes/Header/NavBar';
import Content from './componentes/Services/Content';
import Testimonials from './componentes/Testimonials/Testimonials';
import Pictures from './componentes/Pictures/Pictures';
import Footer from './componentes/Footer/Footer';

function App() {
  return (
    <div>
      <NavBar /> 
      <Content />
      <Testimonials />
      <Pictures />
      <Footer />
    </div>
    
  );
}

export default App;

