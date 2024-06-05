import React, {useState,useContext } from "react";
import classes from "./SignUp.module.css";
import { Link,useNavigate,useLocation} from "react-router-dom";
import{auth}from "../../Utility/firebase";
import{signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth";
import {ClipLoader} from "react-spinners";
import{ DataContext }from "../../Commponent/DataProvider/Datapro"
import { Type } from "../../Utility/Action.type";


function Auth() {
  const [email,setEmail]=useState("");
  const [Password,setPassword]=useState("");
  const [error,setError] = useState("");
  const[loading,setLoading] = useState(
    {signIn:false,
  signUP:false
    }
  )

  const [{user},dipatch]=useContext(DataContext);

  const navigate = useNavigate()
  const navStateData=useLocation()
  console.log(navStateData);

 
  const authHandler= async(e)=>{
    e.preventDefault();
    console.log(e.target.name)
    if (e.target.name == "signin"){

// firebase auth
setLoading({...loading,signIn:true})
signInWithEmailAndPassword(auth, email,Password).then((userInfo)=>{
  
dipatch({
    type:Type.SET_USER,
    user:userInfo.user,
  })
  setLoading({...loading,signIn:false})
  navigate(navStateData?.state?.redirect||"/");
  // navigate(navStateData?.state?.redirect || '/')
}).catch((err)=>{
  // console.log(err);
  setError(err.message)
  setLoading({...loading,signIn:false})

})
    }else{
      setLoading({...loading,signUP:true})
      createUserWithEmailAndPassword(auth,email,Password)
      .then((userInfo)=>{
        dipatch({
          type:Type.SET_USER,
          user:userInfo.user
        }
  )
  setLoading({...loading,signUp:false})
  navigate(navStateData?.state?.redirect || '/')
})

        .catch((err)=>{
          setError(err.message);
          setLoading({...loading,signUP:false})
        });
      }
    };

  
  return (
    <section className={classes.login}>
      <Link to={"/"} >
      <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      {/* form */}
      <div className={classes.login_container}>
    <h1>Sign In</h1>
    {navStateData?.state?.msg &&( 
               <small style={{
                padding:"5px",
                textAlign:"center",
                color:"red",
                fontWeight:"bold"
               }}>
{navStateData.state.msg}
                  </small>)
    
        }
    <form action ="">
    <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
        <div>
        <label htmlFor="Password">Password</label>
        <input value={Password}onChange={(e)=>setPassword(e.target.value)}type="Password"id="Password"/>
</div>
<button type="submit"onClick={authHandler} name="signin"
             className={classes.login_signInButton}>
signIn
{
            loading.signIn ? (<ClipLoader color="#46e9ea"size={15}></ClipLoader>):
            ("Sign In")
          }
          
</button>
    </form>
    {/* aggreement form */}
    <p>
      by signing -in you agree to the amazon fake clone condition of use & Sale. Please see our privacy Notice,our privacy Notice,our cookies Notice and our Interest-Based Ads Notice
    </p>
    {/* creat account btn */}
    <button
     type="submit"
    //  name="signIn"
    name="signup"
     
     onClick={authHandler}className={classes.
     
     login_registerbutton}>
         {
            loading.signUP ? (<ClipLoader color="#36d7b7" size={15}></ClipLoader>):
           
            ("Create your Amazon Account")
          }
          
    </button>
    {
      error && (<small style={{paddingTop:"5px",color:"red"}}>{error}</small>
    )}
    </div>
    </section>
  );
}

export default Auth;





