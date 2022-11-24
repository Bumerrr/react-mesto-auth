import React from "react";
import useCloseEsc from "../hooks/useCloseEsc";

function InfoTooltip(props) {

    useCloseEsc(props.isOpen, props.onClose);

    return (
        <div className={`popup ${props.isOpen && 'popup_opened'}`}>
            <div className="popup__container">
                <div
                    className={`popup__status ${props.isSuccess ? 'popup__status_success' : 'popup__status_false'}`}
                >
                </div>
                <h2 className="popup__title">
                    {props.isSuccess ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте еще раз.'}
                </h2>
                <button
                    type="button"
                    aria-label="Кнопка закрытия окна"
                    className="popup__close"
                    onClick={props.onClose}>
                </button>
            </div>
        </div>
    )
}


export default InfoTooltip;