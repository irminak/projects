import { useState } from 'react';
import Input from './Input';

export default function StateLogin() {
    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    const [isEdit, setIsEdit] = useState({
        email: false,
        password: false,
    });

    const emailIsInvalid = isEdit.email && !user.email.includes('@');
    const passwordIsInvalid =
        isEdit.password && !user.password.trim().length < 6;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        setUser({
            email: '',
            password: '',
        });
    };
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser((prev) => ({ ...prev, [name]: value }));
        setIsEdit((prev) => ({
            ...prev,
            [name]: false,
        }));
    };
    const handleBlur = (e) => {
        const name = e.target.name;
        setIsEdit((prev) => ({ ...prev, [name]: true }));
    };
    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className='control-row'>
                <Input
                    label='Email'
                    id='email'
                    type='email'
                    name='email'
                    value={user.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={emailIsInvalid && 'Please enter a valid email!'}
                />
                <Input
                    label='Password'
                    id='password'
                    type='password'
                    name='password'
                    value={user.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={passwordIsInvalid && 'Please enter a valid password'}
                />
            </div>

            <p className='form-actions'>
                <button className='button button-flat'>Reset</button>
                <button className='button'>Login</button>
            </p>
        </form>
    );
}
