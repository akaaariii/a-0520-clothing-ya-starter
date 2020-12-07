import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.util";

import "./sign-up.styles.scss";

const SignUp = () => {
  const [userState, setUserState] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async(event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword} = userState;

    if(password !== confirmPassword){
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email,password);
      
      await createUserProfileDocument(user, { displayName: displayName });

    }catch(error){
      console.error(error.message);
    }


  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserState(prevState => {
        return {
          ...prevState,
          [name]: value
        }
      })
  };

  const { displayName, email, password, confirmPassword } = userState;
  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;