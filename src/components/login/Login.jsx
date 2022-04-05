import "./Login.scss";
import Inputs from "./Inputs";
import Buttons from "./Buttons";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="login-main">
      <div className="login-container">
        <div className="inputs-div">
          <Inputs/>
        </div>

        <div className="button-div">
          <Link to= "/" style={{textDecoration : "none"}} >
              <Buttons />
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
