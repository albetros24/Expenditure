import React from 'react'
import "./Display.css"
import {Routes,Route} from 'react-router-dom'
import Dashboard from '../Options/Dashboard'
import Transaction from '../Options/Transaction'
import Income from '../Options/Income'
import Expenses from '../Options/Expenses'
import { useGlobalContext } from '../context/globalContext'

function Display() {
  const golbal= useGlobalContext()
  console.log(golbal);
  return (
    <div className='display'>
      hello
      <Routes>
        <Route path='/' element={<h1>hello 2222</h1>}/>
         <Route path='/dashboard' element={<Dashboard/>}  />
         <Route path='/transaction' element={<Transaction/>}  />
         <Route path='/income' element={<Income/>}  />
         <Route path='/expense' element={<Expenses/>}  />

      </Routes>
    </div>
  )
}

export default Display
