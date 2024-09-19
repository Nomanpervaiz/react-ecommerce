import { useState } from "react";
import SignInForm from "../components/SignInForm";
import { auth,signInWithEmailAndPassword } from "../utils/firebase";


const AppSignIn = () => {
  const [loader, setLoader] = useState(false);
  

  const getLoginVal = (value)=>{
    console.log(value);
    signInWithEmailAndPassword(auth, value.email, value.password)
    .then((userCredential) => {
      setLoader(true)
      const user = userCredential.user;
      console.log("userlogin",user);
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log("errprLogin" ,errorMessage);
      setLoader(false)
    
  });
    
    
  }
    return(
        <SignInForm getLoginVal={getLoginVal} loader={loader} className={"signInPage"} />
    )
}
export default AppSignIn;