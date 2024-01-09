import React from 'react'
import {Link} from 'react-router-dom'
import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from 'react-icons/fi'

const Card = ({data}) => {
  const {companyName,jobTitle,companyLogo,minPrice,maxPrice,salaryType,jobLocation,postingDate,employmentType,description} = data;
  return (
    <section className='card'>
      <Link to={"/"} className='flex gap-4 flex-col sm:flex-row items-start'>
        <img src={companyLogo} alt="" />
        <div>
        <h4 className='text-primery mb-1'>{companyName}</h4>
        <h3 className='text-lg mb-2 font-semibold'>{jobTitle}</h3>
        <div className='text-primery/70 text-base flex flex-wrap gap-2 mb-2'>
          <span className='flex items-center gap-2'><FiMapPin/>{jobLocation}</span>
          <span className='flex items-center gap-2'><FiClock/>{employmentType}</span>
          <span className='flex items-center gap-2'><FiDollarSign/>{minPrice}-{maxPrice}k</span>
          <span className='flex items-center gap-2'><FiCalendar/>{postingDate}</span>
        </div>
        <p className='text-base text-primery/70'>{description}</p>
        </div>
      </Link>
    </section>
  )
}

export default Card
