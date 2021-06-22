import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import "./App.css";
import Footer from "./Footer";
import Job from "./Job";
import Loading from "./Loading";

function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setloading] = useState(true);
  const [category, setCategory] = useState("Allothers");
  const dataURL = `https://remotive.io/api/remote-jobs?category=${category}`;
  const AllJobs = async () => {
    let res = await fetch(`${dataURL}`);
    let jobData = await res.json();
    setJobs(jobData.jobs);
    setloading(false);
  };
  const handleSelect = (e) => {
    setCategory(e.target.value);
  };
  useEffect(() => {
    AllJobs();
  }, [category]);

  return (
    <div className="App">
      <NavBar />
      <Footer />
      <div className="selectContainer">
        <h3 className="selectTagLine">Categories your interest here..</h3>
        <select className="selectCategory" onChange={handleSelect}>
          <option>QA</option>
          <option>Human Resources</option>
          <option>Finance-Legal</option>
          <option>DevOps Sysadmin</option>
          <option>Data</option>
          <option>Sales</option>
          <option>Marketing</option>
          <option>Design</option>
          <option>Software Development</option>
          <option>Customer Service</option>
          <option>Product</option>
          <option defult="true">All others</option>
        </select>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          {jobs.map((job) => {
            return (
              <Job
                key={job.id}
                companyName={job.company_name}
                title={job.title}
                date={job.publication_date}
                type={job.job_type}
                location={job.candidate_required_location}
                dis={job.description}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
