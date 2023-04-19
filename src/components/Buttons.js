import React from 'react';

const Buttons = (props) => {
    return ( 
        <>
        <button className="stoper__buttons-button" onClick={props.count}><i className={props.buttonClass}></i></button>
        <button className="stoper__buttons-button" onClick={props.clear}><i className="fas fa-stop"></i></button>
        </>
    );
}
 
export default Buttons;