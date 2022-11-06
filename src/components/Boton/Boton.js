import React, { forwardRef } from 'react';
import './boton.css';

const Boton = forwardRef((props, ref) => {
  return (
    <button className='buttom-component' type='submit' ref={ref} onClick={props.onClick} data-testid='login-button'>{props.texto}</button>
  );
});
Boton.displayName = 'Boton';
export default Boton;
