
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home" ;
import Animals from "./pages/Animals" ;
import Birds from "./pages/Birds" ;
import Food from "./pages/Food" ;
import Menu from "./components/Menu" ;
import AnimalList from "./components/AnimalList";



function App() {
  let myAnimals=[{
   "nom" : "Tom", "espece" : "Chat", "age" : "2", "descr" : "un chat hyper gentil", "image" :"/images/Tom.jpg"},
  {"nom" : "Greta", "espece" : "Chien", "age" : "5", "descr"  : "une chienne adorable pour les enfants","image " :"/images/Greta.jpg"} ,
  {"nom" : "Brandon", "espece" :"Chien","age" : "10", "descr" :"Ce bulldog est fait pour les grands amateurs", "image" : 
  "/images/Brandon.jpg"}
   , ]
  return (
    <div className="App">
    <BrowserRouter>
    <Menu/>
    <Routes>
      <Route path ="/" element ={<Home/>}/> 
      <Route path ="/animals" element ={<Animals/>}/>
      <Route path ="/birds" element ={<Birds/>}/>
      <Route path ="/food" element ={<Food/>}/>
      <Route path ="./components/AnimalList" element ={<AnimalList/>}/>
    </Routes>
    </BrowserRouter>
    
    
    </div>
  );
}

export default App;
