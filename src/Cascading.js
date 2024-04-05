import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Cascading() {
    const [countries, setCountries] = useState([])
    const [states, setStates] = useState([])
    const [selectedState, setSelectedState] = useState('')

    const fetchData = async() => {
        const res = await axios.get('https://api.countrystatecity.in/v1/countries',{
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

    const fetchState = async(iso2) =>{
        const res = await axios.get(`https://api.countrystatecity.in/v1/countries/${iso2}/states`,{
            headers: {
                'X-CSCAPI-KEY': 'YOUR_API_KEY'
              }
        })
        console.log(res)
        setStates(res.data)
    }

    const handleSelect = (event) =>{
        console.log(event.target.value)
        setStates([])
        setSelectedState('')
        fetchState(event.target.value)
    }

    const handleSelectState = (event) =>{
        setSelectedState(event.target.value)
        //fetchCity()
    }
  return (
    <div>
        <p>Select Country</p>
        <select class="form-select" aria-label="Default select example" onChange={(e=>handleSelect(e))}style={{width:'20rem'}}>
        <option value="" disabled selected></option>
        {countries.map((index,value) => (
            <option key={index} value={countries[value]["iso2"]}>{countries[value]["name"]}</option>
        ))}
        </select>
        <p>Select State</p>
        <select class="form-select" aria-label="Default select example" onChange={(e=>handleSelectState(e))}style={{width:'20rem'}}>
        <option value="" disabled selected></option>
        {states.map((index,value) => (
            <option key={index} value={states[value]["name"]}>{states[value]["name"]}</option>
        ))}
        </select>
        <p>{selectedState}</p>
    </div>
  )
}

export default Cascading