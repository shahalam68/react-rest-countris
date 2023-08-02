/* eslint-disable react/jsx-key */
import './App.css';
import Countries from './components/Countries/Countries';


function App() {
  return (
    <div>
      <Countries></Countries>
    </div>
  )
}

{/* // function Countries(){
//   const [countries, setCountries] = useState([]);
//   useEffect(() =>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setCountries(data))
//   }, [])
//   return (
//     <div>
//       <h4>Countries Available: {countries.length}</h4>
//       {
//         countries.map(country => <Country name={country.name.common} capital={country.capital}></Country>)
//       }
//     </div>
//   )
// }


// function Country(props){
//   return(
//     <div>
//       <h2>Name: {props.name}</h2>
//       <p>Capital: {props.capital}</p>
//     </div>
//   )
// } */}


export default App;
