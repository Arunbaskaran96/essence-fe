import { Link, useNavigate } from "react-router-dom";
import classes from "./register.module.scss";
import { useState } from "react";
import { verifyRegister } from "../../utils/verifyRegister";
import { URL } from "../../config";
function Register() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobile: "",
    confrimPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (verifyRegister(formData, setErrors)) {
      const response = await fetch(`${URL}/addUser`, {
        method: "POST",
        headers: {
          "Content-Type": "aaplication/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.success) {
        navigate("/");
      }
    }
  };
  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit} className={classes.login}>
        <h2>Sign Up</h2>
        <div className={classes.formContainer}>
          <div>
            <label>FirstName</label>
            <br />
            <input
              value={formData.firstName}
              id="firstName"
              onChange={handleChange}
              className={classes.input}
              type="text"
            />
            <br />
            {errors.firstName && (
              <span className={classes.error}>{errors.firstName}</span>
            )}
          </div>
          <div>
            <label>LastName</label>
            <br />
            <input
              value={formData.lastName}
              id="lastName"
              onChange={handleChange}
              className={classes.input}
              type="text"
            />
            <br />
            {errors.lastName && (
              <span className={classes.error}>{errors.lastName}</span>
            )}
          </div>
          <div>
            <label>Email</label>
            <br />
            <input
              value={formData.email}
              id="email"
              onChange={handleChange}
              className={classes.input}
              type="email"
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
              value={formData.password}
              id="password"
              onChange={handleChange}
              className={classes.input}
              type="password"
            />
            <br />
            {errors.password && (
              <span className={classes.error}>{errors.password}</span>
            )}
          </div>
          <div>
            <label>Confirm Password</label>
            <br />
            <input
              value={formData.confrimPassword}
              id="confrimPassword"
              onChange={handleChange}
              className={classes.input}
              type="password"
            />
            <br />
            {errors.confrimPassword && (
              <span className={classes.error}>{errors.confrimPassword}</span>
            )}
            {errors.mismatch && (
              <span className={classes.error}>{errors.mismatch}</span>
            )}
          </div>
          <div>
            <label>Mobile</label>
            <br />
            <input
              value={formData.mobile}
              id="mobile"
              onChange={handleChange}
              className={classes.input}
              type="text"
            />
            <br />
            {errors.mobile && (
              <span className={classes.error}>{errors.mobile}</span>
            )}
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
      </form>
    </div>
  );
}

export default Register;
