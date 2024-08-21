import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {clearError, setConfirmPassword, setError, setPassword} from "../redux/actions/actions.js";

const RegistrationForm = () => {
    const dispatch = useDispatch();
    const {password, confirmPassword, error} = useSelector((state) => state);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            dispatch(setError('Пароль не совпадает'));
        } else {
            dispatch(clearError());
            console.log('пароль отправлен');
        }
    };

    const handlePasswordChange = (e) => {
        dispatch(setPassword(e.target.value));
    };

    const handleConfirmPasswordChange = (e) => {
        dispatch(setConfirmPassword(e.target.value));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor="password" className='form-label'>Password</label>
                <input
                    type="password"
                    className='form-control'
                    id='password'
                    value={password}
                    onChange={handlePasswordChange}
                />
            </div>
            <div className='mb-3'>
                <label htmlFor="confirmPassword" className='form-label'>Confirm Password</label>
                <input
                    type="password"
                    className='form-control'
                    id='confirmPassword'
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                />
            </div>
            {error && <div className='alert alert-danger' role='alert'>{error}</div>}
            <button type='submit' className='btn btn-primary'>Register</button>
        </form>
    );
};

export default RegistrationForm;
