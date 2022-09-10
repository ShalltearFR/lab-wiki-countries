import logo from './logo.svg';
import './App.css';
import CountriesList from './components/CountriesList';
import NavBar from './components/NavBar';
import { useParams,Routes,Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';




function App() {
  const {param}=useParams();
  
  return (
    <div className="App">
    <NavBar/>
    <CountriesList/>
    <Routes>
    <Route path="/:id" element={ <CountryDetails CountryDetails={param} /> } />
    </Routes>
    </div>
  );
}

export default App;
