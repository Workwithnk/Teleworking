import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import "./App.css";
import Footer from "./Footer";
import Job from "./Job";
import Loading from "./Loading";

const dataURL = "https://remotive.io/api/remote-jobs?category=software-dev";

function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setloading] = useState(true);

  const AllJobs = async () => {
    let res = await fetch(`${dataURL}`);
    let jobData = await res.json();
    setJobs(jobData.jobs);
    setloading(false);
  };

  useEffect(() => {
    AllJobs();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Footer />
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
