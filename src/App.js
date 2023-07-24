import './App.css';
import Cookies from './Componentes/Cookies';
import Imgmeme from './Componentes/Imgmeme';
import Memes from './Componentes/Memes';
import Navigation from './Componentes/Navigation';
import Footer from "./Componentes/Footer";



function App() {
  return (
    <div className="App">
      <Navigation/>
      <Cookies/>
      <Memes/>
      <Footer/>
      
    


    </div>
  )
}

export default App;