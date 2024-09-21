import { auth,createUserWithEmailAndPassword } from "../utils/firebase";
import SignUpForm from "../components/SignUpForm";
import { useState } from "react";

const AppSignUp = () =>{

    const [loader, setLoader] = useState(false);
    
    const createAccount = (value)=>{        
        createUserWithEmailAndPassword(auth, value.email, value.password)
        .then((userCredential) => {
            setLoader(true)
            const user = userCredential.user;
            console.log("user",user)
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log("errorMessage==",errorMessage);
            setLoader(false)
        })
    }
return(
    <SignUpForm  accountRegister={createAccount} className={"signUpPage"} loader={loader} />
    )
} 
export default AppSignUp ; 