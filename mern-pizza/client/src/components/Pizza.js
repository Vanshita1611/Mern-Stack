import React from "react";

export default function Pizza({ pizza }) {
  return 
  <div>
    <h1>{pizza.name}</h1>
    <img src={pizza.image} className="image-fluid" style={{height:'200px',width:'200px'}}/>
    <div className="flex-container"></div>
    <div className="w-100">
      <p>Varients</p>
        <select>
        {pizza.varients.map(varient=>{
          return<option value={varient}>{varient}</option>
        })}

        </select>
      </div>
    <div className="w-100"><p>Prices</p></div>
  </div>;
}
