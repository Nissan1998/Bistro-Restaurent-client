import React, { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import bgwood from "../../assets/reservation/wood-grain-pattern-gray1x.png";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const captchaRef = useRef(null);
  const [disable, setDisable] = useState(true);

  const { signInUser } = useContext(AuthContext);

  useEffect(() => {
    loadCaptchaEnginge(6);
  });

  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value) == true) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  const handleLogin = (e) => {
    event.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .then((err) => {
        console.log(err.message);
      });
  };
  return (
    <div
      style={{
        backgroundImage: `url(${bgwood})`,
      }}
      className="hero min-h-screen bg-base-200"
    >
      <div className="hero-content md:flex flex-col md:flex-row">
        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div
          style={{
            backgroundImage: `url(${bgwood})`,
          }}
          className="card  w-full md:w-1/2 max-w-sm shadow-2xl shadow-black bg-base-100"
        >
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="********"
                name="password"
                required
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                ref={captchaRef}
                type="text"
                placeholder="type the text above."
                name="captcha"
                required
                className="input input-bordered"
              />
              <button
                onClick={handleValidateCaptcha}
                className="btn btn-outline btn-xs mt-2 "
              >
                validate
              </button>
            </div>
            <div className="form-control mt-6">
              <input
                disabled={disable}
                type="submit"
                value="Login"
                className="btn btn-primary"
              />
            </div>
            <p>
              <small>
                Are You New Here?
                <Link className="btn-link" to="/signup">
                  Register....
                </Link>
              </small>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
