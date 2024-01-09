import React from 'react'

const Jobs = ({result}) => {
  return (
    <div>
      <div>
        <h2 className='font-bold'>{result.length} Jobs </h2>
      </div>
      {result}
    </div>
  )
}

export default Jobs
