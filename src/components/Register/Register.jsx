import { useContext, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import Swal from "sweetalert2";
// import { Link, Navigate } from "react-router-dom";
import { TbBrandGoogle } from "react-icons/tb";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
// import { Axios } from "axios";

const Register = () => {
  const [AllDistrict, setAllDistrict] = useState([]);
  const [AllUpozila, setAllUpozila] = useState([]);

  console.log(AllDistrict);
  // const [image, setImage] = useState(null);
  const { creatUser, setName, setPhoto } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleRegister = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, photo, email, password);

    // if (password > 8) {
    //   return Swal.fire({
    //     title: "Error!",
    //     text: "Password must be used 8 characters",
    //     icon: "error",
    //     confirmButtonText: "Cool",
    //   });
      // } else if (!/^(?=.*[A-Z])(?=.*[@#$%^&+=!])/.test(password)) {
      //   return Swal.fire({
      //     title: "Error!",
      //     text: "must be use capital letter and special character",
      //     icon: "error",
      //     confirmButtonText: "Cool",
      //   });
    // }
    creatUser(email, password)
      .then((res) => {
        setName(name);
        setPhoto(photo);
        // const userInfo = {
        //   name: name,
        //   email: email,
        //   role: "user",
        //   image_url: photo,
        //   status: "active"
        // };
        // console.log(userInfo);
        // Axios.post("http://localhost:5000/users", userInfo).then((res) => {
        //   if (res.data.insertedId) {
        //     console.log("user added to the database");

        //     Swal.fire({
        //       position: "top-end",
        //       icon: "success",
        //       title: "User created successfully.",
        //       showConfirmButton: false,
        //       timer: 1500,
        //     });
        //     Navigate("/");
        //   }
        // });
        console.log(res.user);
        Swal.fire({
          title: "Success!",
          text: "Successfuly",
          icon: "success",
          confirmButtonText: "Cool",
        });
      })
    .catch((error) => {
      console.error(error.message);
      Swal.fire({
        title: "Error!",
        text: "Do you want to continue",
        icon: "error",
        confirmButtonText: "Cool",
      });
    });
  };
  useEffect(()=>{
    fetch('district.json')
    .then(res => res.json())
    .then(data => setAllDistrict(data))
  }, [])

  useEffect(()=>{
    fetch('upozila.json')
    .then(res => res.json())
    .then(data => setAllUpozila(data))
  }, [])
  return (
    <div
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="500"
      className="hero min-h-screen bg-base-200 pt-20 pb-10"
    >
      <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
        <h2 className="text-3xl font-bold text-center mt-10">
          Please Register
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Phto url"
              className="input input-bordered"
              required
            />
          </div>
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Select your blood group
            </option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>AB+</option>
            <option>AB-</option>
            <option>O+</option>
            <option>O-</option>
          </select>
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Select your district
            </option>
            {
              AllDistrict.map(district => (
                <option key={district.name}>{district.name}</option>
              ) )
            }
          </select>
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Select your Upozila
            </option>
            {
              AllUpozila.map(upozila => (
                <option key={upozila.name}>{upozila.name}</option>
              ) )
            }
          </select>
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
            <button className="btn bg-gray-300">Register</button>
          </div>
          <p>
            Already have an account? <Link to="/login">LogIn</Link>{" "}
          </p>
        </form>
        <button
          className="flex items-center pb-10 ml-5 "
          onClick={handleGoogleRegister}
          href=""
        >
          <TbBrandGoogle className="mr-2"></TbBrandGoogle>Google LogIn
        </button>
      </div>
    </div>
  );
};

export default Register;
