import React from 'react';
import './Country.css'

// rsc
const Country = (props) => {
    const {area, region, population,name, flags} = props.country;
    // console.log(props.country)
    return (
        <div className='country bg-warning'>
            {/* <h2>Country Name: {props.country.name.common}</h2>
            <p>Population: {props.country.population}</p>
            <p>Region: {props.country.region}</p> */}

            <h2>Country Name: {name.common}</h2>
            <img src={flags.png} alt=""/>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p>Area: {area}</p>
        </div>
    );
};

export default Country;