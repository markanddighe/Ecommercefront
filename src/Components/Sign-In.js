import './Sign-In.css'
import netflixLogo from '../../src/assets/images/netflixLogo.jpg';
import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'


// use effect lagana hai..................................
const SignIn = () =>{


  const [email, setEmail] = React.useState('')

  const [password, setPassword] = React.useState('')

  const navigate = useNavigate()


  useEffect(()=>{

    const auth = localStorage.getItem("token")

    if(auth) {
        navigate('/')
    }
},[])


  const handleLogin = async () =>{


      // console.log(email,password);
  
      let result = await fetch('http://localhost:3000/login', {

          method: 'post',
          body: JSON.stringify({email,password}),
          headers: {
              'Content-Type': 'application/json' 
          }
      })

      result = await result.json()

      // console.log("result",result);

      if(result.auth){


        localStorage.setItem("token",JSON.stringify(result.token))

        localStorage.setItem("id",JSON.stringify(result.auth))


        navigate('/')

    }
    else{
        alert("please correct details")
    }
  }



    // return(
//         <div className="seturl" style={{
           
//             netflixLogo: `url('../../src/assets/images/netflixLogo.jpg')`,
//             backgroundImage: `url(${netflixLogo})`,
//           }}>
// <section className="vh-100 bg-image">
//         <div className="mask d-flex align-items-center h-100">
//           <div className="container h-100">
//             <div className="row d-flex justify-content-center align-items-center h-100">
//               <div className="col-12 col-md-9 col-lg-7 col-xl-6">
//                 <div className="card cardstyle">
//                   <div className="card-body p-5">
//                     <h2 className="text-uppercase text-center mb-5">
//                       Please login Here..!!
//                     </h2>

//                     <form>
                      // <div className="form-outline mb-4">
                      //   <input
                      //   onChange={(e)=>setEmail(e.target.value)} value={email}
                      //     type="email"
                      //     id="form3Example3cg"
                      //     className="form-control form-control-lg"
                      //   />
                      //   <label className="form-label" for="form3Example3cg">
                      //     Your Email
                      //   </label>
                      // </div>

                      // <div className="form-outline mb-4">
                      //   <input
                      //   onChange={(e)=>setPassword(e.target.value)} value={password}
                      //     type="password"
                      //     id="form3Example4cg"
                      //     className="form-control form-control-lg"
                      //   />
                      //   <label className="form-label" for="form3Example4cg">
                      //     Password
                      //   </label>
                      // </div>

                      // <div className="d-flex justify-content-center">
                      //   <button
                      //   onClick={handleLogin}
                      //     type="button"
                      //     className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                      //   >
                      //     Login
                      //   </button>
                      // </div>

//                       <p className="text-center text-muted mt-5 mb-0">
//                        Non Register USer?{" "}
//                         <a href="/register" className="fw-bold text-body">
//                           <u>Register here</u>
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
//         </div>
    // )




  return(

       <div className="seturl Auth-form-container" style={{
           
                       netflixLogo: `url('../../src/assets/images/netflixLogo.jpg')`,
                       backgroundImage: `url(${netflixLogo})`,
                     }}>
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
            onChange={(e)=>setEmail(e.target.value)} value={email}
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>

      

          <div className="form-group mt-3">
            <label>Password</label>
            <input
             onChange={(e)=>setPassword(e.target.value)} value={password}
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
      
          <div className="d-grid gap-2 mt-3">
            <button  onClick={handleLogin} type="button" className="btn btn-primary butten">
              Submit
            </button>
          </div>
        
          {/* <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p> */}
        </div>
      </form>
    </div>
  )
}

export default SignIn