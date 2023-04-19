import React from 'react';

const Counter = (props) => {
    const {minutes, seconds, miliseconds} = props
    return ( 
        <>
        <span className="minutes">{minutes < 10 ? `0${minutes}` : minutes}</span>:
        <span className="seconds">{seconds < 10 ? `0${seconds}` : seconds}</span>:
        <span className="miliseconds">{miliseconds < 10 ? `0${miliseconds}` : miliseconds}</span>
        </>
     );
}
 
export default Counter;