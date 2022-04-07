import "./Login.scss";
import Inputs from "./Inputs";
import Buttons from "./Buttons";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/recipe");
  }

  return (
    <div className="login-main">
      <div className="header-div"> 
          <h1 className="header">Welcome to Our Homepage</h1>
      </div>
      <div className="login-container">
        <div className="inputs-div">
          <Inputs handleLogin = {handleLogin} />
        </div>

        <div className="button-div">
          <Link to= "/recipe" style={{textDecoration : "none"}} >
              <Buttons onClick = {handleLogin} />
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
