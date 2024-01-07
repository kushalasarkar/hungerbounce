import './App.css';
import Body from './components/body/Body';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import {Outlet} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Outlet/>
      <Footer/>
      
    </div>
  );
}

export default App;

//abc

// 
// app
// - header
//   - navbar
//     - logo
//     - nav list
//       - Home 
//       - About 
//       - Contact Us 
// - body
//   - search
//   - card-container
//     - cards  
// 
// - footer
// 