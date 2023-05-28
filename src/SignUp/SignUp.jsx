import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import bgwood from "../assets/reservation/wood-grain-pattern-gray1x.png";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const SignUp = () => {
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
              <div className="divider">OR</div>
              <div className=" w-32 mx-auto">
                <span>Continue with </span>
                <button>
                  <img
                    style={{ width: 25 }}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/706px-Google_%22G%22_Logo.svg.png"
                    alt=""
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
