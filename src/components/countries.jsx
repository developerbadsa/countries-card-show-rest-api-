import Country from "./country"

import { useState, useEffect } from "react"



function countries(){
      const [count, setCount] = useState([])
     

      useEffect(()=>{
            fetch('https://restcountries.com/v3.1/all')
            .then(res=>res.json())
            .then(data=>setCount(data))

      },[])


   return (

      <Country data={count}></Country>
   )
}

export default countries