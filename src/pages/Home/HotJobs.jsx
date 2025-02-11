import { useState, useEffect } from "react";
import HotJobCard from "./HotJobCard";

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/jobs')
            .then(res => res.json())
            .then(data => {
                setJobs(data)
            })
    }, [])

    return (
        <div className="my-7">
            <h2 className="text-3xl font-semibold mb-4 text-center p-5 mt-5">Hot Jobs</h2>
            <div className="jobs-card grid grid-cols-3 gap-4">
            {
                jobs.map(job => <HotJobCard key={job._id} job={job}></HotJobCard>)
            }
            </div>
        </div>
    );
};

export default HotJobs;