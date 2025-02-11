import { useLoaderData, Link } from "react-router-dom";

const JobDetails = () => {
  const {
    _id,
    title,
    company,
    company_logo,
    requirements,
    description,
    location,
    jobType,
    salaryRange,
    applicationDeadline,
    status,
    responsibilities,
  } = useLoaderData();

  return <>
          <div className="p-6 max-w-3xl mx-auto bg-sky-900 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <div className="flex items-center mb-4">
                <img src={company_logo} alt={company} className="w-12 h-12 mr-3" />
                <h3 className="text-lg font-semibold">{company}</h3>
            </div>
            <p className="mb-2"><strong>Location:</strong> {location}</p>
            <p className="mb-2"><strong>Job Type:</strong> {jobType}</p>
            <p className="mb-2"><strong>Salary:</strong> {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
            <p className="mb-2"><strong>Application Deadline:</strong> {applicationDeadline}</p>
            <p className="mb-2"><strong>Status:</strong> {status}</p>
            <p className="mb-4">{description}</p>
            <h4 className="text-lg font-semibold mb-2">Requirements:</h4>
            <ul className="list-disc pl-6 mb-4">
                {requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                ))}
            </ul>
            <h4 className="text-lg font-semibold mb-2">Responsibilities:</h4>
            <ul className="list-disc pl-6">
                {responsibilities.map((res, index) => (
                    <li key={index}>{res}</li>
                ))}
            </ul>            
        </div>
        <div className="my-6 text-center">
            <Link to="/" className="text-blue-900 hover:underline btn bg-cyan-500 hover:no-underline">
                Back to Home
            </Link>
            <Link to={`/job-apply/${_id}`} className="text-blue-900 hover:underline btn bg-cyan-500 hover:no-underline">Apply</Link>
        </div>

        
        </>;
};

export default JobDetails;
