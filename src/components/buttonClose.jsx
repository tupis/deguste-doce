import '../sass/components/buttonClose.scss'



const ButtonClose = ( {handleOnClick} ) => {
    return (
        <button className='button-close' onClick={handleOnClick}>
            <span className="material-symbols-outlined">
                Close
            </span>
        </button>
    );
}
 
export default ButtonClose;