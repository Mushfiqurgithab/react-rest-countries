// import logo from './logo.svg';
import './App.css';
import Countries from './components/Countries/Countries';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import Person from './components/Person/Person';
// import Header from './components/Header/Header';
// import './components/Header/Header.css'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       {/* <LoadCountries></LoadCountries> */}
//       {/* <Header></Header>
//       <Countries></Countries>
//       <Person></Person> */}
//     </div>
//   );
// }


// function LoadCountries(){
//   // 1. Declaring State to save loaded data
//   const [countries, setCountries] = useState([]);

//   // 2.Writing useEffect()
//   useEffect( ()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res=>res.json())
//     .then(data=>setCountries(data))
//   },[])
//   return (
//     <div>
//       <h1>Visiting Every country of the World</h1>
//       <h3>Available Countries: {countries.length}</h3>
//       {
//         countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
//       }
//     </div>
//   )
// }

// function Country(props){
//   return (
//     <div>
//       <h2>Name: {props.name}</h2>
//       <h4>Population: {props.population}</h4>
//     </div>
//   )
// }

export default App;
