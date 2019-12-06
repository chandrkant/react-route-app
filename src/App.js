import React, {useState, useEffect} from 'react';
import './App.css';
import SelectBox from "./features/index";

function App() {
    const [country,setCountry] = useState([])
    const allCountries =  async () =>{
        const data = await fetch('https://restcountries.eu/rest/v2/all')
        const cData = await data.json();
        await setCountry(cData)
        console.log(country)
    }
    useEffect(() =>{
        allCountries()
    },[])
  return (
     <div>
         <h1>Custom select Box</h1>
         <SelectBox
             country={country}
             name="country_name"
             code="country_code"
         />
     </div>
  )
}

export default App;