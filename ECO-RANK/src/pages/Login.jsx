import { useState } from "react";
import '../styles/login.css'
import { useNavigate } from "react-router";

function LoginForm(){
  const navigae = useNavigate()

  const [form, setForm ] = useState({
    userName: "",
    password: ""
  })

  const [errors, setErrors] = useState("");
  const [success, setSuccess] = useState(false);

  function handleChange(e){
    const {name, value} = e.target;
    setForm((Prev) => ({...Prev, [name]: value}));
  }

  function validate(form){
    const errors = {};

    // userName
    if(!form.userName.trim()){
      errors.userName = "Username required";
    }

    // password
    if(!form.password.trim()){
      errors.password = "Enter a password";
    } else if(form.password.length < 8 || !form.password.includes("@") || !form.password.includes("#")){
      errors.password = "Password must include a special character (@ #)";
    }

    return errors;
  }

  const handleLogin = (e) => {
    e.preventDefault();

    const newErrors = validate(form);
    setErrors(newErrors)

    // getting from local storage
    const stored = JSON.parse(localStorage.getItem("registeredUser"))

    // validation
    if(!stored){
      setErrors("No account with such credentials");
      return;
    }

    if(form.userName === stored.userName && form.password === stored.password){
      setSuccess(true)
    } else {
      setErrors("Invalid credentials, check userName and/or password and try again")
    }

    navigae('/dashboard')
  }

  return(
    <div>
      <div className="login-page">
        <div className="login-card">
          <h3>Log in</h3>
        
          <form onSubmit={handleLogin}>
            {/* user name */}
            <div className="form-group">
              <label>
                User name: 
                <input 
                  name="userName"
                  value={form.userName}
                  onChange={handleChange}
                  placeholder="Johnny"
                />
                {errors.userName && <p style={{color: "red"}}>{errors.userName}</p>}
              </label>
            </div>

            {/* password */}
            <div className="form-group">
              <label>
                Password: 
                <input
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="********"
                />
                {errors.password && <p style={{color: "red"}}>{errors.password}</p>}
              </label>
            </div>
            <button className="login-btn" type="submit">Log in</button>
          </form>
          {success && (
            <div>
              <p className="success-msg" style={{color: "green"}}>You are Logged in</p>         
              <p className="welcome-msg">Welcome <strong>{form.userName}</strong></p>
            </div>
          )}

        </div>
      </div>     
    </div>
  )
}

export default LoginForm;