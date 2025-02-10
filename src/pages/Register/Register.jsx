import Lottie from "lottie-react";
import RegisterAnimation from "../../assets/register-animation.json";
import Swal from "sweetalert2";
import AuthContext from "../../context/AuthContext/AuthContent";
import { useContext } from "react";

const Register = () => {

    const {createUser, setLoading} = useContext(AuthContext);

  

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    const regex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!regex.test(password)) {
      Swal.fire({
        title: "Error!",
        text: "Password must be at least 6 characters, contain one uppercase letter, and one number.",
        icon: "error",
        confirmButtonText: "Okay",
      });
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        //form.reset();
        Swal.fire({
          title: "Success!",
          text: "User created successfully",
          icon: "success",
          confirmButtonText: "Okay",
        });
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Error!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Okay",
        });
      });
  };

  return (
    <div className="w-8/12 mx-auto">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <Lottie animationData={RegisterAnimation}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary w-full">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
