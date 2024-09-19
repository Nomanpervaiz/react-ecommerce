import React from 'react';
import { Button, Result } from 'antd';
import { Link, Navigate } from 'react-router-dom';

const AppNotFound = () => (
    <Result
    className='notFoundIcon'
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
            <Link to={"/home"}>
                <Button type="primary"  >Back Home</Button>
            </Link>
        }
    />
);

export default AppNotFound;
