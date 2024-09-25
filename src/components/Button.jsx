import React from 'react';
import { Button, Flex } from 'antd';
// import { Link } from 'react-router-dom';
const AppButton = ({className,name,onClick,icon,style}) => (
  
  <Flex gap="small" wrap>
    
    <Button onClick={onClick} style={style} className={className}>{icon}{name}</Button>
    
   
  </Flex>
);
export default AppButton;