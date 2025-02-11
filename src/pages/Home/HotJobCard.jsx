import { Link } from "react-router-dom";
const HotJobCard = ({ job }) => {
  console.log(job);
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
  } = job;
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl border border-gray-200 p-5">
        <div className="job-header flex justify-start items-center gap-3">
          <figure>
            <img
              src={company_logo}
              alt={company}
              className="w-12 h-12 object-contain"
            />
          </figure>
          <div className="text-gray-500 text-sm">
            <h4 className="font-semibold text-lg text-blue-500">{company}</h4>
            {location}
          </div>
        </div>
        <div className="card-body p-3">
          <h2 className="card-title text-xl font-semibold mt-3">{title}</h2>
          <div className="job-meta flex gap-2">
            <div className="badge badge-primary capitalize">{status}</div>
            <div className="badge badge-info badge-outline">{jobType}</div>
            <div className="badge badge-info badge-outline">{applicationDeadline}</div>
          </div>
          <div className="job-description mt-3">
            <p>{description}</p>
          </div>
          <div className="job-requirements flex gap-1.5 flex-wrap my-4">
            {requirements.map((requirement, index) => (
              <span
                key={index}
                className="badge badge-info badge-outline text-xs"
              >
                {requirement}
              </span>
            ))}
          </div>
          <div className="responsibilities">
            <h3 className="text-lg font-semibold">Responsibilities:</h3>
            <ul className="list-disc pl-6">
              {responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>
          <div className="card-actions justify-between mt-4 flex items-center">
            <p>
              <strong>Salary:</strong> {salaryRange.min} - {salaryRange.max}{" "}
              {salaryRange.currency.toUpperCase()}
            </p>
            <Link className="btn btn-primary" to={`/job/${_id}`}>Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;
