import React from 'react'
import NavbarComp from "../../components/homeComponent/navbar/NavbarComp";
import Header from '../../components/header/Header'
import RegForm from '../../components/registerPageComp/regForm/RegForm';

const Register = () => {
    return (
        <div>
            <NavbarComp/>
            <Header/>
            <RegForm/>
        </div>
    )
}

export default Register
