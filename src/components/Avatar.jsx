import React, { useEffect, useState } from "react";
import { Avatar, Space } from "antd";

const AppAvatar = ({ userName,size }) => {
  const [name, setName] = useState("")

  useEffect(() => {
    if (userName) {
      setName(userName[0])
    }

  })

  return (
    <Space size={40} wrap>
      <Avatar
        size={size ? size : 40}

     style ={{ 
    backgroundColor: "rgb(155, 176, 185)",
    color: "white",
    verticalAlign: "",
    fontSize: "20px",
  }}

      


      >
        {name}
      </Avatar>
    </Space>
  )
};
export default AppAvatar;
