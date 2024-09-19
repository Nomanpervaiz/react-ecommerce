import React from 'react';
import { Button, Popover, Space } from 'antd';
import {
    LogoutOutlined,
    UserOutlined,
  } from "@ant-design/icons";

const UserProfileCard = ({content}) => (
  <Space wrap>
    <Popover placement="bottomRight" content={content} title="Profile" trigger="click">
      <Button className='profile'><UserOutlined style={{fontSize:"1.2rem"}} /></Button>
    </Popover>
  </Space>
);


export default UserProfileCard;