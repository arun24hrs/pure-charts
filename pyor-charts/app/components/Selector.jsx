"use client"
import React from 'react'

const Selector = ({currSetter}) => {
    const changeSelect = (e) => {
        currSetter(e.target.value)
        
    }

  return (
    <div style={{padding: "20px", backgroundColor: "rgb(203 213 225)"}}>
        <div>
        <select class="w-80 border-2 rounded-md" onChange={(e)=>changeSelect(e)}>
          <option>Select Currency</option>
          <option value="ethereum">Ethereum</option>
          <option value="dogecoin">DogeCoin</option>
          <option value="solana">Solana</option>
        </select>
      </div>
    </div>
  )
}

export default Selector