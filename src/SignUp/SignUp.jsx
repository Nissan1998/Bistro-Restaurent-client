import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import bgwood from "../assets/reservation/wood-grain-pattern-gray1x.png";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../Pages/Shared/SocialLogin/SocialLogin";

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((res) => {
      const loggedUser = res.user;
      updateUserProfile(data.name, data.photo)
        .then((res) => {
          const savesUser = { name: data.name, email: data.email };
          fetch(`http://localhost:5000/users`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(savesUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "user Created Successfully",
                  timer: 2000,
                });

                navigate("/");
              }
            });
          console.log(res.user);
        })
        .catch((err) => {
          console.log(err.message);
        });
      console.log(loggedUser);
    });
  };
  return (
    <div>
      <Helmet>
        <title>Bistro-Boss | SignUp</title>
      </Helmet>
      <div>
        <div
          style={{
            backgroundImage: `url(${bgwood})`,
          }}
          className="flex justify-center items-center h-full  "
        >
          <div
            className="w-full max-w-lg mt-5
           "
          >
            <form
              style={{
                backgroundImage: `url(${bgwood})`,
              }}
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white rounded-xl shadow-2xl px-8 pt-6 pb-8 mb-4"
            >
              <h2 className="text-2xl mb-4 text-center font-bold">
                Please Register !
              </h2>
              {/* {error && (
                <p className="text-center font-bold text-red-600">
                  Warning:- {error}
                </p>
              )} */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id="name"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Enter your Name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="text"
                >
                  Photo
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="photo"
                  type="text"
                  {...register("photo", { required: true })}
                  // {...(errors.photo && <span>This field is required</span>)}
                  name="photo"
                  placeholder="Enter your Photo URL"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  {...register("email")}
                  name="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  {...register("password")}
                  name="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="text-center">
                <button>
                  <input
                    className="text-center cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                    value="SignUp"
                  />
                </button>
              </div>
              <div className="mx-auto mt-2 w-2/3">
                <Link to="/login">
                  All ready have an account?
                  <button className="btn-link">Login....</button>
                </Link>
              </div>

              <SocialLogin></SocialLogin>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
