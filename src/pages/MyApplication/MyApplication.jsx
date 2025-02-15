import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";

const MyApplication = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {


    // fetch(`http://localhost:3000/job-application?email=${user.email}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setJobs(data);
    //   });

  axios.get(`http://localhost:3000/job-application?email=${user.email}`, {
    withCredentials: true
  })
  .then(res => {
    setJobs(res.data)
  })

  }, [user.email]);


  
  return (
    <div>
      <h2>My Applications {jobs.length}</h2>

      <div className="overflow-x-auto my-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
            </tr>
          </thead>
          <tbody>            
            {
                jobs.map(job =><tr key={job._id}>           
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={job.company_logo}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{job.company}</div>
                          <div className="text-sm opacity-50">{job.location}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {job.title}
                      <br />
                      <span className="badge badge-ghost badge-sm">
                        {job.category}
                      </span>
                    </td>
                  </tr>  )
            }         
          </tbody>       
        </table>
      </div>
    </div>
  );
};

export default MyApplication;
