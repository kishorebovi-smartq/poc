import { useNavigate } from "react-router-dom";

import View from './view';

const Login = () => {
  const navigate = useNavigate();
  const loginClickHandler = () => {
    navigate("/dashboard");
  }

  return <View loginClickHandler={loginClickHandler} />;
};

export default Login;
