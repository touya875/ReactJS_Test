import React, { useEffect } from "react";
import "./App.scss";
import Header from "./component/Header";
import Container from "react-bootstrap/Container";
import { ToastContainer } from "react-toastify";
// import { useContext } from "react";
// import { UserContext } from "./context/UserContext";
import AppRoutes from "./routes/AppRoutes";
import { useDispatch } from "react-redux";
import { handleRefresh } from "./redux/actions/userAction";

function App() {
  // const { user, loginContext } = useContext(UserContext);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(handleRefresh());

      //using Context
      // loginContext(
      //   localStorage.getItem("email"),
      //   localStorage.getItem("token")
      // );
    }
  }, []);

  return (
    <>
      <div className="app-container">
        <Header />
        <Container>
          <AppRoutes />
        </Container>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
