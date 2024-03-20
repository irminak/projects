import { useState } from 'react';

const useInput = (defaultValue, validationFn) => {
    const [user, setUser] = useState(defaultValue);
    const [isEdit, setIsEdit] = useState(false);

    const valueIsValid = validationFn(user);

    const handleChange = (e) => {
        // const name = e.target.name;
        // const value = e.target.value;
        setUser(e.target.value);
        setIsEdit(false);
    };
    const handleBlur = () => {
        // const name = e.target.name;
        setIsEdit(true);
    };

    return {
        value: user,
        handleChange,
        handleBlur,
        hasError: isEdit && !valueIsValid,
    };
};

export default useInput;
