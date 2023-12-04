import { useContext } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { TbBrandGoogle } from "react-icons/tb";
import { AuthContext } from "../AuthProvider/AuthProvider";



const Login = () => {
  const { signIn } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        navigate(locationB.state ? locationB.state : "/");
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const locationB = useLocation();
  console.log(locationB);
  const navigate = useNavigate();
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((res) => {
        console.log(res.user);
        Swal.fire({
          title: 'Success!',
          text: 'Do you want to continue',
          icon: 'success',
        })
        navigate(locationB.state ? locationB.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
        Swal.fire({
          title: 'Error!',
          text: 'Do you want to continue',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      });
  };
  return (
    <div
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="500"
      className="hero min-h-screen bg-base-200 "
    >
      <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
        <h2 className="text-3xl font-bold text-center mt-10">Please LogIn</h2>
        <form onSubmit={handleSignIn} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
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
              name="password"
              placeholder="password"
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
            <button className="btn bg-gray-300">Login</button>
          </div>
          <p>
            Do not have account ?{" "}
            <Link to="/register" className="text-violet">
              Register Now
            </Link>
          </p>
        </form>
        <button
          className="flex items-center pb-10 ml-5 "
          onClick={handleGoogleLogin}
          href=""
        >
          <TbBrandGoogle className="mr-2"></TbBrandGoogle>Google LogIn
        </button>
      </div>
    </div>
  );
};

export default Login;
