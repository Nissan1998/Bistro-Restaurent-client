import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const { googleSignIn } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        const loggedUser = res.user;
        const savesUser = {
          name: loggedUser.displayName,
          email: loggedUser.email,
        };

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
              navigate(from, { replace: true });
            }
          });
        console.log(loggedUser);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <div className="divider">OR</div>
      <div onClick={handleGoogleSignIn} className=" w-32 mx-auto">
        <span>Continue with </span>
        <button>
          <img
            style={{ width: 25 }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/706px-Google_%22G%22_Logo.svg.png"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
