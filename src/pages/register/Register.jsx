import { Link } from "react-router-dom";
import classes from "./register.module.scss";
function Register() {
  return (
    <div className={classes.container}>
      <div className={classes.login}>
        <h2>Sign Up</h2>
        <div className={classes.formContainer}>
          <div>
            <label>FirstName</label>
            <br />
            <input className={classes.input} type="text" />
          </div>
          <div>
            <label>LastName</label>
            <br />
            <input className={classes.input} type="text" />
          </div>
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
          <div>
            <label>Confirm Password</label>
            <br />
            <input className={classes.input} type="password" />
          </div>
          <input
            className={`${classes.input} ${classes.submit}`}
            type="submit"
            value="Create New Account"
          />
          <div>
            <p>
              Already have an account?{" "}
              <span className={classes.signup}>
                <Link to="/login">Login</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
