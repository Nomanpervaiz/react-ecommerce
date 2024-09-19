import React from 'react';
import { Button, Flex } from 'antd';
import { Link } from 'react-router-dom';
const AppButton = ({className,name,path,onClick,icon,style}) => (
  
  <Flex gap="small" wrap>
    <Link to={path}>
    <Button onClick={onClick} style={style} className={className}>{icon}{name}</Button>
    </Link>
   
  </Flex>
);
export default AppButton;