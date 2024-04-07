import { Link, useLocation } from "react-router-dom";
import classes from "./login.module.scss";
import { useState } from "react";
import { verifyLoginForm } from "../../utils/verifyLoginform";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { setItem } = useLocalStorage("token");
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const userDispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (verifyLoginForm(formData, setErrors)) {
      userDispatch(login(formData)).then((data) => {
        if (data.payload.success == true) {
          setItem(data.payload.token);
          if (location.state.from.pathname) {
            navigate(location.state.from.pathname);
          } else {
            navigate("/");
          }
        }
      });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const generateAuth = () => {
    setFormData({ email: "ismail@gmail.com", password: "mohamedismail" });
  };
  return (
    <div className={classes.container}>
      <div className={classes.login}>
        <h2>Log In</h2>
        <form onSubmit={handleSubmit} className={classes.formContainer}>
          <div>
            <label>Email</label>
            <br />
            <input
              value={formData.email}
              id="email"
              className={classes.input}
              type="email"
              onChange={handleChange}
            />
            <br />
            {errors.email && (
              <span className={classes.error}>{errors.email}</span>
            )}
          </div>
          <div>
            <label>Password</label>
            <br />
            <input
              id="password"
              value={formData.password}
              className={classes.input}
              type="password"
              onChange={handleChange}
            />
            <br />
            {errors.password && (
              <span className={classes.error}>{errors.password}</span>
            )}
          </div>
          <input
            className={`${classes.input} ${classes.submit}`}
            type="submit"
            value="Login"
          />
          <div>
            <input
              className={`${classes.input} ${classes.guest}`}
              type="button"
              value="Guest Mode"
              onClick={generateAuth}
            />
          </div>
          <div>
            <p>
              New to Essence?
              <span className={classes.signup}>
                <Link to="/register"> SignUp</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
