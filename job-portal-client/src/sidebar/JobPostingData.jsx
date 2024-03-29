import React from 'react'
import InputField from '../components/InputField'
const JobPostingData = ({handLeChange}) => {
  const now = new Date();
  const twentyForHoursAge = new Date(now - 24*60*60*1000);
  const SevenDaysAgo = new Date(now - 7*24*60*60*1000)
  const ThirtyDaysAgo  =new Date(now - 30*24*60*60*1000)

  //convert date to string  
  const twentyForHoursAgeDate = twentyForHoursAge.toISOString().slice(0,10);
  const SevenDaysAgoDate = SevenDaysAgo.toISOString().slice(0,10);
  const ThirtyDaysAgoDate = ThirtyDaysAgo.toISOString().slice(0,10);
  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Days of Posting</h4>
      <div>
            <label className='sidebar-label-container'>
                <input type='radio' name='test' id='test' value="" onChange={handLeChange}/>
                <span className='checkmark'></span>All Time
            </label>
            <InputField handLeChange={handLeChange} value={twentyForHoursAgeDate} title= "Last 24 Hours" name="test"></InputField>
            <InputField handLeChange={handLeChange} value={SevenDaysAgoDate} title= "Seven days age" name="test"></InputField>

            <InputField handLeChange={handLeChange} value= {ThirtyDaysAgoDate} title= "A month age" name="test"></InputField>

      </div>
    </div>
  )
}

export default JobPostingData
