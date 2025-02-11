import Lottie from "lottie-react";
import LoginAnimation from "../../assets/Login-animation.json";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContent";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const Signin = () => {

    const {signIn, setLoading, user, loading} = useContext(AuthContext);
    const location = useLocation();
    const from = location.state || "/";
    const navigate = useNavigate();    
 
    console.log(from);

    const handleSignin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from);
                //form.reset();
                Swal.fire({
                    title: "Success!",
                    text: "User signed in successfully",
                    icon: "success",
                    confirmButtonText: "Okay",
                });
                setLoading(false);
                
            }).catch((error) => {
                console.log(error);
                Swal.fire({
                    title: "Error!",
                    text: error.message,
                    icon: "error",
                    confirmButtonText: "Okay",
                });
            })
    }

    return (
        <div className="w-8/12 mx-auto">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">
                    {loading ? "Loading..." : user ? `Welcome ${user.email}` : "Signin now!"}           
            </h1>
              <Lottie animationData={LoginAnimation}></Lottie>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form className="card-body" onSubmit={handleSignin}>
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
                  <button className="btn btn-primary w-full">SignIn</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Signin;