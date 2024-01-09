import React from 'react'
import {FaEnvelopeOpenText, FaRocket} from 'react-icons/fa6'
const NewsLetter = () => {
  return (
    <div>
       <div>
        <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
            <FaEnvelopeOpenText />
            Email me for jobs</h3>
            <p className='text-primery/75 text-base mb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem quas consequuntur reiciendis laborum corrupti amet earum voluptatem alias incidunt maxime placeat eveniet quod necessitatibus porro voluptates at a, nam cum.</p>
            <div className='w-full space-y-4'>
              <input type='email' name='email' id='email' placeholder=' name@gmail.com' className='w-full block py-2 pl3 border '/>
              <input type='submit' value={"Subscribe"} className='w-full block py-2 pl3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold'/>
            </div>
      </div> 
      <div className='mt-20'>
        <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
            <FaRocket />
                Get notified faster</h3>
            <p className='text-primery/75 text-base mb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem quas consequuntur reiciendis laborum corrupti amet earum voluptatem alias incidunt maxime placeat eveniet quod necessitatibus porro voluptates at a, nam cum.</p>
            <div className='w-full space-y-4'>
              <input type='submit' value={"upload your resume"} className='w-full block py-2 pl3 border focus:outline-none bg-blue rounded-sm text-white cursor-pointer font-semibold'/>
            </div>
      </div> 
    </div>
  )
}

export default NewsLetter
