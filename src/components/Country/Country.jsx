import React from 'react';
import './Country.css'
const Country = (props) => {
    const {name, flags, capital,population,region  } = props.country;
    console.log(props.country.flags.png);
    return (
        <div className='country'>
            <h4>This is : {name.common}</h4>
            <img src={flags.png} alt="" />
            <p><small>Region:{region}</small></p>
            <p>Capital is: {capital}</p>
            <p>Populetion: {population}</p>
        </div>
    );
};

export default Country;