// import React, { useState } from "react";

// function LoginForm() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [password, setPassword] = useState("");
//   const [isFirstLetterCapital, setIsFirstLetterCapital] = useState(false);
//   const [hasMinimumLength, setHasMinimumLength] = useState(false);
//   const [hasSpecialAndCapital, setHasSpecialAndCapital] = useState(false);
//   const [hasNumericValue, setHasNumericValue] = useState(false);
//   const [firstNameError, setFirstNameError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [error, setError] = useState("");
//   const handleFirstNameChange = (e) => {
//     const value = e.target.value;
//     setFirstName(value);
//     setIsFirstLetterCapital(/^[A-Z]\s[A-ZA-z]*$/.test(value));
//   };

//   const handlePasswordChange = (e) => {
//     const value = e.target.value;
//     setPassword(value);
//     setHasMinimumLength(value.length >= 8);
//     setHasSpecialAndCapital(
//       /^(?=.*[!@#$%^&*()])(?=.*[A-Z])(?=.*[0-9])[A-Za-z\d!@#$%^&*()]{8,}$/.test(
//         value
//       )
//     );
//     setHasNumericValue(/\d/.test(value));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!isFirstLetterCapital) {
//       setError(
//         "First name should start with a capital letter followed by a space and then the last name."
//       );
//       return;
//     }
//     if (!hasMinimumLength || !hasSpecialAndCapital || !hasNumericValue) {
//       setError(
//         "Password must have minimum 8 characters, including 1 special character, 1 capital letter, and 1 numeric value."
//       );
//       return;
//     }
//     // Handle form submission
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>First Name:</label>
//           <input
//             type="text"
//             value={firstName}
//             onChange={handleFirstNameChange}
//           />
//         </div>
        
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={handlePasswordChange}
//           />
//         </div>
//         <button type="submit">Login</button>
//         {error && <div style={{ color: "red" }}>{error}</div>}
//       </form>
//     </div>
//   );
// }



export const checkValidData =(email,password ,name)=>{
  const isEmailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);

  const isPasswordValid =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const isNameValid=/[A-Za-z][A-Za-z0-9_]{7,29}$/.test(name);

  if(!isEmailValid) return "Email Id is not valid";
  if(!isPasswordValid) return "Password is not valid";
  if(!isNameValid) return "Name is not valid";
  
  return null;
};