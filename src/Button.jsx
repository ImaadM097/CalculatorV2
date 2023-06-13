import React from 'react';
import './App.css';

const Button = ({value ,id, handleClick}) => {

    return <button type="button" class="btn btn-primary" id={id} onClick={handleClick}>{value}</button>

}

export default Button;