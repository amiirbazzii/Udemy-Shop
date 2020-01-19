import React from 'react';
import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';
import './RegisterForm.scss'

const RegisterForm = () => {
    return (
        <div className='register-form'>
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default RegisterForm;
