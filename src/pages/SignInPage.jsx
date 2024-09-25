import { useState } from "react";
import SignInForm from "../components/SignInForm";
import { auth, signInWithEmailAndPassword } from "../utils/firebase";
import { message } from "antd";

const AppSignIn = () => {
  const [loader, setLoader] = useState(false);


  const getLoginVal = (value) => {
    console.log(value);
    signInWithEmailAndPassword(auth, value.email, value.password)
      .then((userCredential) => {
        setLoader(true)
        const user = userCredential.user;
        message.success("Loged in successfully")
      })
      .catch((error) => {
        const errorMessage = error.message;
        message.error(errorMessage);
        setLoader(false)
      });


  }
  return (
<div>
      <SignInForm getLoginVal={getLoginVal} loader={loader} className={"signInPage"} />
</div>

  )
}
export default AppSignIn;