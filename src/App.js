
import Navigation from './pages/Navigation';
import Animals from './pages/Animals';
import Food from './pages/Food';
import Birds from './pages/Birds';
import Home from './pages/Home';
import './App.css';

import {BrowserRouter,Routes,Route} from 'react-router-dom' 

function App() {
 
 var m=[
    {
      "nom": "Bichet",
      "espece": "chat",
      "age": 1,
      "descr": "un chat hyper gentil",
      "image": "/images/image2.jpg",
 
    
    },
    {
      "nom": "lyloch",
      "espece": "Chien",
      "age": 2,
      "descr": "une chienne adorable pour les enfants",
      "image": "/images/image6.jpg",
      
    
    },
    {
      "nom": "Alex",
      "espece": "Chien",
      "age": 10,
      "descr": "gentil avec tout le monde et incroyablement docile",
      "image": "/images/image5.jpg",
  
    }
  
  ]


  return (
    <>
           
     <BrowserRouter>
     <Navigation/>
       <Routes>
       
       <Route path="/Home" element={<Home/>}/>
          <Route path="/Animals" element={ <Animals myAnimals={m} />}/>
          <Route path="/Birds" element={<Birds/>}/>
          <Route path="/Food" element={<Food/>}/>
       </Routes>
       
     </BrowserRouter>
    
    
    </>
   
  );
}

export default App;
