import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const ViewApplications = () => {
  const applications = useLoaderData();

  const handelStatusUpdate = (e, id) => {

    const data = {
        status: e.target.value
    }
   
    fetch(`http://localhost:3000/job-application/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: 'success',
            title: 'Status Updated',
            text: 'The application status has been successfully updated!',
            showConfirmButton: false,
            timer: 1500
          });
        }

      });
  };

  return (
    <div>
      <h2>View Applications {applications.length}</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Application ID</th>
              <th>Name</th>
              <th>Job</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, index) => (
              <tr key={application._id}>
                <th>{index + 1}</th>
                <td>{application.applicant_email}</td>
                <td>lorem ipsome here text for text</td>
                <td>
                  <select 
                  onChange={(e) => handelStatusUpdate(e, application._id)}
                  defaultValue={application.status || 'Under Review'} className="select">
                    <option disabled={true}>Change Status</option>
                    <option>Under Review</option>
                    <option>Hired</option>
                    <option>Rejected</option>                                    
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
