import React from 'react'
import './Form.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useGlobalContext } from '../context/globalContext'
function Form() {
    const {addIncome, getIncomes, error, setError} = useGlobalContext()
    const [inputState, setInputState] = React.useState({        
            title:'',
            amount:'',
            date:'',
            category:'',
            description:'',
    })
    const {title, amount, date, category, description} = inputState
    const handleChange = (e) => {
        const {name, value} = e.target  
        setInputState((prevState)=>({
            ...prevState,
            [name]:value
        }))}
    const handleSubmit = (e) => {
        e.preventDefault()
        addIncome(inputState)
    }
  return (
    <div  className='formStyle' on onSubmit={handleSubmit}>
      
      <div className="input-control">
        <input 
        type="text"
        value={title}
        name= {'title'}  
        placeholder='Source Of Income'
        onChange={handleChange} />
        
      </div>
      
      <div className="input-control">
        <input 
        type="text"
        value={amount}
        name= {'amount'}  
        placeholder='Amount'
        onChange={handleChange} />
        
      </div>
       <div className="input-control">
            <DatePicker
              id='date'
              placeholderText='Enter A Date'
               selected={date}
               dateFormat={'dd/MM/yyyy'}
               onChange={(date)=>{
                setInputState((prevState)=>{return(
                    {...prevState, date:date}
                )})
               }}/>
       </div>
      <div className=" selects input-control">
        <select 
         required
        value={category}
        name= {'category'}  
        id='category'
        onChange={handleChange} >

            <option value='' disabled>Select Category</option>
            <option value='salary'>Salary</option>
            <option value='business'>Business</option>
            <option value='bonus'>Bonus</option>
            <option value='others'>Others</option>
            
        </select>

        
      </div>
      <div className="input-control">
                <textarea name="description" value={description} placeholder='Add A Reference' id="description" cols="30" rows="4" onChange={handleChange}></textarea>
            </div>
      
      <div className='submit-btm'>
       <button>Add To Income</button>
        
      </div>
     
      
    </div>
  )
}

export default Form
