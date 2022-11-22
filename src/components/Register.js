import { useState } from 'react';
import { Link } from 'react-router-dom';
import useValidation from "./useValidation";

export default function Register({ onRegister }) {

    const [isEmail, setIsEmail] = useState('');
    const [isPassword, setIsPassword] = useState('');
    const { inputEmailRide, inputEmailError, inputEmailTouch } = useValidation(isEmail, { isEmpty: true, isEmail: true }, 'Email');
    const { inputPasswordRide, inputPasswordError, inputPasswordTouch } = useValidation(isPassword, { isEmpty: true, minLength: 8 }, 'Password');

    function handleChangeEmail(event) {
        setIsEmail(event.target.value);
    }

    function handleChangePassword(event) {
        setIsPassword(event.target.value);
    }


    function handleSubmit(event) {
        event.preventDefault();
        onRegister(isEmail, isPassword);
    }

    return (
        <form
            className="auth"
            onSubmit={handleSubmit}
            name="signUpForm"
            noValidate
        >
            <h2 className="auth__title">Регистрация</h2>
            <input
                className={`auth__form ${!inputEmailRide && inputEmailTouch && 'auth__form_type_error'}`}
                value={isEmail || ''}
                onChange={handleChangeEmail}
                placeholder="Email"
                type="email"
                name="email"
                id="emailInput"
                required
                formNoValidate
            />
            <span className={`auth__input-error ${!inputEmailRide && inputEmailTouch && 'auth__input-error_active'}`}>
                {inputEmailError}
            </span>
            <input
                className={`auth__form ${!inputPasswordRide && inputPasswordTouch && 'auth__form_type_error'}`}
                value={isPassword || ''}
                onChange={handleChangePassword}
                placeholder="Пароль"
                type="password"
                name="password"
                id="passwordInput"
                required
                formNoValidate
            />
            <span className={`auth__input-error ${!inputPasswordRide && inputPasswordTouch && 'auth__input-error_active'}`}>
                {inputPasswordError}
            </span>
            <button className="auth__button" type="submit" aria-label="Кнопка для регистрации">Зарегистрироваться</button>
            <Link to="/sign-in" className="auth__link">Уже зарегистрированы? Войти</Link>
        </form>
    )

}