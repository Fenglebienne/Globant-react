import { useState } from 'react/cjs/react.production.min';
import React from 'react'
import './ExpenseForm.css'

const ExpenseForm = () => {

    const [enteredText, setChangedText] = useState('');
    const [enteredNumber, setChangedNumber] = useState('');
    const [enteredDate, setChangedDate] = useState('');

    const changedNumber = (event) =>{
        setChangedNumber(event.target.value)
    }

    const changedText = (event) =>{
        setChangedText(event.target.value)
    }

    const changedDate = (event) => {
        setChangedDate(event.target.value)
    }

    return <form>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' onChange={changedText} />    
            </div>
            <div className='new-expense__control'>
                <label>Price</label>
                <input type='number' min='0.01' step='0.01' onChange={changedNumber}/>    
            </div>    
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2022-12-31' onChange={changedDate}/>    
            </div>
        </div>
        <div className='new-expense__actions'></div>
        <button type='submit'>Submit</button>
    </form>
};
export default ExpenseForm;