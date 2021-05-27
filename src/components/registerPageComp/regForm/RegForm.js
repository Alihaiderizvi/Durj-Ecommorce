import { Box, TextField, Typography } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';
import '../regForm/RegForm.css';

const RegForm = () => {
    return (
        <div className='regForm'>
            <Typography>
                Create Your Durj Account
            </Typography>
            <Typography align='right'>
                Already a member <Link to ="/login">Login</Link> here
            </Typography>

        </div>
    )
}

export default RegForm;
