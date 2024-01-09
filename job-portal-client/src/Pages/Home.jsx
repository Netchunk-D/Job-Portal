import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Jobs from "./Jobs";
import Siderbar from "../sidebar/Siderbar";
import NewsLetter from "../components/NewsLetter";
const Home = () => {
  const [selectCategory, setSelectCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    setIsLoading(true);
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setJobs(data);
        setIsLoading(false);
      });
  }, []);
  // console.log(jobs)

  {
    /*handle input change */
  }
  const [query, setQuery] = useState("");
  const handlInputChange = (event) => {
    setQuery(event.target.value);
    // console.log(event.target.value)
  };

  //filter jobs by title
  const filteredItems = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  // console.log(filteredItems)

  // Radio based filtering
  const handleChange = (event) => {
    // console.log(event.target.value);
    setSelectCategory(event.target.value);
  };

  // button filtering
  const handleClick = (event) => {
    // console.log(event);
    setSelectCategory(event.target.value);
  };

  // calculate the index range
  const calculatePageRange=() => {
    const startIndex = (currentPage-1)*itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return {startIndex,endIndex};
   }

   // function for next page
   const nextPage = () => {
    if(currentPage < Math.ceil(filteredItems.length / itemsPerPage)){
      setCurrentPage(currentPage+1)
    }
   }

   // function for previous page
   const prevPage=() => {
      if(currentPage>1){
        setCurrentPage(currentPage-1)
      }
   }

  // main function
  const filteredData = (jobs, selected, query) => {
    let filteredjobs = jobs;
    //filtering input items
    if (query) {
      filteredjobs = filteredItems;
    }

    //category selection
    if (selected) {
      filteredjobs = filteredjobs.filter(
        ({
          jobLocation,
          maxPrice,
          salaryType,
          experienceLevel,
          postingDate,
          employmentType,
        }) =>

          experienceLevel.toLowerCase() === selected.toLowerCase()  ||
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selected) ||
          postingDate >= selected ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase()
      );
      console.log(filteredjobs);

    }
    //slice the data based on current page
    const {startIndex,endIndex} = calculatePageRange();
    filteredjobs = filteredjobs.slice(startIndex,endIndex)
    return filteredjobs.map((data, i) => <Card key={i} data={data} />);
  };

  const result = filteredData(jobs, selectCategory, query);
  return (
    <div>
      <Banner query={query} handleinpchange={handlInputChange} />
      {/* Main containt */}
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        <div className="bg-white p-4 rounded">
          <Siderbar handLeChange={handleChange} handLeClick={handleClick} />
        </div>

        <div className="col-span-2 bg-white p-4 rounded">
          {
            isLoading ? (<p className="font-medium">Loading ...</p>):result.length>0 ?(<div><Jobs result={result}/></div>): (<h3>No Jobs </h3>)
          }
              
          {
            result.length>0 ? (<div className="flex justify-center mt-4 space-x-8">
              <button className="hover:underline" onClick={prevPage} disabled = {currentPage === 1}>Previous</button>
              <span className="mx-2">Page {currentPage} of {Math.ceil(filteredItems.length / itemsPerPage)}</span>
              <button onClick={nextPage} className="hover:underline" disabled = {currentPage === Math.ceil(filteredItems.length / itemsPerPage)}>Next </button>
            </div>): ""
          }
        </div>
        
        <div className="bg-white p-4 rounded"><NewsLetter/></div>
      </div>
    </div>
  );
};

export default Home;
