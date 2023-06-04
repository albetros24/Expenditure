import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Optionsection from '../Components/LeftSide/Optionsection'
import Display from '../Components/RightSide/Display'
import "./Mainpage.css"
import Dashboard from '../Components/Options/Dashboard'
function Mainpage() {
  return (
    <div className='parts'>
      <Optionsection/>
       <Display/>

    </div>
  )
}

export default Mainpage
