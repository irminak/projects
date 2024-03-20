import { useState } from 'react';

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
                <div className='control no-margin'>
                    <label htmlFor='email'>Email</label>
                    <input
                        id='email'
                        type='email'
                        name='email'
                        value={user.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {emailIsInvalid && (
                        <div className='control-error'>
                            Please enter a valid email address
                        </div>
                    )}
                </div>

                <div className='control no-margin'>
                    <label htmlFor='password'>Password</label>
                    <input
                        id='password'
                        type='password'
                        name='password'
                        value={user.password}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <p className='form-actions'>
                <button className='button button-flat'>Reset</button>
                <button className='button'>Login</button>
            </p>
        </form>
    );
}
