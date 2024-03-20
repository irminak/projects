import Input from './Input';
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation.js';
import useInput from './hooks/useInput.js';

export default function StateLogin() {
    const {
        value: emailValue,
        handleChange: handleEmailChange,
        handleBlur: handleEmailBlur,
        hasError: emailHasError,
    } = useInput('', (value) => isEmail(value) && isNotEmpty(value));

    const {
        value: passwordValue,
        handleChange: handlePasswordChange,
        handleBlur: handlePasswordBlur,
        hasError: passwordHasError,
    } = useInput('', (value) => hasMinLength(value, 6));

    const handleSubmit = (e) => {
        e.preventDefault();

        if (emailHasError || passwordHasError) {
            return;
        }

        console.log(emailValue, passwordValue);
        setUser({
            email: '',
            password: '',
        });
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
                    value={emailValue}
                    onChange={handleEmailChange}
                    onBlur={handleEmailBlur}
                    error={emailHasError && 'Please enter a valid email!'}
                />
                <Input
                    label='Password'
                    id='password'
                    type='password'
                    name='password'
                    value={passwordValue}
                    onChange={handlePasswordChange}
                    onBlur={handlePasswordBlur}
                    error={passwordHasError && 'Please enter a valid password'}
                />
            </div>

            <p className='form-actions'>
                <button className='button button-flat'>Reset</button>
                <button className='button'>Login</button>
            </p>
        </form>
    );
}
