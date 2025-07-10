import { useEffect, useState } from "react";
import { toast } from "react-toastify";
// import { loginApi } from "../services/UserService";S
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleLoginRedux } from "../redux/actions/userAction";
// import { useContext } from "react";
// import { UserContext } from "../context/UserContext";

const Login = () => {
  // const { loginContext } = useContext(UserContext);
  const navigate = useNavigate("");
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);

  // const [loadingAPI, setLoadingAPI] = useState(false);
  const isLoading = useSelector((state) => state.user.isLoading);
  const account = useSelector((state) => state.user.account);

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Email/Password is required!");
      return;
    }
    //using Redux
    dispatch(handleLoginRedux(email, password));

    // using Context
    // setLoadingAPI(true);
    // let res = await loginApi(email.trim(), password);
    // if (res && res.token) {
    //   loginContext(email, res.token);
    //   navigate("/");
    // } else {
    //   //error
    //   if (res && res.status === 400) {
    //     toast.error(res.data.error);
    //   }
    // }
    // setLoadingAPI(false);
  };

  const handleGoBack = () => {
    navigate("/");
  };

  const handlePressEnter = (event) => {
    if (event && event.key === "Enter") {
      handleLogin();
    }
  };

  useEffect(() => {
    if (account && account.auth === true) {
      navigate("/");
    }
  }, [account]);

  return (
    <>
      <div className="login-container col-12 col-sm-4">
        <div className="title">Login</div>
        <div className="text">Email or username: eve.holt@reqres.in</div>
        <input
          type="text"
          placeholder="Email or username"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <div className="input-2">
          <input
            type={isShowPassword === true ? "text" : "password"}
            placeholder="Password..."
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            onKeyDown={(event) => handlePressEnter(event)}
          />
          <i
            className={
              isShowPassword === true
                ? "fa-solid fa-eye"
                : "fa-solid fa-eye-slash"
            }
            onClick={() => setIsShowPassword(!isShowPassword)}
          ></i>
        </div>

        <button
          className={email && password ? "active" : ""}
          disabled={email && password ? false : true}
          onClick={() => handleLogin()}
        >
          {/* {loadingAPI && <i className="fa-solid fa-circle-notch fa-spin"></i>} */}
          {isLoading && <i className="fa-solid fa-circle-notch fa-spin"></i>}
          &nbsp;Login
        </button>
        <div className="back">
          <i className="fa-solid fa-angles-left"></i>
          <span onClick={() => handleGoBack()}>&nbsp;Back</span>
        </div>
      </div>
    </>
  );
};

export default Login;
