import React from 'react';

function PopupWithForm(props) {
    return (
        <div className={`popup popup_${props.name} ${props.isOpen && 'popup_opened'}`}>
            <div className="popup__container">
                <button type="button" className="popup__close" onClick={props.onClose} aria-label="Close"></button>
                <h2 className="popup__title">{props.title}</h2>
                <form className={`form ${props.form}`} name={`${props.formName}`} onSubmit={props.onSubmit} formNoValidate>
                    {props.children}
                    <button type="submit" className="form__save" value={`${props.button}`} >{props.button}</button>
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;