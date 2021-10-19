import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import { About } from "./MyComponents/About";
import { Footer } from "./MyComponents/Footer";

function App() {
  return (
    <>
      <Header title="MyToDosList" searchBar= {false}/>
      <About/>
      <Footer/>
    </>
  );
}

export default App;
