import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
const AddJob = () => {

  const {user} = useAuth();


  const handelAddJob = (e) => {

    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());

    const {min, max, currency, ...newJob} = initialData;

    console.log(newJob);

    newJob.salaryRange = {min, max, currency};
    newJob.requirements = newJob.requirements.split('\n');
    newJob.responsibilities = newJob.responsibilities.split('\n');

    console.log(newJob);

    fetch('http://localhost:3000/add-job', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newJob)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.acknowledged) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Job added successfully',
          showConfirmButton: false,
          timer: 1500
        })
        e.target.reset();
      }
    })
  };

  return (
    <div>
      <div className="mx-auto">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left flex-1">
              <h1 className="text-5xl font-bold">Add Job</h1>
              <p className="py-6">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos,
                iste.
              </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl flex-1">
              <div className="card-body">
                <form onSubmit={handelAddJob}>
                  <fieldset className="fieldset">
                    <label className="fieldset-label">Job Title</label>
                    <input
                      type="text"
                      className="input"
                      name="jobtitle"
                      placeholder="job title"
                    />
                    <label className="fieldset-label">Job Location</label>
                    <input
                      type="text"
                      className="input"
                      name="joblocation"
                      placeholder="Job Location"
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
                    <label className="fieldset-label">Job Type</label>
                    <select className="select" name="jobtype">
                      <option value="Full Time">Full Time</option>
                      <option value="Part Time">Part Time</option>
                      <option value="Intern">Intern</option>
                    </select>

                    <label className="fieldset-label">Job Category</label>
                    <select className="select" name="jobcategory">
                      <option value="Web Development">Web Development</option>
                      <option value="Mobile App Development">
                        Mobile App Development
                      </option>
                      <option value="DevOps">DevOps</option>
                      <option value="Cyber Security">Cyber Security</option>
                      <option value="Data Science">Data Science</option>
                      <option value="Artificial Intelligence">
                        Artificial Intelligence
                      </option>
                      <option value="Database Administration">
                        Database Administration
                      </option>
                    </select>
                    <label className="fieldset-label">Salary Range</label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        className="input flex-1"
                        name="min"
                        min={0}
                        step={1}
                        placeholder="Min Salary"
                      />
                      <input
                        type="number"
                        className="input flex-1"
                        name="max"
                        min={0}
                        step={1}
                        placeholder="Max Salary"
                      />
                    </div>
                    <label className="fieldset-label">Currency</label>
                    <select defaultValue="Select Currency" className="select" name="currency">
                      <option value="BDT">BDT</option>
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="GBP">GBP</option>
                      <option value="INR">INR</option>
                      <option value="AUD">AUD</option>
                      <option value="CAD">CAD</option>
                    </select>

                    <label className="fieldset-label">Job Description</label>
                    <textarea
                      className="textarea"
                      name="jobdescription"
                      placeholder="Enter job description"
                      rows="10"
                    ></textarea>
                    <label className="fieldset-label">Company Name</label>
                    <input
                      type="text"
                      className="input"
                      name="company"
                      placeholder="Enter company name"
                    />

                    <label className="fieldset-label">Company Logo URL</label>
                    <input
                      type="url"
                      className="input"
                      name="company_logo"
                      placeholder="Enter company logo URL"
                    />

                    <label className="fieldset-label">Job Requirements</label>
                    <textarea
                      className="textarea"
                      name="requirements"
                      placeholder="Write each Requirements in a new line"
                      rows="3"
                    ></textarea>
                    <label className="fieldset-label">
                      Job Responsibilities
                    </label>
                    <textarea
                      className="textarea"
                      name="responsibilities"
                      placeholder="Write each responsibility in a new line"
                      rows="3"
                    ></textarea>

                    <label className="fieldset-label">HR Email</label>
                    <input
                      type="email"
                      className="input"
                      name="hremail"
                      placeholder="Enter HR email"
                      defaultValue={user?.email}
                    />

                    <label className="fieldset-label">HR Name</label>
                    <input
                      type="text"
                      className="input"
                      name="hrname"
                      placeholder="Enter HR name"
                    />
                    <button className="btn btn-neutral mt-4">Submit</button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddJob;
