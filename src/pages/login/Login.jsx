import { Link } from "react-router-dom";
import classes from "./login.module.scss";

function Login() {
  return (
    <div className={classes.container}>
      <div className={classes.login}>
        <h2>Log In</h2>
        <div className={classes.formContainer}>
          <div>
            <label>Email</label>
            <br />
            <input className={classes.input} type="email" />
          </div>
          <div>
            <label>Password</label>
            <br />
            <input className={classes.input} type="password" />
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
        </div>
      </div>
    </div>
  );
}

export default Login;
