import React from 'react'
import InputField from '../components/InputField'
const Location = ({handLeChange}) => {
  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Location</h4>
      <div>
            <label className='sidebar-label-container'>
                <input type='radio' name='test' id='test' value="" onChange={handLeChange}/>
                <span className='checkmark'></span>All
            </label>
            <InputField handLeChange={handLeChange} value="Londan" title= "Londan" name="test"></InputField>
            <InputField handLeChange={handLeChange} value="pune" title= "Pune" name="test"></InputField>

            <InputField handLeChange={handLeChange} value="banglore" title= "Banglore" name="test"></InputField>
            <InputField handLeChange={handLeChange} value="delhi" title= "Delhi" name="test"></InputField>

      </div>
    </div>
  )
}

export default Location
