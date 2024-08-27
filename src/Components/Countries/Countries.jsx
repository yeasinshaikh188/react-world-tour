import { useState } from "react";
import { useEffect } from "react";
import Country from "../Country/Country";
import './countries.css'

const Countries = () => {
      
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data));
  }, [])


  const handleVisitedCountry = (country) =>{

    console.log("add your visited country ");
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
   
  }

    return (
        <div>
            <h3>Countries : {countries.length}</h3>
          <div>
            <h4>Visited Countries: {visitedCountries.length} </h4>
            {
                visitedCountries.map(country =><li>{country.name.common}</li>)
            }
            
          </div>
          <div className="countrie-container">
          {
                countries.map(country => <Country handleVisitedCountry={handleVisitedCountry} country={country} key={country.cca3}></Country>)
            }
          </div>
        </div>
    );
};

export default Countries;