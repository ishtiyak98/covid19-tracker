import { FormControl, NativeSelect } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styles from "./CountryPicker.module.css";

const CountryPicker = ({handleCountryChange}) => {
    const [countries, setCountries] = useState({})

    useEffect(()=>{
        fetch("https://covid19.mathdro.id/api/countries")
        .then(res=> res.json())
        .then(data => setCountries(data))
    },[setCountries]);


    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=> handleCountryChange(e.target.value)}>
                <option value={"global"}>Global</option>
                {
                    countries?.countries?.map((country, index) => <option key={index} value={country.name}>{country.name}</option>)
                }
            </NativeSelect>
        </FormControl>
    );
};

export default CountryPicker;