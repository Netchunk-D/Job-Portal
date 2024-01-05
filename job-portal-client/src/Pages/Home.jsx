import React,{useEffect, useState} from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card';
import Jobs from './Jobs';
const Home = () => {
  const [selectCategory,setSelectCategory] = useState(null);
  const [jobs,setJobs] = useState([]);

  useEffect(()=>{
      fetch("jobs.json").then(res => res.json()).then(data=> {
        // console.log(data);
        setJobs(data);
      })
  },[])
  // console.log(jobs)
  
  {/*handle input change */}
  const [query,setQuery] = useState("");
  const handlInputChange = (event) => {
    setQuery(event.target.value)
  }

  //filter jobs by title
  const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !==-1);
  // console.log(filteredItems)

  // Radio based filtering
  const handleChange = (event)=>{
    setSelectCategory(event.target.value)
  } 

  // button filtering
  const handleClick =  (event)=>{
    setSelectCategory(event.target.value)
  } 

  // main function
  const filteredData = (jobs,selected,query) => {
    let filteredjobs =jobs;
    //filtering input items
    if(query){
      filteredjobs = filteredItems;
    }

    //category selection
    if(selected){
      filteredjobs = filteredjobs.filter(({jobLocation,maxPrice,salaryType,experienceLevel,postingDate,employmentType})=> (
        jobLocation.toLowerCase() === selected.toLowerCase() ||
        parseInt(maxPrice) <= parseInt(selected) ||
        salaryType.toLowerCase()=== selected.toLowerCase() ||
        employmentType.toLowerCase() === selected.toLowerCase() 
      ));
      console.log(filteredjobs);
    }
    return filteredjobs.map((data,i) => <Card key={i} data={data}/>)
  }

  const result = filteredData(jobs,selectCategory,query);
  return (
    <div>
      <Banner query = {query} handleinpchange = {handlInputChange}/>
      {/* Main containt */}
      <div className='bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12'>
          <div className='bg-white p-4 rounded'>left</div>
          <div className='col-span-2 bg-white p-4 rounded'><Jobs result = {result}/></div>
          <div className='bg-white p-4 rounded'>right</div>   
      </div>
    </div>
  )
}

export default Home
