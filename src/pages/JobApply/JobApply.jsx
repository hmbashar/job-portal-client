import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const JobApply = () => {
  const { title, company, description } = useLoaderData();
  const { id } = useParams();
  const { user } = useAuth();
  const Nagigate = useNavigate();
  console.log(id);

  const submitJobApplication = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;
    const experience = form.experience.value;
    console.log(linkedin, github, resume, experience);

    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkedin,
      github,
      resume,
      experience,
    };

    fetch("http://localhost:3000/job-application", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Job application submitted successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          Nagigate("/my-application");
        }
      });
  };

  return (
    <div className="mx-auto">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left flex-1">
            <h1 className="text-5xl font-bold">Apply for {title}</h1>
            <h4 className="text-3xl font-semibold">{company}</h4>
            <p className="py-6">{description}</p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl flex-1">
            <div className="card-body">
              <form onSubmit={submitJobApplication}>
                <fieldset className="fieldset">
                  <label className="fieldset-label">LinkedIn</label>
                  <input
                    type="url"
                    className="input"
                    name="linkedin"
                    placeholder="Linkedin URL"
                  />
                  <label className="fieldset-label">GitHub</label>
                  <input
                    type="url"
                    className="input"
                    name="github"
                    placeholder="GitHub URL"
                  />
                  <label className="fieldset-label">Resume URL</label>
                  <input
                    type="url"
                    className="input"
                    name="resume"
                    placeholder="Resume URL"
                  />
                  <label className="fieldset-label">
                    Experience (in Years)
                  </label>
                  <input
                    type="number"
                    className="input"
                    name="experience"
                    min={0}
                    step={1}
                    placeholder="Experience (in Years)"
                  />
                  <button className="btn btn-neutral mt-4">Submit</button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApply;
