import { useState } from 'react';
import './country.css'
const Country = ({country, handleVisitedCountry}) => {
    console.log(country)
    const {name, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () =>{
        setVisited(!visited);
    }
    
    const passWithParam = () => handleVisitedCountry(country);

    

    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h4 style={{color: visited ? 'yellow' : 'white'}}>name: {name.common} </h4>
            <img src={flags.png} alt="" />
            <p>Population: {population} </p>
            <p>Area: {area} </p>
            <p><small>code: {cca3} </small></p>
            <button onClick={ ()=> handleVisitedCountry(country)}>Mark Visited</button>
            <button onClick={handleVisited}>{visited?"visited":'Going'} </button>
            {visited ?'I have visited this country': 'i want visit this country'}
        </div>
    );
};

export default Country;