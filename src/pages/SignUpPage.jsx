import { auth, createUserWithEmailAndPassword, db } from "../utils/firebase";
import SignUpForm from "../components/SignUpForm";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { message } from "antd";


const AppSignUp = () => {
    const [loader, setLoader] = useState(false);
    
    
    const navigate = useNavigate();
    const createAccount = async (userInputs) => {
        setLoader(true);
        createUserWithEmailAndPassword(auth, userInputs.email, userInputs.password)
            .then(async (userCredential) => {
                const user = userCredential.user;
                const docRef = doc(db, "users", user.uid);
                
                try {
                    await setDoc(docRef, {
                        username: userInputs.username,
                        email: user.email,
                        uid: user.uid,
                    })
                    setLoader(false);
                    message.success("User Created successfully !")
                    navigate("/");
                } catch (error) {
                    message.error(error.message);
                    setLoader(false);
                }
            })
            .catch((error) => {
                message.error( error.message);
                setLoader(false)
            });
    };

    return (
        <>
            <SignUpForm accountRegister={createAccount} className={"signUpPage"} loader={loader} />
        </>
    );
};

export default AppSignUp;
