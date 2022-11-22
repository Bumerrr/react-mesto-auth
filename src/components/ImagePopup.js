function ImagePopup({card, onClose, isOpen}) {

    return (
            <div className={`popup popup_window ${isOpen ? 'popup_opened': ''}`}>
            <div className="popup__container-window">
                <img className="popup__image-window" src={`${card ? card.link : ''}`} alt={card ? card.name : ''} />
                <h2 className="popup__title-window">{card ? card.name : ''}</h2>
                <button className="popup__close" onClick={onClose}></button>
            </div>
        </div>
    );
}

export default ImagePopup;