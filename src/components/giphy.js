import React, { useEffect, useState } from "react";
import "../App.css"

const Giphy = ({ key, img }) => {
  return <div>
    <img className='gif' src={img}/>
  </div>
};

export default Giphy;