import { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
const MyPostedJob = () => {
  const [Jobs, setJobs] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:3000/jobs?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, [user.email]);

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4 text-center p-5 mt-5">
        My Posted Job
      </h2>
      <h5 className="text-xl font-semibold mb-4 text-center p-5 mt-5">
        {" "}
        Total Job:{Jobs.length}
      </h5>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Company Name</th>
              <th>Job Title</th>
              <th>Job Dateline</th>
              <th>Total Applied</th>
              <th>View Applicant</th>
            </tr>
          </thead>
          <tbody>      
          {
              Jobs.map((job, index) =><tr key={job._id}>
                <th>{index + 1}</th>
                <td>{job.company}</td>
                <td>{job.title}</td>
                <td>{job.applicationDeadline}</td>
                <td>{job.applicationCount}</td>
                <td>
                    <Link to={`/view-applications/${job._id}`}>
                    <button className="btn btn-primary">View</button>
                    </Link>
                    </td>
              </tr>)
          }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJob;
