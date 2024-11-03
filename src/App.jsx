import GlobalStyles from "./styles/GlobalStyles";
import Homepage from "./pages/Homepage";
import { Navigate, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Authentication from "./pages/Authentication";
import SignupBox from "./features/authentication/SignupBox";
import LoginBox from "./features/authentication/LoginBox";
import { useContext } from "react";
import { AppContext } from "./services/AppContext";

function App() {
  const { user } = useContext(AppContext);
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Navigate to={"/authentication"} />} />
        <Route path="/authentication" element={<Authentication />}>
          <Route path="" element={<Navigate to={"sign-up"} />} />
          <Route path="sign-up" element={<SignupBox />} />
          <Route path="log-in" element={<LoginBox />} />
        </Route>

        <Route
          path="/homepage"
          element={user ? <Homepage /> : <Navigate to={"/authentication"} />}
        />
        <Route
          path="/cart"
          element={user ? <Cart /> : <Navigate to={"/authentication"} />}
        />
      </Routes>
    </>
  );
}

export default App;
