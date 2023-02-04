import "./Sign-In.css";
import React, { useState } from "react";
import netflixLogo from '../../src/assets/images/netflixLogo.jpg';
import {useNavigate} from 'react-router-dom'

const SignUp = () => {


  const [name,setName]= useState("");
  const [password,setPassword]= useState("")
  const [email,setEmail]= useState("")
  const [cpassword,setcpassword]= useState("")
  const [phone,setphone]= useState("")
  const [address,setaddress]= useState("")

  const navigate = useNavigate()


  
  const collectData= async (e) =>{

  e.preventDefault()


    console.log(name,email,password,cpassword,phone,address);

    let result= await fetch("https://drab-red-cape-buffalo-gear.cyclic.app/register",{

        method:'post',
        body: JSON.stringify({name,email,password,cpassword,phone,address}),
        headers:  {
          'Content-Type': 'application/json'
        },
    })
    result = await result.json()
    console.log(result);


      navigate('/login')   // register hone ke bad redirect krne ke ley use kra hai.................
   
}
  




//   return (
    // <div
    // className="seturl" style={{
           
    //        netflixLogo: `url('../../src/assets/images/netflixLogo.jpg')`,
    //        backgroundImage: `url(${netflixLogo})`,
    //      }}>
//       {/* <section className="vh-100 bg-image"  style="background-image: url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');"> */}

//       <section className="vh-100 bg-image">
//         <div className="mask d-flex align-items-center h-100">
//           <div className="container h-150">
//             <div className="row d-flex justify-content-center align-items-center h-100">
//               <div className="col-12 col-md-9 col-lg-7 col-xl-6">
//                 <div className="card cardstyle">
//                   <div className="card-body p-5">
//                     <h2 className="text-uppercase text-center mb-5">
//                       Create an account
//                     </h2>

//                     <form>
//                       <div className="form-outline mb-4">
//                         <input value={name} onChange={(e)=>setName(e.target.value)}
//                           type="text"
//                           id="form3Example1cg"
//                           className="form-control form-control-lg"
//                         />
//                         <label className="form-label" for="form3Example1cg">
//                           Your Name
//                         </label>
//                       </div>

//                       <div className="form-outline mb-4 ">
//                         <input value={email} onChange={(e)=>setEmail(e.target.value)}
//                           type="email"
//                           id="form3Example3cg"
//                           className="form-control form-control-lg"
//                         />
//                         <label className="form-label" for="form3Example3cg">
//                           Your Email
//                         </label>
//                       </div>

//                       <div className="form-outline mb-4">
//                         <input value={password} onChange={(e)=>setPassword(e.target.value)}
//                           type="password"
//                           id="form3Example4cg"
//                           className="form-control form-control-lg"
//                         />
//                         <label className="form-label" for="form3Example4cg">
//                           Password
//                         </label>
//                       </div>

//                       <div className="form-outline mb-4">
//                         <input value={cpassword} onChange={(e)=>setcpassword(e.target.value)}
//                           type="password"
//                           id="form3Example4cdg"
//                           className="form-control form-control-lg"
//                         />
//                         <label className="form-label" for="form3Example4cdg">
//                           Repeat your password
//                         </label>
//                       </div>

//                       <div className="form-outline mb-4">
//                         <input value={phone} onChange={(e)=>setphone(e.target.value)}
//                           type="number"
//                           id="form3Example4cdg" 
//                           className="form-control form-control-lg"
//                         />
//                         <label className="form-label" for="form3Example4cdg">
//                           Enter your Number
//                         </label>
//                       </div>

//                       <div className="form-outline mb-4">
//                         <input value={address} onChange={(e)=>setaddress(e.target.value)}
//                           type="text"
//                           id="form3Example4cdg"
//                           className="form-control form-control-lg"
//                         />
//                         <label className="form-label" for="form3Example4cdg">
//                           Enter your Address
//                         </label>
//                       </div>

                      // <div className="d-flex justify-content-center">
                      //   <button
                      //     type="button" onClick={collectData}
                      //     className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                      //   >
                      //     Register
                      //   </button>
                      // </div>

//                       <p className="text-center text-muted mt-5 mb-0">
//                         Have already an account?{" "}
//                         <a href="/login" className="fw-bold text-body">
//                           <u>Login here</u>
//                         </a>
//                       </p>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default SignUp;


  return (
    <div
      className="Auth-form-container"
      style={{
        netflixLogo: `url('../../src/assets/images/netflixLogo.jpg')`,
        backgroundImage: `url(${netflixLogo})`,
      }}
    >
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>

          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
            value={name} onChange={(e)=>setName(e.target.value)}
              type="text"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
              required
            />
          </div>

          <div className="form-group mt-3">
            <label>Email address</label>
            <input
            value={email} onChange={(e)=>setEmail(e.target.value)}
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              required
            />
          </div>

          <div className="form-group mt-3">
            <label>Password</label>
            <input
            value={password} onChange={(e)=>setPassword(e.target.value)}
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              required
            />
          </div>

          <div className="form-group mt-3">
            <label>cPassword</label>
            <input
            value={cpassword} onChange={(e)=>setcpassword(e.target.value)}
              type="password"
              className="form-control mt-1"
              placeholder="cPassword"
              required
            />
          </div>

          <div className="form-group mt-3">
            <label>phone</label>
            <input
            value={phone} onChange={(e)=>setphone(e.target.value)}
              type="number"
              className="form-control mt-1"
              placeholder="phone"
              required
            />
          </div>

          <div className="form-group mt-3">
            <label>Address</label>
            <input
            value={address} onChange={(e)=>setaddress(e.target.value)}
              type="text"
              className="form-control mt-1"
              placeholder="Address"
              required
            />
          </div>

          {/* <div className="d-grid gap-2 mt-3">
            <button type="button" className="btn btn-primary" onClick={collectData}>
              Submit
            </button>
          </div> */}
          <div className="d-grid gap-2 mt-3">
                        <button
                          type="button" onClick={collectData}
                          className="btn btn-primary"
                        >
                          Register
                        </button>
                      </div>
        </div>
      </form>
    </div>
  );


  


}



export default SignUp;


