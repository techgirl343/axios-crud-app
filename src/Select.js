import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Select() {
    const [countries, setCountries] = useState([])
    const [selectedCountry, setSelectedCountry] = useState('')

    const fetchData = async() =>{
        const res = await axios.get('https://api.countrystatecity.in/v1/countries', {
            headers: {
                'X-CSCAPI-KEY': 'YOUR_API_KEY'
            }
        })
        console.log(res)
        setCountries(res.data)
    }

    useEffect(()=>{
        fetchData()
    },[])

    const handleSelect = (event) => {
        console.log(event.target.value)
        setSelectedCountry(event.target.value)
    }
  return (
    <div style={{marginTop: '60px'}}>
        <p>Select Country</p>
        <select class="form-select" aria-label="Default select example" onChange={(e)=>handleSelect(e)} style={{width:'20rem'}}>
        <option value="" disabled selected></option>
        {countries.map((index,value)=>(
            <option value={countries[value]["name"]}>{countries[value]["name"]}</option>
        ))}
        </select>
        <p>{selectedCountry}</p>
    </div>
  )
}

export default Select