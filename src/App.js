import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchJobs = async () => {
    const responce = await fetch(url);
    const newjobs = await responce.json();
    setJobs(newjobs);
    setLoading(false);
  };
   useEffect(()=>{
    fetchJobs();
   },[])

   if(loading){
    return(
      <section className='section loading'>
        <h4>Loading....</h4>
      </section>
    )
   }
   const{company,dates,duties,title}=jobs[value];



  return <section className='section'>
    <div className='title'>
      <h2>expierence</h2>
      <div className='underline'></div>
    </div>
    <div className='jobs-center'>
   <div className="btn-cantainer">
    {jobs.map((item,index)=>{
      return(
        <button key={item.id} onClick={()=>setValue(index)} 
        className={`job-btn ${index===value &&'active-btn'}`}>
          {item.company}
        </button>
      )
    })}
   </div>

      <article className='job-info'>
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className='job-date'>{dates}</p>
        {duties.map((duty,index)=>{
          return<div key={index} className='job-desc'>
            <FaAngleDoubleRight className='job-icon'/>
            <p>{duty}</p>
          </div>
        })}
      </article>
    </div>
  </section>;
}

export default App;
