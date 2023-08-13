"use client"

import React from "react"
import Navbar from "./components/Navbar"
import Selector from "./components/Selector"
import Chart from "./components/Chart"

export default function HomePage() {
  const [curr, setCurr] = React.useState("ethereum")
    const [time, setTime] = React.useState([])
    const [price, setPrice] = React.useState([])

    
    const getData = async() => {
      try {
          let data = await fetch(`https://api.coingecko.com/api/v3/coins/${curr}/market_chart?vs_currency=usd&days=365&interval=daily`);
      data = await data.json();
      let timestamp = [];
      const rate = data.prices.map((el)=> {
          let tym = new Date(el[0]).toLocaleDateString();
          timestamp.push(tym)
          return el[1];
      })

      setPrice([...rate])
      setTime([...timestamp])
      
      } catch (error) {
          console.log(error)
      }
  }

  React.useEffect(()=> {
      getData()
  },[curr])


  return (
    <>
    <Navbar/>
    <Selector currSetter = {setCurr} />
    <div style={{width: "100%", heigth: "80vh"}}>
    <Chart time={time} price={price} curr={curr}/>
    </div>
    </>
  )
}
