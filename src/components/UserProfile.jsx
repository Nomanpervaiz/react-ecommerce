import React, { useContext } from "react";
import AppButton from "./Button";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { message } from "antd";
import { UserDetailContext } from "../context/UserContext";
import AppAvatar from "./Avatar";
import { LogoutOutlined } from "@ant-design/icons";


const UserProfile = () => {
  const { userDetail, userDbDetail } = useContext(UserDetailContext)

  const logOut = () => {
    signOut(auth)
      .then(() => {
        message.success("Logged out!");
      })
      .catch((error) => {
        message.error(error.message);
      });
  };
  return (
    <div className="my-10 container text-center">
      <div className="border p-8 rounded-xl ">
        <div>
          <label htmlFor="photoInput" className="border align-content-center  h-14 w-14 mx-auto rounded-full"> {userDetail?.photoUrl ? userDbDetail?.photoUrl : <AppAvatar size={52} userName={userDbDetail?.username} />} </label>

          {/* <input type="file" id="photoInput" /> */}
          <div className="mx-auto w-12 h-1 bg-indigo-500 rounded mt-2 mb-2" />

          <p className="font-bold text-base"> {userDetail?.displayName ? userDetail?.displayName : userDbDetail?.username}</p>
        </div>
        <p className="font-semibold text-lg"> {userDetail?.email}</p>
        <AppButton
          name="Log out"
          onClick={logOut}
          className="mt-8 mx-auto logOutbtn"
          icon={<LogoutOutlined />}
        />
      </div>
      {/* <div className="border p-8 rounded-xl ">


      </div> */}
    </div>
  );
};

export default UserProfile;
