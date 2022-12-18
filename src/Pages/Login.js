import React,{useState,useRef,useContext} from "react";
import AuthContext from "../store/AuthContext";
import classes from './Login.module.css';
import { useHistory } from "react-router-dom";

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading,setIsLoading] = useState(false);
    const authctx= useContext(AuthContext);
    const emailref = useRef();
    const pswdref = useRef();
    const history = useHistory();
    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
      };
    
    const submitHandler = (event) =>{
    event.preventDefault();
    setIsLoading(true);
    const enteredemail = emailref.current.value;
    const enteredpswd= pswdref.current.value;
    let url;
    if(isLogin){
     url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCh050e3fbbmFndRtv3R_iCcfAvGvGoOLA';
    }
    else{
        url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCh050e3fbbmFndRtv3R_iCcfAvGvGoOLA';
    }
    fetch(url,{
        method:'POST',
        body:JSON.stringify({
            email: enteredemail,
        password: enteredpswd,
        returnSecureToken: true
        }),
        headers:{
            'Content-Type':'application/json',
        }
    }).then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication Failed";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }

            throw new Error(errorMessage);
          });
        }
      }).then((data) =>{
         authctx.login(data.idToken);
        history.replace('/Store');
      }).catch(err =>{
        alert(err.message);
      })
    }
  return (
    <section className={classes.auth} >
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control} >
          <label htmlFor='email'>Your email</label>
          <input type="email" id="email" required  ref={emailref}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={pswdref} />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? "Login" : "Create Account"}</button>}
          {isLoading && <p>Sending Request...</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
        
      </form>
    </section>
  );
};
export default Login;
