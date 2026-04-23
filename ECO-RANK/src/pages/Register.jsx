import { useState } from "react";
import '../styles/register.css'

function Register(){
  const [form, setForm] = useState({
      name: "",
      phone: "",
      userName: "",
      password: "",
      confirmPassword: "" 
  })

  const [errors, setErrors] = useState("");
  const [success, setSuccess] = useState(false);

  function handleChange(e){
    const {name, value} = e.target;
    setForm((prev) => ({...prev, [name]: value}));
  }

  function validate(form){
    const errors = {};

    // name
    if(!form.name.trim()){
      errors.name = "Name is required";
    }

    // username
    if(!form.userName.trim()){
      errors.userName = "Enter a username "
    }

    // phone
    if(!form.phone.trim()){
      errors.phone = "Enter a phone number";
    } else if(form.phone.length < 10 || isNaN(form.phone)){
      errors.phone = "Enter a valid phone number";
    }

    // password
    if(!form.password.trim()){
      errors.password = "Enter a password";
    } else if(form.password.length < 8 || !form.password.includes("@") || !form.password.includes("#")){
      errors.password = "Password must include a special character (@ #)";
    }

    // confirm password
    if(!form.confirmPassword.trim()){
      errors.confirmPassword = "confirm your password";
    } else if(form.confirmPassword != form.password){
      errors.confirmPassword = "Password's must match";
    }

    return errors;
  }

  function handleSubmit(e){
    e.preventDefault();

    const newErrors = validate(form);
    setErrors(newErrors);

    if(Object.keys(newErrors).length === 0){
      const newUser = {
        name: form.name,
        phone: form.phone,
        userName: form.userName,
        password: form.password
      }
      localStorage.setItem("registeredUser", JSON.stringify(newUser));

      setSuccess(true);
      setForm({
        name: "",
        phone: "",
        userName: "",
        password: "",
        confirmPassword: ""
      })
      setErrors({});
    }
  }

  return(
    <div className="register-page">
        <div className="register-card">
          <h3>New here. Register</h3>
          <p className="register-subtitle">Join the movement today</p>

          <form onSubmit={handleSubmit}>
            {/* name */}
            <div className="form-group">
              <label>
                Name: 
                <input 
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                />
                {errors.name && <p style={{color: "red"}}>{errors.name}</p>}
              </label>
            </div>
            
            {/* user name */}
            <div className="form-group">
              <label>
                Username:
                <input 
                name="userName"
                value={form.userName}
                onChange={handleChange}
                placeholder="Johny"
                />
                {errors.userName && <p style={{color: "red"}}>{errors.userName}</p>}
              </label>
            </div>       

            {/* phone */}
            <div className="form-group">
              <label>
                Phone: 
                <input 
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="0798765432" 
                />
                {errors.phone && <p style={{color: "red"}}>{errors.phone}</p>}
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
            

            {/* confirm password */}

            <div className="form-group">
              <label>
                Confirm password:
                <input 
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder="********"
                />
                {errors.confirmPassword && <p style={{color: "red"}}>{errors.confirmPassword}</p>}          
              </label>  
            </div>

            <button type="submit" className="register-btn">Register</button>
          </form>
          {success && <p className="success-msg" style={{color: "green"}}>Thank you for joining the movement</p>}
          <div className="login-link">Already have an account? <a href="/login">Log in</a></div>
        </div>
      </div>
  )
}

export default Register;